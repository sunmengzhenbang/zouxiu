console.log('加载成功');

// 配置我们要引入模块的路径
require.config({
	paths:{
		'jquery':'jquery-1.11.3',
		'jquery-cookie':'jquery.cookie',
	    'denglu':'denglu',
		'zhuce':"zhuce"
		
		
	},
	shim:{
		//依赖关系
		'jquery-cookie':['jquery']
	},
	'parabola':{
		exports:'_'
	}
})


require(['zhuce'],function(zhuce){
    zhuce.zhuce();
});
require(['denglu'],function(denglu){
    denglu.denglu();
});

