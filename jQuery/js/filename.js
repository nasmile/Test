//在js文件里直接定义的函数，绑定在了window上，我理解我全局变量
// //string方法提取某个文件名后缀名的方法
// function ex_name(filename) {

// 	var index = filename.lastIndexOf(".");
// 	var exname;
// 	if (index == -1) {
// 		return null;
// 	} else {
// 		exname = filename.substr(index + 1);
// 		return exname.toLowerCase();
// 	}
// }

// //利用正则表达式来提取文件的后缀名
// function exname(filename) {

// 	// var fileExt=(/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
// 	// var fileExt = /[.]/.exec(filename);
// 	var fileExt = /[^.]+$/.exec(filename.toLowerCase());
// 	return fileExt;
// }

(function($) {
	$.fn.extend({
		//在这定义的函数，绑定在了jQuery上
		extentionname: function(filename) {
			//得到后缀名
			var index = filename.lastIndexOf(".");
			var exname;
			if (index == -1 || index == 0) {
				exname = '非法文件名';
			} else {
				exname = filename.substr(index + 1);
			}

			//输出文本
			var html = '';
			html += '<tr>';
			html += '<td>' + filename;
			html += '</td>';
			html += '<td>';
			html += exname;
			html += '</td>';
			html += '</tr>';

			$(this).append(html);
		}
	});
})(window.jQuery);