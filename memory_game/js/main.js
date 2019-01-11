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
  }
];
cardsInPlay = [];

var resetBoard = function() {
  createBoard();
  var buttonReset = document.getElementById('reset');
  buttonReset.addEventListener('click', clearBoard);
  //alert('Game has been reset');
};

var createBoard = function() {
  for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
};

var clearBoard = function() {
  document.getElementById('game-board').innerHTML = "";
  cardsInPlay = [];
  createBoard();
};

var winCounter = 0;
var gameCounter = 0;

var checkForMatch = function () {
 if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
   winCounter ++;
   gameCounter ++;
   document.getElementById('gamesWon').innerHTML = winCounter;
   document.getElementById('gamesPlayed').innerHTML = gameCounter;
  alert('You have a match!');
} else {
  gameCounter ++;
  document.getElementById('gamesPlayed').innerHTML = gameCounter;
  alert('Sorry, try again.');
}
};

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  //console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId]);
  //console.log(cards[cardId].cardImage);
  //console.log(cards[cardId].suit);
  this.setAttribute('src', cards[cardId].cardImage)
  if (cardsInPlay.length === 2) {
    //console.log('Player has selected 2 cards');
    checkForMatch();
  } else {
    console.log('Only 1 card has been selected');
  };
};



resetBoard();
