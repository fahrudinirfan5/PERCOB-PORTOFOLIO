/**
 * BACKEND DEVELOPER PORTFOLIO
 * Interactive JavaScript: Mobile Navigation, Scroll Highlighting, Clipboard Copy, & Header State
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const header = document.getElementById('header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');
  const sections = document.querySelectorAll('section[id]');

  // 1. Mobile Menu Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Sticky Header Shadow on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // 3. Highlight Active Navigation Section
    highlightCurrentSection();
  });

  function highlightCurrentSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-list a[href*="${sectionId}"]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  }

  // 4. Salin Email ke Clipboard dengan Toast Notification
  if (copyEmailBtn && toast) {
    copyEmailBtn.addEventListener('click', () => {
      const emailToCopy = copyEmailBtn.getAttribute('data-email') || '[email.anda@domain.com]';
      
      // Menggunakan Clipboard API modern
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(emailToCopy).then(() => {
          showToast(`Email (${emailToCopy}) berhasil disalin!`);
        }).catch(() => {
          fallbackCopyText(emailToCopy);
        });
      } else {
        fallbackCopyText(emailToCopy);
      }
    });
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`Email (${text}) berhasil disalin!`);
    } catch (err) {
      showToast('Gagal menyalin otomatis, silakan salin manual.');
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
});
