var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    speed: 800,
    autoplay: {
        delay: 3000
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        hide: false,
    },
});
$(function () {
    var height_1 = $('#teambody>div:eq(1)').height()
    console.log(height_1)
    $('.right_nav_container').css('height', height_1 + 'px')
    $(window).resize(function () {
        var height_1 = $('#teambody>div:eq(1)').height()
        console.log(height_1)
        $('.right_nav_container').css('height', height_1 + 'px')
    })
    $(window).scroll(function () {
        var scrollTop=$(window).scrollTop();
        var document_height = $(document).height();
        var window_height = $(window).height();
        var icon_width = $('.right_nav').width();
        $('.right_nav').empty();
        $('.right_nav').append("<style>.right_nav::after{clip:rect(0px,1000px," + (scrollTop / (document_height - window_height) * icon_width * 3).toString() + "px,0px)" + "}</style>");
    })
})
