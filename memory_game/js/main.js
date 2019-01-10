//console.log("Up and running!");
cards = ['queen', 'queen', 'king', 'king'];
cardsInPlay = [];

cardOne = cards[0];
cardTwo = cards[1];

cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
  console.log('Player has selected 2 cards');
} if (cardsInPlay[0] === cardsInPlay[1]) {
  alert('You have a match!');
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
  alert('Sorry, try again.');
} else {
  console.log('Only 1 card has been selected');
};
