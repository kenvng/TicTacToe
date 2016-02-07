'use strict';

 // DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
 // DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
 // DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //


 const myApp = {
   baseUrl: "http://tic-tac-toe.wdibos.com",
 };


 $(document).ready(() => {

   // SIGN UP
   $('#sign-up').on('submit', function(e) {
     e.preventDefault();
     var formData = new FormData(e.target);
     $.ajax({
       url: myApp.baseUrl + '/sign-up',
       method: 'POST',
       contentType: false,
       processData: false,
       data: formData,
     }).done(function(data) {
       console.log(data);
     }).fail(function(jqxhr) {
       console.error(jqxhr);
     });
   });

   // SIGN IN
   $('#sign-in').on('submit', function(e) {
     e.preventDefault();
     var formData = new FormData(e.target); // grab FormData
     $.ajax({
       //url: 'http://httpbin.org/post',
       url: myApp.baseUrl + '/sign-in',
       method: 'POST',
       contentType: false,
       processData: false,
       data: formData,
     }).done(function(data) {
       myApp.user = data.user;
       console.log(data);
     }).fail(function(jqxhr) {
       console.error(jqxhr);
     });
   });

   // SIGN OUT
   $('#sign-out').on('submit', function(e) {
     e.preventDefault();
     var formData = new FormData(e.target); // grab FormData
     $.ajax({
       //url: 'http://httpbin.org/post',
       url: myApp.baseUrl + '/sign-out/:id',
       method: 'DELETE',
       contentType: false,
       processData: false,
       data: formData,
     }).done(function(data) {
       myApp.user = data.user;
       console.log(data);
     }).fail(function(jqxhr) {
       console.error(jqxhr);
     });
   });

   // CHANGE PASSWORD
   $('#change-password').on('submit', function(e) {
     e.preventDefault(); // prevent browser do what it normally do.
     if (!myApp.user) {
       console.error('Wrong!');
     }
     var formData = new FormData(e.target); // grab FormData
     $.ajax({
       //url: 'http://httpbin.org/post',
       url: myApp.baseUrl + '/change-password/:id' + myApp.user.id,
       method: 'PATCH',
       headers: {
         Authorization: 'Token token=' + myApp.user.token,
       },
       contentType: false,
       processData: false,
       data: formData,
     }).done(function(data) {
       myApp.user = data.user;
       console.log('Successfully change password');
     }).fail(function(jqxhr) {
       console.error(jqxhr);
     });
   });
 });


// DO NOT REMOVE BELOW LINES - bootstrap RELATIED //
// DO NOT REMOVE BELOW LINES - bootstrap RELATIED //
// DO NOT REMOVE BELOW LINES - bootstrap RELATIED //

module.exports = true;

// DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
// DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
// DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
