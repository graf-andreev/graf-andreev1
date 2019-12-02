
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

$(document).ready(function(){
  $(".slide-one").owlCarousel({
        loop:true, 
        margin:10, 
        nav:true,
        dots:false,
        items:1,
        responsive:{ 
            0:{
                items:1,
                nav:false
            },
            800:{
                items:1,
                nav:true
            }
        }
    });
  });