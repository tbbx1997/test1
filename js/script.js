$(document).ready(function() {
    //==================================Carousel Library==================
    // $('#blg-post').owlCarousel({
    //     loop: true,
    //     margin: 30,
    //     nav: false,
    //     dotsEach: false,
    //     dotClass: 'btn-dot',
    //     responsive: {
    //         320: {
    //             items: 1
    //         },
    //         375: {
    //             items: 1
    //         },
    //         425: {
    //             items: 2
    //         },
    //         768: {
    //             items: 3
    //         },
    //         1024: {
    //             items: 3
    //         },
    //         1366: {
    //             items: 3
    //         },
    //         1920: {
    //             items: 3
    //         }
    //     },
    // });
    //=======================================Event Icon Reponsive===========
    $('#icon-bar').click(function() {
        $('.menu').toggleClass('show');
        $('.icon-times').toggleClass('active');
    });
    $('.icon-times').click(function() {
        $('.menu').removeClass('show');
        $('.icon-times').removeClass('active');
    });
    $('.icon-search-reponsive').click(function() {
        $('.input-search').css('display', 'block');
    });
    //=========================================Pure Carousel================
    var id = 0;
    var lastSlide = $('.sliders.slide:last').attr('position');
    var changeSlide = function(id) {
        $('.slide').hide();
        $('.slide').eq(id).fadeIn(1000);
        $('.dot').removeClass('dot-active');
        $('.dot').eq(id).addClass('dot-active');
    };
    $('.dot').click(function() {
        id = $(this).attr('position');
        changeSlide(id);
    })
});