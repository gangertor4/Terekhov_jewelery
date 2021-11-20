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
