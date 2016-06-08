$(function(){
    $(".tongji").on("click",function(){
        if(!$(".gender").is(":visible")){
            $(".gender").show(500);
        }
        else {
            $(".gender").hide(500);
        }
    });
    $(".gender li").on("click",function(){
        $(".gender").hide(500);
    })

    $(".right span").on("click",function(){
        $(this).addClass("right-whole").siblings().removeClass("right-whole");
    })
    //echarts图表一
    // 基于准备好的dom，初始化echarts实例
    var tubiaoone = echarts.init(document.getElementById('jiqing'));

    // 指定图表的配置项和数据
    option = {
        title : {
            text: '',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['不及格','优秀','良好','及格']
        },
        series : [
            {
                name: '',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'不及格'},
                    {value:234, name:'优秀'},
                    {value:135, name:'良好'},
                    {value:1548, name:'及格'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    tubiaoone.setOption(option);
})
