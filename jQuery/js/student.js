$(document).ready(function(){
	window.onresize = resize;
	function resize(){
		$('#student').css({
			'top' :(window.innerHeight - document.getElementById('student').clientHeight)/2,
	         'left' : (window.innerWidth - document.getElementById('student').clientWidth)/2
		});
	}
	resize();

	$('table').delegate('input','click',function(){
		$(this).val();
	});

	$('input').keydown(function(){
		$('input').css('background-color','blue');
	});

	$('.no').mouseover(function(){
		alert("请赶快确认信息");
	});

	$('button').click(function(){
		$(".hide").hide();
	});
});