$(window).scroll(function () {
    if ($(window).scrollTop() > 30) {
        $("header").addClass("sticky");
        $("main").css("padding-top", "71px");
    } else {
        $("header").removeClass("sticky");
        $("main").css("padding-top", "0");
    }
});

$(document).ready(function () {
    //$(".homePage").prepend("<div class='left-pattern'><img src='/img/images/left-pattern.svg' class='img-fluid'/></div><div class='right-pattern'><img src='/img/images/right-pattern.svg' class='img-fluid'/></div>");

    $(".menu-phone").click(function () {
        $("header .menu").addClass("open");
        $("body").append("<div class='overlay'></div>");
        $("html").css("overflow", "hidden");
    })
    $(".close-menu-phone").click(function () {
        $("header .menu").removeClass("open");
        $(".overlay").remove();
        $("html").css("overflow", "auto");
    })
    //var maxHeight = Math.max.apply(null, $(".suggestionProduct-section .inner").map(function () {
    //    return $(this).height();
    //}).get());
    //$(".suggestionProduct-section .inner").height(maxHeight);
})