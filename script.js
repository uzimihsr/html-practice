$(function(){

  // jQuery methods go here...
  $('.sotochan-image img').fadeIn('slow');

  $("#menu-contents").hide();

  $("#menu-button").click(function() {
    $("#menu-contents").slideToggle();
  });

});
