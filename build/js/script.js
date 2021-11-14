const menuBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horisontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});