const menuBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'horisontal',
  loop: true,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 30,
  breakpoints: {
    1170: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
    },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});