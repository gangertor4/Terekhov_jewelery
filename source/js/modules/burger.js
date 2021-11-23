const menuBtn = document.querySelector('.header__btn');
const header = document.querySelector('.header');

if (menuBtn) {
  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    header.classList.toggle('header--closed');
    header.classList.toggle('header--opened');
  });
}
