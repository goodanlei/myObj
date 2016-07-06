
$(document).ready(function(){
	$('.head .list li').on('click',function(){
		$(this).find('a').addClass('active').parent('li').siblings('li').find('a').removeClass('active');
	});
});
