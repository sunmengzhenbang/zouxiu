console.log('加载成功');

// 配置我们要引入模块的路径
require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'jquery-cookie':'jquery.cookie',
		'index':'index',
		'denglu':"denglu",
		'zhuce':"zhuce",
		"hongjiu":'index',
		'jiesuan':'jiesuan'
		
	},
	shim:{
		//依赖关系
		'jquery-cookie':['jquery']
	},
	'parabola':{
		exports:'_'
	}
})

require(['index'],function(index){
    index.index();
});
require(['boy'],function(boy){
    boy.index();
});
require(['denglu'],function(denglu){
    denglu.denglu();
});
require(['zhuce'],function(zhuce){
    zhuce.zhuce();
});
require(['hongjiu'],function(hongjiu){
    hongjiu.index();
});
require(['jiesuan'],function(jiesuan){
    jiesuan.jiesuan();
});