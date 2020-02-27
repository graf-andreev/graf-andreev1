jQuery(document).ready(function($) {
    $(".m-b").click(function(){
      $(".m-b").toggleClass("active");
    $(".main-menu").toggleClass("main-menu_active");
    $("body").toggleClass("no-scroll");

    $(".menu-overlay").click(function(){
        $(".m-b").removeClass("active");
        $(".main-menu").removeClass("main-menu_active");
        $("body").removeClass("no-scroll");
    
        $("body").keyup(function(e){
        if( e.which == 27 ){
        $(".m-b").removeClass("active");
        $(".main-menu").removeClass("main-menu_active");
        $("body").removeClass("no-scroll");
};
});
});
});
});