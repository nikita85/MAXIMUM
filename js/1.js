$(function(){
        $('.bxslider').bxSlider({
        minSlides: 2,
        maxSlides: 2,
        auto: true,
        speed: 1000,
        pause: 5000,
        controls: false,
        slideWidth: 1100
    });
 });
$(function(){
    $('.motiv-slider').bxSlider({
        minSlides: 1,
        maxSlides: 1,
        auto: false,
        speed: 1000,
        pause: 5000,
        controls: true,
        slideWidth: 1100,
        pager: false
    });
});