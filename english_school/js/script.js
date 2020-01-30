$('.slide-one').owlCarousel({
    loop:true,
    margin:10,
    items:4,
    nav:false,
    
    responsive:{
        300:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
    
    var owl=$(".slide-one");
        owl.owlCarousel();
        //$(".next") - находим нашу кнопку
        $(".next-slide").click(function(){
            owl.trigger("next.owl.carousel");
        });
        $(".prev-slide").click(function(){
            owl.trigger("prev.owl.carousel");
        });


    
		$(".phone").mask("+7 (999) 99-99-999");

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
		});

		var owl2 = $(".slide-two");
		owl2.owlCarousel();
		$(".next-slide1").click(function(){
			owl2.trigger("next.owl.carousel");
		});
		$(".prev-slide1").click(function(){
			owl2.trigger("prev.owl.carousel");
		});

$(function() {
	var owl3 = $(".slide-three");
	var st;

	function timeCounter() {
		var numSec = 0,
			totalTime = 0,
			loader = 0;

		clearInterval(st)
		st= setInterval(counter, 100);

		function counter() {
			if (numSec > 99) {
				return false;
			} else {
				totalTime += 1;
				numSec = parseInt(totalTime);
				loader = numSec + "%";
			}
			$(".load").css("width", loader);


			if(loader === '100%'){
				if($("#test-on").val() === 'on'){
					owl3.trigger("next.owl.carousel");
				}
			}
		};
	}

	owl3.owlCarousel({
		items: 1,
		loop: false,
		onInitialized  : counter,
		onTranslated : counter,
		autoplay: false,
		autoplayTimeout:10000,
		mouseDrag: false,
		// animateOut: 'fadeOut',
		dots: true,
		nav: true
	});

	owl3.on('changed.owl.carousel', function(property) {
		timeCounter();
	});

	function counter(event) {
		var items = event.item.index;     // Number of items
		if(items === 1){
			$(".slide-three .owl-prev").after("<div class='load-time'><div class='load'></div></div>");
			// owl3.trigger( 'refresh.owl.carousel' );
		}
	}

	$(".next-slides").click(function(){
		owl3.trigger("next.owl.carousel");
		timeCounter();
	});

	$(".prev-slides").click(function(){
		owl3.trigger("prev.owl.carousel");
	});
});

// popups

    $('.adress-click').click(function() { 
        $('.popup-adress').show();
		$('.overlay_popup').show(); 
    });
    $('.img-close').click(function() { 
		$('.overlay_popup, .popup-adress').hide(); 
    });
    $('.main-button').click(function() { 
        $('.popup-info').fadeIn(400);
		$('.overlay_popup').show(); 
    });
    $('.img-close').click(function() { 
		$('.overlay_popup, .popup-info').hide();
    });
		$('.img-close').click(function() {
			$('.overlay_popup, .popup-complete').hide();
		});

    function burger() {
        var menu = document.querySelector('nav');
        menu.classList.toggle("show");
     }

    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-test').hide();
	});
	
function timer(f) {
	var date = new Date(f.replace(/-/g, '/'));
	var f_time = Date.parse(date);

	function timer_go() {

		var n_time = Date.now();
		var diff = f_time - n_time;
		if(diff <= 0) return false;
		var left = diff % 1000;

		//секунды
		diff = Math.floor(diff / 1000);
		var s = diff % 60;
		if(s < 10) {
			$(".seconds_1").html(0);
			$(".seconds_2").html(s);
		}else {
			$(".seconds_1").html(Math.floor(s / 10));
			$(".seconds_2").html(s % 10);
		}
		//минуты
		diff = Math.floor(diff / 60);
		var m = diff % 60;
		if(m < 10) {
			$(".minutes_1").html(0);
			$(".minutes_2").html(m);
		}else {
			$(".minutes_1").html(Math.floor(m / 10));
			$(".minutes_2").html(m % 10);
		}
		//часы
		diff = Math.floor(diff / 60);
		var h = diff % 24;
		if(h < 10) {
			$(".hours_1").html(0);
			$(".hours_2").html(h);
		}else {
			$(".hours_1").html(Math.floor(h / 10));
			$(".hours_2").html(h % 10);
		}
		//дни
		var d = Math.floor(diff / 24);
		if(d < 10) {
			$(".days_1").html(0);
			$(".days_2").html(d);
		}else {
			$(".days_1").html(Math.floor(d / 10));
			$(".days_2").html(d % 10);
		}
		setTimeout(timer_go, left);
	}
	setTimeout(timer_go, 0);
}

$(document).ready(function() {
	let time = $(".timer-container").attr("data-finish");
	timer(time);
});
