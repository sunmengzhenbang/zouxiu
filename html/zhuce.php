<?php 
	header('content-type:text/html;charset="utf-8"');
	$phone = $_POST['phone'];
	// $password = $_POST['password'];

	//1 连接数据库
	$link = mysql_connect("localhost", "root", "123456");
	//2、判断数据库是否链接成功
	if(!$link){
		echo '数据库链接失败';
		exit; //退出整个php程序
	}

	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择数据库
	mysql_select_db("xiu");

	//5 准备发送sql语句
	$sql = "select * from xiu_text where username='{$username}';";
		$res = mysql_query($sql);
		$row = mysql_fetch_assoc($res);
		if($row){
			echo '用户名已存在';
		}else{
			//注册成功
			$sql = 'INSERT into xiu_text(username) values{$username}';
			$res = mysql_query($sql);
			if($res){
				echo '注册成功';
			}else{
				echo '注册失败';
			}
		}
	//8、关闭数据
	mysql_close($link);

 ?>