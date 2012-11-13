# SVGfall

A fast way to use SVG images with a reliable fallback, based on the [Picturefill](https://github.com/scottjehl/picturefill/) syntax using `div`s, for downloading only one asset.

* Author: Agustín Amenabar (c) 2012
* License: MIT/GPLv2

**Demo URL:** [http://baamenabar.github.com/svgfall/](http://baamenabar.github.com/svgfall/)

## Size and delivery

Currently, `svgfall.js` compresses to around 541bytes (~0.53kb), after minify and gzip. To minify, you might try these online tools: [Uglify]:(http://marijnhaverbeke.nl/uglifyjs), [Yahoo Compressor]:(http://refresh-sf.com/yui/), or [Closure Compiler](http://closure-compiler.appspot.com/home). Serve with gzip compression.

## Markup pattern and explanation

Mark up your SVG images like this. 

```html
	<div data-svgfall data-alt="An Octocat, typical mascot of Github">
		<div data-src="external/imgs/Octocat.svg" data-support="svg"></div>
		<div data-src="external/imgs/Octocat.png" data-support="no-svg"></div>

		<!-- Fallback content for non-JS browsers. -->
		<noscript>
			<img src="external/imgs/Octocat.png" alt="An Octocat, typical mascot of Github">
		</noscript>
	</div>
```

### Explained...

Notes on the markup above...

* The `div[data-svgfall]` element's `alt` attribute is used as alternate text for the generated `img` element.
* The `div[data-svgfall]` element must have 2 `source` elements, one for SVG support one for the absence of support. 
* Each `div[data-src]` element must have a `data-src` attribute specifying the image path. 
* The `div[data-support]` tells the script which `source` is the svg and wich one is the fallback.
* If the `div[data-support]` is not provided the script will try to infer the type of file from the file extension, if found.
* The `noscript` element wraps the fallback image for non-JavaScript environments, and including this wrapper prevents browsers from fetching the fallback image during page load (causing unnecessary overhead). Generally, it's a good idea to reference the fallback image here, as it's likely to be loaded in older/underpowered mobile devices.
	
### Image size

As you may sometimes want to control the image size in the markup you can set the image size as an additional data attribute.


```html
	<div data-svgfall data-alt="An Octocat, typical mascot of Github" data-width="350" data-height="350">
		<div data-src="external/imgs/Octocat.svg" data-support="svg"></div>
		<div data-src="external/imgs/Octocat.png" data-support="no-svg"></div>

		<!-- Fallback content for non-JS browsers. -->
		<noscript>
			<img src="external/imgs/Octocat.png" alt="An Octocat, typical mascot of Github">
		</noscript>
	</div>
```

## Support

SVGfall supports a broad range of browsers and devices (there are currently no known unsupported browsers), provided that you stick with the markup conventions provided. (based on picturefill's claim)

