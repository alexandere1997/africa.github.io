var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});

$('.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 900);
	return false;
});