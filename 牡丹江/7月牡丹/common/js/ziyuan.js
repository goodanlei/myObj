$(document).ready(function(){
    //tab栏切换函数
    function tabs(tabTit,on,tabCon) {
        $(tabCon).each(function () {
            $(this).children().eq(0).show();
        });
        $(tabTit).each(function () {
            $(this).children().eq(0).addClass(on);
        });
        $(tabTit).children().click(function () {
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings().hide();
        });
    }
    tabs(".investment_title","on",".investment_con");
    //tabs(".nav-list>ul","current",".nav-container");
    //导航条
    $('.head .list li').on('click',function(){
        $(this).find('a').addClass('active').parent('li').siblings('li').find('a').removeClass('active');
    });
    //筛选
    $(".investment_btn dl dd").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    //列表切换
    $(".lianjie span a").on("click",function(){
        $(".lianjie span a").removeClass("cur");
        $(this).addClass("cur");
    })
    //下载提示
    $(".weike").on("mousemove",function(){
        $(".juxing").show();
    });
    $(".weike").on("mouseout",function(){
        $(".juxing").hide();
    })
    //------------------------修改资源弹窗-----------------
    $(".tijiao,.guanbi").on("click",function(){
        $(".shuxing").hide();
    });
    $(".bianji").on("click",function(){
        $(".shuxing").show();
    });
    $(".type span").on("click",function(){
        $(this).addClass("cur").siblings().removeClass("cur");
    });

});