$(document).ready(function() {
    $('#blg-post').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dotsEach: false,
        dotClass: 'btn-dot',
        responsive: {
            320: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1366: {
                items: 3
            },
            1920: {
                items: 3
            }
        },
    });
    $('#icon-bar').click(function() {
        $('.menu').toggleClass('show');
        $('.icon-times').toggleClass('active');
    })
    $('.icon-times').click(function() {
        $('.menu').removeClass('show');
        $('.icon-times').removeClass('active');
    })
});