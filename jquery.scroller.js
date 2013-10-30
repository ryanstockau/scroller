jQuery(document).ready(function($){
	$.fn.extend({
		
		scroller: function( args ) {
			
			return this.each(function() {
           		var obj = $(this);	
 
				// This is the easiest way to have default options.
				var options = $.extend({
					// These are the defaults.
					keepHash:false,
					offset:0,
					duration:1300
				}, args );
								
				$(this).click( function( e ) {
					obj = $(this);
					e.preventDefault();
					
					
					element_top_offset = obj.attr('data-scroller-offset');
					if ( element_top_offset === undefined ) {
						element_top_offset = 0;
					} else {
						element_top_offset = +element_top_offset;
					}
					
					offset = options.offset + element_top_offset;
					
					if ( obj.attr('data-scroller-scroll-to') === undefined ) {
						the_hash = this.hash;
					} else {
						the_hash = obj.attr('data-scroller-scroll-to');						
					}
					if ( obj.attr('data-scroller-keep-hash') === undefined ) {
						keep_hash = options.keepHash;
					} else {
						keep_hash = obj.attr('data-scroller-keep-hash');
					}
					if ( obj.attr('data-scroller-duration') === undefined ) {
						duration = options.duration;
					} else {
						duration = obj.attr('data-scroller-duration');
					}					
					if ( keep_hash ) {
						scroll_to_with_hash( the_hash, offset, duration );
					} else {
						scroll_to( the_hash, offset, duration );
					}
					return false;	
				});
			});
		}
		
	});
	
	
	
	function scroll_to_with_hash( target, offset, duration ) {
		/*target = target.replace('#', ''); //( target.indexOf("#") + 1); // Remove # 
		temp_target = target+'_temporaryfix';
		$('#'+target).attr('id',temp_target);
		window.location.hash = target;
		scroll_to( '#'+temp_target );
		$('#'+temp_target).attr('id',target);*/
		
		target = target.replace('#', ''); //( target.indexOf("#") + 1); // Remove # 
		temp_target = target+'temporaryfixignore123';
		$('#'+target).attr('id',temp_target);
		window.location.hash = target;
		$('#'+temp_target).attr('id',target);
		scroll_to( '#'+target, offset );
	}
	
	function scroll_to( target, offset, duration ) {
		var letters = /^[\.#0-9a-zA-Z-]+$/; 
		if ( !target.match(letters) ) {
			console.log('Not scrolling to element - invalid target name "' + target + '"');
			return;
		}
		if ( $(target).length ) {
			scroll_point = $(target).offset().top + offset;
			// console.log( 'Scrolling to ' + scroll_point + 'px' );
			$('html, body').animate({
				scrollTop: (scroll_point)
			}, duration);		
		} else {
			console.log('Not scrolling to element - target "' + target + '" doesn\'t exist');
		}
	}
	
	
});
