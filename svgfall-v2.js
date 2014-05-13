/*! SVGfall - SVG with reliabale fallback. You can safely use SVG as image tags, with a regular image tag. Author: Agustín Amenabar, Médula Diseño, 2014 | License: MIT/GPLv2 **Forked from picturefill ny: Scott Jehl */

(function( w ){
	
	// Enable strict mode // no idea what this does
	"use strict";

	//do we have Modernizr? either way test for SVG.
	w.hasSvgSupport='no-svg';
	if(window.Modernizr !== undefined && window.Modernizr.svg !== undefined){
		w.hasSvgSupport = Modernizr.svg ? 'svg' : 'no-svg';
	}
	else{
		var ns = {'svg': 'http://www.w3.org/2000/svg'};
		if ( !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect ){//this is the test Modernizr does for getting svg support
			w.hasSvgSupport = 'svg';
		}
	}

	w.svgfall = function() {
		if( w.hasSvgSupport === 'svg' ) { //If we have support for SVG do nothing
			return;
		}

		var ps = w.document.getElementsByTagName( "img" );//we are going to look for <img> tags
		
		// Loop the images
		for( var i = 0, il = ps.length; i < il; i++ ){
			if( ps[ i ].getAttribute( "data-svgfall" ) !== null ){
				var source = ps[ i ].getAttribute( "data-fallback" );//look for explicit fallback

				if( source === null ){ //if there isn't an explicit fallback
					//replace the .svg extension for a .png extention, assuming it's a well formed path
					var pngSrc = ps[ i ].getAttribute( "src" );
					source = pngSrc.substr(0, pngSrc.lastIndexOf('.'))+'.png' || pngSrc;
				}
				
				ps[ i ].setAttribute( "src", source );
			}
		}
	};
	
	// Run on domready (w.load as a fallback)
	if( w.addEventListener ){
		w.addEventListener( "DOMContentLoaded", function(){
			w.svgfall();
			// Run once only
			w.removeEventListener( "load", w.svgfall, false );
		}, false );
		w.addEventListener( "load", w.svgfall, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onload", w.svgfall );
	}
	
}( this ));

