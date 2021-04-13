$(document).ready(function() {
	$('.do-item-name').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

