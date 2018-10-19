$('.left>li').hover(function() {
				if(!$(this).children('ul').length) return;
				$(this).css({'background':'#fff','border':'1px solid #ccc','border-bottom':'none'});
			
				$(this).children('ul').show()
			}, function() {
				$(this).children('ul').hide()
					$(this).css({'background':'#f6f6f6','border':'none'});
			});
$('.right>li').hover(function() {
				if(!$(this).children('ul').length) return;
				$(this).css({'background':'#fff','border':'1px solid #ccc','border-bottom':'none'});
			
				$(this).children('ul').show()
			}, function() {
				$(this).children('ul').hide()
					$(this).css({'background':'#f6f6f6','border':'none'});
			});
			
searchKeyword.onfocus=function(){
	this.placeholder='';
}

searchKeyword.onblur=function(){
	this.placeholder='3c焕新季 疯抢100元折上折神券';
}
