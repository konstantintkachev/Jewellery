/* global Swiper */
/* Swiper 7.4.1 */

const initSlider = () => {
  return new Swiper('.swiper', {
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
    },
    breakpoints: {
      320: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: 'swiper-pagination',
          clickable: true,
          type: 'fraction',
          renderFraction: (currentClass, totalClass) => {
            return '<span class="' + currentClass + '"></span>' +
              '&nbsp;&nbsp;of&nbsp;&nbsp;' +
              '<span class="' + totalClass + '"></span>';
          },
        },
      },
      786: {
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: 'swiper-pagination',
          clickable: true,
          type: 'bullets',
          renderBullet: (index, className) => {
            return '<button class="slider__pagination-bullet ' + className + '">' + (index + 1) + '</button>';
          },
        },
      },
      1024: {
        spaceBetween: 30,
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet: (index, className) => {
            return '<button class="slider__pagination-bullet ' + className + '">' + (index + 1) + '</button>';
          },
        },
      },
    },
  });
};

export {
  initSlider
};
