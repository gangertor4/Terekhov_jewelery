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