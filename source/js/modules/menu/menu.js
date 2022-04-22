const pageHeader = document.querySelector('[data-menu="wrapper-open"]');
const toggleMenu = document.querySelector('[data-menu="toggle-menu"]');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const menuButtonHandler = (evt) => {
  evt.preventDefault();
  pageHeader.classList.toggle('is-open');
  document.body.classList.toggle('no-scroll');
};

const menuEscHandler = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    pageHeader.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
};

const initMenu = () => {
  if (!toggleMenu) {
    return;
  }
  toggleMenu.addEventListener('click', menuButtonHandler);
  document.addEventListener('keydown', menuEscHandler);
};


export {
  initMenu
};
