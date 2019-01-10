//console.log("Up and running!");
cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png",
  },
];
cardsInPlay = [];

var checkForMatch = function () {
 if (cardsInPlay[0] === cardsInPlay[1]) {
  alert('You have a match!');
} else {
  alert('Sorry, try again.');
}
}

var flipCard = function (cardId) {
  console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].name);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  if (cardsInPlay.length === 2) {
    //console.log('Player has selected 2 cards');
    checkForMatch();
  } else {
    console.log('Only 1 card has been selected');
  };
}

flipCard(0);
flipCard(2);
