/**
 * Created by Administrator on 2016/5/18.
 */
(function(){
    var config = {

        add:function(){
            //试题库 关闭 开启
            $(".glyphicon-remove").click(function(){
                $(".shitiku").hide(500);
            });
            $(".xuanze-shiti").click(function(){
                $(".shitiku").show(500);
            });
            
            //题型设置
            $(".tixing-shezhi button").click(function(){
                if($(this).is(".btn-info")){
                    $(this).removeClass("btn-info").addClass("btn-default");
                }
                else{
                    $(this).addClass("btn-info").removeClass("btn-default");
                }
            });
            //我的试题库,公共试题库 按钮样式切换
            $(".shiti-btn").click(function(){
                $(".shiti-btn").removeClass("btn-primary");
                $(this).addClass("btn-primary");
            });
            //分数输入框,计算总分数
            $(".fraction").bind("input propertychange",function(){
                //获取输入框中的值
                var fenshu = $(".fraction").val();
                //获取小题数量
                var shuliang = $(".shiti-list").children("li").length;
                $(".zongfen").text(fenshu+"*"+shuliang+"="+fenshu*shuliang);
            });
            //试题删除,清掉dom元素li
            $(".glyphicon-trash").on("click",function(){
                $(this).parents("li").remove();
            });
            //上移 下移
            $(".glyphicon-chevron-down").on("click",function(){
                $(this).parents("li").next("li").after($(this).parents("li"));
            });
            $(".glyphicon-chevron-up").on("click",function(){
                $(this).parents("li").prev("li").before($(this).parents("li"));
            });
            //标题list 切换
            $(".list-head button").on("click",function(){
                $(this).addClass("btn-primary").siblings().removeClass("btn-primary");
            })

        },
        init:function(){
            this.add();
        }
    };
    config.init();
})();
