$(document).ready(function(){

	//赋值操作符
	var num = 10;
	var i = 45;
	 num <<= 10;
	 alert(num);

	 //for-in语句
	 // for(var propName in window){
	 // 	document.write(propName);
	 // }
	 //label标签
	 // start:for(var i=0;i<count;i++){
	 // 	alert(i);
	 // }
	 //switch语句
	 switch(i){
	 	case 25:
	 		alert("25");
	 		break;
	 	case 35:
	 	case 45:
	 		alert("35 or 45");
	 		break;
	 	default:
	 		alert("other");
	 }
	 //作用域
	 var color = "blue";
	 function changeColor(){
	 	if(color == "blue"){
	 		color = "red";
	 	}else{
	 		color = "blue";
	 	}
	 }

	 changeColor();
	 alert(color);

	 //延长作用域
	 function buildUrl(){
	 	var qs = "?debug=true";
	 	with(location){
	 		var url = href + qs;
	 	}
	 	return url;
	 }

	 buildUrl();
	 //======================================================
	 //5.1 object类型
	 var person = new Object();  //构造函数，该语句等同于var person = {};
	 person.name = "lina";
	 person.age = 23;
	 //对象字面量
	 var person = {
	 	name : "lina",
	 	age : 23
	 };

	 function displayInfo(args){
	 	var output = "";
	 	if(typeof args.name == "string"){
	 		output += "name" + args.name + "\n";
	 	}
	 	if(typeof args.age == "number"){
	 		output += "Age" + args.age + "\n";
	 	}

	 	alert(output);
	 }
	 displayInfo({
	 	name : "lina",
	 	age : 23
	 });
	 displayInfo({
	 	name : "xiaohe"
	 });

	 //数组
	 //var colors = new Array(3);
	 var colors = ["red","blue","black"];
	 var names = Array("Gray");
	 var values = [1,2,3];
	 colors[3] = "gray";
	 alert(colors[3]);
	 alert(colors.length);
	 alert(colors);
	 colors[colors.length] = "brown";
	 alert(colors);

	 //push() pop()  shift()  unshift()从前推入
	 var count = colors.push("green");
	 alert(count);
	 var item = colors.pop(); 
	 alert(item);
	 var item1 = colors.shift();
	 alert(item1);
	 var count1 = colors.unshift("redred");
	 var item2 = colors.pop();
	 alert(item2);

	 //重排序方法
	 var values = [1,2,3,4,5];
	 values.reverse();
	 alert(values);
});