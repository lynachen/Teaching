$(function(){
	//以下为表单提交	
	$("form :input").blur(function(){
		var $parent = $(this).parent();
		$parent.find(".msg").remove(); 		
		//验证手机号或邮箱
		if($(this).is("#username")){
			var usernameVal = $.trim(this.value);
			if(usernameVal == ""){
				var errorMsg = "请输入手机号或邮箱！";
				$parent.append("<span class='msg onError'>" + errorMsg + "</span>");
			} else{
				var okMsg="已输入"; //提示信息，已隐藏
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
			}
		}
		//验证密码
		if($(this).is("#psd")){
			var psdVal = $.trim(this.value);
			if(psdVal == "" ){
				var errorMsg = "请输入密码！";
				$parent.append("<span class='msg onError'>" + errorMsg + "</span>");
			} else{
				var okMsg="输入正确"; //提示信息，已隐藏
                $parent.append("<span class='msg onSuccess'>" + okMsg + "</span>");
			}
		}			
	}).keyup(function(){
		$(this).triggerHandler("blur"); 
	}).focus(function(){
//		$(this).triggerHandler("blur");
	});
})	

function sendSubmit(){		
	$("#form :input").trigger("blur"); 
	var username = $.trim($("#username").val());
	var psd = $.trim($("#psd").val());
	var numError = $("#form .onError").length;
	if(numError){
		return false;
	}else {
		$.ajax({
			type:'',
			url:'',
			data:{
				username:username,
				psd:psd,
			},
			success:function(ret){
			  	if(ret.code == 1){ //成功
					YDUI.dialog.toast("登录成功", 'success', 1500,function(){
			  			window.location.href=""  //跳转页面
			  		});			  		
			  	} else{
			  		
			  	}
			},
			error:function(ret){
				
			}
		})	
	}	
	return false;
}