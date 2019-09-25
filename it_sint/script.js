$('#YNAME').focus(function() {
    var form = $('#NAME-L');
    $(form).hide();
});
$('#YNAME').focusout(function() {
    $('#NAME-L').show();
});
$('#MAIL').focus(function() {
    var form = $('#EMAIL-L');
    $(form).hide();
});
$('#MAIL').focusout(function() {
    $('#EMAIL-L').show();
});
$('#IPHONE').focus(function() {
    var form = $('#PHONE-L');
    $(form).hide();
});
$('#IPHONE').focusout(function() {
    $('#PHONE-L').show();
});
$('#TOWN').focus(function() {
    var form = $('#CITY-L');
    $(form).hide();
});
$('#TOWN').focusout(function() {
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
    // 480: {
    //   slidesPerView: 1,
    //   spaceBetween: 15
    // },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    },

// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
dynamicBullets: true,
},
}})