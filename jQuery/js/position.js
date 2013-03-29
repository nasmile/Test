(function($) {
	//对jQuery添加方法
	// $.fn.extend ({
	// 	position: function(pinner){
	// 		var pre = this;
	// 		var childpre = pre.find(pinner);
	// 		var top = (pre.height() - childpre.height()) / 2;
	// 		var left = (pre.width() - childpre.width()) / 2;

	// 		childpre.css({
	// 			'top': top,
	// 			'left': left
	// 		});
	// 	}
	// });

	//添加jQuery本身的方法
	$.extend({
		position : function(pre,pinner,pos){
			var pre = $(pre);
			var childpre = pre.find(pinner);
			var top ,left;

			if (pos == "center") {
				top = (pre.height() - childpre.height()) / 2;
				left = (pre.width() - childpre.width()) / 2;
			}else if (pos == "tl"){
				top = 0;
				left = 0;
			}else if(pos == "ct"){
				top = 0;
				left= (pre.width() - childpre.width()) / 2;
			}else if (pos == "tr") {
				top = 0;
				left = pre.width() - childpre.width();
			}else if(pos == "bl"){
				top = pre.height() - childpre.height();
				left = 0;
			}else if(pos == "bc"){
				top = pre.height() - childpre.height();
				left = (pre.width() - childpre.width()) / 2;
			}else if (pos == "br") {
				top = pre.height() - childpre.height();
				left = pre.width() - childpre.width();
			}else if(pos == "cl"){
				top = (pre.height() - childpre.height()) / 2;
				left = 0;
			}else if(pos == "cr"){
				top = (pre.height() - childpre.height()) / 2;
				left = pre.width() - childpre.width();
			}

			childpre.css({
				'top': top,
				'left': left
			});
		}
	});
})(window.jQuery)