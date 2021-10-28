/******************************************
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";

   /* ==============================================
    Fixed menu
    =============================================== */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.header_style_01').addClass('fixed-menu');
		} else {
			$('.header_style_01').removeClass('fixed-menu');
		}
	});
	
	
   /* ==============================================
		Scroll to top  
	============================================== */
		
	if ($('#scroll-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#scroll-to-top').addClass('show');
				} else {
					$('#scroll-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#scroll-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

    /* ==============================================
       LOADER -->
        =============================================== */

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
	
	
	/* ==============================================
     FUN FACTS -->
     =============================================== */
      
/*kirti home banner carousel*/

$('#myCarousel').carousel();
var winWidth = $(window).innerWidth();
$(window).resize(function () {

    if ($(window).innerWidth() < winWidth) {
        $('.carousel-inner>.item>img').css({
            'min-width': winWidth, 'width': winWidth
        });
    }
    else {
        winWidth = $(window).innerWidth();
        $('.carousel-inner>.item>img').css({
            'min-width': '', 'width': ''
        });
    }
});


jQuery(document).ready(function(){
    var $ = jQuery;
    var $carousel = $('.carousel');
    
    if($carousel.find('.carousel-inner > .item').size() <= 1) {
      $carousel.find('.carousel-control').remove();
      $carousel.find('.carousel-indicators').remove();
    }
    
    $carousel.find('.carousel-inner > .item').each(function(i) {
      (i === 0) ? $carousel.find('.carousel-indicators').append("<li data-target='#"+$carousel.attr('id')+"' data-slide-to='"+i+"' class='active'></li>") : $carousel.find('.carousel-indicators').append("<li data-target='#"+$carousel.attr('id')+"' data-slide-to='"+i+"'></li>");
      var src = $(this).find('img').attr('src');
      if(src) {
        $(this).css('background','url('+src+')');
      }
    });
    $carousel.find('.carousel-inner > .item').first().addClass('active');
  });
/* kirti home carousel end */




	
	$(".slider-wrapper").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
       
        rtl:true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 700
        
       
    });

    /* ==============================================
     TOOLTIP -->
     =============================================== */
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    /* ==============================================
     CONTACT -->
     =============================================== */
    jQuery(document).ready(function() {
        $('#contactform').submit(function() {
            var action = $(this).attr('action');
            $("#message").slideUp(750, function() {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');
                $.post(action, {
                        first_name: $('#first_name').val(),
                        last_name: $('#last_name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        select_service: $('#select_service').val(),
                        select_price: $('#select_price').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');
                    }
                );
            });
            return false;
        });
    });

    /* ==============================================
     CODE WRAPPER -->
     =============================================== */

    $('.code-wrapper').on("mousemove", function(e) {
        var offsets = $(this).offset();
        var fullWidth = $(this).width();
        var mouseX = e.pageX - offsets.left;

        if (mouseX < 0) {
            mouseX = 0;
        } else if (mouseX > fullWidth) {
            mouseX = fullWidth
        }

        $(this).parent().find('.divider-bar').css({
            left: mouseX,
            transition: 'none'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(' + (mouseX) + 'px)',
            transition: 'none'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(' + (-1 * mouseX) + 'px)',
            transition: 'none'
        });
    });
    $('.divider-wrapper').on("mouseleave", function() {
        $(this).parent().find('.divider-bar').css({
            left: '50%',
            transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(50%)',
            transition: 'all .3s'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(-50%)',
            transition: 'all .3s'
        });
    });

})(jQuery);




/* Kirti Home */
$(".slider-wrapper1").owlCarousel({
    items: 1,  
    
    autoplay: true,
    loop: true,
    
    mouseDrag: false,
    touchDrag: false,
    smartSpeed: 700

});
/*Kirti Home */
/* kirti home carousel */
(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop:true,
        autoplay:true,
        // interval: 500,
    //    autoplayTimeout:5000,
       autoplayHoverPause:true,
	    margin:30,
	    // animateOut: 'fadeOut',
	    // animateIn: 'fadeIn',
	    nav:true,
	    
	    items: 1,
	    navText :  ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	    responsive:{
	      0:{
	        items:1.3
           

            
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:3
	      }
	    }
		});

	};
	carousel();

})(jQuery);
/* Home Carousel end */
