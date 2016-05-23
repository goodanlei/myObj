/*
     -----------教材管理JS--------------
    //////////////////////////////////
    ----------------------------------
*/

$(function () {
    /*
        =====点击层级显示册别信息模块 开始=====
    */
    
    //先点击学段
    $(".section div").each(function (index) {
        $(this).click(function () {
            $(".section div").removeClass("active");
            $(this).addClass("active");
            
            //再点击学科
            $(".grade label").each(function (index) {
                $(this).click(function () {
                    $(".grade label").removeClass("xkactive");
                    $(this).addClass("xkactive");
                    
                    //最后点击版本
                    $(".jcverban label").each(function (index) {
                        $(this).click(function () {
                            $(".jcverban label").removeClass("veractive");
                            $(this).addClass("veractive");
                            $(".main-tit,.youbanben,.bianjibanben").show()
                            $(".uploadhead,.main-tianjia").hide()
                            $(".main-xiazai").css({
                                "border": "none"
                            })
                        })
                    })
                })
            })
        })
    })


    /*
        遍历册别选项卡切换模块 开始---------------
    */
    $(".jcglul li label").each(function (index) {
        $(this).click(function () {
            $(".jcglul li label").removeClass("liactive");
            $(this).addClass("liactive")
        })
    })

    
    /*
        ======查看和修改册别信息，弹出灰色蒙层模块 开始======
    */
    
    //点击查看版本册别信息弹出灰色蒙层
    $(".chakan").click(function () {
            $(".jiaocaiwrap").show(300);
            $(".kcul span").hide()
            $(".mengceng").show()
        })
        //点击修改版本册别信息弹出灰色蒙层
    $(".xiugai").click(function () {
        $(".jiaocaiwrap").show(300);
        $(".kcul span").show()
        $(".mengceng").show()
    })

    //点击关闭查看和修改教材目录
    $(".qxckjc").click(function () {
        $(".jiaocaiwrap").hide(300)
        $(".mengceng").hide()
    })

    
    /*
        ========删除模块开始=========
    */
    
    /*--------小学、初中、高中）版本开始---------*/
    
    //删除高中版本
    $(".gaozhongdel").toggle(function () {
        $(".gaozhong span input").show();
    }, function () {
        var ipchecked = $(".gaozhong span input:checked").length
        if (ipchecked > 0) {
            $(this).attr("src", "./img/suredel.png")
            $(".delreswrap").show(300)

        } else {
            $(".delrestixi").show(300)
            setTimeout(function () {
                $(".delrestixi").hide(300)
            }, 1000)
        }
    })

    //删除初中版本
    $(".chuzhongdel").toggle(function () {
        $(".chuzhongjc span input").show();
    }, function () {
        var ipchecked = $(".chuzhongjc span input:checked").length
        if (ipchecked > 0) {
            $(this).attr("src", "./img/suredel.png")
            $(".delreswrap").show(300)

        } else {
            $(".delrestixi").show(300)
            setTimeout(function () {
                $(".delrestixi").hide(300)
            }, 1000)
        }
    })

    
    //删除小学版本
    $(".xiaoxuedel").toggle(function () {
        $(".xiaoxue span input").show();
    }, function () {
        var ipchecked = $(".xiaoxue span input:checked").length
        if (ipchecked > 0) {
            $(this).attr("src", "./img/suredel.png")
            $(".delreswrap").show(300)

        } else {
            $(".delrestixi").show(300)
            setTimeout(function () {
                $(".delrestixi").hide(300)
            }, 1000)
        }
    })
    
    //===================================
    //弹窗确认删除高中\初中\小学版本
    $(".suredel-res").click(function () {
        $(".gaozhong span input:checked").parent().remove();
        $(".chuzhongjc span input:checked").parent().remove();
        $(".xiaoxue span input:checked").parent().remove();
        $(".delreswrap").hide();
        $(".popup").show(300);
        setTimeout(function () {
            $(".popup").hide(300);
        }, 1000)

        $(".tcscbb").attr("src","./img/addbanben.png")
        $(".tcscxk").attr("src","./img/nianjidel.png")
        
        $("span input").hide()
    })

    /*----------删除（小学、初中、高中）学科开始----------*/
    
    //删除高中学科
    $(".gaoxk").toggle(function () {
        $(".gao-xk span input").show();
    }, function () {
        var ipchecked = $(".gao-xk span input:checked").length
        if (ipchecked > 0) {
            $(this).attr("src", "./img/deltwo.png")
            $(".delreswrap").show(300)

        } else {
            $(".delrestixi").show(300)
            setTimeout(function () {
                $(".delrestixi").hide(300)
            }, 1000)
        }
    })

    //删除初中学科
    $(".chuxk").toggle(function () {
        $(".chu-xk span input").show();
    }, function () {
        var ipchecked = $(".chu-xk span input:checked").length
        if (ipchecked > 0) {
            $(this).attr("src", "./img/deltwo.png")
            $(".delreswrap").show(300)

        } else {
            $(".delrestixi").show(300)
            setTimeout(function () {
                $(".delrestixi").hide(300)
            }, 1000)
        }
    })
    
    //删除小学版本
    $(".xiaoxk").toggle(function () {
        $(".xiao-xk span input").show();
    }, function () {
        var ipchecked = $(".xiao-xk span input:checked").length
        if (ipchecked > 0) {
            $(this).attr("src", "./img/deltwo.png")
            $(".delreswrap").show(300)
        } else {
            $(".delrestixi").show(300)
            setTimeout(function () {
                $(".delrestixi").hide(300)
            }, 1000)
        }
    })
    
    /*--------弹窗确认删除高中、初中、小学学科-----*/
    
    $(".suredel-res").click(function () {
        $(".gao-xk span input:checked").parent().remove();
        $(".chu-xk span input:checked").parent().remove();
        $(".xiao-xk span input:checked").parent().remove();
        $(".delreswrap").hide();
        $(".popup").show(300);
        setTimeout(function () {
            $(".popup").hide(300);
        }, 1000)
        
        $("span input").hide()
    })

    /*--------删除册别开始----------*/
    
    $(".banbenshanchu").toggle(function () {
        $(".jcglul li input").show();
    }, function () {
        var ipchecked = $(".jcglul li input:checked").length
        if (ipchecked > 0) {
            $(this).attr("src", "./img/deltwo.png")
            $(".delreswrap").show(300)

        } else {
            $(".delrestixi").show(300)
            setTimeout(function () {
                $(".delrestixi").hide(300)
            }, 1000)
        }
    })

    //弹窗确认删除册别==================
    $(".suredel-res").click(function () {
        $(".jcglul li input:checked").parent().remove();
        $(".delreswrap").hide();
        $(".jcglul li label").removeClass("liactive");
        $(".popup").show(300);
        setTimeout(function () {
            $(".popup").hide(300);
        }, 1000)
        $(".jcglul li input").hide()
        $(".banbenshanchu").attr("src","./img/nianjidel.png")
    })

    
    //取消确认删除
    $(".delresclose,.nodel-res").click(function () {
        $(".delreswrap").hide(300)
    })
    
        
    /*
        ====添加学科/版本/册别模块 并且append进去====
    */    
        
    //apend到册别
    $(".cebiesur").live("click",function(){
        var cebieval=$(".cebieval").val();
        
        $(".jcglul ul").append('<li><input class="checkone" id="cebie" type="checkbox" value="" name="check[]" /><label for="cebie">'+cebieval+'</label></li>')
    })
    
    
    //添加小学、初中、高中版本
    $(".addxxbb,.addczbb,.addgzbb").click(function () {
        $(".bbaddtc").show()
    })
    

//    $(".xxaddxk,.czxkadd,.gzxkadd").click(function () {
//        $(".addxueketc").show()
//    })
//    
    //点击添加版本
    $(".tjbanben").click(function () {
        $(".addcebie").show(200)
    })

    $(".verquit,.adtitr").click(function () {
        $(".addver").hide(200)
    })
    

})

function tjxktc(){
    var tjxktc=document.getElementById("tianjiaxktc");
    tjxktc.style.display='block'
}
