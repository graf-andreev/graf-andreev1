$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:4,
    nav:true,
    
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
    
    var owl=$(".owl-carousel");
        owl.owlCarousel();
        //$(".next") - находим нашу кнопку
        $(".next-slide").click(function(){
            owl.trigger("next.owl.carousel");
        });
        $(".prev-slide").click(function(){
            owl.trigger("prev.owl.carousel");
        });
    
 