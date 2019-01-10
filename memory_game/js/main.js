//console.log("Up and running!");
cards = ['queen', 'queen', 'king', 'king'];
cardsInPlay = [];

var checkForMatch = function () {
 if (cardsInPlay[0] === cardsInPlay[1]) {
  alert('You have a match!');
} else {
  alert('Sorry, try again.');
}
}

var flipCard = function (cardId) {
  console.log('User flipped ' + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  if (cardsInPlay.length === 2) {
    console.log('Player has selected 2 cards');
    checkForMatch();
  } else {
    console.log('Only 1 card has been selected');
  };
}

flipCard(0);
flipCard(2);
