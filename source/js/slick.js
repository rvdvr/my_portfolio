$(function () {
    var slider = $('.slider__list');
    
    slider.slick({
        dots: true,
        speed: 500,
        arrows: true,
        fade: true,
        appendArrows: '.slider__btn-arrow',
        prevArrow: '.slider__btn-arrow_left',
        nextArrow: '.slider__btn-arrow_right',
        appendDots: '.slider-radials',
        dotsClass: 'slider-radials__list'
    });    
}());
