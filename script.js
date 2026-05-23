/* Diaimic Independent Shared Living — Site Script */

(function () {
  'use strict';

  /* ---- Sticky header on scroll ---- */
  const header = document.getElementById('site-header');
  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open', !expanded);
    document.body.style.overflow = expanded ? '' : 'hidden';
  });

  /* Close nav when a link is clicked */
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* Close nav on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      toggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  /* ---- Active nav link highlighting on scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollY = window.scrollY + 120;
    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navItems.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ---- Fade-in on scroll (Intersection Observer) ---- */
  const fadeTargets = document.querySelectorAll(
    '.serve-card, .feature-card, .gallery-item, .about-grid, ' +
    '.payment-card, .contact-inner'
  );

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    fadeTargets.forEach(function (el) {
      el.classList.add('fade-in');
      fadeObserver.observe(el);
    });
  } else {
    /* Fallback: show everything immediately */
    fadeTargets.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---- Footer year ---- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
