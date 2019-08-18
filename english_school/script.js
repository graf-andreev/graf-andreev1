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
        $(popup_id).show(); 
        $('.overlay_popup').show(); 
    })
		$('.test-result').click(function() {
        var popup_id = $('.popup-result');
				$('.overlay_popup, .popup-test').hide();
        $(popup_id).show();
        $('.overlay_popup').show();
    })

		$('.img-close').click(function() {
			$('.overlay_popup, .popup-result').hide();
		})


    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-info').hide();
    })

    
    $('.choise-button').click(function() {
	      let titel = $(this).parent().find('.name-choice').text();
	      $('.popup-course').find('h4').text(titel);
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
	      $('.popup-course').find('.popup-text').text(text)
        var popup_id = $('.popup-course'); 
        $(popup_id).show(); 
        $('.overlay_popup').show(); 
    }) 
    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-course').hide();
    })

    function burger() {
        var menu = document.querySelector('nav');
        menu.classList.toggle("show");
     }

    $('.test > button').click(function() { 
        var popup_id = $('.popup-test'); 
        $(popup_id).show(); 
        $('.overlay_popup').show(); 
    }) 
    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-test').hide();
    })

    $('.button-level').click(function() { 
        var popup_id = $('.popup-group'); 
        $(popup_id).show(); 
        $('.overlay_popup').show(); 
    }) 
    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-group').hide();
    })






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
		url:     "/sender.php", //url страницы (action_ajax_form.php)
		type:     "POST", //метод отправки
		dataType: "html", //формат данных
		data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
		success: function(response) { //Данные отправлены успешно
			button.html('Форма отправлена');
			// result = $.parseJSON(response);
			// $('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonephonenumber);
		},
		// error: function(response) { // Данные не отправлены
		//     $('#result_form').html('Ошибка. Данные не отправлены.');
		// }
	});
}


$(function() {
	var owl3 = $(".slide-three");
	owl3.owlCarousel({
		items: 1,
		margin: 10,
		loop: true,
		nav: false
	});

	$(".next-slides").click(function(){
		owl3.trigger("next.owl.carousel");
	});

	$(".prev-slides").click(function(){
		owl3.trigger("prev.owl.carousel");
	});
});

