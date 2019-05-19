$(function(){
	//  点击播放视频
	$('.main-lt .pause').on('click',function(){
		$(this).hide()
		$(this).siblings('.video-img').hide()
		document.getElementById('playVideo').play()
	})
	//  收藏及取消
	$('.main-lb .s-col').on('click',function(){
		var txt = $(this).text();
		if(txt=='收藏'){
			$(this).text('已收藏');
			return false;
		} else{
			$(this).text('收藏');
			return false;
		}
	})
	//  点击课程目录
	$('.list-catalog li').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on')
		$('.video-img').css('background-image','url( )')  //视频主图
		$('#playVideo').attr('src',' ') //视频路径
	})
	//	课程介绍等目录切换
    $('.tab-nav li').click(function(){
        $(this).addClass('tab-active').siblings().removeClass('tab-active');
        var i = $('.tab-nav li').index(this);
        $('.tab-panel .tab-panel-item').eq(i).addClass('tab-active').siblings().removeClass('tab-active');
    });
})