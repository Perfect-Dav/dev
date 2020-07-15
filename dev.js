$(document).ready(function(){
	$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
	$('#back-to-top').fadeIn();
	} else {
	  $('#back-to-top').fadeOut();
}
});
	$('#back-to-top').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 400);
		return false;
	});
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){
  window.location.hash = hash;
});
    }
  });
});
