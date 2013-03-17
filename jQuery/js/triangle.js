$(document).ready(function(){
	window.onresize = resize;
	function resize(){
		$("#triangle").css({
			'top' :(window.innerHeight - document.getElementById('triangle').clientHeight)/2,
	         'left' : (window.innerWidth - document.getElementById('triangle').clientWidth)/2
		});
	}
	resize();
});