jQuery(document).ready(function ($) {
    var owl = $('.gallery-top');
    owl.owlCarousel({
        nav: false,
        dots: false,
        mouseDrag: false,
        items: 1,
        loop: true,
        margin: 0,
        responsive: {
            300: {
                items: 1,
                margin: 0,
                mouseDrag: true,
                nav: false,
                dots: true,
            },
            850: {
                items: 1,
                mouseDrag: true,
                dots: true,
                nav: false,
            }
        }
    });

    owl.on('drag.owl.carousel', function (event) {
        document.ontouchmove = function (e) {
            e.preventDefault();
        }
    });

    owl.on('dragged.owl.carousel', function (event) {
        document.ontouchmove = function (e) {
            return true;
        }
    });
});

$('.burger-menu').click(function(){
    $('.mobile-menu').addClass('active');
    $('body').addClass('no-scroll')
});

$('.close').click(function(){
    $('.mobile-menu').removeClass('active');
    $('body').removeClass('no-scroll')
});