$(function () {
	
	//左侧栏目选择
	$('.ziyuan-item dd span').click(function(){
		var nav_jibie = $(this).parents("li").find(".jiyuan-list span").text();
		var nav_leimu = $(this).parent().prev().find("span").text();
		var nav_banben = $(this).text();
		var nav_all = "<span>"+nav_jibie+nav_leimu+"</span>";
		    nav_all += "<span class='red'>>></span>";
		    nav_all += "<span>"+nav_banben+"</span>";
		$(".cont-nav-text").html(nav_all);
		$(".cont-nav-text").attr("lock","close");
		$(".tree").show();
		$(".catalog img").hide();
		
		
		$(".ziyuan-item dd span").siblings().removeClass("active");
		$(this).addClass("active");
	});
	//搜索框  
	$(".search input").change(function () {
		var s = $(".cont-nav-text").attr("lock");
		if(s='open'){
			var t = "<span>搜索资源...</span>";
			$(".cont-nav-text").html(t);
		}
	});
	
	
	
	
	
	 $('.header .header_con .header_list li a').click(function(){
        $(this).addClass('header_active').parent('li').siblings('li').find('a').removeClass('header_active');
    });

    /*¸öÈËÐÅÏ¢*/
    $('.header .header_con .header_btn span,.header .header_con .header_btn i').click(function(){
        $('.personal').slideToggle();
    });

    /*¸öÈËÐÅÏ¢Ñ¡ÖÐ×´Ì¬*/
    $('.header .personal li').click(function(){
        $(this).addClass('personal_active').siblings('li').removeClass('personal_active');
        $(this).find('i').attr('class','red').parent().siblings().find('i').attr('class','grey');

    });
});
