$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:2,
    nav:true,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
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

$(function(){
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
                return false;
            }
        }
    });
});