console.log("I declare war!");

// Current turn holder
var currentTurn;

// Player constructor function
var Player = function(id) {
  this.name = "Player " + (id + 1);
  this.id   = "p" + id;
  this.hand = [];
}

// List of Players
var players = [new Player(0), new Player(1)];

// Model the Board
var board = [null, null];

// Shuffle the deck

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i +1));
      var temp = array[i];
      array[i] = array [j];
      array[j] = temp;
  }
  console.log(i);
  return array;
}

// Shuffle sound everytime

// Cards dealt to each player 26 a piece

$('#deal').click(function() {
    dealCard(randomCard());
})

var deck = [
  'd02', 'd03', 'd04', 'd05', 'd06', 'd07', 'd08', 'd09', 'd10', 'dJ', 'dQ', 'dK', 'dA',
  'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10', 'cJ', 'cQ', 'cK', 'cA',
  's02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's10', 'sJ', 'sQ', 'sK', 'sA',
  'h02', 'h03', 'h04', 'h05', 'h06', 'h07', 'h08', 'h09', 'h10', 'hJ', 'hQ', 'hK', 'hA'
];




function dealCards(cards) {
  shuffleArray(cards);
  for (var i = 0; i < cards.length; i++) {
    if (i % 2 === 0) {
      players[0].hand.push(cards[i]);
    } else {
      players[1].hand.push(cards[i]);
    }
  }
}
  // players[0]

//   if (numberOfCardsInDeck == 0) return
// false;
/*  var img = document.createElement("img");
    img.src =
    document.body.appendChild(img);
    removeCard(i); */

// dealCard(deck)

function randomCard() {
  return Math.floor(Math.random() * numberOfCardsInDeck);
}

function removeCard(c) {
  for (j=c; j <= numberOfCardsInDeck - 2; j++) {
      cardsInDeck[j] = cardsInDeck[j+1];
  }
  numberOfCardsInDeck --;
}
// Place drawn cards on board in center

// Post score in statistics box real-time

// When players draw, high card wins and both cards return to winner's deck

// When draw is a tie, each player draws 4 more cards

// High card of 4th drawn wins for player and all cards return to winner's pile

// Automatically draws 4 more in case of tie (repeats automatically until win)

// Player with 52 cards wins

// Note appears announcing winner

// Do you want to play again?





