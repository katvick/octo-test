export function hiddenCardsMiddleScreen(cards) {
  for (let i = 0; i < cards.length; i++) {
    if (i > 3) {
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'grid';
    }
  }
}

export function hiddenCardsSmallScreen(cards) {
  for (let i = 0; i < cards.length; i++) {
    if (i > 1) {
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'grid';
    }
  }
}

export function showAllCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'grid';
  }
}

