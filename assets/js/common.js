$(function(){
	$("#header").load("../../template/Common/common.html .common-header");
	$("#footer").load("../../template/Common/common.html .common-footer");
})
	$(window).on("scroll",function(){
		if($(window).scrollTop() == 0){
			$(".common-header").removeClass("fixed");
		} else{
			$(".common-header").addClass("fixed");
		}
	})