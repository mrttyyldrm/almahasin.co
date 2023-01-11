$("#header-bar i").click(function(){
    $("#header-menu").slideToggle();
});
$("#header-menu nav ul li").click(function(){
    if($(this).width() <= 768){
        $("#header-menu").slideUp();
    }
})

$(window).scroll(function(){
    if($(this).width() <= 768){
        $("#header-menu").slideUp();
    }
});