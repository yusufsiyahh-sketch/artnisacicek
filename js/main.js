/**
 * Nisa Çiçek - Portfolio JavaScript
 * Handles lightbox, mobile menu navigation, and interactive effects
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const siteNav = document.querySelector('.site-nav');

  if (mobileMenuBtn && siteNav) {
    mobileMenuBtn.addEventListener('click', () => {
      siteNav.classList.toggle('open');
      const expanded = siteNav.classList.contains('open');
      mobileMenuBtn.setAttribute('aria-expanded', expanded);
    });
  }

  // Lightbox functionality
  const lightbox = document.getElementById('artwork-lightbox');
  if (lightbox) {
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-nav.prev');
    const nextBtn = lightbox.querySelector('.lightbox-nav.next');
    const thumbnailLinks = Array.from(document.querySelectorAll('.thumbnail-item'));

    let currentIndex = 0;

    const openLightbox = (index) => {
      currentIndex = index;
      const item = thumbnailLinks[currentIndex];
      const img = item.querySelector('.thumb-image img');
      const titleSpan = item.querySelector('.thumbnail-overlay span');

      if (img && titleSpan) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = titleSpan.textContent.trim();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    const showNext = () => {
      currentIndex = (currentIndex + 1) % thumbnailLinks.length;
      openLightbox(currentIndex);
    };

    const showPrev = () => {
      currentIndex = (currentIndex - 1 + thumbnailLinks.length) % thumbnailLinks.length;
      openLightbox(currentIndex);
    };

    thumbnailLinks.forEach((item, idx) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(idx);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
      });
    }

    // Close on click outside content
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    });
  }
});
