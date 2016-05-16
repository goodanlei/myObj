/**
 * resource core content（资源管理核心内容）
 */
(function(w){
    var config = {
        //执行函数
        add:function(){
            //thbody 中的input数量
            var number = $("table td input").length;
            //tab栏切换
            $(".conleft-list ul li").click(function(){
                $(this).addClass("active").siblings().removeClass("active");
                if($(this).text()=="待审核"){
                    $(".btn").show(1000).siblings("span").hide(1000);
                }
                else if($(this).text()=="未公开"){
                    $(".not-publicly").show(1000).siblings("span").hide(1000);
                }
                else if($(this).text()=="已公开"){
                    $(".already-open").show(1000).siblings("span").hide(1000);
                }
                else{
                    $(".select-nav span").hide(1000);
                }
            });
            //判断状态,显示弹窗
            $(".select-nav button").click(function(){
                if($(this).text()=="公开" && $("table td input:checked").length>0){
                    $(".popup-text").text("资源已公开");
                    $(".popup").show(500);
                    setTimeout(function(){
                        $(".popup").hide(500)
                    },1500);
                }
                else if($(this).text()=="取消公开" && $("table td input:checked").length>0){
                   $(".popup-text").text("资源已取消公开");
                   $(".popup").show(500);
                   setTimeout(function(){
                       $(".popup").hide(500)
                   },1500);
                }
                else if($(this).text()=="通过" && $("table td input:checked").length>0){
                    $(".popup-text").text("资源已通过");
                    $(".popup").show(500);
                    setTimeout(function(){
                        $(".popup").hide(500)
                    },1500);
                }
                else if($(this).text()=="不通过" && $("table td input:checked").length>0){
                    $(".popup-text").text("资源已不通过");
                    $(".popup").show(500);
                    setTimeout(function(){
                        $(".popup").hide(500)
                    },1500);
                }
            });
            //全选
            $("#select").click(function(){
                if($("table td input:checked").length != number){
                    $("table td input").attr("checked",true);
                }
                else {
                    $("table td input").attr("checked",false);
                }
            });
            $("table td input").click(function(){
                ($("table td input:checked").length==number) ?  $("#select").attr("checked",true) : $("#select").attr("checked",false);
            });

        },
        //调用函数
        init:function(){
            this.add();
        }
    };
    //总执行函数
    config.init();
})(window);