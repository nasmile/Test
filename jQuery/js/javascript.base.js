$(document).ready(function(){

	// //赋值操作符
	// var num = 10;
	// var i = 45;
	//  num <<= 10;
	//  alert(num);

	//  //for-in语句
	//  // for(var propName in window){
	//  // 	document.write(propName);
	//  // }
	//  //label标签
	//  // start:for(var i=0;i<count;i++){
	//  // 	alert(i);
	//  // }
	//  //switch语句
	//  switch(i){
	//  	case 25:
	//  		alert("25");
	//  		break;
	//  	case 35:
	//  	case 45:
	//  		alert("35 or 45");
	//  		break;
	//  	default:
	//  		alert("other");
	//  }
	//  //作用域
	//  var color = "blue";
	//  function changeColor(){
	//  	if(color == "blue"){
	//  		color = "red";
	//  	}else{
	//  		color = "blue";
	//  	}
	//  }

	//  changeColor();
	//  alert(color);

	//  //延长作用域
	//  function buildUrl(){
	//  	var qs = "?debug=true";
	//  	with(location){
	//  		var url = href + qs;
	//  	}
	//  	return url;
	//  }

	//  buildUrl();
	//  //======================================================
	//  //5.1 object类型
	//  var person = new Object();  //构造函数，该语句等同于var person = {};
	//  person.name = "lina";
	//  person.age = 23;
	//  //对象字面量
	//  var person = {
	//  	name : "lina",
	//  	age : 23
	//  };

	//  function displayInfo(args){
	//  	var output = "";
	//  	if(typeof args.name == "string"){
	//  		output += "name" + args.name + "\n";
	//  	}
	//  	if(typeof args.age == "number"){
	//  		output += "Age" + args.age + "\n";
	//  	}

	//  	alert(output);
	//  }
	//  displayInfo({
	//  	name : "lina",
	//  	age : 23
	//  });
	//  displayInfo({
	//  	name : "xiaohe"
	//  });

	//  //数组
	//  //var colors = new Array(3);
	//  var colors = ["red","blue","black"];
	//  var names = Array("Gray");
	//  var values = [1,2,3];
	//  colors[3] = "gray";
	//  alert(colors[3]);
	//  alert(colors.length);
	//  alert(colors);
	//  colors[colors.length] = "brown";
	//  alert(colors);

	//  //push() pop()  shift()  unshift()从前推入
	//  var count = colors.push("green");
	//  alert(count);
	//  var item = colors.pop(); 
	//  alert(item);
	//  var item1 = colors.shift();
	//  alert(item1);
	//  var count1 = colors.unshift("redred");
	//  var item2 = colors.pop();
	//  alert(item2);

	 //重排序方法  reverse() sort()
	 // var values = [0,6,5,10,15];
	 // values.reverse();
	 // alert(values);
	 // values.sort();
	 // alert(values);
	 // //升序
	 // function compare(value1,value2){
	 // 	if(value1 < value2){
	 // 		return -1;
	 // 	}else if(value2 < value1){
	 // 		return 1;
	 // 	}else{
	 // 		return 0;
	 // 	}
	 // }
	 // values.sort(compare);
	 // alert(values);

	 //concat()   slice()   splice()
	 // var colors = ["red","green","blue"];
	 // var removed = colors.splice(0,1);
	 // alert(colors);
	 // removed = colors.splice(1,0,"yellow","orange");
	 // alert(colors);
	 // removed = colors.splice(1,2,"red","purple");
	 // alert(colors);

	 //indexOf() lastIndexOf
	 //第一个参数是要查找的项，第二个参数表示查找起点位置的索引
	 var numbers = [1,2,3,4,5,4,3,2,1];
	 // alert(numbers.indexOf(4));
	 // alert(numbers.lastIndexOf(4));
	 // alert(numbers.indexOf(4,4));
	 // alert(numbers.lastIndexOf(4,4));

	 //迭代方法
	 //every()  some()  filter()  forEach()  map()  
	 // var everyResult = numbers.every(function(item){
	 // 			return (item > 2);
	 // });
	 // alert(everyResult);
	 // var someResult = numbers.some(function(item){
	 // 			return (item > 2);
	 // });
	 // alert(someResult);
	 // var filterResult = numbers.filter(function(item){
	 // 	return (item > 2);
	 // });
	 // alert(filterResult);
	 // var mapResult = numbers.map(function(item){
	 // 	return (item * 2);
	 // });
	 // alert(mapResult);
	 // var forEachResult = numbers.forEach(function(item){
	 // 	//对每一项进行出入的函数，木有返回值
	 // });

	 //归并方法reduce() reduceRright()
	 // var sum = numbers.reduce(function(pre,cur){
	 // 		return pre + cur;
	 // });
	 // alert(sum);

	 // //RegExp类型
	 // var re = null,i;
	 // for(i=0;i < 10;i++){
	 // 	re = /cat/g;
	 // 	re.test("catastrophe");
	 // }
	 // for(i=0;i<10;i++){
	 // 	re =new RegExp("cat","g");
	 // 	re.test("catastrophe");
	 // }

	 //RegExp实例方法exec() 捕获,pattern1与pattern2的区别，pattern2为全局模式，每次调用都会返回字符串中的下一个匹配项
	 // var text = "cat,bat,sat,fat";
	 // var pattern1 = /.at/;
	 // var pattern2 = /.at/g;

	 // var matches = pattern1.exec(text);
	 // alert(matches);
	 // alert(matches.index);
	 // alert(matches[0]);
	 // alert(pattern1.lastIndex);

	 // var matches1 = pattern2.exec(text);
	 // alert(matches1);
	 // alert(matches1.index);
	 // alert(matches1[0]);
	 // alert(pattern2.lastIndex);
     
  //    var matches1 = pattern2.exec(text);
	 // alert(matches1);
	 // alert(matches1.index);
	 // alert(matches1[0]);
	 // alert(pattern2.lastIndex);

	//exect() test()
	// var text = "this has been a short summer";
	// var pattern = /(.)hort/g;

	// if(pattern.test(text)){
	// 	alert(RegExp.input);  //this has been a short summer
	// 	alert(RegExp.leftContext);  //this has been a
	// 	alert(RegExp.rightContext);  //summer
	// 	alert(RegExp.lastMatch);    //
	// 	alert(RegExp.lastParen);
	// 	alert(RegExp.multiline);
	// }

	//number类型的方法
	// var num = 99;
	// var num1 = 10.005;
	// alert(num.toFixed(2));
	// alert(num1.toFixed(2));
	// alert(num.toExponential(1));
	// alert(num.toPrecision(1));
	// alert(num.toPrecision(2));
	// alert(num.toPrecision(3));

	//string方法
	var stringValue = "hello world";
	// alert(stringValue.charAt(1));    //e
	// alert(stringValue.charCodeAt(1));   //字符编码
	// alert(stringValue[1]);

	// var result = stringValue.concat("!");
	// alert(result);

	// //slice()  substring()第二个参数是指最后一个字符串最后面的位置
	// //substr() 第二个参数则是返回参数的个数
	// alert(stringValue.slice(3));
	// alert(stringValue.substring(3));
	// alert(stringValue.substr(3));
	// alert(stringValue.slice(3,7));
	// alert(stringValue.substring(3,7));
	// alert(stringValue.substr(3,7));

	// //slice()将会将传入的负值与字符串长度相加，substr将负的第一个参数与字符串长度相加，而将负的第二个参数
	// //转换成0，substring将会将所有的负值都转换成0
	// alert(stringValue.slice(-3));   //slice(8)
	// alert(stringValue.substring(-3));
	// alert(stringValue.substr(-3));
	// alert(stringValue.slice(3,-4));   //slice(3,7);
	// alert(stringValue.substring(3,-4));  //substring(3,0)
	// alert(stringValue.substr(3,-4));   //substring(3,0) 结果为"" 

	//第二个参数指定从哪个位置开始搜索
	// alert(stringValue.indexOf("o"));
	// alert(stringValue.lastIndexOf("o"));
	// alert(stringValue.indexOf("o",6));
	// alert(stringValue.lastIndexOf("o",6));

	// var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
	// var positions = new Array();
	// var pos = stringValue.indexOf("e");

	// while(pos > -1){
	// 	//push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
	// 	positions.push(pos);
	// 	pos = stringValue.indexOf("e",pos + 1);
	// }

	// alert(positions);

	//trim()  toLowerCase()  toLocalLowerCase()  toUpperCase() toLocaleUpperCase()
	//toLocalLowerCase()和toLocaleUpperCase()在某些语言，会根据本地的大小写映射返回本地的大小写字符
	// var stringValue1 = "   hello    world    ";
	// alert(stringValue1.trim());
	// alert(stringValue1.toUpperCase());
	// alert(stringValue1.toLocaleUpperCase());
	// alert(stringValue1.toLowerCase());
	// alert(stringValue1.toLocaleLowerCase());

	//match()  search()  replace()
	// var text = "cat,bat,sat,fat";
	// var pos = text.search(/at/);
	// var result = text.replace(/at/g,"ond");
	// var result1 = text.replace(/(.at)/g,"world ($1)");  //
	// alert(pos);
	// alert(result);
	// alert(result1);

	// //split()
	// alert(text.split(","));
	// alert(text.split(",",2));

    //localeCompare();  字母表
    var name = "lina";
    alert(name.localeCompare("xiaohe"));
    alert(name.localeCompare("lina"));
    alert(name.localeCompare("laolao"));

    //fromCharCode() charCodeAt()
    alert(name.charCodeAt());
});