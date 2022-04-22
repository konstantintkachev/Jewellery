const initFilter = () => {
  if (document.querySelector('[data-accordion="filter"]')) {
    const siteBody = document.querySelector('.wrapper');
    const filter = document.querySelector('[data-accordion="filter"]');
    const buttonFilterOpen = document.querySelector('[data-open-filter]');
    const formFilter = document.querySelector('[data-form-filter]');
    const buttonFilterClose = document.querySelector('[data-close-filter]');
    const form = document.querySelector('#filter');

    filter.classList.remove('is-nojs');
    formFilter.classList.add('is-mobile');

    const closeFilter = function () {
      filter.classList.remove('is-opened');
      filter.classList.add('is-closed');
      siteBody.classList.remove('overflow-hidden');
      buttonFilterClose.removeEventListener('click', closeFilter);
    };

    const openFilter = function () {
      filter.classList.remove('is-closed');
      filter.classList.add('is-opened');
      siteBody.classList.add('overflow-hidden');
    };

    buttonFilterOpen.addEventListener('click', function () {
      if (filter.classList.contains('is-closed')) {
        openFilter();
        buttonFilterClose.addEventListener('click', closeFilter);
      }
    });

    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
      closeFilter();
    });
  }
};

export {
  initFilter
};
