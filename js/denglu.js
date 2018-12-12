define( ['jquery','jquery-cookie'],function($){
// define(function(){
	function denglu(){


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


 $(function(){
                $(".div3").click(function(){
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

// 登录表单验证
			var oBtn = document.getElementById('sub1');
    			var oUsername =document.getElementById('username');
    			 $('#sub1').on({
                    click:function(){
                        var str =`username=${oUsername.value}`;
                   $.ajax({
                        method:"POST",
                        url:"../php/denglu.php",
                        data:str,
                        success:function(data){
                            
                            if(data =="登陆成功"){
                                location.assign("../html/index.html")
                            $(".none_1").css("display","none")
                            }else{
                            $(".none_1").css("display","block");
                            
                            }
                        },
                        error:function(msg){
                            alert(msg)
                        }
                    })
                    }
                 })
    			
})





















		// 我是最后面的，谁也不要动我！！！
}
	return{
		denglu:denglu
	}

})