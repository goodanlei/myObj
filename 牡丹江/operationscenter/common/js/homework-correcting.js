// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '学生作业统计'
    },
    tooltip: {},
    legend: {
        data:['分数']
    },
    xAxis: {
        data: ["学生一","学生二","学生三","学生四","学生五","学生六"]
    },
    yAxis: {},
    series: [{
        name: '分数',
        type: 'bar',
        data: [97, 92, 80, 99, 67, 85]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
(function(){
    $(".sidebar ul li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
})()