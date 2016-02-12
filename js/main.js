console.log("I declare war!");

// Player constructor function
var Player = function(id) {
  this.name = "Player " + (id + 1);
  this.id   = "p" + id;
  this.hand = [];
  this.inPlay;
  this.score = 0;
}


// Model the Board
var board = [null, null];

var players;

// Shuffle the deck

function shuffleDeck() {
  for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i +1));
      var temp = deck[i];
      deck[i] = deck [j];
      deck[j] = temp;
  }
}

// Shuffle sound everytime

// Cards dealt to each player 26 a piece


var deck = [
  'd02', 'd03', 'd04', 'd05', 'd06', 'd07', 'd08', 'd09', 'd10', 'dJ', 'dQ', 'dK', 'dA',
  'c02', 'c03', 'c04', 'c05', 'c06', 'c07', 'c08', 'c09', 'c10', 'cJ', 'cQ', 'cK', 'cA',
  's02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's10', 'sJ', 'sQ', 'sK', 'sA',
  'h02', 'h03', 'h04', 'h05', 'h06', 'h07', 'h08', 'h09', 'h10', 'hJ', 'hQ', 'hK', 'hA'
];

$('#deal').click(function() {
    battle();
    if (players[0].hand.length === 0) {
      $("#deal").hide();
      displayWinner();
    }
})

function displayWinner() {
  var winner;
  if (players[0].score > players[1].score) {
    winner = "Congratulations Player 1";
  } else if (players[0].score < players[1].score) {
    winner = "Congratulations Player 2";
  } else {
    winner = "It's a Draw";
  }
  alert(winner);
  location.reload();
}

function dealCards() {
  for (var i = 0; i < deck.length; i++) {
    if (i % 2 === 0) {
      players[0].hand.push(deck[i]);
    } else {
      players[1].hand.push(deck[i]);
    }
  }
}

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
function battle() {
  players[0].inPlay = players[0].hand.shift();
  players[1].inPlay = players[1].hand.shift();
  if (players[0].hand.length < 25) {
    var lastClass = $('.drawn-' + players[0].id).attr('class').split(' ').pop();
    $('.drawn-' + players[0].id).removeClass(lastClass);
    lastClass = $('.drawn-' + players[1].id).attr('class').split(' ').pop();
    $('.drawn-' + players[1].id).removeClass(lastClass);
  }
  $('.drawn-' + players[0].id).addClass(players[0].inPlay);
  $('.drawn-' + players[1].id).addClass(players[1].inPlay);
  winner(players[0].inPlay, players[1].inPlay);
}

function winner(card1, card2) {
  var winner;
  console.log(card1, card2);
  card1 = card1.split('').slice(1).join('');
  card2 = card2.split('').slice(1).join('');
  console.log(card1, card2);
  card1 === "J" ? card1 = 11 : card1;
  card1 === "Q" ? card1 = 12 : card1;
  card1 === "K" ? card1 = 13 : card1;
  card1 === "A" ? card1 = 14 : card1;
  card2 === "J" ? card2 = 11 : card2;
  card2 === "Q" ? card2 = 12 : card2;
  card2 === "K" ? card2 = 13 : card2;
  card2 === "A" ? card2 = 14 : card2;
  card1 = parseInt(card1);
  card2 = parseInt(card2);
  console.log (card1, card2);
  if (card1 > card2) {
    players[0].score += 2;
    winner = "Player1";
    $("#player1-win").show();
    // setTimeout(function() {
    //   $("#player1-win").hide();
    // },2000);
    console.log(winner + "Wins");
  } else if (card1 < card2){
    players[1].score += 2;
    winner = "Player2";
    $("#player2-win").show();
    // setTimeout(function() {
    //   $("#player2-win").hide();
    // },2000);
    console.log(winner + "Wins");
  } else {
    winner = "Draw";
    $("#draw").show();
    // setTimeout(function() {
    //   $("#draw").hide();
    // },2000);
    console.log(winner);
  }
}

function playGame () {
  players = [new Player(0), new Player(1)];
  shuffleDeck();
  dealCards();
}

playGame();




// Post score in statistics box real-time

// When players draw, high card wins and both cards return to winner's deck

// When draw is a tie, each player draws 4 more cards

// High card of 4th drawn wins for player and all cards return to winner's pile

// Automatically draws 4 more in case of tie (repeats automatically until win)

// Player with 52 cards wins

// Note appears announcing winner

// Do you want to play again?





