requirejs.config({
	baseUrl: STATIC_URL,
	urlArgs: STATIC_VER,
	paths: {
		// jquery
		'jquery': [
			// '//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.1/jquery.min',
			'js/jquery-1.10.2.min'
		],
		// underscore
		'underscore': [
			// '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
			'js/underscore-min'
		],
		'backbone': [
			// '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
			'js/backbone-min'
			],
		'react': [
			// '//cdnjs.cloudflare.com/ajax/libs/react/0.13.1/react.min',
			'js/react/react.min'
		],
		'react-with-addons': [
			// '//cdnjs.cloudflare.com/ajax/libs/react/0.13.1/react-with-addons.min',
			'js/react/react-with-addons.min'
		],
		'JSXTransformer': [
			// '//cdnjs.cloudflare.com/ajax/libs/react/0.13.1/JSXTransformer',
			'js/react/JSXTransformer'
			],
		'less': [
			// '//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.0/less.min',
			'js/less.min'],

		// bootstrap
		'bootstrap': [
			// '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.2/js/bootstrap.min',
			'js/bootstrap.min'],
		'bootstrap-bootbox': [
			// '//cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.3.0/bootbox.min',
			'js/bootstrap-bootbox.min'],
		'bootstrap-select': [
			// '//cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.6.4/js/bootstrap-select.min',
			'js/bootstrap-select.min'],
		'bootstrap-datepicker': [
			// '//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.0/js/bootstrap-datepicker.min',
			'js/bootstrap-datepicker.min'],
		'bootstrap-datepicker.zh': 'js/locales/bootstrap-datepicker.zh-CN',
		'bootstrap-datetimepicker': [
			// '//cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/4.7.14/js/bootstrap-datetimepicker.min',
			'js/bootstrap-datetimepicker.min'],
		'bootstrap-datetimepicker.zh': 'js/locales/bootstrap-datetimepicker.zh-CN',
		// jquery plugin
		'jquery.validate': [
			// '//cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min',
			'js/jquery.validate.min'],
		'jquery.validate.cn': 'js/jquery.validate.lang.cn',
		'jquery.validate.extend': 'js/jquery.validate.extend',
		'jquery.pnotify': [
			// '//cdnjs.cloudflare.com/ajax/libs/pnotify/2.0.0/pnotify.core.min',
			'js/jquery.pnotify.min'],
		'jquery.fileDownload': [
			// '//cdnjs.cloudflare.com/ajax/libs/jquery.fileDownload/1.4.2/jquery.fileDownload',
			'js/jquery.fileDownload.min'],
		'jquery.cookie': [
			// '//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min',
			'js/jquery.cookie.min'],
		'jquery.fancybox': [
			// '//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.pack',
			'js/jquery.fancybox.min'],
		'jquery.ui': [
			// '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min',
			'js/jquery-ui-1.10.3.custom.min'],
		'jquery.Jcrop': [
			// '//cdnjs.cloudflare.com/ajax/libs/jquery-jcrop/0.9.12/js/jquery.Jcrop.min',
			'js/jquery.Jcrop'],

		// upload
		'jquery.ui.widget': 'js/vendor/jquery.ui.widget.min',
		'jquery.iframe-transport': [
			// 'https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.5.7/jquery.iframe-transport.min',
			'js/jquery.iframe-transport.min'],
		'jquery.fileupload-process': [
			// 'https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.5.7/jquery.fileupload-process.min',
			'js/jquery.fileupload-process.min'],
		'jquery.fileupload': [
			// 'https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.5.7/jquery.fileupload.min',
			'js/jquery.fileupload.min'],
		'jquery.fileupload-ui':[
			// 'https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.5.7/jquery.fileupload-ui.min'
		],
		'jquery.fileupload-validate':[
			'https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.5.7/jquery.fileupload-validate.min'
		],
		'jquery.xdr-transport': [
			// 'https://cdnjs.cloudflare.com/ajax/libs/blueimp-file-upload/9.5.7/cors/jquery.xdr-transport.min',
			'js/jquery.xdr-transport'],

		'jquery.number': 'js/jquery.number.min',
		'numeral':[
			// '//cdnjs.cloudflare.com/ajax/libs/numeral.js/1.5.3/numeral.min',
			'js/numeral.min'
		],

		'template': 'js/template.min',
		// ueditor
		'ueditor': 'editor/ueditor.all.min',
		'ueditorConfig': 'editor/ueditor.config',
		'ZeroClipboard': 'editor/third-party/zeroclipboard/ZeroClipboard.min',

		'libs': 'js/libs',
		'tools': 'js/tools',

		// plugin
		style: 'js/requirejs.css'
	},
	shim: {
		'jquery': {
			exports: ['$', 'jQuery']
		},
		'libs': ['jquery'],
		'react': {
			exports: 'React'
		},
		'react-with-addons': ['react'],
		'JSXTransformer': ['react'],
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		'bootstrap': ['jquery',
			// 'style!css/bootstrap.css',
			// 'style!css/bootstrap-responsive.css',
			// 'style!css/font-awesome'
		],
		'bootstrap-bootbox': ['jquery', 'bootstrap'],
		'bootstrap-select': ['jquery', 'style!css/bootstrap-select.css'],

		'bootstrap-datepicker': ['jquery', 'bootstrap',
			'style!css/bootstrap-datepicker.css'
		],
		'bootstrap-datepicker.zh': ['jquery', 'bootstrap-datepicker'],
		'bootstrap-datetimepicker': ['jquery', 'bootstrap',
			'style!css/bootstrap-datetimepicker.css'
		],
		'bootstrap-datetimepicker.zh': ['jquery', 'bootstrap-datetimepicker'],

		'jquery.ui.widget': ['jquery'],
		'jquery.validate': ['jquery'],
		'jquery.validate.cn': ['jquery', 'jquery.validate'],
		'jquery.validate.extend': ['jquery', 'jquery.validate'],
		'jquery.pnotify': ['jquery', 'style!css/jquery.pnotify.css'],
		'jquery.fileDownload': ['jquery'],
		'jquery.cookie': ['jquery'],
		'jquery.fancybox': ['jquery', 'style!css/jquery.fancybox.min.css'],
		'jquery.ui': ['jquery'],
		'jquery.Jcrop': ['jquery', 'style!css/jquery.Jcrop.min'],

		'jquery.number': ['jquery'],

		'ueditor': {
			deps: ['ueditorConfig', 'ZeroClipboard']
		},
		'tools':{
			exports:['tools']
		}
	},
	deps: ['libs']
});
