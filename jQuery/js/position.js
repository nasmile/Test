(function($){
	$.position = function(sid){
		var top = (window.innerHeight - document.getElementById(sid).clientHeight)/2;
		var height = (window.innerWidth - document.getElementById(sid).clientWidth)/2;

		window.onresize = resize;

		function resize(){
			$(sid).css({
				'top': top,
				'left': height
			});
		}
		resize();
	}
})(jQuery);