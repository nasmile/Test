$().ready(function(){
	function outer(){
		inner();
	}

	function inner(){
		// alert(inner.caller);
		alert(arguments.callee.caller);
	}

	outer();

	//能够扩充函数运行的作用域
	function sum(num1,num2){
		return num1+num2;
	}

	function callSum1(num1,num2){
		return sum.apply(this,arguments);
	}

	function callSum2(num1,num2){
		// return sum.apply(this,[num1,num2]);
		return sum.call(this,num1,num2);
	}
});