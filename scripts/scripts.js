(function () {
  'use strict';

  /* Desktop breakpoint — must match the CSS media query exactly */
  var DESKTOP_BP = window.matchMedia('(min-width: 1024px)');

  document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       1. DYNAMIC FOOTER YEAR
       ============================================================ */
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    /* ============================================================
       2. MOBILE NAV TOGGLE (Hamburger)
       Only runs the open/close logic when NOT on desktop.
       ============================================================ */
    var nav       = document.querySelector('.primary-nav');
    var navToggle = document.querySelector('.nav-toggle');

    function closeNav () {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.classList.remove('is-active');
    }

    if (nav && navToggle) {

      navToggle.addEventListener('click', function () {
        if (DESKTOP_BP.matches) return;          // ignore on desktop
        var isOpen = nav.classList.contains('is-open');
        nav.classList.toggle('is-open', !isOpen);
        navToggle.setAttribute('aria-expanded', String(!isOpen));
        navToggle.classList.toggle('is-active', !isOpen);
      });

      // Close mobile nav when clicking anywhere outside it
      document.addEventListener('click', function (evt) {
        if (DESKTOP_BP.matches) return;
        if (!nav.classList.contains('is-open')) return;
        if (nav.contains(evt.target) || navToggle.contains(evt.target)) return;
        closeNav();
      });

      // When screen resizes to desktop, close any open mobile nav
      DESKTOP_BP.addEventListener('change', function (e) {
        if (e.matches) {
          closeNav();
          document.querySelectorAll('.has-dropdown.active, .has-dropdown.is-open').forEach(function (el) {
            el.classList.remove('active', 'is-open');
          });
        }
      });
    }


    /* ============================================================
       3. MOBILE DROPDOWN ACCORDION
       Only runs below 1024px. On desktop, JS mouseenter handles it.
       ============================================================ */
    document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (DESKTOP_BP.matches) return;          // desktop: mouseenter handles it
        e.preventDefault();

        var parentLi = this.parentElement;
        var isActive = parentLi.classList.contains('active');

        // Close all other open dropdowns (accordion behaviour)
        document.querySelectorAll('.has-dropdown.active').forEach(function (item) {
          if (item !== parentLi) item.classList.remove('active');
        });

        // Toggle clicked item
        parentLi.classList.toggle('active', !isActive);
      });
    });


    /* ============================================================
       3B. DESKTOP DROPDOWN — mouseenter / mouseleave on the <li>
       Using JS instead of CSS :hover so the menu never disappears
       when the mouse travels from the trigger into the panel.
       The entire <li> (trigger + dropdown) is one hover zone.
       ============================================================ */
    document.querySelectorAll('.has-dropdown').forEach(function (li) {
      li.addEventListener('mouseenter', function () {
        if (!DESKTOP_BP.matches) return;
        // Close any other open desktop dropdowns first
        document.querySelectorAll('.has-dropdown.is-open').forEach(function (other) {
          if (other !== li) other.classList.remove('is-open');
        });
        li.classList.add('is-open');
      });

      li.addEventListener('mouseleave', function () {
        if (!DESKTOP_BP.matches) return;
        li.classList.remove('is-open');
      });
    });

    // Close all desktop dropdowns when clicking outside the header
    document.addEventListener('click', function (evt) {
      if (!DESKTOP_BP.matches) return;
      var header = document.querySelector('.site-header');
      if (header && !header.contains(evt.target)) {
        document.querySelectorAll('.has-dropdown.is-open').forEach(function (el) {
          el.classList.remove('is-open');
        });
      }
    });


    /* ============================================================
       4. TELEPHONE CLICK TRACKING
       ============================================================ */
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) {
      a.addEventListener('click', function () {
        if (typeof gtag === 'function') {
          gtag('event', 'click', {
            event_category: 'engagement',
            event_label:    'tel'
          });
        }
      });
    });


/* ============================================================
       5. LOCATION AUTO-FILL
       Populates suburb field from URL slug on location pages.
       ============================================================ */
       var CORE_PAGES = new Set([
        '', 'index', 'blog', 'contact',
        'cash for cars', 'sell my car', 'car valuation',
        'cash for old cars', 'scrap car removal', 'free towing',
        'junk car collection', 'accident car removal', 'auto wreckers',
        'commercial wreckers', 'used parts', 'recycling',
        'cash for trucks', 'cash for vans', '4x4 wreckers', 'ute wreckers',
        
        // CAR BRANDS ADDED HERE SO THEY DO NOT AUTO-FILL THE SUBURB FIELD
        'toyota', 'suzuki', 'honda', 'hyundai', 'proton', 'volvo', 'saab',
        'nissan', 'volkswagen', 'holden', 'kia', 'citroen', 'fiat', 'skoda',
        'mazda', 'audi', 'ford', 'subaru', 'daewoo', 'porsche', 'ssangyong',
        'lexus', 'bmw', 'mitsubishi', 'dodge', 'daihatsu', 'mercedes', 'alfa romeo'
      ]);
  
      var suburbInput = document.getElementById('suburb');
      if (suburbInput) {
        var pageName = window.location.pathname
          .split('/')
          .pop()
          .replace('.html', '')
          .replace(/-/g, ' ')
          .toLowerCase();
  
        // Only auto-fill if it's NOT a core page and NOT a car brand
        if (pageName && !CORE_PAGES.has(pageName)) {
          var autoValue = pageName.replace(/\b\w/g, function (l) {
            return l.toUpperCase();
          });
          suburbInput.value        = autoValue;
          suburbInput._autoValue   = autoValue;   // preserved after form.reset()
        }
      }

    /* ============================================================
       6. EMAILJS INITIALISATION
       ============================================================ */
    var SERVICE_ID  = 'service_uxf5qhk';
    var TEMPLATE_ID = 'template_bo114a2';
    var PUBLIC_KEY  = 'pn1OHOXo__NVPRYbg';

    if (typeof emailjs !== 'undefined' && typeof emailjs.init === 'function') {
      try {
        emailjs.init({ publicKey: PUBLIC_KEY });
      } catch (e) {
        console.warn('EmailJS init failed:', e);
      }
    } else {
      console.warn('EmailJS SDK not found — form will fall back gracefully.');
    }


    /* ============================================================
       7. QUOTE FORM SUBMISSION
       ============================================================ */
    var form      = document.getElementById('quote-form');
    var status    = document.getElementById('formStatus');
    var submitBtn = document.getElementById('submitBtn');

    if (!form) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Honeypot bot protection
      var honeypot = document.getElementById('_hp');
      if (honeypot && honeypot.value) return;

      // Collect values
      var getValue = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };

      var formData = {
        name:   getValue('name'),
        mobile: getValue('mobile'),
        email:  getValue('email') || 'N/A',
        suburb: getValue('suburb'),
        car:    getValue('car'),
        notes:  getValue('notes') || '—'
      };

      // Required field validation
      var missing = [];
      if (!formData.name)   missing.push('Name');
      if (!formData.mobile) missing.push('Mobile');
      if (!formData.car)    missing.push('Car details');
      if (!formData.suburb) missing.push('Suburb');

      if (missing.length) {
        setStatus('Please fill in: ' + missing.join(', ') + '.', 'error');
        return;
      }

      // Australian mobile validation
      var mobileRegex = /^(\+?61|0)[2-9]\d{8}$/;
      if (!mobileRegex.test(formData.mobile.replace(/\s/g, ''))) {
        setStatus('Please enter a valid Australian mobile number.', 'error');
        return;
      }

      setSubmitting(true);
      setStatus('Sending your request…', 'info');

      try {
        if (typeof emailjs === 'undefined' || !emailjs.send) {
          throw new Error('EmailJS not available.');
        }
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);
        setStatus('Thank you! Our buyer will contact you shortly.', 'success');
        form.reset();
        if (suburbInput && suburbInput._autoValue) {
          suburbInput.value = suburbInput._autoValue;
        }
      } catch (err) {
        console.error('EmailJS error:', err);
        setStatus('Service unavailable. Please call us on 0469 934 580.', 'error');
      } finally {
        setSubmitting(false);
      }
    });


    /* ============================================================
       HELPERS
       ============================================================ */
    function setStatus (message, type) {
      if (!status) return;
      status.textContent = message;
      status.classList.remove('status-success', 'status-error', 'status-info');
      if (type) status.classList.add('status-' + type);
    }

    function setSubmitting (isSubmitting) {
      if (!submitBtn) return;
      submitBtn.disabled    = isSubmitting;
      submitBtn.textContent = isSubmitting ? 'Sending…' : 'Send my details';
    }

  });

})();
document.addEventListener("DOMContentLoaded", function() {
  var doubleTapLinks = document.querySelectorAll('.double-tap-link');
  
  doubleTapLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var parentLi = this.parentElement;
      
      // If the dropdown is NOT open yet, stop the link from changing the page and open the menu
      if (!parentLi.classList.contains('open')) {
        e.preventDefault(); 
        
        // Close any other open nested menus to keep things tidy
        document.querySelectorAll('.has-nested-dropdown.open').forEach(function(li) {
          if (li !== parentLi) li.classList.remove('open');
        });
        
        // Open this menu
        parentLi.classList.add('open');
      }
      // If it IS already open, the script does nothing, and the browser naturally goes to the page!
    });
  });

  // Clean up nested menus if the user moves their mouse away entirely (Desktop)
  var mainServicesMenu = document.querySelector('.has-dropdown');
  if(mainServicesMenu) {
    mainServicesMenu.addEventListener('mouseleave', function() {
      document.querySelectorAll('.has-nested-dropdown.open').forEach(function(li) {
        li.classList.remove('open');
      });
    });
  }
});