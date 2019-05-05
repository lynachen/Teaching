$(function(){
	$("#header").load("../../template/Common/common.html .common-header",function(){
		$("#btnSearch").on("click",function(){
			$("#navSearch").hide()
			$("#retSearch").show()
		})	
		$("#btnClose").on("click",function(){
			$("#retSearch").hide()
			$("#navSearch").show()
		})
	});
	$("#footer").load("../../template/Common/common.html .common-footer");
})
$(window).on("scroll",function(){
	if($(window).scrollTop() == 0){
		$(".common-header").removeClass("fixed");
	} else{
		$(".common-header").addClass("fixed");
	}
})
