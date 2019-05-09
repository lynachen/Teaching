$(function(){
	    $(".tab-nav li").click(function(){
            $(this).addClass("tab-active").siblings().removeClass("active");
            var i = $(".tab-nav li").index(this);
            $(".tab-panel .tab-panel-item").eq(i).show().siblings().hide();
        });
})
