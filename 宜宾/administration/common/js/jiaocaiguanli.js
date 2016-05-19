$(function(){
    $(".section div").each(function(index){
        $(this).click(function(){
            $(".section div").removeClass("active");
            $(this).addClass("active");
            
            $(".grade label").each(function(index){
                $(this).click(function(){
                    $(".grade label").removeClass("xkactive");
                    $(this).addClass("xkactive");
                    
                    $(".jcverban label").each(function(index){
                        $(this).click(function(){
                            $(".jcverban label").removeClass("veractive");
                            $(this).addClass("veractive");
                            
                            $(".main-tit,.youbanben,.bianjibanben").show()
                            
                            $(".uploadhead,.main-tianjia").hide()
                            
                            $(".main-xiazai").css({"border":"none"})
                        })
                    })
                })
            })
            
            
        })
        
//        $(".grade span").each(function(index){
//            $(this).click(function(){
//                $(".grade span").removeClass("active");
//                $(this).addClass("active");
//            })
//        })
    })
    
    
    
    $(".subject p span").each(function(index){
        $(this).click(function(){
            $(".subject p span").removeClass("active");
            $(this).addClass("active");
        })
    })
    
    $(".jcglul li").click(function(){
        $(this).addClass("liactive").siblings().removeClass("liactive")
    })
    
    //点击查看版本册别信息
    $(".chakan").click(function(){
        $(".jiaocaiwrap").show(300);
        $(".kcul span").hide()
    })
    //点击修改版本册别信息
    $(".xiugai").click(function(){
        $(".jiaocaiwrap").show(300);
        $(".kcul span").show()
    })
    
    //点击关闭查看和修改教材目录
    $(".qxckjc").click(function(){
        $(".jiaocaiwrap").hide(300)
    })
    
    //点击添加版本
    $(".tjbanben").click(function(){
        $(".bbaddtc").show(200)
    })
    
    $(".verquit,.adtitr").click(function(){
        $(".addver").hide(200)
    })
    
    //删除高中版本
    $(".gaozhongdel").click()
    
    $(".gaozhongdel").toggle(function(){
        $(".gaozhong span input").show();
        
    },function(){
        var ipchecked=$(".gaozhong span input:checked").length
        if(ipchecked>0){
            $(this).attr("src","./img/suredel.png")
            $(".delreswrap").show(300)
            
        }else{
            $(".delrestixi").show(300)
            setTimeout(function(){$(".delrestixi").hide(300)},1000)
        }
        //////////////////////////////////////////////////
    })
    
    
    //确认删除？
    
    $(".delresclose,.nodel-res").click(function(){
        $(".delreswrap").hide(300)
    })
    
    
    //删除高中版本
    
    $(".suredel-res").click(function(){
        $(".gaozhong span input:checked").parent().remove();
        $(".delreswrap").hide()
    })
    
    
    
    
    $(".chuzhongdel").click(function(){
        $(".chuzhongjc span input").show();
        $(this).attr("src","./img/suredel.png")
       
    })
    
    $(".xiaoxuedel").click(function(){
        $(".xiaoxue span input").show();
        $(this).attr("src","./img/suredel.png");
    })
    
    $(".banbenshanchu").click(function(){
        $(".jcglul ul input").show()
        $(this).attr("src","./img/deltwo.png");
    })
    
    $(".gaoxk").click(function(){
        $(".gaozhongxk input").show();
        $(this).attr("src","./img/deltwo.png");
    })
    
    $(".chuxk").click(function(){
        $(".chuzhongxk input").show();
        $(this).attr("src","./img/deltwo.png");
    })
    
    $(".xiaoxk").click(function(){
        $(".xiaoxuexk input").show();
        $(this).attr("src","./img/deltwo.png");
    })
    
    $(".xxaddxk,.czxkadd,.gzxkadd").click(function(){
        $(".addxueketc").show()
    })
    
//    $(".versure").click(function(){
//        var xuekeval=$(".xuekeval").val()
//        $(".xxxk").append(xuekeval)
//    })
    
    $(".versure").live("click",function(){
        var xuekeval=$(".xuekeval").val();
        var i=1;
        var xuekename='<span><input class="checkone" id="xueke'+i+'" type="checkbox" value="" name="check[]"/><label for="xueke'+i+'">'+xuekeval+'</label></span>'

        $(".xxxk").append(xuekename)
        
    })
    
    $(".addxxbb,.addczbb,.addgzbb").click(function(){
        $(".bbaddtc").show()
    })
    
})