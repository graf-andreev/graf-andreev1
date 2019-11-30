$('.popup-on').click(function() { 
  var popup_id = $('.popup'); 
  $(popup_id).show(); 
  $('.overlay').show(); 
});

$('.close').click(function () {
  $('.overlay, .popup').hide();
});