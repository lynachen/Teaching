var times=60,  //验证码倒计时
	timer=null;
var $getCode = $('#J_GetCode');
//以下为表单提交	
$("form :input").blur(function(){
	var $parent = $(this).parent();
	$parent.find(".msg").remove(); 
	//验证手机号
	if($(this).is("#mobile")){
		var mobileVal = $.trim(this.value);
		var regMobile = /^1[3|4|5|7|8][0-9]{9}$/;
		if(mobileVal == "" || !regMobile.test(mobileVal)){
			var errorMsg = "请输入有效的手机号！";
			$parent.append("<span class='msg onError'>" + errorMsg + "</span>");
		} else{
			var okMsg="输入正确";
            $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
		}
	}	
	//验证短信验证码
	if($(this).is("#smscode")){
		var codeVal = $.trim(this.value);
		if(codeVal == ""){
			var errorMsg = "请输入短信验证码！";
			$parent.append("<span class='msg onError'>" + errorMsg + "</span>");
		} else{
			var okMsg="输入正确";
            $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
		}
	}	
	//验证昵称
	if($(this).is("#uname")){
		var unameVal = $.trim(this.value);
		var regUname = /^.{2,20}$/;
		if(unameVal == "" || !regUname.test(unameVal) ){
			var errorMsg = "请输入有效的用户名，至少两个字符！";
			$parent.append("<span class='msg onError'>" + errorMsg + "</span>");
		} else{
			var okMsg="输入正确";
            $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
		}
	}			
	//验证密码
	if($(this).is("#psd")){
		var psdVal = $.trim(this.value);
		var regPsd = /^[a-zA-Z]\w{5,19}$/  //密码(以字母开头，长度在6~20之间，只能包含字母、数字和字符)
		if(psdVal == "" || !regPsd.test(psdVal)){
			var errorMsg = "请输入有效的密码（6-20位密码，字母/数字/符号至少两种）！";
			$parent.append("<span class='msg onError'>" + errorMsg + "</span>");
		} else{
			var okMsg="输入正确";
            $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
		}
	}	
	if($(this).is("#repsd")){
		var repsdVal = $.trim(this.value);
		var psdVal = $.trim($("#psd").val());
		if(repsdVal != psdVal){
			var errorMsg = "您输入的密码与上次不一致，请核实";
			$parent.append("<span class='msg onError'>" + errorMsg + "</span>");
		} else{
			var okMsg="输入正确";
            $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
		}
	}
}).keyup(function(){
	$(this).triggerHandler("blur"); 
}).focus(function(){
//	$(this).triggerHandler("blur");
});
//点击注册
function sendSubmit(){		
	$("#form :input").trigger("blur"); 
	var mobile = $.trim($("#mobile").val());
	var smscode = $.trim($("#smscode").val());
	var uname = $.trim($("#uname").val());	
	var psd = $.trim($("#psd").val());	
	var numError = $("#form .onError").length;
	if(numError){
		return false;
	}else {
		$.ajax({
			type:'',
			url:'',
			data:{
				mobile:mobile,
				smscode:smscode,
				uname:uname,				
				psd:psd,				
			},
			success:function(ret){
			  	if(ret.code == 1){
			  		YDUI.dialog.toast("注册成功", 'success', 1500,function(){
			  			window.location.href=""  //跳转页面
			  		});
			  	} else{
			  		
			  	}
			},
			error:function(data){
				
			}
		})	
	}	
	return false;
}
//校验手机号是否存在
$("#mobile").blur(function(){
	var mobile = $.trim($("#mobile").val());
	var flag = true;
	$.ajax({
		url: "",
		type: "",
		data: {
			mobile: mobile
		},
		success:function(ret){
			if(ret.code == 1){  //成功
		    	YDUI.dialog.toast('您的手机号已注册，请直接登录', 'error', 1500,function(){
		    		setJs();  
		    	});				
			} else{
				
			}
		}
	})
});

//验证码倒计时
$getCode.sendCode({
    disClass: 'btn-disabled',
    secs: 60,
    run: false,
    runStr: '{%s}秒后重新获取',
    resetStr: '重新获取验证码'
});
//获取手机验证码
$getCode.on("click",function(){
	var mobile = $.trim($("#mobile").val());
    var reg = /^1[3|4|5|7|8][0-9]{9}$/;  //手机号验证规则
    var regx = reg.test(mobile);  //true
    if (mobile == "" || !regx) {
    	YDUI.dialog.toast('请输入有效的手机号码！', 'error', 1500,function(){
    		setJs();  
    	});
    	return false;
    } else{
		YDUI.dialog.loading.open('发送中');
    	$.ajax({
    		type: "",
    		url: "",
    		data: {
    			mobile: mobile,
    		},
    		success: function (ret) {
    			if (ret.code == 1) { //成功
    				YDUI.dialog.loading.close();
    				$getCode.sendCode('start');
    				YDUI.dialog.toast('已发送', 'success', 1500);
    			}
    			else {
    				YDUI.dialog.loading.close();
    				YDUI.dialog.toast(ret, 'error', 1500);
                }
            }
        });
    }  
});
function setJs(){
	$(".btn-code").addClass("btn-disabled");
	setTimeout(function(){
		$(".btn-code").removeClass("btn-disabled");
	},3000);         	
}   
