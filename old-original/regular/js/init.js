/*-----------------------------------------------------------------------------------*/
/*  vlog
/*-----------------------------------------------------------------------------------*/
$(window).load(function(){
  'use strict';
  var vlog_selectors = $('.vlog-filter li a');
  if(vlog_selectors!='undefined'){
    var vlog = $('.vlog-items');
    vlog.isotope({
      itemSelector : 'li',
      layoutMode : 'fitRows'
    });
    vlog_selectors.on('click', function(){
      vlog_selectors.removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      vlog.isotope({ filter: selector });
      return false;
    });
  }
});

jQuery(function($) {
'use strict';
	$('.tile-progress .tile-header').matchHeight();

	var footerHeight = jQuery('#footer-wrapper').outerHeight();
	jQuery('#content-wrapper').css('margin-bottom', footerHeight );

	var windowsHeight = jQuery(window).height();
	var navHeight = jQuery('navbar-fixed-top').outerHeight();
	var newHeight = windowsHeight - navHeight + 30;
    jQuery('#main-slider').css('height', newHeight + 'px');
    jQuery('#single-page-slider').css('min-height', windowsHeight/3 + 'px');

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false,
		theme: 'light_square'
	});	

	jQuery('.prevbg').click(function(x) { x.preventDefault(); jQuery('body').data('backstretch').prev(); });
  	jQuery('.nextbg').click(function(x) { x.preventDefault(); jQuery('body').data('backstretch').prev(); });
});

/*-----------------------------------------------------------------------------------*/
/*  FANCY NAV
/*-----------------------------------------------------------------------------------*/
$(window).scroll(function() {
'use strict';
    var scroll_pos = 0;
    $(document).scroll(function() { 
        var windowsHeight = $(window).height();
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > windowsHeight) {     	        
            $('.navbar-fixed-top').removeClass('opaqued');
        } else {
            $('.navbar-fixed-top').addClass('opaqued');
        }
    });

  	if  ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 1000 ){
	    $('#footer-wrapper').css('z-index','4');
	} else {
		$('#footer-wrapper').css('z-index','1');
	}

});

jQuery(document).ready(function($){
'use strict';
  var windowsHeight = $(window).height();
  scroll_pos = $(this).scrollTop();
  if(scroll_pos > windowsHeight) {              
      $('.navbar-fixed-top').removeClass('opaqued');
  } else {
      $('.navbar-fixed-top').addClass('opaqued');
  }
  if  ( ($(document).height() - $(window).height()) - $(window).scrollTop() < 1000 ){
      $('#footer-wrapper').css('z-index','4');
    } else {
      $('#footer-wrapper').css('z-index','1');
   }
});


/*-----------------------------------------------------------------------------------*/
/*  SEARCH BAR
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
  jQuery('#search-wrapper, #search-wrapper input').hide();

	jQuery('span.search-trigger').click(function(){
		jQuery('#search-wrapper').slideToggle(0, function() {
			var check=$(this).is(":hidden");
			if(check == true) {
		  		jQuery('#search-wrapper input').fadeOut(600);
			} else {
				jQuery("#search-wrapper input").focus();
				jQuery('#search-wrapper input').slideDown(200);
			}
		});
	});

});

/*-----------------------------------------------------------------------------------*/
/*  NICESCROLL
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
'use strict';
    jQuery("body").niceScroll({
      cursorcolor: '#202020',
      cursorwidth: 15,
      cursorborderradius: 0,
      cursorborder: '0px solid #fff',
      zindex: 10
    });
});

/*-----------------------------------------------------------------------------------*/
/*  ANIMATE
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
  jQuery('.fade-up, .fade-down, .bounce-in, .flip-in').addClass('no-display');
  jQuery('.bounce-in').one('inview', function() { 
    jQuery(this).addClass('animated bounceIn appear');
  });
  jQuery('.flip-in').one('inview', function() { 
    jQuery(this).addClass('animated flipInY appear');
  });
  jQuery('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  jQuery('.fade-up').one('inview', function() {
    jQuery(this).addClass('animated fadeInUp appear');
  });
  jQuery('.fade-down').one('inview', function() {
    jQuery(this).addClass('animated fadeInDown appear');
  });

});

/*-----------------------------------------------------------------------------------*/
/*  SNOOOOOOOOTH SCROLL - SO SMOOTH
/*-----------------------------------------------------------------------------------*/
$(function() {
'use strict';
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
					}, 1000);
				return false;
			}
		}
	});
});

/*-----------------------------------------------------------------------------------*/
/*  CAROUSEL
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
'use strict';
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });

	$('#scroller').carousel({
	    pause: true,
	    interval: 4000,
	});

});

/*-----------------------------------------------------------------------------------*/
/*  CONTACT FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';

  $('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(750,function() {
    $('#message').hide();
    $('#submit').attr('disabled','disabled');
    $.post(action, {
      name: $('#name').val(),
      email: $('#email').val(),
      website: $('#website').val(),
      comments: $('#comments').val()
    },
      function(data){
        document.getElementById('message').innerHTML = data;
        $('#message').slideDown('slow');
        $('#submit').removeAttr('disabled');
        if(data.match('success') != null) $('#contactform').slideUp('slow');
        $(window).trigger('resize');
      }
    );
    });
    return false;
  });
  
});

/*-----------------------------------------------------------------------------------*/
/*  PRELOADER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });
});