$('.slide-one').owlCarousel({
    loop:true,
    margin:10,
    items:4,
    nav:false,
    
    responsive:{
        300:{
            items:1.5
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
    
    var owl=$(".slide-one");
        owl.owlCarousel();
        //$(".next") - находим нашу кнопку
        $(".next-slide").click(function(){
            owl.trigger("next.owl.carousel");
        });
        $(".prev-slide").click(function(){
            owl.trigger("prev.owl.carousel");
        });
    
$("#phone").mask("+7 (999) 99-99-999");

$('.slide-two').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:false,
    
    responsive:{
        300:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
    // var owl=$(".slide-two");
    //     owl.owlCarousel();
    //     //$(".next") - находим нашу кнопку
    //     $(".next-slide1").click(function(){
    //         owl.trigger("next.owl.carousel");
    //     });
    //     $(".prev-slide1").click(function(){
    //         owl.trigger("prev.owl.carousel");
    //     });

    $('.adress-click').click(function() { // Вызываем функцию по нажатию на кнопку 
        var popup_id = $('.popup-adress'); // Связываем rel и popup_id 
        $(popup_id).show(); // Открываем окно
        $('.overlay_popup').show(); // Открываем блок заднего фона
    }) 
    $('.popup-adress').click(function() { // Обрабатываем клик по заднему фону
        $('.overlay_popup, .popup-adress').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    })