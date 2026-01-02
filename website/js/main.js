/**
 * Simply Soil - Main JavaScript
 * Handles navigation, form submission, and interactivity
 */

document.addEventListener('DOMContentLoaded', function() {
  // ================================
  // Header Scroll Effect
  // ================================
  const header = document.getElementById('header');
  let lastScrollY = window.scrollY;

  function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  // ================================
  // Mobile Navigation
  // ================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileNav);
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // Close mobile nav on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
      closeMobileNav();
    }
  });

  // ================================
  // Smooth Scroll for Anchor Links
  // ================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const headerHeight = header.offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ================================
  // Active Navigation Link
  // ================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveNavLink() {
    const scrollY = window.scrollY;
    const headerHeight = header.offsetHeight;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNavLink, { passive: true });

  // ================================
  // Quote Form Handling
  // ================================
  const quoteForm = document.getElementById('quoteForm');

  if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(quoteForm);
      const data = Object.fromEntries(formData);

      // Basic validation
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'zip', 'services'];
      let isValid = true;

      requiredFields.forEach(field => {
        const input = quoteForm.querySelector(`[name="${field}"]`);
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'var(--color-error)';
        } else {
          input.style.borderColor = '';
        }
      });

      if (!isValid) {
        alert('Please fill in all required fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const emailInput = quoteForm.querySelector('[name="email"]');
      if (!emailRegex.test(emailInput.value)) {
        emailInput.style.borderColor = 'var(--color-error)';
        alert('Please enter a valid email address.');
        return;
      }

      // Phone validation (basic)
      const phoneInput = quoteForm.querySelector('[name="phone"]');
      const phoneValue = phoneInput.value.replace(/\D/g, '');
      if (phoneValue.length < 10) {
        phoneInput.style.borderColor = 'var(--color-error)';
        alert('Please enter a valid phone number.');
        return;
      }

      // Simulate form submission
      const submitBtn = quoteForm.querySelector('.form-submit');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Submitting...';
      submitBtn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Success state
        submitBtn.textContent = 'Quote Requested!';
        submitBtn.style.background = 'var(--color-success)';

        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-success)">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p><strong>Thank you!</strong> We've received your quote request and will be in touch within 24 hours.</p>
        `;
        successMessage.style.cssText = `
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: rgba(5, 150, 105, 0.1);
          border-radius: 12px;
          margin-top: 16px;
        `;

        quoteForm.appendChild(successMessage);

        // Reset form after delay
        setTimeout(() => {
          quoteForm.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          successMessage.remove();
        }, 5000);

      }, 1500);
    });

    // Clear error styling on input
    quoteForm.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', function() {
        this.style.borderColor = '';
      });
    });
  }

  // ================================
  // Phone Number Formatting
  // ================================
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');

      if (value.length > 10) {
        value = value.slice(0, 10);
      }

      if (value.length >= 6) {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
      } else if (value.length >= 3) {
        value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
      } else if (value.length > 0) {
        value = `(${value}`;
      }

      e.target.value = value;
    });
  });

  // ================================
  // Intersection Observer for Animations
  // ================================
  const animateOnScroll = document.querySelectorAll('.service-card, .feature-item');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateOnScroll.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });

  // ================================
  // Click-to-Call Tracking (placeholder)
  // ================================
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Analytics tracking would go here
      console.log('Phone call initiated:', this.href);
    });
  });

  // ================================
  // Form Focus Effects
  // ================================
  const formInputs = document.querySelectorAll('.form-input, .form-textarea');

  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });

});

// ================================
// Utility Functions
// ================================

/**
 * Debounce function for performance optimization
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
