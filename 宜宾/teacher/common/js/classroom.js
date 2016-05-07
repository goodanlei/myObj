/*------------------------------- Ztree相关js ---------------------------------------------*/
var setting = {};
var zNodes =[
    //有子分类
    { name:"第一单元", open:true,
        children: [
            { name:"阅读",open:true,
                children: [
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"}
                ]
            },
        ]
    },
    { name:"第二单元",
        children: [
            { name:"阅读",
                children: [
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"}
                ]
            },
        ]
    },
    { name:"第三单元",
        children: [
            { name:"阅读",
                children: [
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"}
                ]
            },
        ]
    },
    { name:"第三单元",
        children: [
            { name:"阅读",
                children: [
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"},
                    { name:"金色的草地"}
                ]
            },
        ]
    },
];
$(document).ready(function(){
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo1"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo2"), setting, zNodes);
    $.fn.zTree.init($("#treeDemo3"), setting, zNodes);

    $('.list-trees .list-p').click(function(){
        $(this).next('.content_wrap').slideToggle();
        $(this).addClass('ztree_active').siblings('p').removeClass('ztree_active');
        $(this).find('img').attr('src','img/red_minus.png').parent('p').siblings('p').find('img').attr('src','img/black_add.png');
    });

});




/*------------------------------- 全部函数 ---------------------------------------------*/


/*动态赋值高度函数*/
function _height(){
    var _height  =  $('.main_right').height() + 'px';
    var _heightMask  =  $('body').height() + 'px';
    $('.mask').css('height',_heightMask);
    console.log(_height);
    console.log(_heightMask);
}
/*点击图片显示答案函数*/
function test_pic(){
    $('[s=false]').next().hide();
    $('[s=true]').next().show();
}



/*------------------------------- 课堂测评的相关js事件 ---------------------------------------------*/
$(function(){
	
	
	/*左侧滚动*/
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		top = (158-top);
		if(top<0){
			$('.main_left').css({
	  			top:'0'
	  		});
		}else{
			top +='px';
			$('.main_left').css({
	  			top:top
	  		});
		}
	});
		

    /*导航菜单tab切换*/
    var heada = $('.nav_list li a');
    for (var i = 0; i < heada.length; i++) {
        heada[i].index = i;
        heada[i].onclick = function(){
            for (var i = 0; i < heada.length; i++) {
                heada[i].className = "";
            }
            heada[this.index].className="nav_list_active";
        }
    }


    /*试卷预览点击事件*/
    $('.wrapper .head .box_car .box_car_btn a').click(function(){
        $(this).parent().css('background-color','#d03d31');
    });

    /*试卷蓝购物车*/
    $('.test_btn img,.test_btn span').click(function(){
        $('.box_car').slideToggle();
    });

    /*组卷记录-试卷预览 --答案解析*/ /*答案解析--mask层*/
    $('.theme .choose .ques_num .edit span').click(function(){
        $(this).addClass('edit_active').parent('div.edit').parent('div.ques_num').siblings('div.ques_num').find('span').removeClass('edit_active');
        _height();
        $('.mask').css('display','block');
    });

    /*答案解析--mask层 --关闭*/
    $('.mask .mask_head .close').click(function(){
        $('.mask').css('display','none');
    });



    /*table-查看试卷*/
    $('.assembly .form_table table tbody tr td a.look').click(function(){
       $(this).addClass('orange').parent('td').parent('tr').siblings('tr').find('a.look').removeClass('orange');
    });

    /*试卷预览--主标题的 移上事件*/
    $('.theme .theme_title input').mouseover(function(){
        $(this).removeAttr("readonly");
    });


    /* 点击图片 显示隐藏答案*/
    var s= false;
    $('.main_right .sub_ques .sub_ques_line_l .test_pic').click(function(){
        s = !s;
        //$(this).next('div.test_an').show(500);
        $(this).attr('s',s);
        test_pic();
        _height();
    });


	/*左边部分事假*/
	$('.ziyuan-item dd span').click(function(){
		var nav_jibie = $(this).parents("li").find(".jiyuan-list span").text();
		var nav_leimu = $(this).parent().prev().find("span").text();
		var nav_banben = $(this).text();
		var nav_all = "<span>"+nav_jibie+nav_leimu+"</span>";
		    nav_all += "<span class='red'>>></span>";
		    nav_all += "<span>"+nav_banben+"</span>";
		$(".cont-nav-text").html(nav_all);
		$(".tree").show();
		$(".catalog img").hide();
		
		
		$(".ziyuan-item dd span").siblings().removeClass("active");
		$(this).addClass("active");
	});



	/*试题，时间，难度切换*/
	$('.questions_r li span').click(function(){
		$(this).addClass('que_active').parent().siblings().find('span').removeClass('que_active');
	})

	/*************************************  课堂记录  **************************************************/
	



});

window.onload = function(){

//  _height();



    /****************************************   饼状图   ******************************************/
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('count'));

    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',//水平垂直排放
            x: 'right',//位置
            y:'middle',//位置
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']//显示数据
            //itemGap: 20, 行高
            //padding: 10, 内边距
            //textStyle: {color: 'red'}, 设置文字颜色
        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: [
                    {
                        value:335,
                        name:'直接访问',
                        itemStyle: {
                            normal: {
                                color: 'red'
                            }
                        }
                    },
                    {
                        value:310,
                        name:'邮件营销',
                        itemStyle: {
                            normal: {
                                color: 'green'
                            }
                        }
                    },
                    {
                        value:135,
                        name:'视频广告',
                        itemStyle: {
                            normal: {
                                color: 'blue'
                            }
                        }
                    },
                    {
                        value:335,
                        name:'搜索引擎',
                        itemStyle: {
                            normal: {
                                color: 'yellow'
                            }
                        }
                    },
                    {
                        value:1548,
                        name:'联盟广告',
                        itemStyle: {
                            normal: {
                                color: 'pink'
                            }
                        }
                    }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}