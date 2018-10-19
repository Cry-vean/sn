$('ul li').click(function(){
     $('form').eq($(this).index()).addClass('current');
     $('form').eq($(this).index()).siblings().removeClass('current');
})

$('.message').click(function(){
	$('form3').addClass('two');		
	$('form2').removeClass('two');	
	$('form1').removeClass('two');	
})
$('.message1').click(function(){
	$('form2').addClass('two');	
	$('form3').removeClass('two');
	$('form1').removeClass('two');	
})
$('.tdc').hover(function(){
	$(this).stop().animate({'margin-left':'40px'},800);
	$(this).parent().children().eq(1).show();	
},function(){
	$(this).stop().animate({'margin-left':'90px'},800);
	$(this).parent().children().eq(1).hide();
})

var user=document.getElementById("user");
var password=document.getElementById("password");

user.onfocus=function(){
	this.placeholder='';
}
user.onblur=function(){
	this.placeholder="请输入用户名/手机号/邮箱号";
	tip1.innerHTML='';
	tip1.style.color='white';
	tip1.style.border='none';
	tip1.style.backgroundColor='white';

}
password.onfocus=function(){
	this.placeholder='';
}
password.onblur=function(){
	this.placeholder="请输入密码";
	tip1.innerHTML='';
	tip1.style.color='white';
	tip1.style.border='none';
	tip1.style.backgroundColor='white';
}


txt1.onsubmit=function(a){
	var flag=true;
	var tag1=document.form2.user;
	var tag2=document.form2.password;
    var tip1=document.getElementById('tip1');
	
	if(tag1.value==''){
		tip1.innerHTML='请输入用户名/手机号/邮箱号!';
		tip1.style.color='black';	
		tip1.style.border='1px solid red';
		tip1.style.backgroundColor='pink';
		flag=false;
	}

	if(tag1.value!=''&&tag2.value==''){
		tip1.innerHTML='请输入密码';
		tip1.style.color='black';	
		tip1.style.border='1px solid red';
		tip1.style.backgroundColor='pink';
		flag=false;
	}

	if(!flag){
		a.preventDefault();
	}
}