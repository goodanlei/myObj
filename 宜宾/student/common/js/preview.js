$(function () {
//	$(".nav-tit a").click(function(){
//		$(".nav-tit a").attr("class",'');
//		$(this).attr("class",'active');
//	});
	$(".nav-con a").click(function(){
		$(this).siblings().attr("class",'');
		$(this).attr("class",'active');
	});
	$(".page span").click(function(){
		$(".page span").removeClass("active");
		$(this).addClass('active');
	});
});
