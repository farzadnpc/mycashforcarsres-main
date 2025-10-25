// App JS for Victoria Cash for Cars
// - EmailJS init
// - Quote form validation & submission
// - Small UX helpers

(function(){
    document.addEventListener('DOMContentLoaded', function(){
      // Year stamp in footer
      var yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();
  
      // EmailJS
      if (window.emailjs && typeof emailjs.init === 'function') {
        try { emailjs.init({ publicKey: '-NZcQAN4ItYp9mRtu' }); } catch(e) { console.warn('EmailJS init failed', e); }
      } else {
        console.warn('EmailJS SDK not found.');
      }
  
      var form = document.getElementById('quote-form');
      var status = document.getElementById('formStatus');
      var submitBtn = document.getElementById('submitBtn');
  
      if (!form) return;
  
      form.addEventListener('submit', async function(e){
        e.preventDefault();
  
        // Honeypot: if filled, likely a bot
        var hp = document.getElementById('_hp');
        if (hp && hp.value) return;
  
        var data = {
          name: document.getElementById('name').value.trim(),
          mobile: document.getElementById('mobile').value.trim(),
          email: document.getElementById('email').value.trim(),
          suburb: document.getElementById('suburb').value.trim(),
          car: document.getElementById('car').value.trim(),
          rego: document.getElementById('rego').value,
          notes: document.getElementById('notes').value.trim()
        };
  
        if (!data.name || !data.mobile || !data.car || !data.suburb || !data.rego) {
          if (status) status.textContent = 'Please fill in all required fields.';
          return;
        }
  
        try {
          if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
          if (status) status.textContent = 'Sending your details…';
  
          var SERVICE_ID = 'service_elffr9m';
          var TEMPLATE_ID = 'template_015hpab';
  
          if (window.emailjs && emailjs.send) {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, data);
            if (status) status.textContent = "Thanks! We'll contact you shortly.";
            form.reset();
          } else {
            if (status) status.textContent = 'Form sent (demo mode). Please call 0469 934 580 if you do not hear from us.';
          }
        } catch (err) {
          console.error(err);
          if (status) status.textContent = 'Sorry, something went wrong. Please call 0469 934 580.';
        } finally {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Send my details'; }
        }
      });
  
      // Track tel: clicks in GA4 if present
      document.querySelectorAll('a[href^="tel:"]').forEach(function(a){
        a.addEventListener('click', function(){
          if (window.gtag) gtag('event','click',{event_category:'engagement',event_label:'tel'});
        });
      });
    });
  })();
  