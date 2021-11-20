const accArea = document.querySelectorAll('.accordion');


accArea.forEach((area) => {
  area.classList.add('accordion--closed')
  area.addEventListener('click', () => {
    area.classList.toggle('accordion--closed');
  });
});


const menuBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');

menuBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  header.classList.toggle('header--closed');
  header.classList.toggle('header--opened');
});

const filterMenu = document.querySelector('.cat-filter');
const filterBtn = document.querySelector('.cat-filter__btn-open');
const btnClose = document.querySelector('.cat-filter__btn-close');

if (filterMenu) {
  filterMenu.classList.add('cat-filter--closed');
};

if (filterBtn) {
  filterBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    filterMenu.classList.remove('cat-filter--closed');
    body.classList.add('body-lock');
  
    btnClose.addEventListener('click', () => {
      evt.preventDefault();
      filterMenu.classList.add('cat-filter--closed');
      body.classList.remove('body-lock');
    })
  });
};

const popupLogin = document.querySelector('.login');
const closePopupBtn = popupLogin.querySelector('.login__exit');
const loginBtn = document.querySelector('.header__login');
const popupEmail = popupLogin.querySelector('#login-email');
const disabler = document.querySelector('.disabler');
const body = document.querySelector('body');

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const closePopUp = (modal) => {
  modal.classList.add('visually-hidden');
  disabler.classList.add('visually-hidden');
};

const onPopUpEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopUp(popupLogin);
  }
};

const popUpAction = (evt) => {
  evt.preventDefault();
  popupLogin.classList.remove('visually-hidden');
  disabler.classList.remove('visually-hidden');
  popupEmail.focus();
  document.addEventListener('keydown', onPopUpEscKeydown);
  closePopupBtn.addEventListener('click', () => {
    closePopUp(popupLogin);
  });

  disabler.addEventListener('click', () => {
    closePopUp(popupLogin);
  });
};

loginBtn.addEventListener('click', popUpAction);
if (document.querySelector('.main-slider')) {
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horisontal',
    loop: true,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 30,
    

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

    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      1170: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
    },
  });
}