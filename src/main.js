import slider from './js/cards-slider';
import {
  hiddenCardsMiddleScreen,
  hiddenCardsSmallScreen,
  showAllCards
} from './js/hidden-cards';

// cards slider
$(document).ready(slider);

// hidden cards
const cards = document.querySelectorAll('.article')

window.addEventListener('resize', function() {
  if (window.outerWidth >= 576 && window.outerWidth < 1200) {
    hiddenCardsMiddleScreen(cards);
  };

  if (window.outerWidth >= 1200) {
    showAllCards(cards);
  };

  if (window.outerWidth < 576) {
    hiddenCardsSmallScreen(cards);
  };
})
