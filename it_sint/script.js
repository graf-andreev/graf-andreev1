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
// navigation: {
// nextEl: '.swiper-button-next',
// prevEl: '.swiper-button-prev',
// },

// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
dynamicBullets: true,
},
})