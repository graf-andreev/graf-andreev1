
$('.popup-on').click(function() {  
  $('.popup').show(); 
  $('.overlay').show(); 
  $('body').addClass('no-scroll');

$('.close').click(function () {
  $('.overlay, .popup').hide();
  $('body').removeClass('no-scroll');
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