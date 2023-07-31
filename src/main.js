import cardsAdaptation from './js/cards-adaptation';
import Slider from './js/cards-slider';

//  ======== hidden cards ========
cardsAdaptation();
window.addEventListener('resize', cardsAdaptation);

// ======== cards slider ========
const elementSlider = document.querySelector('.cards-slider');
const slides = Array.from(elementSlider.querySelectorAll('.cards-slide'));
const slider = new Slider(slides);

// обновление слайдера при изменении ширины экрана
window.addEventListener('resize', () => {
  const slides = Array.from(elementSlider.querySelectorAll('.cards-slide'));
  slider.setSlides(slides);
  slider.updateSlider();
});

// добавление прослушки на кнопки навигации
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');

prevBtn.addEventListener('click', () => {
  slider.showPrevSlide(elementSlider);
});

nextBtn.addEventListener('click', () => {
  slider.showNextSlide(elementSlider);
});
