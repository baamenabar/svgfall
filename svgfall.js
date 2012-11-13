/*! SVGfall - SVG with reliabale fallback. You can safely use SVG as image tags, with a regular image tag. Author: Agustín Amenabar, Médula Diseño, 2012 | License: MIT/GPLv2 **Forked from picturefill ny: Scott Jehl */

(function( w ){
	
	// Enable strict mode // no idea what this does
	"use strict";

	//do we have Modernizr? either way test for SVG.
	w.hasSvgSupport='no-svg';
	if(window.Modernizr !== undefined){
		w.hasSvgSupport = Modernizr.svg ? 'svg' : 'no-svg';
	}
	else{
		var ns = {'svg': 'http://www.w3.org/2000/svg'};
		if ( !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect ){//this is the test Modernizr does for getting svg support
			w.hasSvgSupport = 'svg';
		}
	}

	w.svgfall = function() {
		var ps = w.document.getElementsByTagName( "div" );
		
		// Loop the images
		for( var i = 0, il = ps.length; i < il; i++ ){
			if( ps[ i ].getAttribute( "data-svgfall" ) !== null ){

				var sources = ps[ i ].getElementsByTagName( "div" ),
					matches = [];
			
				// See if which sources match
				for( var j = 0, jl = sources.length; j < jl; j++ ){
					var support = sources[ j ].getAttribute( "data-support" );
					if( !support ){
						support = sources[ j ].getAttribute( "data-src" ).substr(-4) == '.svg' ? 'svg' : 'no-svg';
					}
					if( support == w.hasSvgSupport ){
						matches.push( sources[ j ] );
					}
				}

				// Find any existing img element in the picture element
				var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

				if( matches.length ){			
					if( !picImg ){
						picImg = w.document.createElement( "img" );
						picImg.alt = ps[ i ].getAttribute( "data-alt" );
						var imgW = ps[ i ].getAttribute( "data-width" );
						if(imgW)picImg.width = imgW;
						var imgH = ps[ i ].getAttribute( "data-height" );
						if(imgH)picImg.height = imgH;
						ps[ i ].appendChild( picImg );
					}
					
					picImg.src =  matches.pop().getAttribute( "data-src" );
				}
				else if( picImg ){
					ps[ i ].removeChild( picImg );
				}
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

