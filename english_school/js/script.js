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

    $('.adress-click').click(function() { // Вызываем функцию по нажатию на кнопку 
        var popup_id = $('.popup-adress'); // Связываем rel и popup_id 
        $(popup_id).show(); // Открываем окно
        $('.overlay_popup').show(); // Открываем блок заднего фона
    });
    $('.img-close').click(function() { // Обрабатываем клик по заднему фону
        $('.overlay_popup, .popup-adress').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    });
    $('.main-button').click(function() { 
        var popup_id = $('.popup-info'); 
        $(popup_id).fadeIn(400);
        $('.overlay_popup').show(); 
    });
		$('.test-result').click(function() {
        var popup_id = $('.popup-result');
				$('.overlay_popup, .popup-test').hide();
        $(popup_id).show();
        $('.overlay_popup').show();
    });
		$('.img-close').click(function() {
			$('.overlay_popup, .popup-result').hide();
		});
    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-info').hide();
    });
		$('.img-close').click(function() {
			$('.overlay_popup, .popup-complete').hide();
		});
    $('.choise-button').click(function() {
    	  let course = $('.popup-course');
	      let titel = $(this).parent().find('.name-choice').text();
	      course.find('h4').text(titel);
	      let text = '';
	      if(titel === 'Английский для путешествий'){
		      text = "Английский для путешествий Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamdoloremque laudantium, totam";
	      }
		    if(titel === 'Английский для начинающих'){
			    text = "Английский для начинающих Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamdoloremque laudantium, totam";
		    }
		    if(titel === 'Бизнес английский'){
			    text = "Бизнес английский Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamdoloremque laudantium, totam";
		    }
		    if(titel === 'Разговорный английский'){
			    text = "Разговорный английский Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium rspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamrspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totamdoloremque laudantium, totam";
		    }
	      course.find('.popup-text').text(text);
		    $('#direction').val(titel);
        $(course).fadeIn(400);
        $('.overlay_popup').show(); 
    });
    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-course').hide();
    });

    function burger() {
        var menu = document.querySelector('nav');
        menu.classList.toggle("show");
     }

    $('.test > button').click(function() {
    	let result = $('#result-points');
	    var popup_id = '';
	    if(result.text() !== ''){
	    	popup_id = $('.popup-result');
	    }else {
		    popup_id = $('.popup-test');
	    }
        $(popup_id).fadeIn(500);
        $('.overlay_popup').show();
    });

    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-test').hide();
    });

    $('.level1').click(function() {
        var popup_id = $('.popup-level1');
        $(popup_id).show();
        $('.overlay_popup').show();
    });
    $('.img-close').click(function() {
        $('.overlay_popup, .popup-level1').hide();
    });

		$('.level2').click(function() {
			var popup_id = $('.popup-level2');
			$(popup_id).show();
			$('.overlay_popup').show();
		});
		$('.img-close').click(function() {
			$('.overlay_popup, .popup-level2').hide();
		});

		$('.level3').click(function() {
			var popup_id = $('.popup-level3');
			$(popup_id).show();
			$('.overlay_popup').show();
		});
		$('.img-close').click(function() {
			$('.overlay_popup, .popup-level3').hide();
		});

		$('.level4').click(function() {
			var popup_id = $('.popup-level4');
			$(popup_id).show();
			$('.overlay_popup').show();
		});
		$('.img-close').click(function() {
			$('.overlay_popup, .popup-level4').hide();
		});

		$('.level5').click(function() {
			var popup_id = $('.popup-level5');
			$(popup_id).show();
			$('.overlay_popup').show();
		});
		$('.img-close').click(function() {
			$('.overlay_popup, .popup-level5').hide();
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


$(document).ready(function() {
	$('.test-result').click(function() {
		let points = 0;
		let test1 = $('input[name="radio-group"]:checked').val();
		let test2 = $('input[name="radio-group1"]:checked').val();
		let test3 = $('input[name="radio-group2"]:checked').val();
		let test4 = $('input[name="radio-group3"]:checked').val();
		let test5 = $('input[name="radio-group4"]:checked').val();
		let test6 = $('input[name="radio-group5"]:checked').val();
		let test7 = $('input[name="radio-group6"]:checked').val();
		let test8 = $('input[name="radio-group7"]:checked').val();
		let test9 = $('input[name="radio-group8"]:checked').val();
		let test10 = $('input[name="radio-group9"]:checked').val();
		let test11 = $('input[name="radio-group10"]:checked').val();

		if(test1 === '3'){
			points += 10;
		}
		if(test2 === '3'){
			points += 10;
		}
		if(test3 === '1'){
			points += 15;
		}
		if(test4 === '3'){
			points += 10;
		}
		if(test5 === '4' ){
			points += 10;
		}
		if(test6 === '1'){
			points += 5;
		}
		if(test7 === '1'){
			points += 5;
		}
		if(test8 === '2'){
			points += 15;
		}
		if(test9 === '3'){
			points += 10;
		}
		if(test10 === '4'){
			points += 15;
		}
		if(test11 === '1'){
			points += 6;
		}
		$('#result-points').text(points);
		$('input[name="points"]').val(points);
	});
});


$( document ).ready(function() {
	$("form #btn").click(function(){
		let form = $(this).parents('form');
		let id = form.attr('id');
		let button = $(this);

		let nameInput = $("#"+id).find($('input[name="name"]'));
		let phoneInput = $("#"+id).find($('input[name="phone"]'));
		let adresInput = $("#"+id).find($('select[name="adres"]'));

		let name = nameInput.val();
		let phone = phoneInput.val();
		let adres = adresInput.val();

		if(id !== 'ajax_form2' && name!== '' && phone!== '' && adres!== null){
			sendAjaxForm(id,button);
			nameInput.css({'border': '0px solid'});
			phoneInput.css({'border': '0px solid'});
			adresInput.css({'border': '0px solid'});
		}
		if((id !== 'ajax_form2') && (name=== '' || phone=== '' || adres=== null)){
			if(name=== ''){
				nameInput.css({'border': '1px solid','border-color': 'red'});
			}else{
				nameInput.css({'border': '0px solid'});
			}
			if(phone=== ''){
				phoneInput.css({'border': '1px solid','border-color': 'red'});
			}else{
				phoneInput.css({'border': '0px solid'});
			}
			if(adres=== null){
				adresInput.css({'border': '1px solid','border-color': 'red'});
			}else{
				adresInput.css({'border': '0px solid'});
			}
		}
		if(id === 'ajax_form2' && name!== '' && phone!== ''){
			sendAjaxForm(id,button);
			nameInput.css({'border': '0px solid'});
			phoneInput.css({'border': '0px solid'});
		}
		if((id === 'ajax_form2') && (name=== '' || phone=== '')) {
			if(name=== ''){
				nameInput.css({'border': '1px solid','border-color': 'red'});
			}else{
				nameInput.css({'border': '0px solid'});
			}
			if(phone=== ''){
				phoneInput.css({'border': '1px solid','border-color': 'red'});
			}else{
				phoneInput.css({'border': '0px solid'});
			}
		}

		return false;
	});
});

function sendAjaxForm(ajax_form,button) {
	$.ajax({
		url:     "/sender.php",
		type:     "POST",
		dataType: "html",
		data: $("#"+ajax_form).serialize(),
		success: function(response) {
			$('.overlay_popup, .popup-group').hide();
			$('.overlay_popup, .popup-info').hide();
			$('.overlay_popup, .popup-test').hide();
			$('.overlay_popup, .popup-result').hide();
			$('.overlay_popup, .popup-adress').hide();
			$('.overlay_popup, .popup-course').hide();
			var popup_id = $('.popup-complete');
			$(popup_id).show();
			$('.overlay_popup').show();
			$('input[name="name"]').val("");
			$('input[name="phone"]').val("");
			$('input[name="time"]').val("");
			$('select[name="adres"]').val(null);
		},
	});
}

$( document ).ready(function() {

	$("#test-start").click(function () {
		$("#test-on").val('on');
	});
	$(".teachers-text").click(function () {
		let teacherName = $(this).parent().find('.teacher-name').html();
		let name = $(this).parent().find('.teacher-name').data('name');
		let info = $('#' + name).html();
		var popup_id = $('.popup-teachers');
		popup_id.find('.text').html(info);
		popup_id.find('h4').html(teacherName);
		$(popup_id).fadeIn(400);
		$('.overlay_popup').show();
	});
	$('.img-close').click(function () {
		$('.overlay_popup, .popup-teachers').hide();
	});
});



