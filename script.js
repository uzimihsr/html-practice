$(function(){

  // jQuery methods go here...
  $('.sotochan-image img').fadeIn('slow');

  $("#menu-contents").hide();

  $('#menu-button').click(function() {
    $('#menu-button').toggleClass("open");
    $('#menu-contents').slideToggle();
    $('.menu').text("menu")
    $('.open').text("close")
  });

});
