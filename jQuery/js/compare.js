$(document).ready(function(){

	// var MyArr = ["red","green","gray"];
	// MyArr.sort();
	// alert(MyArr);

	// //转换函数
	// function convert(DataValue,DataType){
	// 	switch(DataType){
	// 		case "int":
	// 			return parseInt(DataValue);
	// 		case "float":
	// 			return parseFloat(DataValue);
	// 		case "date";
	// 			return new Date(Date parse(DataValue));
	// 		default:
	// 			return DataValue.toString();
	// 	}
	// }

	// //比较
	// function compare_function(value1,value2){
	// 	if(value1 < value2){
	// 		return -1;
	// 	}else if(value1 > value2){
	// 		return 1;
	// 	}else{
	// 		return 0;
	// 	}
	// }

	//http://www.jb51.net/article/20694.htm

	function comparTrs(tr1,tr2){
		var value1 = trl.cells[3].innerHTML;
		var value2 = tr2.cells[3].innerHTML;

		var value1 = tr1.cells[3].firstChild.nodeValue;
		var value2 = tr2.cells[3].firstChild.nodeValue;

		//localComopare还木有明白，明天查看
		return value1.localCompare(value2);
	}

	//对表格进行排序
	function sortTable(tableId){
		var table = document.getElementById(tableId);
		var tbody = table.tBodies[0];
		var tr = tbody.rows;

		var trValue = new Array();
		for(var i=0;i<tr.length;i++){
			//将表格中各行的信息存储在新建的数组中
			trValue[i] = tr[i];
		}

		trValue.sort(comparTrs);
	

		//新建一个代码片段，用于保存排序后的结果
		var fragment = document.createDocumentFragment();
		for(var i=0;i<trValue.length;i++){
			fragment.appendChild(trValue[i]);
		}

		//将排序后的结果替换掉之前的之
		tbody.appendChild(fragment);
	}
});