// DO NOT REMOVE BELOW LINES - bootstrap RELATIED //
// DO NOT REMOVE BELOW LINES - bootstrap RELATIED //
// DO NOT REMOVE BELOW LINES - bootstrap RELATIED //
'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');

$(document).ready(() => {
  console.log('It works.');
});
// DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
// DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
// DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //


// BACKGROUND IMAGE //
// $(document).ready(function() {
// 		var $winwidth = $(window).width();
// 		$("img.source-image").attr({
// 			width: $winwidth
// 		});
// 		$(window).bind("resize", function(){
// 			var $winwidth = $(window).width();
// 			$("img.source-image").attr({
// 				width: $winwidth
// 			});
// 		 });
// 	});


/* Thanks to random sites and resources, without them the script of this game would not have been possible.  Thank you! */
// GAME CODE //
// GAME CODE //
// GAME CODE //
/* Begin */

let winner;

/// CREATING OJECT LITERAL //
let playGame = {
   'player': '',
   'board': ['','','','','','','','',''],
   'turn': 0,
   'player1Wins': 0,
   'player2Wins': 0,
   'ties': 0
};

/// RESET/RESTART GAME //
let clearBoard = function () {
  $('.square').empty();
  playGame.turn = 0;
};



/// UPDATE SCORE //
let updateScores = function (playGame) {
  console.log(playGame);
    if (winner === 'X') {
      console.log("before playGame.player1Wins", playGame.player1Wins);
      playGame.player1Wins++;
      console.log("after playGame.player1Wins", playGame.player1Wins);
      alert("Player 1 wins!");
      $('.player-1-scores').text();
      $('.player-1-scores').val();
    }
    else if (winner === 'O') {
      playGame.player2Wins++;
      alert("Player 2 wins!");
      $('.player-2-scores').html();
      $('player-2-scores').val();
    }
    else {
      playGame.ties++;
      $('players-ties-scores').val();
      // alert("Tie Game!"); // already in WINNING LOGIC
    }

    $('.player-1-scores').html(playGame.player1Wins);
    $('.player-2-scores').html(playGame.player2Wins);
    $('.players-ties-scores').html(playGame.ties);

  };

/// BOX POSITION //
let BoxPosition = function(position) {
  return $('.' + position);
};

/// WINNING LOGIC / CHECK WIN //
let checkWin = function(a, b, c) { // function checkWin passing a parameter with 3 arguments.
  if (BoxPosition(a).text() === playGame.player && BoxPosition(b).text() === playGame.player && BoxPosition(c).text() === playGame.player) {
  return true;
  } else {
  return false;
  }
};

/// WINNING LOGIC / CHECK WINNER //
let checkWinner = function() { // function checkWinner passing a parameter with no argument.
  if(checkWin(1, 2, 3) ||      // earlier checkWin passing 3 argument a, b, c
    checkWin(4, 5, 6) ||       // this time checkWin as a method attachinh the value to those arguments
    checkWin(7, 8, 9) ||       // IF any of these consition MET, the player is a winner.
    checkWin(1, 4, 7) ||
    checkWin(2, 5, 8) ||
    checkWin(3, 6, 9) ||
    checkWin(1, 5, 9) ||
    checkWin(3, 5, 7)) {
    winner = playGame.player;
  }
  else if (playGame.turn === 8) {  // IF condition above NOT MET, it is a TIES
    alert("Tie Game!");            // Pop-up alert message to user of a Tie Game
  }
  else {
    return false;
  }
    updateScores(playGame);
    clearBoard();
  };

/// PLAYER MOVE //
let playerMove = function () {
  $('.square').on('click', function () {
    if ($(this).html() === '') {
      if (playGame.turn % 2 === 0) {
        $(this).text('X');
        playGame.player = 'X';
        console.log(playGame.player);
      } else {
        $(this).text('O');
        playGame.player = 'O';
        console.log(playGame.player);
      }
    }
    checkWinner();
    playGame.turn++;
  });
};

// HELP //
$('.game-help').on('click', function() {
  alert("Welcome to Tic-Tac-Toe!  First player will start out as X and second player will start out as O.  Select the square you want to put your piece into by clicking on it.  You cannot occupy the square that is already occupine.  The first player to get three squares in a row wins.  Good lucks!!!");
});

$(document).ready(() => {
  playerMove();
  clearBoard();
});


module.exports = true;
