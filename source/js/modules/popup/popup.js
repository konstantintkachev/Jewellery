const initPopup = () => {
  const ALERT_SHOW_TIME = 4000;

  const login = document.querySelector('#login');
  const passwordLogin = document.querySelector('#password');
  const formRegistration = document.querySelector('form[data-form]');
  const modalSuccess = document.querySelector('[data-modal="success"]');

  const openPopupLinks = document.querySelectorAll('[data-open-modal]');
  const modalPopup = document.querySelector('[data-modal="login"]');
  const closePopupButton = modalPopup.querySelector('[data-close-modal]');
  const siteBody = document.querySelector('.wrapper');
  const modalOverlay = document.querySelector('[data-modal="overlay"]');

  const focusElements = [
    'a[href]',
    'area[href]',
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    'select:not([disabled]):not([aria-hidden])',
    'textarea:not([disabled]):not([aria-hidden])',
    'button:not([disabled]):not([aria-hidden])',
    'iframe',
    'object',
    'embed',
    '[contenteditable]',
    '[tabindex]:not([tabindex^="-"])'
  ];

  let lastFocusedElement;

  const closeModal = function () {
    modalOverlay.classList.remove('is-show');
    modalPopup.classList.remove('is-show');
    closePopupButton.removeEventListener('click', closePopupHandler);
    modalOverlay.removeEventListener('click', closePopupOverlay);
    modalPopup.removeEventListener('keydown', keyDownHandler);
    siteBody.classList.remove('overflow-hidden');
    lastFocusedElement.focus();
  };

  const closePopupHandler = function (evt) {
    evt.preventDefault();
    if (evt.target === closePopupButton) {
      closeModal();
    } else {
      return;
    }
  };

  const closePopupOverlay = function (evt) {
    evt.preventDefault();
    closeModal();
  };

  const keyDownHandler = (evt) => {
    let focusableElements = modalPopup.querySelectorAll(focusElements);
    focusableElements = Array.prototype.slice.call(focusableElements);

    const firstTabStop = focusableElements[0];
    const lastTabStop = focusableElements[focusableElements.length - 1];

    if (evt.keyCode === 9) {
      if (evt.shiftKey) {
        if (document.activeElement === firstTabStop) {
          evt.preventDefault();
          lastTabStop.focus();
        }
      } else {
        if (document.activeElement === lastTabStop) {
          evt.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    if (evt.keyCode === 27) {
      closeModal();
    }
  };

  let isStorageSupport = true;
  let storage = '';

  try {
    storage = localStorage.getItem('login');
  } catch (err) {
    isStorageSupport = false;
  }

  const showAlert = function () {
    modalSuccess.classList.remove('visually-hidden');

    setTimeout(function () {
      modalSuccess.classList.add('visually-hidden');
    }, ALERT_SHOW_TIME);
  };

  const formSubmitHandler = function (evt, logIn, password) {
    evt.preventDefault();

    if (!logIn.value && !password.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('login', logIn.value);
      }

      showAlert();
      if (modalPopup.classList.contains('is-show')) {
        modalPopup.classList.remove('is-show');
      }
    }
  };

  const openPopupHandler = function (evt) {
    evt.preventDefault();
    lastFocusedElement = document.activeElement;

    modalOverlay.classList.add('is-show');
    modalPopup.classList.add('is-show');

    if (storage) {
      login.value = storage;
      passwordLogin.focus();
    } else {
      login.focus();
    }

    modalPopup.addEventListener('keydown', keyDownHandler);
    closePopupButton.addEventListener('click', closePopupHandler);
    modalOverlay.addEventListener('click', closePopupOverlay);
    siteBody.classList.add('overflow-hidden');
  };

  openPopupLinks.forEach((link) => {
    link.addEventListener('click', openPopupHandler);
  });

  formRegistration.addEventListener('submit', function (evt) {
    evt.preventDefault();

    formSubmitHandler(evt, login, passwordLogin);
  });
};

export {
  initPopup
};
