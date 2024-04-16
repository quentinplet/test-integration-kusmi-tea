/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".product-carousel-section__content", {
  loop: true,
  spaceBetween: 8,
  grabCursor: true,
  keyboard: true,

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

/*=============== Modal ===============*/
const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.classList.add("fade-in");
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("fade-in");
  modal.close();
});

//When clicked outside the modal, close it
modal.addEventListener("click", (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX >= dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY >= dialogDimensions.bottom
  ) {
    modal.classList.remove("fade-in");
    modal.close();
  }
});
