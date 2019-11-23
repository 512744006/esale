var test = Array(),
	time = Array(),
	t_access = Array(),
	t_num = Array();
// 测试数据ajax获取
function get_data(){
	test = new Array(
			['2015-12-05 17:00',501,171],
			['2015-12-05 17:00',611,201],
			['2015-12-05 17:00',501,171],
			['2015-12-05 17:00',421,121],
			['2015-12-05 17:00',611,201],
			['2015-12-05 17:00',501,171],
			['2015-12-05 17:00',421,121],
			['2015-12-05 17:00',611,201],
			['2015-12-05 17:00',501,171],
			['2015-12-05 17:00',421,121],
			['2015-12-05 17:00',501,171],
			['2015-12-05 17:00',611,201],
			['2015-12-05 17:00',501,171],
			['2015-12-05 17:00',421,121],
			['2015-12-05 17:00',611,201],
			['2015-12-05 17:00',901,171],
			['2015-12-05 17:00',421,121],
			['2015-12-05 17:00',611,201],
			['2015-12-05 17:00',501,171],
			['2015-12-05 17:00',501,171],
			['2015-12-05 17:00',421,121],
			['2015-12-05 17:00',501,171],
			['2015-12-05 17:00',611,201],
			['2015-12-05 17:00',421,121]
		);
	for (var i = 0; i < test.length; i++) {
		time[i] = test[i][0];//时间
		t_access[i] = test[i][1];//总访问量
		t_num[i] = test[i][2];//总访客数
	};
	return test,time,t_access,t_num;	
}


var echarts;
var myChart;
var domMain = document.getElementById('main');
// 路径配置
require.config({
    paths: {
        echarts: STATIC_URL+"/echarts/"
    }
});
// 使用
require(
    [
        'echarts',
        'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
    ],
    DrawCharts
);
function DrawCharts(ec) {
	get_data();//获取数据
    // 基于准备好的dom，初始化echarts图表
    myChart = ec.init(domMain);
    //图表显示提示信息
    myChart.showLoading({
		text: "图表数据正在努力加载..."
	});
	myChart.hideLoading();
	myChart.setOption({
	    title : {
	        text: '24小时内实时访问统计',
	        x: 'center',
	        // y: '10'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data: ['总访问量','总访客数'],
	        y: '40'
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data:time //时间
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value',
	            axisLabel : {
	                formatter: '{value}'
	            }
	        }
	    ],
	    series : [
	        {
	            name:'总访问量',
	            type:'line',
	            itemStyle: {
                    normal: {
                      color:'#12d42e',
                      lineStyle:{
                        color:'#12d42e'
                      }
                    }
                },
	            data:t_access,//总访问量
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	        {
	            name:'总访客数',
	            type:'line',
	            itemStyle: {
                    normal: {
                      color:'#479eff',
                      lineStyle:{
                        color:'#479eff'
                      }
                    }
                },
	            data:t_num,//总访客数
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name : '平均值'}
	                ]
	            }
	        }
	    ]
	});
	$("#refr").click(function(){
		// console.log(myChart);
		get_data();//获取数据
		myChart.setOption({
		    xAxis : [
		        {
		            data:time //时间
		        }
		    ],
		    series : [
		        {
		            data:t_access,//总访问量
		        },
		        {
		            data:t_num,//总访客数
		        }
		    ]
		});
	});
}