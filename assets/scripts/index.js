 'use strict';
// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');






// START GAME
let setMessage;

// RESTART
$('.new-game').on('click', function(){
});

$('.game-help').on('click', function(){alert("Welcome to Tic-Tac-Toe!  You play as the Luke Skywalker and the computer is the Lord Darth Vader.  Select the square you want to put Luke into by clicking them.  You cannot occupy a square that is already occupied. The first player to get three squares in a row wins.  Good Luck!!");
});


    let startGame = function() {
      document.turn = "X";
      setMessage(document.turn + " get to start.");  // message saying X to start
    };
    // Function setMessage, tell who turn is it....
    let getMessage = function(msg) {
      document.getElementById("message").innerText = msg;
    };
    // function nextMove
    let nextMove = function(square) {
      if (square.innerText === "") { // if square equals to empty value (no move yet)
        square.innerText = document.turn; // then let it moves there
        switchTurn(); // this will call function switchTurn below into work
      } else {
        setMessage("That square is already used.");
      }
    };
    // Function switchTurn, will be called above
    let switchTurn = function() {

      if (checkForWinner(document.turn)) {								//if we have a winner
        setMessage("Congratulations, " + document.turn + "! You win!");	// set this message
      } else if  (document.turn === "X") {								// else we switch the current player
        document.turn = "O";
        setMessage("It's " + document.turn + "'s turn!");// this will get message to both, X or O
      } else {
        document.turn = "X";
        setMessage("It's " + document.turn + "'s turn!");// this will get message to both, X or O
      }
    };
    //Function checkForWinner,  checking all combinations for possible winning.
    let checkForWinner = function(move) {
      var result = false;
      if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move))
        {

        result = true;
      }
      return result;
    };
    // function checkRow, if row a, b, c are true then it is true result, if not then it is false
    let checkRow = function(a, b, c, move) {
      var result = false;
      if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
        result = true;
      }
      return result;
    };
    // Function getBox
    let getBox = function(number) {
      return document.getElementById("s" + number).innerText; // get the element that s with whatever number there
    };








$(document).ready(() => {
  console.log('It works.');
});






















//
//
// ///// START CODE /////
// function startGame() {
//   document.turn = "X";
//
//   setMessage(document.turn + "'s turn");  // message saying X to start
// }
//
// function setMessage(msg) {
//   document.getElementById("message").innerText = msg; // read the element and then send message
// }
//
// function nextMove(square) {
//   square.innerText = document.turn; // then let it moves there
//   switchTurn(); // this will call function switchTurn below into work
// }
//
// function switchTurn() {
//   if  (document.turn === "X") {								// else we switch the current player
//     document.turn = "O";
//   } else {
//     document.turn = "X";
//   }
// }
//
//
//
//
// $('.game-help').on('click', function(){alert("Welcome to Tic-Tac-Toe!  You play as the Luke Skywalker and the computer is the Lord Darth Vader.  Select the square you want to put Luke into by clicking them.  You cannot occupy a square that is already occupied. The first player to get three squares in a row wins.  Good Luck!!");
// });
//
//
// //
// // START GAME
//     function startGame() {
//       document.turn = "X";
//       setMessage(document.turn + " get to start.");  // message saying X to start
//     }
//     // Function setMessage,
//     function setMessage(msg) {
//       document.getElementById("message").innerText = msg;
//     }
//     // function nextMove
//     function nextMove(square) {
//       if (square.innerText === "") { // if square equals to empty value (no move yet)
//         square.innerText = document.turn; // then let it moves there
//         switchTurn(); // this will call function switchTurn below into work
//       } else {
//         setMessage("That square is already used.");
//       }
//     }
//     // Function switchTurn, will be called above
//     function switchTurn() {
//
//       if (checkForWinner(document.turn)) {								//if we have a winner
//         setMessage("Congratulations, " + document.turn + "! You win!")	// set this message
//       } else if  (document.turn === "X") {								// else we switch the current player
//         document.turn = "O";
//         setMessage("It's " + document.turn + "'s turn!");// this will get message to both, X or O
//       } else {
//         document.turn = "X";
//         setMessage("It's " + document.turn + "'s turn!");// this will get message to both, X or O
//       }
//     }
//     //Function checkForWinner,  checking all combinations for possible winning.
//     function checkForWinner(move) {
//       var result = false;
//       if (checkRow(1, 2, 3, move) ||
//         checkRow(4, 5, 6, move) ||
//         checkRow(7, 8, 9, move) ||
//         checkRow(1, 4, 7, move) ||
//         checkRow(2, 5, 8, move) ||
//         checkRow(3, 6, 9, move) ||
//         checkRow(1, 5, 9, move) ||
//         checkRow(3, 5, 7, move))
//         {
//
//         result = true;
//       }
//       return result;
//     }
//     // function checkRow, if row a, b, c are true then it is true result, if not then it is false
//     function checkRow(a, b, c, move) {
//       var result = false;
//       if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
//         result = true;
//       }
//       return result;
//
//     // Function getBox
//     function getBox(number) {
//       return document.getElementById("s" + number).innerText; // get the element that s with whatever number there
//     }
//
//     //
//     // let t = 1;        // turn
//     // // let change = 1;   //
//     // // let empty1 = -1;  //
//     // // let empty2 = -1;  //
//     // // let empty3 = -1;  //
//     // // let empty4 = -1;  //
//     // // let empty5 = -1;  //
//     // // let empty6 = -1;  //
//     // // let empty7 = -1;  //
//     // // let empty8 = -1;  //
//     // // let empty9 = -1;  //
//     // let whoTurn = "Player 1 turn";  //
//     // // let spot;         //
//     // let xo;              //
//     // let clicked;         //
//     // let changing;        //
//     // let turnchange;      //
//     // let win;             //
//     // // let logicOne;        //
//     // // let wn;              // wins
//     // // let ls;              // loses
//     // // let ts;              // ties
//     // // let all;
//     //
//
//
//
//
//
//
// // RESTART
// // $('.new-game').on('click', function(){
// // });
//
// // HELP
// // $('.game-help').on('click', function(){alert("Welcome to Tic-Tac-Toe!  You play as the Luke Skywalker and the computer is the Lord Darth Vader.  Select the square you want to put Luke into by clicking them.  You cannot occupy a square that is already occupied. The first player to get three squares in a row wins.  Good Luck!!");
// // });
//
//
//
// // Winning Logic //
// // function win(){
// //   if   (empty1===empty2 && empty2===empty3 && empty3===0 ||
// // 				empty4===empty5 && empty5===empty6 && empty6===0 ||
// //         empty7===empty8 && empty8===empty9 && empty9===0 ||
// //         empty1===empty4 && empty4===empty7 && empty7===0 ||
// //         empty2===empty5 && empty5===empty8 && empty8===0 ||
// //         empty3===empty6 && empty6===empty9 && empty9===0 ||
// //         empty1===empty5 && empty5===empty9 && empty9===0 ||
// //         empty3===empty5 && empty5===empty7 && empty7===0 ){
// //         alert ("Player 1: You WIN !!!");
// //         history.go(0);
// //   }
// //   if   (empty1===empty2 && empty2===empty3 && empty3===1 ||
// //         empty4===empty5 && empty5===empty6 && empty6===1 ||
// //         empty7===empty8 && empty8===empty9 && empty9===1 ||
// //         empty1===empty4 && empty4===empty7 && empty7===1 ||
// //         empty2===empty5 && empty5===empty8 && empty8===1 ||
// //         empty3===empty6 && empty6===empty9 && empty9===1 ||
// //         empty1===empty5 && empty5===empty9 && empty9===1 ||
// //         empty3===empty5 && empty5===empty7 && empty7===1 ){
// //         alert ("Player 2: you WIN !!!");
// // 				history.go(0);
// //   }
// // }
// //
// // // Players Turns
// // function turnchange(t){
// //   if (change === 1)  {
// //     if (t === 0){
// //         t = 1;
// //         whoTurn = "Turn : Player " + 1;
// //     }
// //     else {
// //         t = 0;
// // 	whoTurn = "Turn : Player " + 2;
// //     }
// //
// //   }
// //   else {
// //     t = t;
// //   }
// //   change = 1;
// //   return (t);
// // }
// //  // CHANGING
// // function changing(clicked){
// // if (clicked === 1){
// //    spot = empty1 ;}
// // if (clicked === 2){
// //    spot = empty2 ;}
// // if (clicked === 3){
// //    spot = empty3 ;}
// // if (clicked === 4){
// //    spot = empty4 ;}
// // if (clicked === 5){
// //    spot = empty5 ;}
// // if (clicked === 6){
// //    spot = empty6 ;}
// // if (clicked === 7){
// //    spot = empty7 ;}
// // if (clicked === 8){
// //    spot = empty8 ;}
// // if (clicked === 9){
// //    spot = empty9 ;}
// //
// // if (spot === -1){
// //    if (t === 0){
// //       xo = "  O  " ;
// //       spot = 0;
// //    }
// //    else {
// //       xo = "  X  "  ;
// //       spot = 1;
// //    }
// //    if (clicked === 1){
// //       empty1 = spot;}
// //    if (clicked === 2){
// //       empty2 = spot ;}
// //    if (clicked === 3){
// //       empty3 = spot ;}
// //    if (clicked === 4){
// //       empty4 = spot ;}
// //    if (clicked === 5){
// //       empty5 = spot ;}
// //    if (clicked === 6){
// //       empty6 = spot ;}
// //    if (clicked === 7){
// //       empty7 = spot ;}
// //    if (clicked === 8){
// //       empty8 = spot ;}
// //    if (clicked === 9){
// //       empty9 = spot ;}
// // }
// // else {
// //    if (spot === 0){
// //        xo = "  O  ";}
// //    if (spot === 1){
// //        xo = "  X  ";}
// //    change = 0;
// // }
// // return (xo) ;
// // }
// //
// // function change_b1(form){
// //     clicked = 1;
// //     changing(clicked) ;
// //     t = turnchange(t) ;
// //     form.b1.value = xo;
// //     form.whoseturn.value = whoTurn;
// //     win();
// //    return;
// // }
// // change_b1();
// // // $(.b1).empty().append('<img src="/assets/images/luke.jpg" height="50px" width="50px">');
// // $(".b1").click(function(){
// //     $("p").append("<b>Appended text</b>");
// // });
// //
// // function change_b2(form){
// //     clicked = 2;
// //     changing(clicked) ;
// //     form.b2.value = xo;
// //     t = turnchange(t) ;
// //     form.whoseturn.value = whoTurn;
// //     win();
// //     return;
// // }
// // change_b2();
// //
// // function change_b3(form){
// //     clicked = 3;
// //     changing(clicked) ;
// //     form.b3.value = xo;
// //     t = turnchange(t) ;
// //     form.whoseturn.value = whoTurn;
// //     win();
// //     return;
// // }
// // change_b3();
// //
// // function change_b4(form){
// //     clicked = 4;
// //     changing(clicked) ;
// //     form.b4.value = xo;
// //     t = turnchange(t) ;
// //     form.whoseturn.value = whoTurn;
// //     win();
// //     return;
// // }
// // change_b4();
// //
// // function change_b5(form){
// //     clicked = 5;
// //     changing(clicked) ;
// //     form.b5.value = xo;
// //     t = turnchange(t) ;
// //     form.whoseturn.value = whoTurn;
// //     win();
// //     return;
// // }
// // change_b5();
// //
// // function change_b6(form){
// //     clicked = 6;
// //     changing(clicked) ;
// //     form.b6.value = xo;
// //     t = turnchange(t) ;
// //     form.whoseturn.value = whoTurn;
// //     win();
// //     return;
// // }
// // change_b6();
// //
// // function change_b7(form){
// //     clicked = 7;
// //     changing(clicked) ;
// //     form.b7.value = xo;
// //     t = turnchange(t) ;
// //     form.whoseturn.value = whoTurn;
// //     win();
// //     return;
// // }
// // change_b7();
// //
// // function change_b8(form){
// //     clicked = 8;
// //     changing(clicked) ;
// //     form.b8.value = xo;
// //     t = turnchange(t) ;
// //     form.whoseturn.value = whoTurn;
// //     win();
// //     return;
// // }
// // change_b8();
// //
// // function change_b9(form){
// //     clicked = 9;
// //     changing(clicked) ;
// //     form.b9.value = xo;
// //     t = turnchange(t) ;
// //     form.whoseturn.value = whoTurn;
// //     win();
// //     return;
// // }
// // change_b9();
//
// // function process() {
// // 	logicOne();
// // 	if (all===1){ alert("You won, congratulations!"); wn++; }
// // 	if (all===2){ alert("Gotcha!  I win!"); ls++; }
// // 	if (all===3){ alert("We tied."); ts++; }
// // 	if (all!==0) {
// // 	document.game.you.value = wn;
// // 	document.game.computer.value = ls;
// // 	document.game.ties.value = ts;
// //    }
// // }
// // process();
//
//
//
//
//
//
//
//
// /*
//
// (function() {
// let source = $("#grid-template").html();
// let template = Handlebars.compile(source);
//
// $("#grid").html(template(GRID_NAMESPACE.data));
// }) ();
//
// */
// /*End code here */
