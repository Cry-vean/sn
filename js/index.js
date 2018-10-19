$('.list>li').hover(function(){
		if(!$(this).children('ul').length) return;
		$(this).children('ul').show();
},function(){
		$(this).children('ul').hide();
	})


searchKeyword.onfocus=function(){
	this.placeholder='';
}

searchKeyword.onblur=function(){
	this.placeholder='3c焕新季 疯抢100元折上折神券';
}

$('.tab li').click(function(){	
	$(this).addClass('two');
	$(this).siblings().removeClass('two');
	$('.box11').children('div').eq($(this).index()).addClass('current');
	$('.box11').children('div').eq($(this).index()).siblings().removeClass('current');
})



//轮播图
    var num=0;
    var timer;
    function gogo(){
	timer=setInterval(function(){
	num=num+1;
	if(num>3){
	num=0;
	}
	$('.piclun li').eq(num).fadeIn().siblings().fadeOut();
	 $('ol li').eq(num).addClass('one');
     $('ol li').eq(num).siblings().removeClass('one');
	},1000);
}
    gogo();


//点击索引
   $('ol li').click(function(event) {
                    num=$(this).index();
                    $('.piclun li').eq(num).fadeIn().siblings().fadeOut();
                    $(this).addClass('one');
                    $(this).siblings().removeClass('one');
                });
  // 给div增加鼠标移入移出事件
                $('.wrap').hover(function() {
                    // 鼠标移入停止定时器
                    clearInterval(timer);
                    $('.wrap span').fadeIn();
                }, function() {
                    // 鼠标移出开始定时器
                     $('.wrap span').fadeOut();
                    gogo();
                });

//点击按钮
   $('#left').click(function(event) {
                    num--;
                    if(num<0){
                        num=3;
                    }
                    $('.piclun li').eq(num).fadeIn().siblings().fadeOut();
                    $('ol li').eq(num).addClass('one');
                    $('ol li').eq(num).siblings().removeClass('one');
})
$('#right').click(function(event) {

                    num++;
                    if(num>3){
                        num=0;
                    }
                    $('.piclun li').eq(num).fadeIn().siblings().fadeOut();
                    $('ol li').eq(num).addClass('one');
                    $('ol li').eq(num).siblings().removeClass('one');
                });


$('.you1').click(function(event) {
		$('.block1').animate({'left':'290px'},500);

});


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