define( ['jquery','jquery-cookie', 'parabola'],function($){
// define(function(){
	function gouwuche(){
	// 我的走秀下拉菜单
	

// 购物车

$(function(){

		sc_car();

		$.ajax({
			url: "../data/jiu.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li class = 'goods_item'>
				<div class = "goods_pic">
					<img src="${arr[i].img}" alt="">
				</div>
				<div class = 'goods_title'>
					<p>【京东超市】奥利奥软点小草莓</p>
				</div>
				<div class = 'sc'>
					<div id = "${arr[i].id}" class = 'sc_btn'>加入购物车</div>
				</div>
			</li>`).appendTo($('.goods_box9 ul'));
				}
				
			}
		})



		//事件委托
		$(".goods_box9").on("click", ".sc_btn", function(){
			//进行抛物线运动
			ballMove(this);

			//获取到当前加入购物车按钮所在的商品id
			var id = this.id;
			//存储cookie的时候，对于当前商品只存储两个值，id num
			//json格式的字符串去存 goods  [{id:1, num:3},{id:7, num2}];
			//
			//1、判断是否第一次添加cookie
			var first = $.cookie("goods") == null ? true : false;
			if(first){
				$.cookie('goods', `[{id:${id},num:1}]`, {expires: 7});
			}else{
				//2、判断之前是否添加过该商品
				var str = $.cookie('goods');
				var arr = eval(str);
				var same = false; //假设没有相同的数据
				for(var i = 0; i < arr.length; i++){
					if(arr[i].id == id){
						//之前添加过
						arr[i].num++;
						var cookieStr = JSON.stringify(arr);
						$.cookie('goods', cookieStr, {expires: 7});
						same = true;
						break;
					}
				}

				if(!same){
					//之前没添加过
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie('goods', cookieStr, {expires: 7});
				}
			}
			sc_car();
		})


		//抛物线运动
		function ballMove(startNode){
			$("#ball").css({
				left: $(startNode).offset().left,
				top: $(startNode).offset().top,
				display: "block"
			})

			var offsetX = $(".sc_pic").offset().left - $("#ball").offset().left;
			var offsetY = $(".sc_pic").offset().top - $("#ball").offset().top;
			//配置参数
			var bool = new Parabola({
				el: "#ball",
				targetEl: null,
				offset: [offsetX, offsetY],
				curvature: 0.0005,
				duration: 400,
				callback:function(){
					$("#ball").css('display', 'none');
				}
			})

			bool.start();
		}

		/*
		JQ事件
			mouseenter 移入
			mouseleave 移出

		 */
		$(".sc_right").mouseenter(function(){
			$(this).stop().animate({
				right: 0
			})
			sc_msg();
		});

		$(".sc_right").mouseleave(function(){
			$(this).stop().animate({
				right: -270
			})
		});

		// 购物车数字
		function sc_car(){
			var str = $.cookie("goods");
			if(str){
				var arr = eval(str);
				var sum = 0;
				for(var i = 0; i < arr.length; i++){
					sum += arr[i].num;
				}
				$(".sc_num").html(sum);
				location.reload(sum==0);
			}
		}
		
		//显示购物车内商品
		function sc_msg(){
			$.ajax({
				url: '../data/jiu.json',
				success: function(arr){
					$(".sc_right ul").html("");
					//在所有商品信息里面找出，加入购物车的商品信息
					var cookie_arr = eval($.cookie('goods'));
					for(var i = 0; i < cookie_arr.length; i++){
						$(`<li>
				<div class = "sc_goodsPic">
					<img src="${arr[cookie_arr[i].id].img}" alt="">
				</div>
				<div class = "sc_goodsTitle">
					<p>这是商品曲奇饼干</p>
				</div>
				<div class = "sc_goodsBtn">购买</div>
				<div class = "sc_goodsNum">商品数量:${cookie_arr[i].num}</div>
			</li>`).appendTo($(".sc_right ul"));
					}
				}
			})
		}

	})













































	// 我是最后面的，谁也不要动我！！！
}
	return{
		index:index
	}

})