$('.list2 li').click(function(){
	$(this).addClass('one');
	$(this).siblings().removeClass('one');
	$('.divall').children('div').eq($(this).index()).addClass('current');
	$('.divall').children('div').eq($(this).index()).siblings().removeClass('current');	
})
 new WOW().init();