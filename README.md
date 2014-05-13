# SVGfall Speed edition (V2)

A fast way to use SVG images with a reliable fallback, based on the [Picturefill](https://github.com/scottjehl/picturefill/) syntax using `img`s, for downloading fallback assets only when needed.

* Author: Agustín Amenabar (c) 2014
* License: MIT/GPLv2

**Demo URL:** [http://baamenabar.github.com/svgfall/](http://baamenabar.github.com/svgfall/)

## Size and delivery

Currently, `svgfall-v2.js` compresses to around 458bytes (~0.44kb), after minify and gzip. To minify, you might try these online tools: [Yahoo Compressor]:(http://refresh-sf.com/yui/), or [Closure Compiler](http://closure-compiler.appspot.com/home). Serve with gzip compression.

## Markup pattern and explanation

Mark up your SVG images like this. 

```html
	<img src="external/imgs/Octocat.svg" data-svgfall alt="The Octocat, the Github mascot">
	<noscript><img src="external/imgs/Octocat.png" alt="The Octocat, the Github mascot"></noscript>
```

### Explained...

Notes on the markup above...

* You just need to add `data-svgfall` data attribute to the `img` element.
* The script only kicks in when svg support fails.
* The script will try to look for an explicit alternative stored in the `data-fallback` data attribute, if it doesn't find the attribute, it will change the `.svg` extension in the `src` attribute and change it for `.png` 
* The `noscript` element wraps the fallback image for non-JavaScript environments, and including this wrapper prevents browsers from fetching the fallback image during page load. 

Markup for explicit alternative:

```html
	<img src="external/imgs/Octocat.svg" data-svgfall alt="The Octocat, the Github mascot" data-fallback="external/imgs/Octocat.jpg">
		<noscript><img src="external/imgs/Octocat.png" alt="The Octocat, the Github mascot"></noscript>
```

## Support

SVGfall supports a broad range of browsers and devices (there are currently no known unsupported browsers), provided that you stick with the markup conventions provided. (based on picturefill's claim)

## Original SVGfall

The original script can be found on the [V1 branch](https://github.com/baamenabar/svgfall/tree/v1) and is recomended when an important portion of your userbase is on IE8 and old Androids with low connection speeds. This current version favours the speed for supporting browsers.
