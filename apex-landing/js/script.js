// menu

jQuery(document).ready(function ($) {
  $(".m-b").click(function () {
    $(".m-b").toggleClass("active");
    $(".main-menu").toggleClass("main-menu_active");
    $("body").toggleClass("no-scroll");

    $(".menu-overlay").click(function () {
      $(".m-b").removeClass("active");
      $(".main-menu").removeClass("main-menu_active");
      $("body").removeClass("no-scroll");

      $("body").keyup(function (e) {
        if (e.which == 27) {
          $(".m-b").removeClass("active");
          $(".main-menu").removeClass("main-menu_active");
          $("body").removeClass("no-scroll");
        };
      });
    });
  });
});

// owl

jQuery(document).ready(function ($) {
  $('.player-top').owlCarousel({
    autoplay: false,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 6,
    loop: true,
    margin: 0,
    responsive: {
      300: {
        items: 3,
        center: true,
        mouseDrag: true,
        dots: true,
      },
      850: {
        items: 6
      }
    }
  });
  $('.player-top1').owlCarousel({
    autoplay: false,
    nav: true,
    dots: false,
    mouseDrag: false,
    items: 3,
    loop: true,
    margin: 0,
    responsive: {
      300: {
        items: 1,
        center: true,
        mouseDrag: true,
        dots: true,
        nav: false,
      },
      850: {
        items: 3
      }
    }
  });
});

// full text

$('#showFullText').click(function () {
  $('#fillTextPlace').toggleClass('faded');
  $('#showFullText').hide();
})
$('.checkout').click(function () {
  $('.universal-overlay1').show();
  $('body').addClass('no-scroll');
});

$('.popup .cancel').click(function () {
  $('.universal-overlay, .popup-two, popup-three').hide();
  $('body').removeClass('no-scroll');
});

