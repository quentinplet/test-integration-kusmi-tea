/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".product-carousel-section__content", {
  loop: true,
  spaceBetween: 8,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,

  breakpoints: {
    390: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
