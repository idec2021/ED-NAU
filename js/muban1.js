$(function() {
    var height_1 = $('#teambody>div:eq(2)').height()
    console.log(height_1)
    $('.left_nav_container').css('height', height_1 + 'px')
    $(window).resize(function() {
        var height_1 = $('#teambody>div:eq(2)').height()
        console.log(height_1)
        $('.left_nav_container').css('height', height_1 + 'px')
    });
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 500);
    });
    $('.left_nav_container').mouseover(function() {
        $('.left_nav_img').css('animation', 'leftmove .5s linear infinite')
    });
    $('.left_nav_container').mouseleave(function() {
        $('.left_nav_img').css('animation', 'none')
    })
})