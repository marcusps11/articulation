$(document).ready(function() {
    console.log("ready!");


    $('.slider-display').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-display',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '200px'

    });
});