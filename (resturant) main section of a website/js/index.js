const swiper = new Swiper('.swiper', {
  effect: 'coverflow',  // Use coverflow effect
  slidesPerView: 3,  // Display 3 slides on larger screens
  spaceBetween: 80,  // Space between slides
  loop: true,  // Enable infinite looping
  centeredSlides: true,  // Center the active slide

  coverflowEffect: {
    rotate: 0,  // No tilt on the slides
    depth: 50,  // Depth of the 3D effect
    stretch: 5,  // Spacing between slides
    slideShadows: false,  // Disable shadows for now
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,  // Enable clickable pagination dots
  },

  speed: 700,  // Increase speed for smoother transitions

  autoplay: {
    delay: 1000,  // Autoplay delay (3 seconds)
    disableOnInteraction: false,  // Continue autoplay after user interaction
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 80,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 50,
      centeredSlides: true,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
      centeredSlides: true,
    },
  },
});
