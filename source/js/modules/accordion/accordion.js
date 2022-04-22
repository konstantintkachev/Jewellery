const initAccordion = () => {
  const accordion = document.querySelector('[data-accordion]');
  const buttonsAccordion = accordion.querySelectorAll('[data-button]');
  const itemAccordion = accordion.querySelectorAll('[data-accordion-item]');

  accordion.classList.remove('is-nojs');

  const getAccordeonContent = function (currentValue) {

    itemAccordion.forEach(function (item) {
      if (item.id === currentValue) {
        if (!item.classList.contains('is-active')) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      }
    });
  };

  buttonsAccordion.forEach(function (button) {
    button.addEventListener('click', function (evt) {
      getAccordeonContent(evt.target.dataset.button);
    });

    button.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        evt.preventDefault();
        getAccordeonContent(evt.target.dataset.button);
      }
    });
  });
};
export {
  initAccordion
};
