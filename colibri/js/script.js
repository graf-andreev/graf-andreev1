$(document).ready(function($) {
    $('input').change(function () {
        $(this).removeClass('error');
    });

    $('.tabs-buttons').on('click', 'button', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('#menu').click(function(){
        $('.dropdown-menu').toggleClass('active-menu');
        $('.main-nav').toggleClass('active-nav');
    });

    $('.popup').click(function () {
        $('.popup-callback, .overlay').show();
    });

    $('.img-close').click(function () {
        $('.overlay, .popup-callback').hide();
    });

    $('.overlay').click(function () {
        $('.popup-callback, .overlay').hide();
        $('.popup_result').remove();
    });

    $('body').on('click', '.img-result-close',function () {
        $('.overlay').hide();
        $('.popup_result').remove();
    });

    $('.js__send_call_request').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var d = {};
        var f = $(this).closest('div');
        var stop = false;
        f.find('input').each(function () {
            var v = $(this).val();
            var n = $(this).attr('name');
            if (n) {
                if (v === '' && $(this).attr('required') === 'required') {
                    stop = true;
                    $(this).addClass('error');
                }
                d[n] = v;
            }
        });
        if (stop === false) {
            d['subject'] = 'Заказ звонка'
            send_mail($(this), f, d);
        }
        return false;
    });

    $('.js__send_question').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var d = {};
        var f = $(this).closest('section');
        var stop = false;
        f.find('input').each(function () {

            var v = $(this).val();
            var n = $(this).attr('name');
            if (n) {
                if (v === '' && $(this).attr('required') === 'required') {
                    stop = true;
                    $(this).addClass('error');
                }
                d[n] = v;
            }
        });


        if (stop === false) {
            d['subject'] = 'Обратная связь';
            send_mail($(this), f, d);
        }
        return false;
    });

    $('.js__send_active_tab').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var d = {};
        var f = $(this).closest('section');
        var stop = false;
        f.find('input').each(function () {
            if ($(this).closest('.tabs-content.active').length === 1 || $(this).closest('.tabs-content').length === 0) {
                var v = $(this).val();
                var n = $(this).attr('name');
                if (n) {
                    if (v === '' && $(this).attr('required') === 'required') {
                        stop = true;
                        $(this).addClass('error');
                    }
                    d[n] = v;
                }
            }
        });
        console.log(stop);
        if (stop === false) {
            d['subject'] = 'Расчёт таможенных платежей. ' + $('.tabs-buttons button.active').text();
            console.log(d);
            send_mail($(this), f, d);
        }
        return false;
    });

    function send_mail(btn, form, data){
        $.ajax({
            url: '/php/send_mail.php',
            data: data,
            dataType: 'json',
            method: 'POST',
            beforeSend: function () {
                btn.attr('disabled', 'disabled');
                form.addClass('loading');
            },
            complete: function () {
                btn.removeAttr('disabled');
                form.removeClass('loading');
            },
            success: function (result) {
                $('.popup-callback').hide();
                $('.overlay').show();
                $('.popup_result').remove();
                $('body').append('<div class="popup_result">\n' +
                    '<button class="img-result-close">Х</button>\n' +
                    '<div class="result-message result-message__' + result.status + '">' + result.message + '</div>\n' +
                '</div>');
                $('.popup_result').show();
                if (result.status === 'success') {
                    form.find('input').not('[type="checkbox"]').val('');
                    setTimeout(function () {
                        $('.check_robot_fields .system_field_1').val('i_am_real_man');
                    }, 1000);
                }
            }
        });
    }

    setTimeout(function () {
        $('.check_robot_fields .system_field_1').val('i_am_real_man');
    }, 2500);

    console.log('normal_load');
});

// owl

$(document).ready(function(){
    $(".slide-one").owlCarousel({
          loop:true, 
          margin:10, 
          nav:true,
          dots:false,
          items:4,
          responsive:{ 
              0:{
                  items:1,
                  nav:false
              },
              800:{
                  items:3,
                  nav:false
              },
              1000:{
                  items:4,
                  nav:false
              }
          }
      });
  
$(".slide-two").owlCarousel({
        loop:true,
        margin:10,
        items:2,
        nav:true,
        autoplay:true,
        autoplayTimeout:6000,
        responsiveClass:true,
        responsive:{
            800:{
                items:1,
            },
            1000:{
                items:2,
            }
          }
      });


  $(".slide-three").owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        1000:{
            items:1,
        }
      }
  });
});


//timer

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
	let time = $(".timer-1").attr("data-finish");
	timer(time);
});

$('.check').click(function(){
	if ($(this).is(':checked')){
		$('.tnved').show(500);
	} else {
		$('.tnved').hide(500);
	}
});    

$('.tabs-fura').on('click', 'div', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.why-content').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.main-logo').ready(function() {
    var popup_id = $('.main-logo');
    $(popup_id).addClass('animate')(200);
});