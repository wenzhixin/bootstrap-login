## Bootstrap Login

login from for bootstrap

### How to use:

html + css:
	
	<link rel="stylesheet" href="assets/bootstrap-login/bootstrap-login.css" />
	<div id="login"></div>
	
js:
	
	<script type="text/javascript" src="assets/bootstrap-login/jquery.bootstrap.login.js"></script>
	<script type="text/javascript">
		$(function() {
			$('#login').bootstrapLogin();
		});
	</script>
	
### Options:

	{
		lang: 'zh_CN', // zh_CN or en
		title: 'Scutech',
		action: '', //use RESTful default
		onSubmit: function() { return false; }
	}
	
### Author:

blog: http://wenzhixin.net.cn

email: wenzhixin2010@gmail.com