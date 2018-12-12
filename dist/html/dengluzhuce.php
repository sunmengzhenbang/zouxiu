<?php 
	header("Content-type:text/html;charset=utf-8");
	error_reporting(0);

    //1 连接数据库
	$link = mysql_connect('localhost','root','123456');
	//2、判断数据库是否链接成功
	if(!$link){
		echo "数据库连接失败";
		mysql_close($link);
		exit;//退出整个php
	}
	//3、设置字符集
	mysql_set_charset('utf8');
	//4、选择数据库
	mysql_select_db('xiu');
	$type = $_GET["type"];

	if($type == 'zhuce'){
		$phone = $_POST['phone'];
	

        //5 准备发送sql语句
		$sql = "select * from xiu_text where phone = '{$phone}'";
		$res = mysql_query($sql);

		$row = mysql_fetch_assoc($res);

		if($row){
			echo true;
			mysql_close($link);
			exit;
		}else{
			echo false;
			mysql_close($link);
			exit;
		}
	}else{
		$phone = $_POST['phone'];
		

		$sql = "select * from xiu_text where phone = '{$phone}'";
		$res = mysql_query($sql);
		$row = mysql_fetch_assoc($res);
		if($row){
			// 手机号已被注册
			echo 2;
			exit;
		}

		$sql = "INSERT INTO xiu_text (phone) VALUES('{$phone}')";

		$res = mysql_query($sql); 
		if($res){
			// 成功
			echo 1;
			mysql_close($link);
			exit;
		}else{
			// 失败
			echo 3;
			mysql_close($link);
			exit;
		}

	}
 ?>