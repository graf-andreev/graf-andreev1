$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots: true
    });
    $(".slide-two").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        dots: false
    });
  });


$(function () {

  $('div.tabs_caption').on('click', 'div:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

$(function () {

  $('div.season-toggle').on('click', 'div:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.seasons').find('div.seasons-content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

