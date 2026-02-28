/**
 * App JS for Victoria Cash for Cars
 * Handles:
 * - Mobile navigation menu toggle
 * - Dynamic footer year update
 * - EmailJS initialization and form submission
 * - Automatic suburb detection for location pages
 */

(function() {
  document.addEventListener('DOMContentLoaded', function() {
      
      // --- 1. Mobile Menu Toggle Logic ---
      const navToggle = document.querySelector('.nav-toggle');
      const primaryNav = document.querySelector('.primary-nav');

      if (navToggle && primaryNav) {
          navToggle.addEventListener('click', function() {
              // Toggle the 'active' class to show/hide menu via CSS
              primaryNav.classList.toggle('active');
              
              // Update ARIA attribute for accessibility
              const isExpanded = primaryNav.classList.contains('active');
              navToggle.setAttribute('aria-expanded', isExpanded);
          });
      }

      // --- 2. Dynamic Footer Year ---
      const yearEl = document.getElementById('year');
      if (yearEl) {
          yearEl.textContent = new Date().getFullYear();
      }

      // --- 3. Location Page Helper ---
      // If the user is on a location-specific page, automatically fill the suburb field
      const suburbInput = document.getElementById('suburb');
      const path = window.location.pathname;
      
      if (suburbInput && path.includes('/locations/')) {
          // Extracts the location name from the URL (e.g., 'altona' from '/locations/altona.html')
          let locationName = path.split('/').pop().replace('.html', '').replace(/-/g, ' ');
          // Capitalize the first letter of each word
          suburbInput.value = locationName.replace(/\b\w/g, l => l.toUpperCase());
      }

      // --- 4. EmailJS & Form Handling ---
      // Initialize EmailJS with your Public Key
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
                  status.style.color = '#ef4444'; // Red error color
                  return;
              }

              try {
                  // Update UI for sending state
                  if (submitBtn) { 
                      submitBtn.disabled = true; 
                      submitBtn.textContent = 'Sending Details...'; 
                  }
                  if (status) status.textContent = 'Submitting your request...';

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
                  if (status) status.textContent = 'Service temporarily unavailable. Please call 0469 934 580.';
              } finally {
                  if (submitBtn) { 
                      submitBtn.disabled = false; 
                      submitBtn.textContent = 'Get My Cash Offer'; 
                  }
              }
          });
      }
  });
})();
  