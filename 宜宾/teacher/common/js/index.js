$(function () {
	//左侧栏目选择
	$(".ziyuan>li>dl span").click(function(){
		$(".ziyuan>li>dl span").css("color","#212121");
		$(this).css("color","#d03d31");
		var xueduan_html =  "<span>"+$(this).text()+"</span>";
		    xueduan_html += "<span class='red red-red'></span>";
		    xueduan_html += "<span></span>";
		$(".cont-nav-text").html(xueduan_html);    
	});
	
	$(".ziyuan-item dl dt span").live("click",function(){
		$(".ziyuan-item dl dt span").removeClass("cur");
		$(this).addClass("cur");
		var superior = $(this).closest(".ziyuan-item").prevAll(".jiyuan-list").find("span");
		$(".ziyuan>li>dl span").css("color","#212121");
		superior.css("color","#d03d31");
		var xueduan_html =  "<span>"+superior.text()+$(this).text()+"</span>";
		    xueduan_html += "<span class='red red-red'></span>";
		    xueduan_html += "<span></span>";
		$(".cont-nav-text").html(xueduan_html);
	});
	
	
	$('.ziyuan-item dd span').click(function(){
		var nav_jibie = $(this).parents("li").find(".jiyuan-list span");
		var nav_leimu = $(this).parent().prev().find("span");
		var nav_all = "<span>"+nav_jibie.text()+nav_leimu.text()+"</span>";
		    nav_all += "<span class='red red-red'><img src='img/Personal-resources_path-navigation.gif' /></span>";
		    nav_all += "<span>"+$(this).text()+"</span>";
		$(".cont-nav-text").html(nav_all);
		$(".cont-nav-text").attr("lock","close");
		$(".tree").show();
		$(".catalog img").hide();
		$(".ziyuan-item dd span").siblings().removeClass("active");
		$(this).addClass("active");
		$(".ziyuan>li>dl span").css("color","#212121");
		nav_jibie.css("color","#d03d31");
		$(".ziyuan-item dl dt span").removeClass("cur")
		nav_leimu.addClass("cur");
	});
	
//  左侧栏目选择
//	$('.ziyuan-item dd span').click(function(){
//		var nav_jibie = $(this).parents("li").find(".jiyuan-list span").text();
//		var nav_leimu = $(this).parent().prev().find("span").text();
//		var nav_banben = $(this).text();
//		var nav_all = "<span>"+nav_jibie+nav_leimu+"</span>";
//		    nav_all += "<span class='red red-red'><img src='img/Personal-resources_path-navigation.gif' /></span>";
//		    nav_all += "<span>"+nav_banben+"</span>";
//		$(".cont-nav-text").html(nav_all);
//		$(".cont-nav-text").attr("lock","close");
//		$(".tree").show();
//		$(".catalog img").hide();
//		
//		
//		$(".ziyuan-item dd span").siblings().removeClass("active");
//		$(this).addClass("active");
//	});
//	
	
	//搜索框  
	$(".search input").change(function () {
		var s = $(".cont-nav-text").attr("lock");
		if(s='open'){
			var t = "<span>搜索资源...</span>";
			$(".cont-nav-text").html(t);
		}
	});
	
});
