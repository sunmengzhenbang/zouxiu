define( ['jquery','jquery-cookie'],function($){
// define(function(){
	function zhuce(){


//搜索框的点击事件，失去焦点
$(function(){
  

$('.put1').on({
	click:function(){
		$('.put1').attr('placeholder',' ');
	}


})

$('.put1').on({
	blur:function(){
		$('.put1').attr('placeholder','请输入有效的手机号码');
	}
	
 })
})
// 注册页面，判断手机号码的时候
//手机号码



 
 $(function(){
                $(".put1").click(function(){
                    if($("#username").val().length != 11){
                        $("#span1").css("display","block");
                        $("#span1").html("手机号码格式错误");
                    }else if(/^[0,2-9]/.test($("#username").val())){
                        $("#soan1").css("display","block");
                        $(" #span1").html("手机号码格式错误");
                    }else{
                        $("#span1").css("display","none")
                    }
                });





   //ajax注册
    			var oBtn = document.getElementById('btn1');
    			var oUsername =document.getElementById('username');
    			// var oPlaceholder =document.getElementById('placeholder');
    			// oBtn.onclick = function(){
    			// 	var str =`username=${ousername.value}`;
    				// ajax({
    				// 	method:"post",
    				// 	url:"../html/dengluzhuce.php",
    	   //     			data:str,
    				// 	success:function(data){
    				// 		alert(data);
    				// 	},
    				// 	error:function(msg){
    				// 		alert(msg)
    				// 	}
    				// })
                 $('#btn1').click(function(){
                     $.ajax({
                        url: '../php/zhuce.php',
                        type: 'GET',
                        data: {
                            username: $('[username=username]').val()
            
                        },
                        success: function (data) {
                            if (data == 1) {
                                alert('注册成功');
                                location.reload();
                            } else if (data == 2){
                                alert('已被注册');
                            } else {
                                alert('false');
                            }
                        },
                        error: function (e) {
                            alert('请求失败');
                        },
                    }); 
                 }) 
                 
    		           

})
 

// 我是结尾，谁都不要动我
}
	return{
		zhuce:zhuce
	}

})