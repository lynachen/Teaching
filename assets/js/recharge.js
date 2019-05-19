$(function(){
//	点击会员类型选择
	var li = $('.member-type .list-type li')
	li.on('click',function(){
		$(this).addClass('on').siblings().removeClass('on')
		var sum = $(this).find('.price i').text()
		var perSum = $(this).find('.per-price').text()
		$('#totalSum').text(sum)
		$('#perSum').text(perSum)
	})
})