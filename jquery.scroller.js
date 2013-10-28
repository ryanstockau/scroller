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
	
});
