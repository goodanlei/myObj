$(function () {
	//视频显示
	$(".cont table span.look").live("click",function(){
			$(".next_page").show();
	});
	$(".next_page .show .tit img").live("click",function(){
			$(".next_page").hide();
	});
	$(".cont table span.down").live("click",function(){
		alert("下载");
	});
	
});


