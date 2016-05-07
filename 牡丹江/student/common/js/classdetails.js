/**
 * Created by Administrator on 2016/5/6.
 */
$(function(){
    var crecord = {
        appraise:function(){
            $(".appraise").click(function(){
                if($(this).val()=="优秀"){
                    $(this).parent().find("input").css({"background":"#fff","color":"#222","border":"1px solid #ccc"});
                    $(this).css({"background":"#10b53f","color":"#fff","border":"1px solid #10b53f"});
                }
                else if($(this).val()=="正常"){
                    $(this).parent().find("input").css({"background":"#fff","color":"#222","border":"1px solid #ccc"});
                    $(this).css({"background":"#59a9e1","color":"#fff","border":"1px solid #59a9e1"});
                }
                else {
                    $(this).parent().find("input").css({"background":"#fff","color":"#222","border":"1px solid #ccc"});
                    $(this).css({"background":"#e6141e","color":"#fff","border":"1px solid #e6141e"});
                }
            });
        },
        cha:function(){
            $(".cha img").click(function(){
                $(".examine").hide()
            });
        },
        replys:function(){
            $(".reply").click(function(){
                if($(this).parent().siblings(".viewreply").is(":visible")){
                    $(this).parent().siblings(".viewreply").hide();
                }
                else {
                    $(this).parent().siblings(".viewreply").show();
                }
            });
        },
        yanjings:function(){
            $(".yanjing").click(function(){
                $(".examine").show();
            });
        },
        resets:function(){
            $(".resets").click(function(){
                $(".roomstate").hide();
            });
            $(".chas").click(function(){
                $(".roomstate").hide();
            });
            $(".interact").click(function(){
                $(".roomstate").show();
            });
        },
//            执行函数
        init:function(){
            this.appraise();
            this.cha();
            this.replys();
            this.yanjings();
            this.resets()
        },
    }
    crecord.init();
    //时间控件
    $("#datepicker").datepicker();
});
