$(document).ready(function(){
	//访问器属性
	var book ={
		_year :2004,
		edition:1
	};
	Object.defineProperty(book,"year",{
		get :function(){
			return this._year;
		},
		set:function(newValue){
			if(newValue > 2004){
				this._year = newValue;
				this.edition += newValue -2004;
			}
		}
	});

	book.year = 2005;
	alert(book.edition);
});