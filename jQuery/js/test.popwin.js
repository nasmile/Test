$(document).ready(function(){


	$(document.body).css('height',window.innerHeight);

	$(document.body).popwin({
		'width':200,
		'height':100,
		'pos':'bottomright',
		'effect':'bottom2top',
		'duration':500,
		'childFunc':function(){
			var html = '<div class="qqtip"></div>';
			return $(html);
		},
		'fadeFunc':function(pop){
			pop.live('click',function(){
				pop.remove();
			});
		},
	});

	$(document.body).popwin({
		'width':200,
		'height':100,
		'pos':'topleft',
		'effect':'fadeout',
		'duration':500,
		'childFunc':function(){
			var html = '<div class="qqtip2"></div>';
			return $(html);
		},
		'fadeFunc':function(pop){
			pop.live('click',function(){
				pop.remove();
			});
		},
	});
});