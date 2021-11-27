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
      loop: true,
      navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      },
      pagination: {
        el: `.swiper-pagination`,
        renderBullet(index, bulletClass) {
          return `<button class="` + bulletClass + `"type="button">` + (index + 1) + `</button>`;
        },
        bulletClass: `swiper-pagination-bullet`,
        bulletActiveClass: `swiper-pagination-bullet-active`,
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
      // autoHeight: true,
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


