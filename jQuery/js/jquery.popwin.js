(function($){
	//添加多个弹出窗口
	var num=0;
	function next(){
		num++;
		return 'pp'+num;
	}

	$.fn.extend({
		popwin:function(opt){
			var body = $(this);
			var id = next();

			//绘制选区
			var pphtml = '';
			pphtml += '<div class="pop '+ id +'">';
			pphtml += '   <div class="popinner">';
			pphtml += '   </div>';
			pphtml += '</div>';
			body.append(pphtml);

			//给选区设置宽高以及弹出位置
			var pp=body.find('.pop.'+id);
			pp.css({
				'width':opt.width,
				'height':opt.height
			});

			body.poppos('.pop.'+id,opt.pos);//浏览器自动调整

			//填充选区
			var child = opt.childFunc();
			//.id
			body.find('.'+ id +'.popinner').append(child);

			//设置填充效果
			if('bottom2top'== opt.effect){
				child.css({
					top:pp.height()
				});

				child.animate({
					'top':0
				},opt.duration,function(){
					opt.fadeFunc(pp);
				});
			}else if('fadeout' == opt.effect){
				child.css({
					top:pp.height()
				});
			}
			
			//消失
		}
	});
})(window.jQuery);