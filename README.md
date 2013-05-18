## Bootstrap Login

Login plugin from for bootstrap. [demo](http://wenzhixin.net.cn/p/bootstrap-login/)

### How to use:

html + css:
	
	<link rel="stylesheet" href="bootstrap-login.css" />
	<div id="login"></div>
	
js:
	
	<script type="text/javascript" src="jquery.bootstrap.login.js"></script>
	<script type="text/javascript">
		$(function() {
			$('#login').bootstrapLogin();
			// use submit
			$('#login).bootstrapLogin({
				onSubmit: function(username, password) {
					if (username === 'admin' && password === 'admin') {
						location.href = 'http://wenzhixin.net.cn';
						return true;
					}
					return false;
				}
			});
		});
	</script>
	
### Options:

	{
		lang: 'zh_CN', // zh_CN or en
		title: 'Scutech',
		type: 'normal', //'normal' or 'dropdown'
		action: '', //use RESTful default
		onSubmit: function() { return false; }
	}
	
### Author:

blog: http://wenzhixin.net.cn

email: wenzhixin2010@gmail.com