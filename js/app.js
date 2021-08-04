$(function () {

    let header = $('.header');
    let scrollOffset = 0;

    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= 20) {
            header.addClass('active');
        } else {
            header.removeClass('active');
        }

    });

    $('.reviews__inner').slick({

        prevArrow: '<button class="slick-arrow prev"><img src="images/left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow next"><img src="images/right.svg" alt="next"></button>',
        dots: true,
        autoplay: true
    });

    $('.menu__btn').on('click', function (){

        $(this).toggleClass('menu__btn--active');
        $('.header__list').toggleClass('active');
    });

    VANTA.BIRDS({
        el: "#intro",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x0b786f,
        color1: 0x79bb,
        color2: 0x00ebd0,
        colorMode: "lerp",
        birdSize: 1.10,
        wingSpan: 28.00,
        quantity: 4.00
    })

});
