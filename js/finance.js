 $(window).scroll(function(){
if($(window).scrollTop()>30 && $(window).scrollTop()<329){
	$('.menu2').addClass('fixed1');		
}
else{
	$('.menu2').removeClass('fixed1');		
}
})

$(window).scroll(function(){
if($(window).scrollTop()>=329){
$('.list2').addClass('fixed1');		
$('.sideright').show();
}
else{
	$('.list2').removeClass('fixed1');	
	$('.sideright').hide();
}
})

$('.sideright').children().eq(1).click(function(){
	$('html,body').animate({'scrollTop':'0px'},500);

})



function go(n){
return $('.list2 li').eq(n).addClass('three').siblings().removeClass('three');
	}
			$(window).scroll(function(event) {
				
				 var st=$(window).scrollTop()
				 if(st>=$('section>div').eq(6).offset().top){
					go(6)
				}
				else if(st>=$('section>div').eq(5).offset().top){
					go(5)
				}else if(st>=$('section>div').eq(4).offset().top){
					go(4)
				}else if(st>=$('section>div').eq(3).offset().top){
					go(3)
				}else if(st>=$('section>div').eq(2).offset().top){
					go(2)
				}else if(st>=$('section>div').eq(1).offset().top){
					go(1)
				}else {
					go(0)
				}
			});

			$('.list2 li').click(function(event) {
				var index=$(this).index();
				$('html,body').animate({'scrollTop':$('section>div').eq(index).offset().top})
			});



 new WOW().init();



//轮播图
var num=0;
var timer;
    function gogo(){
	timer=setInterval(function(){
	num=num+1;
	if(num>2){
	num=0;
	}
	$('.list1 li').eq(num).fadeIn().siblings().fadeOut();
	 $('ol li').eq(num).addClass('one');
     $('ol li').eq(num).siblings().removeClass('one');
	},1000);
}
    gogo();

//点击索引
   $('ol li').click(function(event) {
                    num=$(this).index();
                    $('.list1 li').eq(num).fadeIn().siblings().fadeOut();
                    $(this).addClass('one');
                    $(this).siblings().removeClass('one');
                });
                
 // 给div增加鼠标移入移出事件
 $('.wrap').hover(function() {
// 鼠标移入停止定时器
  clearInterval(timer);
  $('.wrap .left1').fadeIn();
 $('.wrap .right1').fadeIn();
}, function() {
 // 鼠标移出开始定时器
 $('.wrap .right1').fadeOut();
  $('.wrap .left1').fadeOut();
  gogo();
  });
  
//点击按钮
 $('.left1').click(function(event) {
                    num--;
                    if(num<0){
                        num=2;
                    }
                    $('.list1 li').eq(num).fadeIn().siblings().fadeOut();
                    $('ol li').eq(num).addClass('one');
                    $('ol li').eq(num).siblings().removeClass('one');
})
$('.right1').click(function(event) {

                    num++;
                    if(num>2){
                        num=0;
                    }
                    $('.list1 li').eq(num).fadeIn().siblings().fadeOut();
                    $('ol li').eq(num).addClass('one');
                    $('ol li').eq(num).siblings().removeClass('one');
                });
  
  
  
$('.left1').hover(function(){
	$('.wrap .left1').addClass('left2');
},function(){
	$('.wrap .left1').removeClass('left2');
})
$('.right1').hover(function(){
	$('.wrap .right1').addClass('right2');
},function(){
	$('.wrap .right1').removeClass('right2');
})



$('.pic1 li').hover(function(){
	$(this).css({'border':'1px solid #ccc','border-bottom':'none'});
	$('.pic1 li .cflist').show();
},function(){
	$(this).css('border','none');
	$('.pic1 li .cflist').hide();
})


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