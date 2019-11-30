$('.popup-on').click(function() { 
  var popup_id = $('.popup'); 
  $(popup_id).show(); 
  $('.overlay').show(); 

$('.close').click(function () {
  $('.overlay, .popup').hide();
});
});

$('#menu-open').click(function() { 
  var menu = $('.aside-menu'); 
  $(menu).css('left', '60%'); 

$('#menu-close').click(function () {
  var menu = $('.aside-menu'); 
  $(menu).css('left', '100%');
});
});
