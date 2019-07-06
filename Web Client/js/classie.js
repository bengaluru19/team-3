/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) ***REMOVED***

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) ***REMOVED***
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
***REMOVED***

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) ***REMOVED***
  hasClass = function( elem, c ) ***REMOVED***
    return elem.classList.contains( c );
  ***REMOVED***;
  addClass = function( elem, c ) ***REMOVED***
    elem.classList.add( c );
  ***REMOVED***;
  removeClass = function( elem, c ) ***REMOVED***
    elem.classList.remove( c );
  ***REMOVED***;
***REMOVED***
else ***REMOVED***
  hasClass = function( elem, c ) ***REMOVED***
    return classReg( c ).test( elem.className );
  ***REMOVED***;
  addClass = function( elem, c ) ***REMOVED***
    if ( !hasClass( elem, c ) ) ***REMOVED***
      elem.className = elem.className + ' ' + c;
    ***REMOVED***
  ***REMOVED***;
  removeClass = function( elem, c ) ***REMOVED***
    elem.className = elem.className.replace( classReg( c ), ' ' );
  ***REMOVED***;
***REMOVED***

function toggleClass( elem, c ) ***REMOVED***
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
***REMOVED***

var classie = ***REMOVED***
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
***REMOVED***;

// transport
if ( typeof define === 'function' && define.amd ) ***REMOVED***
  // AMD
  define( classie );
***REMOVED*** else if ( typeof exports === 'object' ) ***REMOVED***
  // CommonJS
  module.exports = classie;
***REMOVED*** else ***REMOVED***
  // browser global
  window.classie = classie;
***REMOVED***

***REMOVED***)( window );