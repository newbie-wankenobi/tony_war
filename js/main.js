console.log("I declare war!");

// Current turn holder
var currentTurn;

// Player constructor function
var Player = function(id) {
  this.name = "Player" + (id + 1);
  this.id   = "p" + id;
}

// List of Players
var players = [
                new Player(0),
                new Player(1)
              ];

// Model the Board
var board = [null, null];

$('.switch').click(function() {
  nextTurn();
  printPlayers();
  render();
})

// Shuffle the deck

// Shuffle sound everytime

function shuffleArray(array) {
  for  (var i = array.length - 1; i > 0; i--));
      var j = Math.floor(Math.random() * (i +1));
      var temp = array[i];
      array[i] = array [j];
      array[j] = temp;
}
return array;

// Cards dealt to each player 26 a piece

$('#deal').click(function() {
    dealCard(randomCard());
})

var cardsInDeck = new Array();
var numberOfCardsInDeck = 52;
cardsInDeck[0] = "DiamondsAce";
cardsInDeck[1] = "DiamondsKing";
cardsInDeck[2] = "DiamondsQueen";
cardsInDeck[3] = "DiamondsJack";
cardsInDeck[4] = "Diamonds10";
cardsInDeck[5] = "Diamonds9";
cardsInDeck[6] = "Diamonds8";
cardsInDeck[7] = "Diamonds7";
cardsInDeck[8] = "Diamonds6";
cardsInDeck[9] = "Diamonds5";
cardsInDeck[10] = "Diamonds4";
cardsInDeck[11] = "Diamonds3";
cardsInDeck[12] = "Diamonds2";
cardsInDeck[13] = "SpadesAce";
cardsInDeck[14] = "SpadesKing";
cardsInDeck[15] = "SpadesQueen";
cardsInDeck[16] = "SpadesJack";
cardsInDeck[17] = "Spades10";
cardsInDeck[18] = "Spades9";
cardsInDeck[19] = "Spades8";
cardsInDeck[20] = "Spades7";
cardsInDeck[21] = "Spades6";
cardsInDeck[22] = "Spades5";
cardsInDeck[23] = "Spades4";
cardsInDeck[24] = "Spades3";
cardsInDeck[25] = "Spades2";
cardsInDeck[26] = "HeartsAce";
cardsInDeck[27] = "HeartsKing";
cardsInDeck[28] = "HeartsQueen";
cardsInDeck[29] = "HeartsJack";
cardsInDeck[30] = "Hearts10";
cardsInDeck[31] = "Hearts9";
cardsInDeck[32] = "Hearts8";
cardsInDeck[33] = "Hearts7";
cardsInDeck[34] = "Hearts6";
cardsInDeck[35] = "Hearts5";
cardsInDeck[36] = "Hearts4";
cardsInDeck[37] = "Hearts3";
cardsInDeck[38] = "Hearts2";
cardsInDeck[39] = "ClubsAce";
cardsInDeck[40] = "ClubsKing";
cardsInDeck[41] = "ClubsQueen";
cardsInDeck[42] = "ClubsJack";
cardsInDeck[43] = "Clubs10";
cardsInDeck[44] = "Clubs9";
cardsInDeck[45] = "Clubs8";
cardsInDeck[46] = "Clubs7";
cardsInDeck[47] = "Clubs6";
cardsInDeck[48] = "Clubs5";
cardsInDeck[49] = "Clubs4";
cardsInDeck[50] = "Clubs3";
cardsInDeck[51] = "Clubs2";

// Place drawn cards on board in center

// Post score in statistics box real-time

// When players draw, high card wins and both cards return to winner's deck

// When draw is a tie, each player draws 4 more cards

// High card of 4th drawn wins for player and all cards return to winner's pile

// Automatically draws 4 more in case of tie (repeats automatically until win)

// Player with 52 cards wins

// Note appears announcing winner

// Do you want to play again?





