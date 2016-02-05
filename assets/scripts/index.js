 'use strict';
// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');



let playGame = {
   'player': '',
   'board': ['','','','','','','','',''],
   'turn': 0,
   'player1Wins': 0,
   'player2Wins': 0,
   'ties': 0
};

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

let clearBoard = function () {
  $('.square').empty();
  playGame.turn = 0;
};
let winner;

let updateScores = function (playGame) {
  console.log(playGame);
    if (winner === 'X') {
      console.log("before playGame.player1Wins", playGame.player1Wins);
      playGame.player1Wins++;
      console.log("after playGame.player1Wins", playGame.player1Wins);
    }
    else if (winner === 'O') {
      playGame.player2Wins++;
    }
    else {
      playGame.ties++;
    }

    $('.player-1').html(playGame.player1Wins);
    $('.player-2').html(playGame.player2Wins);
    $('.ties').html(playGame.ties);

  };

let BoxPos = function(pos) {
  return $('.' + pos);
};

let checkWin = function(a, b, c) {
  if (BoxPos(a).text() === playGame.player && BoxPos(b).text() === playGame.player && BoxPos(c).text() === playGame.player) {
  return true;
  } else {
  return false;
  }
};

let checkWinner = function() {
  if(checkWin(1, 2, 3) ||
    checkWin(4, 5, 6) ||
    checkWin(7, 8, 9) ||
    checkWin(1, 4, 7) ||
    checkWin(2, 5, 8) ||
    checkWin(3, 6, 9) ||
    checkWin(1, 5, 9) ||
    checkWin(3, 5, 7)) {

  }
  else if (playGame.turn === 8) {
    console.log("Tie Game!");
  }
  else {
    return false;
  }
    updateScores(playGame);
    clearBoard();
  };

//RESTART
    $('.restart').on('click', function() {
    });
// HELP
    $('.game-help').on('click', function() {
      alert("Welcome to Tic-Tac-Toe!  First player will start out as X and second player will start out as O.  Select the square you want to put your piece into by clicking on it.  You cannot occupy the square that is already occupine.  The first player to get three squares in a row wins.  Good lucks!!!");
    });


$(document).ready(() => {
  playerMove();
  clearBoard();
});


module.exports = true;
