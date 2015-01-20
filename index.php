<?php
header("Content-type:text/html;charset=gb2312");
?>
<!doctype>
<html>
<head>
<meta. http-equiv="content-type" content="text/html; charset=utf-8" />
<title>¿ª·¢js¿Ø¼þ</title>
</head>
<b>
<script type="text/javascript" src="js/table.js"></script>
<script type="text/javascript">
var table = hello.table;table.init();
var users = [];
for (var i=0;i<10;i++ ){
	var data = {};
	data['name'] = 'user'+i;
	data['age']  = i ;
	users.push(data);
}
table.append(users);
</script>
</body>
</html>