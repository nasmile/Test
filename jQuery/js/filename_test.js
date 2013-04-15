$(document).ready(function() {

	//在这定义函数，则该函数绑定在了local上，我的理解就是局部函数，内部直接调用
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

	//样式以及调用
	$('.filenameT').extentionname('javascript.jsp');
	$('.filenameT').extentionname('xxxx.yy');
	$('.filenameT').extentionname('aaa.bc.jap');
	$('.filenameT').extentionname('null');
	$('.filenameT').extentionname('.');
});

// $(function () { alert("第一个function"); });
// $(document).ready(function() {
// 	alert("第一个function");
// });
// $(document).ready(function() {
// 	alert("第二个function");
// });