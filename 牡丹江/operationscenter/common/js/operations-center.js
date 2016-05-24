(function($){
    var config = {
        //星星评分
        xingxing:function(){
            //获取实心星星图片
            var shi = "img/shi.png";
            //获取空心星星图片
            var kong = "img/kong.png";
            var shi_num = 0;
            $(".nanyi-img img").on("click",function(){
                $(".nanyi-img img").attr("src",kong);
                shi_num = $(this).index()+1;
                var t =".nanyi-img img:lt("+shi_num+")";
                $(t).attr("src",shi);
            });
            //鼠标移动让当前图片和之前的图片变为实心图片
            var m_num = 0;
            $(".nanyi-img img").on("mousemove",function(){
                m_num = $(this).index()+1;
                if(m_num!=shi_num){
                    $(".nanyi-img img").attr("src",kong);
                    var t =".nanyi-img img:lt("+m_num+")";
                    $(t).attr("src",shi);
                }
            });
            //当鼠标没有点击移出的时候图片全部变为空心图片
            $(".nanyi-img img").on("mouseout",function(){
                $(".nanyi-img img").attr("src",kong);
                var t =".nanyi-img img:lt("+shi_num+")";
                $(t).attr("src",shi);
            });
        },
        add:function(){
            //全选 反选
            //获取当前tbody中的input表单数量
            var number = $("tbody input").length;
            //判断input是否全部为选中状态，如果没有点击则全选按钮全部选中，
            $("#select").click(function(){
                if($("tbody input:checked").length != number){
                    $("tbody input").attr("checked",true);
                    $(".quanxuan").text("取消全选");
                }
                else if($("tbody input:checked").length == number){
                    $("tbody input").attr("checked",false);
                    $(".quanxuan").text("全选");
                }
            });
            //判断input是否为全部选中状态，如果全部选中则全选按钮状态为选中状态，否则为未选中状态
            $("tbody input").click(function(){
                if($("tbody input:checked").length < number){
                    $("#select").attr("checked",false);
                    $(".quanxuan").text("全选");
                }
                else if($("tbody input:checked").length ==number){
                    $("#select").attr("checked",true);
                    $(".quanxuan").text("取消全选");
                }
            });
            //打开 关闭 弹窗
            $("#chuanjianshiti").click(function(){
                $(".popup").show();
            });
            $("#tijiao-quxiao").click(function(){
                $(".popup").hide();
            });
            $(".guanbi").click(function(){
                $(".popup").hide();
            });
            //导航list
            $(".list-head a").on("click",function(){
                $(this).addClass("btn-primary").siblings().removeClass("btn-primary");
            });
        },
        //执行函数
        init:function(){
            this.add();
            this.xingxing();
        }
    };
    //调用执行
    config.init();
})(jQuery);