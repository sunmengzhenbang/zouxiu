define( ['jquery','jquery-cookie','parabola'],function($){
// define(function(){
	function index(){
	// 我的走秀下拉菜单
$(function(){
	$('.div1 ').find('.ull').find('li').eq(3).on({
	mouseover: function(){

      $('.div1-1').css('display','block');
      $('.ull').find('li').find('img').eq(5).css('display','none');
       $('.ull').find('li').find('img').eq(6).css('display','block');
   }
	})
	$('.div1 ').find('.ull').find('li').eq(3).on({
// 鼠标移开
   mouseout: function(){
      $('.div1-1').css('display','none');
      $('.ull').find('li').find('img').eq(5).css('display','none');
      $('.ull').find('li').find('img').eq(6).css('display','block');
   }
	})
})


//搜索框的点击事件，失去焦点
$(function(){
  

$('#put1').on({
	click:function(){
		$('#put1').attr('placeholder',' ');
	}


})

$('#put1').on({
	blur:function(){
		$('#put1').attr('placeholder','请搜索Kenzo试试 ');
	}
	
 })
})
//导航 不能写死的地方
//表带
$(function(){
	$('.div2').find('.ul3').find('li').find('.a1').on({
		mouseover:function(){
		$('.baodai').css('display','block')
	}

	})
	$('.div2').find('.ul3').find('li').find('.a1').on({
		mouseout:function(){
		$('.baodai').css('display','none')
	}
	
	})
	
})
//服装
$(function(){
	$('.div2').find('.ul3').find('li').find('.a2').on({
		mouseover:function(){
		$('.fuzhuang').css('display','block')
	}

	})
	$('.div2').find('.ul3').find('li').find('.a2').on({
		mouseout:function(){
		$('.fuzhuang').css('display','none')
	}
	
	})
	
})
//鞋靴

$(function(){
	$('.div2').find('.ul3').find('li').find('.a3').on({
		mouseover:function(){
		$('.xiexue').css('display','block')
	}

	})
	$('.div2').find('.ul3').find('li').find('.a3').on({
		mouseout:function(){
		$('.xiexue').css('display','none')
	}
	
	})
	
})
//腕表
$(function(){
	$('.div2').find('.ul3').find('li').find('.a4').on({
		mouseover:function(){
		$('.xiexue').css('display','block')
	}

	})
	$('.div2').find('.ul3').find('li').find('.a4').on({
		mouseout:function(){
		$('.xiexue').css('display','none')
	}
	
	})
	
})
// 配饰
$(function(){
	$('.div2').find('.ul3').find('li').find('.a5').on({
		mouseover:function(){
		$('.xiexue').css('display','block')
	}

	})
	$('.div2').find('.ul3').find('li').find('.a5').on({
		mouseout:function(){
		$('.xiexue').css('display','none')
	}
	
	})
	
})
// 妆品
$(function(){
	$('.div2').find('.ul3').find('li').find('.a6').on({
		mouseover:function(){
		$('.xiexue').css('display','block')
	}

	})
	$('.div2').find('.ul3').find('li').find('.a6').on({
		mouseout:function(){
		$('.xiexue').css('display','none')
	}
	
	})
	
})
// 生活
/$(function(){
	$('.div2').find('.ul3').find('li').find('.a7').on({
		mouseover:function(){
		$('.xiexue').css('display','block')
	}

	})
	$('.div2').find('.ul3').find('li').find('.a7').on({
		mouseout:function(){
		$('.xiexue').css('display','none')
	}
	
	})
	
})
// 婴品
$(function(){
	$('.div2').find('.ul3').find('li').find('.a8').on({
		mouseover:function(){
		$('.xiexue').css('display','block')
	}

	})
	$('.div2').find('.ul3').find('li').find('.a8').on({
		mouseout:function(){
		$('.xiexue').css('display','none')
	}
	
	})
	
})

// 轮播
$(function(){
				//<1>找到当前页面上的元素节点
				var aBtns = $("#play").find("ol").find("li");
				var oUl = $("#play").find("ul");
				var aLis = oUl.find("li");

				//<2>这个iNow，代表当前显示的图片的下标
				var iNow = 0;
				var timer = null;

				//<3>先给按钮添加点击
				aBtns.click(function(){
					//当点击按钮的时候，改变图片的下标
					iNow = $(this).index();
					tab();
				})

				//<4>切换图片
				function tab(){
					//<5>将btn所有的样式取消，将当前点击按钮的样式设置成active
					aBtns.attr("class", '');
					aBtns.eq(iNow).attr("class", 'active');

					//<6>ul去动
					oUl.stop().animate({left: -1200 * iNow}, 800, function(){
						if(iNow == aLis.size() - 1){
							//切回第一张图片
							iNow = 0;
							oUl.css("left", 0);
						}
					});
				}

				function timerInner(){
					iNow++;
					
					tab();

					if(iNow == aLis.size() - 1){
						aBtns.eq(0).attr("class", 'active');
					}
				}

				timer = setInterval(timerInner, 2000);

				$("#play").hover(function(){
					clearInterval(timer);
				}, function(){
					timer = setInterval(timerInner, 2000);

				})
			})


// 底部 鼠标滑过微信显示二维码
$(function(){

     $('.bottom').find('.ul_bottom_3').find('a').eq(0).on({
		mouseover:function(){
		$('.bottom').find('.bottomimg').find('.imger').css('display','block')
	}
	})
     $('.bottom').find('.ul_bottom_3').find('a').eq(0).on({
     	mouseout:function(){
     		$('.bottom').find('.bottomimg').find('.imger').css('display','none')
     	}
     })
})

//加载数据
$(function(){

		sc_car();

		$.ajax({
			url: "../data/data.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li class = 'goods_item'>
				<div class = "goods_pic">
					<img src="${arr[i].img}" alt="">
				</div>
				
				
			</li>`).appendTo($('.goods_box ul'));
				}
				
			}
		})
		//购物车数字
		function sc_car(){
		
		}
		
		
	})


// 引入json数据，悬浮加边框的地方
$(function(){

		sc_car1();

		$.ajax({
			url: "../data/data2.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li class = 'goods_item1'>
				<div class = "goods_pic1">
					<a  href="hongjiu.html"><img src="${arr[i].img}" alt=""></a>
				</div>
				
				
			</li>`).appendTo($('.goods_box1 ul'));
				}
				
			}
		})
		//购物车数字
		function sc_car1(){
		
		}

	})


// 男模特的图片  第一组17张图片

$(function(){
		sc_car3();
		$.ajax({
			url: "../data/data3.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li class = 'goods_item3'>
				<div class = "goods_pic3">
					<img src="${arr[i].img}" alt="">
				</div>		
			</li>`).appendTo($('.goods_box3 ul'));
				}
				
			}
		})
		//购物车数字
		function sc_car3(){
		
		}
		
		
	})


// 品牌推荐

$(function(){
		sc_car4();
		$.ajax({
			url: "../data/data4.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li class = 'goods_item4'>
				<div class = "goods_pic4">
					<img src="${arr[i].img}" alt="">
				</div>		
			</li>`).appendTo($('.goods_box4 ul'));
				}
				
			}
		})
		//购物车数字
		function sc_car4(){
		
		}
		
		
	})


// 潮流时尚



$(function(){
		sc_car5();
		$.ajax({
			url: "../data/data5.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li class = 'goods_item5'>
				<div class = "goods_pic5">
					<img src="${arr[i].img}" alt="">
				</div>		
			</li>`).appendTo($('.goods_box5 ul'));
				}
				
			}
		})
		//购物车数字
		function sc_car5(){
		
		}
		
		
	})

// 热销榜单

$(function(){
		sc_car6();
		$.ajax({
			url: "../data/data6.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li class = 'goods_item6'>
				<div class = "goods_pic6">
					<img src="${arr[i].img}" alt="">
				</div>		
			</li>`).appendTo($('.goods_box6 ul'));
				}
				
			}
		})
		//购物车数字
		function sc_car6(){
		
		}
		
		
	})


//热销推荐

$(function(){
		sc_car7();
		$.ajax({
			url: "../data/data7.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li class = 'goods_item7'>
				<div class = "goods_pic7">
					<img src="${arr[i].img}" alt="">
				</div>		
			</li>`).appendTo($('.goods_box7 ul'));
				}
				
			}
		})
		//购物车数字
		function sc_car7(){
		
		}
		
		
	})

// 放大镜



  window.onload = function(){


	 var small=document.getElementById("small");
        var big=document.getElementById("big");
        var search=document.getElementById("search");
        //鼠标移入small时显示search和big
        small.onmouseover = function (){
            big.style.display="block";
            search.style.display="block";
        }
        //鼠标移出small时隐藏search和big
        small.onmouseout=function(){
            big.style.display="none";
            search.style.display="none";
        }
        small.onmousemove=function(){
            var evt=event||arguments[0];
            //获取当前鼠标坐标
            var x=evt.clientX-small.offsetLeft-search.offsetWidth;
            var y=evt.clientY-small.offsetTop-search.offsetHeight;
            //判断当前位置search显示框不能移出small框
            if(x<0){
                search.style.left=0+"px";s
            }else if(x>=small.offsetWidth-search.offsetWidth){
                search.style.left=small.offsetWidth-search.offsetWidth+"px";
            }else{
                search.style.left=x+"px";
            }
            if(y<0){
                search.style.top=0+"px";
            }else if(y>=small.offsetHeight-search.offsetHeight){
                search.style.top=small.offsetHeight-search.offsetHeight+"px";
            }else{
                search.style.top=y+"px";
            }
            //计算放大比例，这个比例是大图片和小图片的比例
            var w=900/402;
            //显示放大区域
            big.style.backgroundPosition=(-search.offsetLeft)*w+"px"+" "+(-search.offsetTop)*w+"px";
        }

 }




// 购物车 购物车 购物车 购物车


$(function(){
    
		sc_car();

		$.ajax({
			url: "../data/jiu.json",
			success: function(arr){
				for(var i = 0; i < arr.length; i++){
					$(`<li class = 'lis'>
				<div class = "pics">
					<img src="${arr[i].img}" alt="">
				</div>
				
				<div class = 'sc'>
					<div id = "${arr[i].id}" class = 'sc_btn'>加入购物车</div>
				</div>
			</li>`).appendTo($('.hezi ul'));
				}
				
			}
		})



		//事件委托
		$(".hezi").on("click", ".sc_btn", function(){
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
					// if(arr[i].id == id){
					// 	//之前添加过
					// 	arr[i].num++;
					// 	var cookieStr = JSON.stringify(arr);
					// 	$.cookie('goods', cookieStr, {expires: 7});
					// 	same = true;
					// 	break;
					// }
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

// $(function(){
// 			$('.c2-4').find('.c2-4-5').find('#clear_car').click(function(){
// 		$.cookie('goods',null);
// 	    $(".sc_right ul").html(0);

// 				})

// 				sc_car();
// 		})
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
				
              
			}
		 
		}
		  // function clearCookie(goods) {
    //         setCookie('goods', "", -1);
    //     }
		//清空购物车
		
       

		
		
		
		//显示购物车内商品
		// function sc_msg(){
		// 	$.ajax({
		// 		url: '../data/jiu.json',
		// 		success: function(arr){
		// 			$(".sc_right ul").html("");
		// 			//在所有商品信息里面找出，加入购物车的商品信息
		// 			var cookie_arr = eval($.cookie('goods'));
		// 			for(var i = 0; i <1; i++){
		// 				$(`<li>
		// 		<div class = "sc_goodsPic">
		// 			<img src="${arr[cookie_arr[i].id].img}" alt="">
		// 		</div>
				
		// 		<div class = "sc_goodsBtn">购买</div>
		// 		<div class = "sc_goodsNum">商品数量:${cookie_arr[i].num}</div>
		// 	</li>`).appendTo($(".sc_right ul"));
		// 			}
		// 		}
		// 	})
		// }

	})

           

















// 我是最后面的，谁也不要动我！！！
}
	return{
		index:index
	}

})