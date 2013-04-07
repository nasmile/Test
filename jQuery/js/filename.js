$(document).ready(function(){

	//string方法提取某个文件名后缀名的方法
	function ex_name(filename){
		var index = filename.lastIndexOf(".");
		var exname = filename.substr(index);

		return exname.toLowerCase();
	}

	alert(ex_name("javascript.base.js"));

	//利用正则表达式来提取文件的后缀名
	function exname(filename){

		// var fileExt=(/[.]/.exec(filename)) ? /[^.]+$/.exec(filename.toLowerCase()) : '';
		// var fileExt = /[.]/.exec(filename);
		var fileExt = /[^.]+$/.exec(filename.toLowerCase());
		return fileExt;

	}

	alert(exname("javascript.base.js"));

	//正则表达式
	// .     IE下[^\n]，其它[^\n\r]  匹配除换行符之外的任何一个字符 
	// \d    [0-9]                   匹配数字 
	// \D    [^0-9]                  匹配非数字字符 
	// \s    [ \n\r\t\f\x0B]         匹配一个空白字符 
	// \S    [^ \n\r\t\f\x0B]        匹配一个非空白字符 
	// \w    [a-zA-Z0-9_]            匹配字母数字和下划线 
	// \W    [^a-zA-Z0-9_]           匹配除字母数字下划线之外的字符 
	// *     匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。 * 等价于{0,}。 
	// +     匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。 
	// ?     匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 中的"do" 。? 等价于 {0,1}。 
	// {n}   n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。 
	// {n,}  n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。 
	// {n,m} m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。刘， "o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。 

	var str0 = "some money";
	var  re0 = /\s/;
	alert(str0.replace(re0,"%"));
	//多个空白符
	var str1 = "some            money"；
	// re1 = /\s+$/;    //caught SyntaxError: Unexpected identifier 
	// alert(str1.replace(re1,"#"));
	var str2 = "a-bd-c";
	var re2 = /[^a-z]/i;
	alert(str2.split(re2));
	var str3 = "My name is 18.Golden age!";
	var re3 = /\d+/;
	alert(str.search(re3));
});