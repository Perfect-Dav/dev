// carousel

$("#testimonial-carousel").carousel({
  interval: 1000,
  touch: true
});

//counterUp

function counter() {
	var oTop;
	if ($('.counterUp').length !== 0) {
		oTop = $('.counterUp').offset().top - window.innerHeight;
}
  if ($(window).scrollTop() > oTop) {
	   $('.counterUp').each(function () {
		 var $this = $(this),
		 countTo = $this.attr('data-count');
	$({
		countNum: $this.text()
		}).animate({
		countNum: countTo
		}, {
		duration: 5000,
		easing: 'swing',
		step: function () {
		$this.text(Math.floor(this.countNum));
		},
		complete: function () {
		$this.text(this.countNum);
		}
	});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

//contact form

(function ($) {
    'use strict';

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }

    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });

})(jQuery);

// scroll to top

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

// smooth scrolling

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

// nav

$(window).scroll(function(){
   var scroll = $(window).scrollTop();
   if(scroll < 400){
       $('.fixed-top').css('background', 'rgba(71,71,71,1)');
       $('.nav-link').css('color', '#ffffff');
       $('.navbar-toggler').css('background', 'rgba(71,71,71,1)');
   } else{
       $('.fixed-top').css('background', '#fcfcfc');
       $('.nav-link').css('color', '#000000');
       $('.navbar-toggler').css('background', '#d41455');
   }
});
