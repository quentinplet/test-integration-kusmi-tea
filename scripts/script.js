/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".product-carousel-section__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
