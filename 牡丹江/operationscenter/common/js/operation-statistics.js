/**
 * Created by Administrator on 2016/5/18.
 */
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '三角函数'
    },
    tooltip: {},
    legend: {
        data:['人数']
    },
    xAxis: {
        data: ["未完成","0-60","60-70","70-80","80-90","90-100"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [7, 20, 40, 70, 52, 32]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

/**
 * Created by Administrator on 2016/5/18.
 */
// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('main1'));

// 指定图表的配置项和数据
var option1 = {
    title: {
        text: '三角函数'
    },
    tooltip: {},
    legend: {
        data:['人数']
    },
    xAxis: {
        data: ["未完成","0-60","60-70","70-80","80-90","90-100"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [7, 20, 40, 70, 52, 32]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);



// 基于准备好的dom，初始化echarts实例
var myChart2 = echarts.init(document.getElementById('main2'));

// 指定图表的配置项和数据
var option2 = {
    title: {
        text: '三角函数'
    },
    tooltip: {},
    legend: {
        data:['人数']
    },
    xAxis: {
        data: ["未完成","0-60","60-70","70-80","80-90","90-100"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [7, 20, 40, 70, 52, 32]
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);





