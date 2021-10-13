
function check_scroll() {
	var scrollTop = $(window).scrollTop();

	if (scrollTop < 700) {
		var x = scrollTop / 700 * 1;

	} else {

	};
	if (scrollTop < 100) {
		var y = scrollTop / 100 * 1;
		$('.nav').removeClass('nav_scroll');
	} else {
		$('.nav').addClass('nav_scroll');
	}
}


//	下拉菜单
$(function () {
	check_scroll();
	$(".nav_one").hover(
		function () {
			$(this).find('ul').stop(true).slideDown(400);
		},
		function () {
			$(this).find('ul').stop(true).slideUp(400);
		}
	);
	$(window).scroll(function () {
		check_scroll();
	})
})

//footer标题箭头
$(function () {
	$(".footer_title a").hover(function () {
		$(this).children('.footer_arrow').stop(true, false).animate({
			width: '16px'
		}, 400)
	}, function () {
		$(this).children('.footer_arrow').stop(true, false).animate({
			width: '0'
		}, 400)
	});
})

function showimage(source) {
	$("#ShowImage_Form").find("#img_show").html("<image src='" + source + "' class='' style='display:inline-block;height:90vh;width:auto'/>");
	//$("#ShowImage_Form").apeend("<style></style>")
	$("#ShowImage_Form").modal();
}


$(function(){
	$(".result_viewer").click(function(){
		showimage($(this).attr("src"))
	})
	$("#ShowImage_Form").click(function(){
		$("#ShowImage_Form").modal('hide');
})})