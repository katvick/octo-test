import {
  showAllCards,
  hiddenCards
} from './hidden-cards';

function cardsAdaptation() {
  const cards = document.querySelectorAll('.article');
  const cardsSlides = document.querySelectorAll('.cards-slide');

  // articles 
  if (window.innerWidth >= 1200) {
    showAllCards(cards);
  };

  if (window.innerWidth >= 576 && window.innerWidth < 1200) {
    hiddenCards(cards, 4);
  };

  if (window.innerWidth < 576) {
    hiddenCards(cards, 2);
  };

  // carousel
  if (window.innerWidth >= 1200) {
    hiddenCards(cardsSlides, 3);
  };

  if (window.innerWidth >= 576 && window.innerWidth < 1200) {
    hiddenCards(cardsSlides, 2);
  };

  if (window.innerWidth < 576) {
    hiddenCards(cardsSlides, 1);
  };
}

export default cardsAdaptation;