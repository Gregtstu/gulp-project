import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

const swiper = new Swiper('.trainer__content', {
  slidesPerView: 4,
  spaceBetween: 40,
  scrollbar: {
    el: '.trainer__scroll',
    draggable: true,
  },
  navigation: {
    nextEl: '.trainer__slider-btn--next',
    prevEl: '.trainer__slider-btn--prev',
  },
});
