/**
 * Created by Administrator on 2016/5/18.
 */
(function(){
    var config = {
        //星星效果
        add:function(){
            //全选 反选
            //获取当前tbody中的input表单数量
            var number = $(".xuesheng-list input").length;
            //判断input是否全部为选中状态，如果没有点击则全选按钮全部选中，
            $("#quanxuan").click(function(){
                if($(".xuesheng-list input:checked").length != number){
                    $(".xuesheng-list input").attr("checked",true);
                    $(".quanxuan").text("取消全选");
                }
                else if($(".xuesheng-list input:checked").length == number){
                    $(".xuesheng-list input").attr("checked",false);
                    $(".quanxuan").text("全选");
                }
            });
            //判断input是否为全部选中状态，如果全部选中则全选按钮状态为选中状态，否则为未选中状态
            $(".xuesheng-list input").on("click",function(){
                if($(".xuesheng-list input:checked").length < number){
                    $("#quanxuan").attr("checked",false);
                    $(".quanxuan").text("全选");
                }
                else if($(".xuesheng-list input:checked").length ==number){
                    $("#quanxuan").attr("checked",true);
                    $(".quanxuan").text("取消全选");
                }
            });
            //打开 关闭 弹窗
            $(".xiafa").click(function(){
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
            })
        },
        //执行函数
        init:function(){
            this.add();
        }
    };
    //调用执行
    config.init();
})();