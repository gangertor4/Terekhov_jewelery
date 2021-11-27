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

  const  focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const firstFocusableElement = popupLogin.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
  const focusableContent = popupLogin.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal


  document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });

  firstFocusableElement.focus();
};

if (loginBtn) {
  loginBtn.addEventListener('click', popUpAction);
}

if (loginBtnBurger) {
  loginBtnBurger.addEventListener('click', popUpAction);
}
