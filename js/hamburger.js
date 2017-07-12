
$(document).ready(function(){
	$('.menu').click(function(){
		$(this).toggleClass('active');
		$('.top_nav').toggleClass('active');
		return false;
	});
});