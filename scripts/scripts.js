/**
 * App JS for Vic Cash 4 Cars
 */

document.addEventListener('DOMContentLoaded', function() {
      
  // ==========================================
  // 1. MOBILE MENU & ACCORDION DROPDOWNS
  // ==========================================
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');

  // A. Toggle Main Hamburger Menu
  if (navToggle && primaryNav) {
      navToggle.addEventListener('click', function() {
          primaryNav.classList.toggle('active');
          const isExpanded = primaryNav.classList.contains('active');
          navToggle.setAttribute('aria-expanded', isExpanded);
      });
  }

  // B. Mobile Accordion Dropdowns (For touch screens)
  const dropdownLinks = document.querySelectorAll('.has-dropdown > a');
  
  dropdownLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          // Only apply this click logic on mobile/tablets (under 1024px)
          if (window.innerWidth <= 1024) {
              e.preventDefault(); // Stop the page from jumping to the top

              const currentMenu = this.nextElementSibling;
              const isCurrentlyOpen = currentMenu.style.display === 'block' || currentMenu.style.display === 'grid';

              // Close all other open dropdowns for a clean look
              dropdownLinks.forEach(otherLink => {
                  const otherMenu = otherLink.nextElementSibling;
                  if (otherMenu) otherMenu.style.display = 'none';
              });

              // Toggle the one that was just clicked
              if (!isCurrentlyOpen && currentMenu) {
                  // Use grid for mega-menu, block for standard dropdown
                  currentMenu.style.display = currentMenu.classList.contains('mega-menu') ? 'grid' : 'block';
              }
          }
      });
  });

  // ==========================================
  // 2. DYNAMIC FOOTER YEAR
  // ==========================================
  const yearEl = document.getElementById('year');
  if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
  }

  // ==========================================
  // 3. LOCATION AUTO-FILL SCRIPT
  // ==========================================
  const suburbInput = document.getElementById('suburb');
  const path = window.location.pathname;
  
  // Get the filename without the .html
  let pageName = path.split('/').pop().replace('.html', '').replace(/-/g, ' ');
  
  // List of core pages where we DO NOT want to auto-fill the form
  const corePages = ['', 'index', 'blog', 'contact', 'cash for cars', 'sell my car', 'car valuation', 'cash for old cars', 'scrap car removal', 'free towing', 'junk car collection', 'accident car removal', 'auto wreckers', 'commercial wreckers', 'used parts', 'recycling', 'cash for trucks', 'cash for vans', '4x4 wreckers', 'ute wreckers'];
  
  // If it's not a core page, it must be a location or brand, so auto-fill the form!
  if (suburbInput && pageName && !corePages.includes(pageName.toLowerCase())) {
      suburbInput.value = pageName.replace(/\b\w/g, l => l.toUpperCase());
  }

  // ==========================================
  // 4. EMAILJS QUOTE FORM SUBMISSION
  // ==========================================
  if (window.emailjs) {
      try { 
          emailjs.init({ publicKey: 'pn1OHOXo__NVPRYbg' }); 
      } catch(e) { 
          console.warn('EmailJS initialization failed', e); 
      }
  }

  const form = document.getElementById('quote-form');
  const status = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (form) {
      form.addEventListener('submit', async function(e) {
          e.preventDefault();

          // Honeypot bot protection
          const hp = document.getElementById('_hp');
          if (hp && hp.value) return;

          // Gather form data
          const formData = {
              name: document.getElementById('name').value.trim(),
              mobile: document.getElementById('mobile').value.trim(),
              email: document.getElementById('email') ? document.getElementById('email').value.trim() : 'Not provided',
              suburb: document.getElementById('suburb').value.trim(),
              car: document.getElementById('car').value.trim(),
              notes: document.getElementById('notes') ? document.getElementById('notes').value.trim() : ''
          };

          // Basic validation
          if (!formData.name || !formData.mobile || !formData.car || !formData.suburb) {
              if (status) status.textContent = 'Please fill in all required fields marked with *.';
              status.style.color = '#ea580c'; // Matches your brand orange
              return;
          }

          try {
              // Update UI for sending state
              if (submitBtn) { 
                  submitBtn.disabled = true; 
                  submitBtn.textContent = 'Sending Details...'; 
              }
              if (status) status.textContent = 'Submitting your request...';

              // EmailJS IDs
              const SERVICE_ID = 'service_uxf5qhk';
              const TEMPLATE_ID = 'template_bo114a2';

              if (window.emailjs) {
                  await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);
                  if (status) {
                      status.textContent = "Thank you! Our buyer will contact you shortly.";
                      status.style.color = "#10b981"; // Success green
                  }
                  form.reset();
              }
          } catch (err) {
              console.error('Form submission error:', err);
              if (status) {
                  status.textContent = 'Service temporarily unavailable. Please call 0469 934 580.';
                  status.style.color = '#ea580c';
              }
          } finally {
              if (submitBtn) { 
                  submitBtn.disabled = false; 
                  submitBtn.textContent = 'Send my details'; 
              }
          }
      });
  }
});