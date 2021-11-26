const accArea = document.querySelectorAll('.accordion');
const accTitle = document.querySelectorAll('.accordion h3');

if(accArea) {
  accArea.forEach((area, index) => {
    area.classList.add('accordion--closed');
    accTitle[index].addEventListener('click', () => {
      area.classList.toggle('accordion--closed');
    });
  });
}

const menuBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');

if (menuBtn) {
  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    header.classList.toggle('header--closed');
    header.classList.toggle('header--opened');
    body.classList.toggle('body-lock');
  });
}

const filterMenu = document.querySelector('.cat-filter');
const filterBtn = document.querySelector('.cat-filter__btn-open');
const btnClose = document.querySelector('.cat-filter__btn-close');
const body = document.querySelector('body');

if (filterMenu) {
  filterMenu.classList.add('cat-filter--closed');
}

if (filterBtn) {
  filterBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    filterMenu.classList.remove('cat-filter--closed');
    body.classList.add('body-lock');

    btnClose.addEventListener('click', () => {
      evt.preventDefault();
      filterMenu.classList.add('cat-filter--closed');
      body.classList.remove('body-lock');
    });
  });
}

const popupLogin = document.querySelector('.login');
const closePopupBtn = popupLogin.querySelector('.login__exit');
const loginBtn = document.querySelector('.header__login');
const loginBtnBurger = document.querySelector('.header__login-burger');
const popupEmail = popupLogin.querySelector('#login-email');
const disabler = document.querySelector('.disabler');

const isEscEvent = function (evt) {
  return evt.key === ('Escape' || 'Esc');
};

const closePopUp = (modal) => {
  modal.classList.add('visually-hidden');
  disabler.classList.add('visually-hidden');
  body.classList.remove('body-lock');
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
  body.classList.add('body-lock');
  popupEmail.focus();
  document.addEventListener('keydown', onPopUpEscKeydown);
  closePopupBtn.addEventListener('click', () => {
    closePopUp(popupLogin);
  });

  disabler.addEventListener('click', () => {
    closePopUp(popupLogin);
  });
};

if (loginBtn) {
  loginBtn.addEventListener('click', popUpAction);
}

if (loginBtnBurger) {
  loginBtnBurger.addEventListener('click', popUpAction);
}

// if (document.querySelector('.main-slider')) {
//   const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'horisontal',
//     loop: true,
//     slidesPerView: 2,
//     slidesPerGroup: 2,
//     spaceBetween: 30,


//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + '">' + (index + 1) + '</span>';
//       }
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//       // 1024: {
//       //   slidesPerView: 3,
//       //   slidesPerGroup: 3,
//       //   spaceBetween: 30,
//       // },
//       1024: {
//         slidesPerView: 4,
//         slidesPerGroup: 4,
//         spaceBetween: 30,
//       },
//     },
//   });
// }

(() => {
  if (document.querySelector(`.main-slider`)) {
    const slider = new Swiper(`.swiper`, {
      navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      },
      pagination: {
        el: `.swiper-pagination`,
        renderBullet(index, bulletClass) {
          return `<button class="` + bulletClass + `"type="button">` + (index + 1) + `</button>`;
        },
        bulletClass: `pagination__list-item`,
        bulletActiveClass: `pagination__current-page`,
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: `fraction`,
            renderFraction(currentClass, totalClass, index, total) {
              return `<span class="` + currentClass + `"type="button">0 ` + index + ` </span>` +
                ` of ` + `<span class="` + totalClass + `"type="button">0 ` + total + ` </span>`;
            },
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            type: `bullets`,
          },
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: {
            type: `bullets`,
          },
        },
      },
      lazy: {
        loadPrevNext: true,
      },
      spaceBetween: 30,
      speed: 1000,
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      autoHeight: true,
      watchSlidesVisibility: true,
    });

    slider.on(`progress`, () => {
      inertNotVisible();
    });

    const inertNotVisible = () => {
      slider.slides.forEach((slide) => {
        if (!slide.classList.contains(`swiper-slide-visible`)) {
          slide.childNodes[1].setAttribute(`tabindex`, `-1`);
        } else {
          slide.childNodes[1].setAttribute(`tabindex`, `0`);
        }
      });
      if (slider.pagination.bullets) {
        slider.pagination.bullets.forEach((bullet) => {
          if (bullet.classList.contains(`pagination__current-page`)) {
            bullet.setAttribute(`tabIndex`, `-1`);
          } else {
            bullet.setAttribute(`tabIndex`, `0`);
          }
        });
      }
    };

    setTimeout(inertNotVisible, 0);
  }
})();


