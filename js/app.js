$(document).ready(function() {


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
        centerPadding: '200px',
        nextArrow: '<button class="nav-buttons">Next</button>',
        prevArrow: '<button class="nav-buttons">Previous</button>'



    });
});