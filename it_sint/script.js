$('#NAME').focus(function() {
    var form = $('#NAME-L');
    $(form).hide();
});
$('#NAME').focusout(function() {
    $('#NAME-L').show();
});
$('#EMAIL').focus(function() {
    var form = $('#EMAIL-L');
    $(form).hide();
});
$('#EMAIL').focusout(function() {
    $('#EMAIL-L').show();
});
$('#PHONE').focus(function() {
    var form = $('#PHONE-L');
    $(form).hide();
});
$('#PHONE').focusout(function() {
    $('#PHONE-L').show();
});
$('#CITY').focus(function() {
    var form = $('#CITY-L');
    $(form).hide();
});
$('#CITY').focusout(function() {
    $('#CITY-L').show();
});

var mySwiper = new Swiper ('.swiper-container', {
// Optional parameters
direction: 'horizontal',
loop: true,
slidesPerView: 3,

// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

// Navigation arrows
breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 2000
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 200
    },

// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
dynamicBullets: true,
},
}})