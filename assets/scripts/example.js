'use strict';

 // DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
 // DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
 // DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //


 const myApp = {
   baseUrl: "http://tic-tac-toe.wdibos.com",
 };


 $(document).ready(() => {


   // SIGN UP //
   $('#sign-up').on('submit', function(e) {
     e.preventDefault();
     var formData = new FormData(e.target);
     $.ajax({
       url: myApp.baseUrl + '/sign-up',
       method: 'POST',
      //  headers: {
      //    Authorization: 'Token token=' + myApp.user.token,
      //  },
       contentType: false,
       processData: false,
       data: formData,
     }).done(function(data) {
      //  myApp.user = data.user;
       console.log(data);
     }).fail(function(jqxhr) {
       console.error(jqxhr);
     });
   });

  //  $('.sign-up').on('submit',function(event) {
  //    event.preventDefault();
  //    let submtData = new FormData(event.target);
  //    $.ajax({
  //      url: myApp.baseUrl + '/sign-up',
  //      type: 'POST',
  //      contentType: false,
  //      processData: false,
  //      data: submtData
  //    })
  //    .done(function(data) {
  //        console.log(data);
  //        $('.sign-up-form').hide();
  //        $('.sign-up-nav').hide();
  //    }).fail(function(jqxhr) {
  //        console.error(jqxhr);
  //    });
  //  });

   // SIGN IN //
   $('#sign-in').on('submit', function(e) {
     e.preventDefault();
     var formData = new FormData(e.target); // grab FormData

     $.ajax({
      //  url: 'http://httpbin.org/post',
      //  url: myApp.baseUrl + '/sign-in',
       url: myApp.baseUrl + '/sign-in/' + myApp.user.id,
       method: 'POST',
      //  headers: {
      //    Authorization: 'Token token=' + myApp.user.token,
      //  },
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


  // $('.sign-in').on('submit',function(event) {
  //   event.preventDefault();
  //   let data = new FormData(event.target);
  //   $.ajax({
  //     url: myApp.baseUrl + '/sign-in',
  //     type: 'POST',
  //     contentType: false,
  //     processData: false,
  //     data: data
  //   })
  //   .done(function(data) {
  //       console.log(data);
  //       $('.sign-in').hide();
  //       $('.sign-up').hide();
  //       myApp.user = data.user;
  //   }).fail(function(jqxhr) {
  //       console.error(jqxhr);
  //   });
  // });


   // SIGN OUT //
   $('#sign-out').on('click', function(e) {
     e.preventDefault();
     var formData = new FormData(e.target); // grab FormData

     $.ajax({
      //  url: 'http://httpbin.org/post',
      //  url: myApp.baseUrl + '/sign-out/:id',
       url: myApp.baseUrl + '/sign-out/' + myApp.user.id,
       method: 'DELETE',
       headers: {
        //  Authorization: 'Token token=' + '/sign-out/:token',
         Authorization: 'Token token=' + myApp.user.token,
       },
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


  // $('.sign-out').on('click', function(e) {
  //    e.preventDefault();
  //    $.ajax({
  //      url: myApp.baseUrl + '/sign-out/' + myApp.user.id,
  //      method: 'DELETE',
  //      headers: {
  //        Authorization: 'Token token=' + myApp.user.token
  //      },
  //    })
  //     .done(function() {
  //      myApp.user.token = null;
  //      $('.sign-in').show();
  //      $('.sign-up').show();
  //      console.log(myApp.user);
  //    }).fail(function(jqxhr) {
  //      console.error(jqxhr);
  //    });
  //  });


   // CHANGE PASSWORD //
   $('#change-password').on('submit', function(e) {
     e.preventDefault(); // prevent browser do what it normally do.
     if (!myApp.user) {
       console.error('Wrong!');
     }
     var formData = new FormData(e.target); // grab FormData

     $.ajax({
       //url: 'http://httpbin.org/post',
       url: myApp.baseUrl + '/change-password/' + myApp.user.id,
       method: 'PATCH',
       headers: {
         Authorization: 'Token token=' + myApp.user.token,
       },
       contentType: false,
       processData: false,
       data: formData,
     }).done(function() {
      //  myApp.user = data.user;
       console.log('Successfully change password');
     }).fail(function(jqxhr) {
       console.error(jqxhr);
     });
   });


  // $('.change-password').on('submit', function(e) {
  //    e.preventDefault(); // prevent browser do what it normally do.
  //    if (!myApp.user) {
  //      console.error('Wrong!');
  //    }
  //    var formData = new FormData(e.target); // grab FormData
  //    $.ajax({
  //      url: myApp.baseUrl + '/change-password/' + myApp.user.id,
  //      method: 'PATCH',
  //      headers: {
  //        Authorization: 'Token token=' + myApp.user.token,
  //      },
  //      contentType: false,
  //      processData: false,
  //      data: formData,
  //    }).done(function() {
  //      console.log('Successfully change password');
  //    }).fail(function(jqxhr) {
  //      console.error(jqxhr);
  //    });
  //  });
 });


// DO NOT REMOVE BELOW LINES - bootstrap RELATIED //
// DO NOT REMOVE BELOW LINES - bootstrap RELATIED //
// DO NOT REMOVE BELOW LINES - bootstrap RELATIED //

module.exports = true;

// DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
// DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
// DO NOT REMOVE ABOVE LINES - bootstrap RELATIED //
