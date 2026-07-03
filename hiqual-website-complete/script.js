/* =========================================================
   HiQual United Kingdom Institute — script.js
   Handles: mobile menu, footer year, contact form (basic)
   ========================================================= */

// ---------- Mobile menu toggle ----------
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
  });
});

// ---------- Auto-update footer year ----------
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ---------- Contact form (basic front-end only for now) ----------
// NOTE: This currently just shows a confirmation message.
// In a later step, we will connect this to Google Sheets so
// messages are saved automatically — no code changes needed then.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been noted. We will get back to you soon.\n\n(This form will be fully connected to save messages automatically in a later step.)');
    contactForm.reset();
  });
}
