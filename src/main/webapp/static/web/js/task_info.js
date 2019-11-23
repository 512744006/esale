// 实时统计数据
function T_get_data(){
	T_title = '1小时内实时访问统计';
	T_test = Array();
	T_time = Array();
	T_t_access = Array();
	T_t_num = Array();
	T_test = new Array(
			['17:00',501,171],
			['17:05',611,201],
			['17:10',501,171],
			['17:15',421,121],
			['17:20',611,201],
			['17:25',501,171],
			['17:30',421,121],
			['17:35',611,201],
			['17:40',501,171],
			['17:45',421,121],
			['17:50',501,171],
			['17:55',611,201],
			['18:00',501,171]
		);
	for (var i = 0; i < T_test.length; i++) {
		T_time[i] = T_test[i][0];//时间
		T_t_access[i] = T_test[i][1];//总访问量
		T_t_num[i] = T_test[i][2];//总访客数
	};
}
// 按日期统计
$("#sdatetime").calendar({ format:'yyyy-MM-dd',minDate:'#sdatetime'});
$("#edatetime").calendar({ format:'yyyy-MM-dd',minDate:'#edatetime'});
function D_get_data(){
	D_time = Array();
	D_t_access = Array();
	D_t_num = Array();
	D_stime = $("#sdatetime").val();
	D_etime = $("#edatetime").val();
	D_title = D_stime+' — '+D_etime+'访问统计';
	D_test = new Array(
			['2015-11-24',421,121],
			['2015-11-25',411,201],
			['2015-11-26',501,171],
			['2015-11-27',421,121],
			['2015-11-28',501,171],
			['2015-11-29',611,201],
			['2015-11-30',501,171]
		);
	for (var i = 0; i < D_test.length; i++) {
		D_time[i] = D_test[i][0];//时间
		D_t_access[i] = D_test[i][1];//总访问量
		D_t_num[i] = D_test[i][2];//总访客数
	};
}

// 地域分布
function R_get_data(){
	R_title = '按地域访问统计';
	R_test = Array();
	R__legend = Array();
	R__series = Array();
	R_test = new Array(
			['北京市',10],
			['杭州市',30],
			['上海市',10],
			['广州市',30],
			['其他',60]
		);
	for (var i = 0; i < R_test.length; i++) {
		R__legend[i] = R_test[i][0];//时间
		R__series[i] = {'name':R_test[i][0],'value':R_test[i][1]};
	};
}
// 系统环境
function S_get_data(){
	S_title = '按终端型号访问统计';
	S_test = Array(),
	S_time = Array(),
	S_t_access = Array(),
	S_t_num = Array();
	S_test = new Array(
			['Android',501,171],
			['iPad',611,201],
			['iPhone',501,171],
			['unkown',421,121]
		);
	for (var i = 0; i < S_test.length; i++) {
		S_time[i] = S_test[i][0];//时间
		S_t_access[i] = S_test[i][1];//总访问量
		S_t_num[i] = S_test[i][2];//总访客数
	};
}
// 终端类型
function TE_get_data(){
	TE_title = '按终端类型访问统计';
	TE_test = Array();
	TE_time = Array();
	TE_t_access = Array();
	TE_t_num = Array();
	TE_test = new Array(
			['weixin',501,171],
			['unkown',421,121]
		);
	for (var i = 0; i < TE_test.length; i++) {
		TE_time[i] = TE_test[i][0];//时间
		TE_t_access[i] = TE_test[i][1];//总访问量
		TE_t_num[i] = TE_test[i][2];//总访客数
	};
}



// 路径配置
require.config({
    paths: {
        echarts: STATIC_URL+"/echarts/"
    }
});
function getchart1(){
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/pie'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var T_myChart = ec.init(document.getElementById('T_main')); 
			T_get_data();//获取数据
			if (T_time.length > 0) {
				T_myChart.setOption({
				    title : {
				        text: T_title,
				        x: 'center',
				        // y: '40'
				    },
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				    	padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5
		        		itemGap: 10,
				        data: ['总访问量','总访客数'],
				        y: '40'
				    },
				    // grid: {
				    // 	y:'100'
				    // },
				    toolbox: {
				        show : true,
				        // x : '1100',
				        // y :'40',
				        feature : {
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data:T_time //时间
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
				            data:T_t_access,//总访问量
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
				            data:T_t_num,//总访客数
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
			}else{
		    	T_myChart.showLoading({
				    text : '暂无数据',
				    effect : 'bubble',
				    textStyle : {
				        fontSize : 30
				    }
				});	
			}
        }
    );
}
function getchart2(){
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/pie'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var D_myChart = ec.init(document.getElementById('D_main')); 
		    D_get_data();//获取数据
		    if (D_time.length > 0) {
				D_myChart.setOption({
				    title : {
				        text: D_title,
				        x: 'center',
				        // y: '40'
				    },
				    tooltip : {
				        trigger: 'axis'
				    },
				    legend: {
				    	padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5
		        		itemGap: 10,
				        data: ['总访问量','总访客数'],
				        y: '40'
				    },
				    // grid: {
				    // 	y:'100'
				    // },
				    toolbox: {
				        show : true,
				        // x : '1100',
				        // y :'40',
				        feature : {
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : false,
				            data:D_time //时间
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
				            data:D_t_access,//总访问量
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
				            data:D_t_num,//总访客数
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
		    } else{
		    	D_myChart.showLoading({
				    text : '暂无数据',
				    effect : 'bubble',
				    textStyle : {
				        fontSize : 30
				    }
				});
		    };
			$("#reflesh").click(function(){
				D_get_data();//获取数据
				if (D_time.length > 0) {
					D_myChart.setOption({
						title : {
					        text: D_title,
					    },
					    xAxis : [
					        {
					            data:D_time //时间
					        }
					    ],
					    series : [
					        {
					            data:D_t_access,//总访问量
					        },
					        {
					            data:D_t_num,//总访客数
					        }
					    ]
					});
				} else{
			    	D_myChart.showLoading({
					    text : '暂无数据',
					    effect : 'bubble',
					    textStyle : {
					        fontSize : 30
					    }
					});
			    };
			});
        }
    );
}
function getchart3(){
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/pie'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var R_myChart = ec.init(document.getElementById('R_main')); 
			R_get_data();//获取数据
			if (R__legend.length > 0) {
				R_myChart.setOption({
				    title : {
				        text: R_title,
				        x: 'center',
				        // y: '40'
				    },
					tooltip : {
					        trigger: 'item',
					        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient : 'vertical',
				        x : 'left',
				        data: R__legend
				    },
				    toolbox: {
				        show : true,
				        // x : '1100',
				        // y :'40',
				        feature : {
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    series : [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            // data:[
				            // 	{value:10, name:'北京市'},
				            //     {value:30, name:'杭州市'},
				            //     {value:10, name:'北京市'},
				            //     {value:30, name:'杭州市'},
				            //     {value:60, name:'其他'}
				            // ]
				            data : R__series
				        }
				    ]
				});
			}else{
		    	R_myChart.showLoading({
				    text : '暂无数据',
				    effect : 'bubble',
				    textStyle : {
				        fontSize : 30
				    }
				});	
			}
        }
    );
}
function getchart4(){
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/pie'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var S_myChart = ec.init(document.getElementById('S_main')); 
			S_get_data();//获取数据
			if (S_time.length > 0) {
				S_myChart.setOption({
				    title : {
				        text: S_title,
						x: 'center',
						// y: '40'
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
				        // x : '1100',
				        // y :'40',
				        feature : {
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            data : S_time //时间
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'总访问量',
				            type:'bar',
				            data:S_t_access,//总访问量
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
				            // barWidth : 50
				        },
				        {
				            name:'总访客数',
				            type:'bar',
				            data:S_t_num,//总访客数
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
				            // barWidth : 50
				        }
				    ]
				});
			}else{
		    	S_smyChart.showLoading({
				    text : '暂无数据',
				    effect : 'bubble',
				    textStyle : {
				        fontSize : 30
				    }
				});	
			}
        }
    );
}
function getchart5(){
    // 使用
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line',
            'echarts/chart/pie'
        ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            var TE_myChart = ec.init(document.getElementById('TE_main')); 
			TE_get_data();//获取数据
			if (TE_time.length > 0) {
				TE_myChart.setOption({
				    title : {
				        text: TE_title,
						x: 'center',
						// y: '40'
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
				        // x : '1100',
				        // y :'40',
				        feature : {
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    xAxis : [
				        {
				            type : 'category',
				            data : TE_time //时间
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name:'总访问量',
				            type:'bar',
				            data:TE_t_access,//总访问量
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
				            },
				            // barWidth : 50
				        },
				        {
				            name:'总访客数',
				            type:'bar',
				            data:TE_t_num,//总访客数
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
				            },
				            // barWidth : 50
				        }
				    ]
				});
			}else{
		    	TE_myChart.showLoading({
				    text : '暂无数据',
				    effect : 'bubble',
				    textStyle : {
				        fontSize : 30
				    }
				});	
			}
        }
    );
}

$(".header .nav .left a").eq(1).addClass("cur");
$(".sti-wrap .th .tit a").eq(0).addClass("cur").siblings("a").removeClass("cur");
$("#content .con").eq(0).show().siblings(".con").hide();
getchart1();
$(".sti-wrap .th .tit a").click(function(){
    var i = $(this).index();
    // console.log(i);
    $(".sti-wrap .th .tit a").eq(i).addClass("cur").siblings("a").removeClass("cur");
    $("#content .con").eq(i).show().siblings(".con").hide();
    if (i==0) {getchart1()};
    if (i==1) {getchart2()};
    if (i==2) {getchart3()};
    if (i==3) {getchart4()};
    if (i==4) {getchart5()};
})