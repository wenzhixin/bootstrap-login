/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 0.0.1
 * @github https://github.com/wenzhixin/bootstrap-login
 * @blog http://wenzhixin.net.cn
 * @update 2013-05-15
 */

(function($) {
			
	'use strict';

	function Login($el, options) {
		this.$el = $el;
		this.options = options;
	}

	Login.prototype = {
		constructor : Login,
		
		init: function() {
			this.$el.html(Login.getTemplate(this.options));
			this.$form = this.$el.find('form');
			this.$username = this.$el.find('input[name="username"]');
			this.$password = this.$el.find('input[name="password"]');
			this.$error = this.$el.find('.alert-error');
			this.events();
		},
		
		events: function() {
			var that = this;
			this.$form.submit(function() {
				var locale = Login.locale[that.options.lang],
					username = $.trim(that.$username.val()),
					password = that.$password.val();
					
				if (!that.validate(username, password)) {
					return false;
				}
				if (that.options.action === '') {
					var showResult = function(result) {
							if (typeof result === 'undefined' || result) {
								that.$error.hide();
							} else {
								that.$error.show().find('span').html(locale.error_login);
							}
						},
						result = that.options.onSubmit(username, password, function(result) {
							showResult(result);
						});
					showResult(result);
					return false;
				}
			});
			this.$error.find('button').click(function() {
				that.$error.hide();
			});
		},
		
		validate: function(username, password) {
			var locale = Login.locale[this.options.lang];
			if (username === '') {
				this.$error.show().find('span').html(locale.error_input + locale.username_tip);
				this.$username.focus();
				return false;
			}
			if (password === '') {
				this.$error.show().find('span').html(locale.error_input + locale.password_tip);
				this.$password.focus();
				return false;
			}
			return true;
		}
	};
	
  	Login.locale = {
  		'zh_CN': {
  			title: '登录 ',
			username_tip: '用户名',
			password_tip: '密码',
			sign_in: '登录',
			error_input: '<strong>错误！</strong> 请输入您的',
			error_login: '<strong>错误！</strong> 您输入的用户名或者密码错误。'
  		},
  		'en': {
  			title: 'Sign in to ',
			username_tip: 'Username',
			password_tip: 'Password',
			sign_in: 'Sign in',
			error_input: '<strong>Error!</strong> Please enter your ',
			error_login: '<strong>Error!</strong> The username or password you enter is incorrect.'
  		}
  	};
	Login.getTemplate = function(options) {
		var locale = Login.locale[options.lang];
		return [
			'<div class="bs-login">',
			  '<div class="bs-signin">',
			    '<h1>' + locale.title + options.title + '</h1>',
			    '<form action="' + options.action + '" method="POST">',
			      '<fieldset>',
			        '<div class="clearfix holding">',
			          '<input class="input-xlarge" type="text" name="username" autocomplete="on" ', 
			          	'placeholder="' + locale.username_tip + '">',
			        '</div>',
			        '<div class="clearfix holding">',
			          '<input class="input-xlarge" type="password" name="password" ', 
			          	'placeholder="' + locale.password_tip + '">',
			        '</div>',
			      '</fieldset>',
			      '<div class="alert alert-error hide">',
			        '<button type="button" class="close">&times;</button>',
			        '<span></span>',
			      '</div>',
			      '<div class="form-horizontal">',
			        '<input type="submit" class="btn btn-primary" value="' + locale.sign_in + '" />',
			      '</div>',
			    '</form>',
			  '</div>',
			'</div>'
  		].join('');
  	};

	$.fn.bootstrapLogin = function() {
		var option = arguments[0], 
			args = arguments,
			
			value, 
			allowedMethods = [];

		this.each(function() {
			var $this = $(this), 
				data = $this.data('bootstrapLogin'), 
				options = $.extend({}, $.fn.bootstrapLogin.defaults, typeof option === 'object' && option);

			if (!data) {
				data = new Login($this, options);
				$this.data('bootstrapLogin', data);
			}

			if (typeof option === 'string') {
				if ($.inArray(option, allowedMethods) < 0) {
					throw "Unknown method: " + option;
				}
				value = data[option](args[1]);
			} else {
				data.init();
			}
		});
		
		return value ? value : this;
	};
	
	$.fn.bootstrapLogin.defaults = {
		lang: 'zh_CN',
		title: 'Scutech',
		action: '',
		onSubmit: function() { return false; }
	};
})(jQuery);