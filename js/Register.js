var txtphoneNum=document.getElementById("txtphoneNum");
var txtNumcheck=document.getElementById("txtNumcheck");
var txtpass=document.getElementById("txtpass");
txtphoneNum.onfocus=function(){
	this.placeholder='';
}
txtphoneNum.onblur=function(){
	this.placeholder="请输入手机号";
}

txtNumcheck.onfocus=function(){
	this.placeholder='';
}
txtNumcheck.onblur=function(){
	this.placeholder="请输入手机验证码";
}

txtpass.onfocus=function(){
	this.placeholder='';
}
txtpass.onblur=function(){
	this.placeholder="请输入密码";
}



txt.onsubmit=function(a){
	var flag=true;
	var tag1=document.form1.txtphoneNum;
	var tag2=document.form1.txtNumcheck;
	var tag3=document.form1.txtpass;
	if(tag1.value==''){
		Numtip.innerHTML='请输入手机号';
		Numtip.style.color='red';
		flag=false;
	}
	
	else{
		Numtip.innerHTML='进入下一步';
	}

	
	if(tag2.value==''){
		Numchecktip.innerHTML='请输入短信验证码';
		Numchecktip.style.color='red';
		flag=false;
	}
	else{
		Numchecktip.innerHTML='进入下一步';
	}
	
	if(tag3.value==''){
		passtip.innerHTML='请设置密码';
		passtip.style.color='red';
		flag=false;
	}
	else{
		passtip.innerHTML='进入下一步';
	}	
	if(!flag){
		a.preventDefault();
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
