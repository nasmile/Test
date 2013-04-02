(function($){
	$.fn.extend({
		popwin:function(opt){
			var body = $(this);

			//绘制选区
			var pphtml = '';
			pphtml += '<div class="pop">';
			pphtml += '   <div class="popinner">';
			pphtml += '   </div>';
			pphtml += '</div>';
			body.append(pphtml);

			//给选区设置宽高以及弹出位置
			var pp=body.find('.pop');
			pp.css({
				'width':opt.width,
				'height':opt.height
			});

			body.poppos('.pop',opt.pos);//浏览器自动调整

			//填充选区
			var child = opt.childFunc();
			body.find('.popinner').append(child);

			//设置填充效果
			if('bottom2top'== opt.effect){
				child.css({
					top:pp.height()
				});

				child.animate({
					'top':0
				},opt.duration);
			}


		}
	});
})(window.jQuery);