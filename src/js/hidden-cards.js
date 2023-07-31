// All cards
export function showAllCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = 'grid';
  }
}

// Hidden cards
export function hiddenCards(cards, number) {
  for (let i = 0; i < cards.length; i++) {
    if (i > number - 1) {
      cards[i].style.display = 'none';
    } else {
      cards[i].style.display = 'grid';
    }
  }
}
