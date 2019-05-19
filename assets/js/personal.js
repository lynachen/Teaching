$(function(){
	//	切换
    $(".tab-nav li").click(function(){
        $(this).addClass("tab-active").siblings().removeClass("tab-active");
        var i = $(".tab-nav li").index(this);
        $(".tab-panel .tab-panel-item").eq(i).addClass("tab-active").siblings().removeClass("tab-active");
    });
})
