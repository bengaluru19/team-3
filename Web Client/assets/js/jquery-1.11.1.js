/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */

(function( global, factory ) ***REMOVED***

	if ( typeof module === "object" && typeof module.exports === "object" ) ***REMOVED***
		// For CommonJS and CommonJS-like environments where a proper window is present,
		// execute the factory and get jQuery
		// For environments that do not inherently posses a window with a document
		// (such as Node.js), expose a jQuery-making factory as module.exports
		// This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) ***REMOVED***
				if ( !w.document ) ***REMOVED***
					throw new Error( "jQuery requires a window with a document" );
				***REMOVED***
				return factory( w );
			***REMOVED***;
	***REMOVED*** else ***REMOVED***
		factory( global );
	***REMOVED***

// Pass this if window is not defined yet
***REMOVED***(typeof window !== "undefined" ? window : this, function( window, noGlobal ) ***REMOVED***

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = ***REMOVED******REMOVED***;

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = ***REMOVED******REMOVED***;



var
	version = "1.11.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) ***REMOVED***
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	***REMOVED***,

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) ***REMOVED***
		return letter.toUpperCase();
	***REMOVED***;

jQuery.fn = jQuery.prototype = ***REMOVED***
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() ***REMOVED***
		return slice.call( this );
	***REMOVED***,

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) ***REMOVED***
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	***REMOVED***,

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) ***REMOVED***

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	***REMOVED***,

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) ***REMOVED***
		return jQuery.each( this, callback, args );
	***REMOVED***,

	map: function( callback ) ***REMOVED***
		return this.pushStack( jQuery.map(this, function( elem, i ) ***REMOVED***
			return callback.call( elem, i, elem );
		***REMOVED***));
	***REMOVED***,

	slice: function() ***REMOVED***
		return this.pushStack( slice.apply( this, arguments ) );
	***REMOVED***,

	first: function() ***REMOVED***
		return this.eq( 0 );
	***REMOVED***,

	last: function() ***REMOVED***
		return this.eq( -1 );
	***REMOVED***,

	eq: function( i ) ***REMOVED***
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	***REMOVED***,

	end: function() ***REMOVED***
		return this.prevObject || this.constructor(null);
	***REMOVED***,

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
***REMOVED***;

jQuery.extend = jQuery.fn.extend = function() ***REMOVED***
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || ***REMOVED******REMOVED***,
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) ***REMOVED***
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || ***REMOVED******REMOVED***;
		i++;
	***REMOVED***

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) ***REMOVED***
		target = ***REMOVED******REMOVED***;
	***REMOVED***

	// extend jQuery itself if only one argument is passed
	if ( i === length ) ***REMOVED***
		target = this;
		i--;
	***REMOVED***

	for ( ; i < length; i++ ) ***REMOVED***
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) ***REMOVED***
			// Extend the base object
			for ( name in options ) ***REMOVED***
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) ***REMOVED***
					continue;
				***REMOVED***

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) ***REMOVED***
					if ( copyIsArray ) ***REMOVED***
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					***REMOVED*** else ***REMOVED***
						clone = src && jQuery.isPlainObject(src) ? src : ***REMOVED******REMOVED***;
					***REMOVED***

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				***REMOVED*** else if ( copy !== undefined ) ***REMOVED***
					target[ name ] = copy;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Return the modified object
	return target;
***REMOVED***;

jQuery.extend(***REMOVED***
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) ***REMOVED***
		throw new Error( msg );
	***REMOVED***,

	noop: function() ***REMOVED******REMOVED***,

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) ***REMOVED***
		return jQuery.type(obj) === "function";
	***REMOVED***,

	isArray: Array.isArray || function( obj ) ***REMOVED***
		return jQuery.type(obj) === "array";
	***REMOVED***,

	isWindow: function( obj ) ***REMOVED***
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	***REMOVED***,

	isNumeric: function( obj ) ***REMOVED***
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0;
	***REMOVED***,

	isEmptyObject: function( obj ) ***REMOVED***
		var name;
		for ( name in obj ) ***REMOVED***
			return false;
		***REMOVED***
		return true;
	***REMOVED***,

	isPlainObject: function( obj ) ***REMOVED***
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) ***REMOVED***
			return false;
		***REMOVED***

		try ***REMOVED***
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) ***REMOVED***
				return false;
			***REMOVED***
		***REMOVED*** catch ( e ) ***REMOVED***
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		***REMOVED***

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( support.ownLast ) ***REMOVED***
			for ( key in obj ) ***REMOVED***
				return hasOwn.call( obj, key );
			***REMOVED***
		***REMOVED***

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) ***REMOVED******REMOVED***

		return key === undefined || hasOwn.call( obj, key );
	***REMOVED***,

	type: function( obj ) ***REMOVED***
		if ( obj == null ) ***REMOVED***
			return obj + "";
		***REMOVED***
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	***REMOVED***,

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) ***REMOVED***
		if ( data && jQuery.trim( data ) ) ***REMOVED***
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) ***REMOVED***
				window[ "eval" ].call( window, data );
			***REMOVED*** )( data );
		***REMOVED***
	***REMOVED***,

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) ***REMOVED***
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	***REMOVED***,

	nodeName: function( elem, name ) ***REMOVED***
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	***REMOVED***,

	// args is for internal usage only
	each: function( obj, callback, args ) ***REMOVED***
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) ***REMOVED***
			if ( isArray ) ***REMOVED***
				for ( ; i < length; i++ ) ***REMOVED***
					value = callback.apply( obj[ i ], args );

					if ( value === false ) ***REMOVED***
						break;
					***REMOVED***
				***REMOVED***
			***REMOVED*** else ***REMOVED***
				for ( i in obj ) ***REMOVED***
					value = callback.apply( obj[ i ], args );

					if ( value === false ) ***REMOVED***
						break;
					***REMOVED***
				***REMOVED***
			***REMOVED***

		// A special, fast, case for the most common use of each
		***REMOVED*** else ***REMOVED***
			if ( isArray ) ***REMOVED***
				for ( ; i < length; i++ ) ***REMOVED***
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) ***REMOVED***
						break;
					***REMOVED***
				***REMOVED***
			***REMOVED*** else ***REMOVED***
				for ( i in obj ) ***REMOVED***
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) ***REMOVED***
						break;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return obj;
	***REMOVED***,

	// Support: Android<4.1, IE<9
	trim: function( text ) ***REMOVED***
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	***REMOVED***,

	// results is for internal usage only
	makeArray: function( arr, results ) ***REMOVED***
		var ret = results || [];

		if ( arr != null ) ***REMOVED***
			if ( isArraylike( Object(arr) ) ) ***REMOVED***
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			***REMOVED*** else ***REMOVED***
				push.call( ret, arr );
			***REMOVED***
		***REMOVED***

		return ret;
	***REMOVED***,

	inArray: function( elem, arr, i ) ***REMOVED***
		var len;

		if ( arr ) ***REMOVED***
			if ( indexOf ) ***REMOVED***
				return indexOf.call( arr, elem, i );
			***REMOVED***

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) ***REMOVED***
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) ***REMOVED***
					return i;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return -1;
	***REMOVED***,

	merge: function( first, second ) ***REMOVED***
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) ***REMOVED***
			first[ i++ ] = second[ j++ ];
		***REMOVED***

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) ***REMOVED***
			while ( second[j] !== undefined ) ***REMOVED***
				first[ i++ ] = second[ j++ ];
			***REMOVED***
		***REMOVED***

		first.length = i;

		return first;
	***REMOVED***,

	grep: function( elems, callback, invert ) ***REMOVED***
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) ***REMOVED***
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) ***REMOVED***
				matches.push( elems[ i ] );
			***REMOVED***
		***REMOVED***

		return matches;
	***REMOVED***,

	// arg is for internal usage only
	map: function( elems, callback, arg ) ***REMOVED***
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) ***REMOVED***
			for ( ; i < length; i++ ) ***REMOVED***
				value = callback( elems[ i ], i, arg );

				if ( value != null ) ***REMOVED***
					ret.push( value );
				***REMOVED***
			***REMOVED***

		// Go through every key on the object,
		***REMOVED*** else ***REMOVED***
			for ( i in elems ) ***REMOVED***
				value = callback( elems[ i ], i, arg );

				if ( value != null ) ***REMOVED***
					ret.push( value );
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// Flatten any nested arrays
		return concat.apply( [], ret );
	***REMOVED***,

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) ***REMOVED***
		var args, proxy, tmp;

		if ( typeof context === "string" ) ***REMOVED***
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		***REMOVED***

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) ***REMOVED***
			return undefined;
		***REMOVED***

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() ***REMOVED***
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		***REMOVED***;

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	***REMOVED***,

	now: function() ***REMOVED***
		return +( new Date() );
	***REMOVED***,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
***REMOVED***

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) ***REMOVED***
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
***REMOVED***

function isArraylike( obj ) ***REMOVED***
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) ***REMOVED***
		return false;
	***REMOVED***

	if ( obj.nodeType === 1 && length ) ***REMOVED***
		return true;
	***REMOVED***

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
***REMOVED***
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
(function( window ) ***REMOVED***

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) ***REMOVED***
		if ( a === b ) ***REMOVED***
			hasDuplicate = true;
		***REMOVED***
		return 0;
	***REMOVED***,

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = (***REMOVED******REMOVED***).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) ***REMOVED***
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) ***REMOVED***
			if ( this[i] === elem ) ***REMOVED***
				return i;
			***REMOVED***
		***REMOVED***
		return -1;
	***REMOVED***,

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = ***REMOVED***
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	***REMOVED***,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^***REMOVED***]+\***REMOVED***\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]***REMOVED***1,6***REMOVED***" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) ***REMOVED***
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	***REMOVED***;

// Optimize for push.apply( _, NodeList )
try ***REMOVED***
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
***REMOVED*** catch ( e ) ***REMOVED***
	push = ***REMOVED*** apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) ***REMOVED***
			push_native.apply( target, slice.call(els) );
		***REMOVED*** :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) ***REMOVED***
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) ***REMOVED******REMOVED***
			target.length = j - 1;
		***REMOVED***
	***REMOVED***;
***REMOVED***

function Sizzle( selector, context, results, seed ) ***REMOVED***
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) ***REMOVED***
		setDocument( context );
	***REMOVED***

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) ***REMOVED***
		return results;
	***REMOVED***

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) ***REMOVED***
		return [];
	***REMOVED***

	if ( documentIsHTML && !seed ) ***REMOVED***

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) ***REMOVED***
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) ***REMOVED***
				if ( nodeType === 9 ) ***REMOVED***
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) ***REMOVED***
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) ***REMOVED***
							results.push( elem );
							return results;
						***REMOVED***
					***REMOVED*** else ***REMOVED***
						return results;
					***REMOVED***
				***REMOVED*** else ***REMOVED***
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) ***REMOVED***
						results.push( elem );
						return results;
					***REMOVED***
				***REMOVED***

			// Speed-up: Sizzle("TAG")
			***REMOVED*** else if ( match[2] ) ***REMOVED***
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			***REMOVED*** else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) ***REMOVED***
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			***REMOVED***
		***REMOVED***

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) ***REMOVED***
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) ***REMOVED***
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) ***REMOVED***
					nid = old.replace( rescape, "\\$&" );
				***REMOVED*** else ***REMOVED***
					context.setAttribute( "id", nid );
				***REMOVED***
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) ***REMOVED***
					groups[i] = nid + toSelector( groups[i] );
				***REMOVED***
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			***REMOVED***

			if ( newSelector ) ***REMOVED***
				try ***REMOVED***
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				***REMOVED*** catch(qsaError) ***REMOVED***
				***REMOVED*** finally ***REMOVED***
					if ( !old ) ***REMOVED***
						context.removeAttribute("id");
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
***REMOVED***

/**
 * Create key-value caches of limited size
 * @returns ***REMOVED***Function(string, Object)***REMOVED*** Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() ***REMOVED***
	var keys = [];

	function cache( key, value ) ***REMOVED***
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) ***REMOVED***
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		***REMOVED***
		return (cache[ key + " " ] = value);
	***REMOVED***
	return cache;
***REMOVED***

/**
 * Mark a function for special use by Sizzle
 * @param ***REMOVED***Function***REMOVED*** fn The function to mark
 */
function markFunction( fn ) ***REMOVED***
	fn[ expando ] = true;
	return fn;
***REMOVED***

/**
 * Support testing using an element
 * @param ***REMOVED***Function***REMOVED*** fn Passed the created div and expects a boolean result
 */
function assert( fn ) ***REMOVED***
	var div = document.createElement("div");

	try ***REMOVED***
		return !!fn( div );
	***REMOVED*** catch (e) ***REMOVED***
		return false;
	***REMOVED*** finally ***REMOVED***
		// Remove from its parent by default
		if ( div.parentNode ) ***REMOVED***
			div.parentNode.removeChild( div );
		***REMOVED***
		// release memory in IE
		div = null;
	***REMOVED***
***REMOVED***

/**
 * Adds the same handler for all of the specified attrs
 * @param ***REMOVED***String***REMOVED*** attrs Pipe-separated list of attributes
 * @param ***REMOVED***Function***REMOVED*** handler The method that will be applied
 */
function addHandle( attrs, handler ) ***REMOVED***
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) ***REMOVED***
		Expr.attrHandle[ arr[i] ] = handler;
	***REMOVED***
***REMOVED***

/**
 * Checks document order of two siblings
 * @param ***REMOVED***Element***REMOVED*** a
 * @param ***REMOVED***Element***REMOVED*** b
 * @returns ***REMOVED***Number***REMOVED*** Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) ***REMOVED***
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) ***REMOVED***
		return diff;
	***REMOVED***

	// Check if b follows a
	if ( cur ) ***REMOVED***
		while ( (cur = cur.nextSibling) ) ***REMOVED***
			if ( cur === b ) ***REMOVED***
				return -1;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return a ? 1 : -1;
***REMOVED***

/**
 * Returns a function to use in pseudos for input types
 * @param ***REMOVED***String***REMOVED*** type
 */
function createInputPseudo( type ) ***REMOVED***
	return function( elem ) ***REMOVED***
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	***REMOVED***;
***REMOVED***

/**
 * Returns a function to use in pseudos for buttons
 * @param ***REMOVED***String***REMOVED*** type
 */
function createButtonPseudo( type ) ***REMOVED***
	return function( elem ) ***REMOVED***
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	***REMOVED***;
***REMOVED***

/**
 * Returns a function to use in pseudos for positionals
 * @param ***REMOVED***Function***REMOVED*** fn
 */
function createPositionalPseudo( fn ) ***REMOVED***
	return markFunction(function( argument ) ***REMOVED***
		argument = +argument;
		return markFunction(function( seed, matches ) ***REMOVED***
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) ***REMOVED***
				if ( seed[ (j = matchIndexes[i]) ] ) ***REMOVED***
					seed[j] = !(matches[j] = seed[j]);
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

/**
 * Checks a node for validity as a Sizzle context
 * @param ***REMOVED***Element|Object=***REMOVED*** context
 * @returns ***REMOVED***Element|Object|Boolean***REMOVED*** The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) ***REMOVED***
	return context && typeof context.getElementsByTagName !== strundefined && context;
***REMOVED***

// Expose support vars for convenience
support = Sizzle.support = ***REMOVED******REMOVED***;

/**
 * Detects XML nodes
 * @param ***REMOVED***Element|Object***REMOVED*** elem An element or a document
 * @returns ***REMOVED***Boolean***REMOVED*** True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) ***REMOVED***
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
***REMOVED***;

/**
 * Sets document-related variables once based on the current document
 * @param ***REMOVED***Element|Object***REMOVED*** [doc] An element or document object to use to set the document
 * @returns ***REMOVED***Object***REMOVED*** Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) ***REMOVED***
	var hasCompare,
		doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) ***REMOVED***
		return document;
	***REMOVED***

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) ***REMOVED***
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) ***REMOVED***
			parent.addEventListener( "unload", function() ***REMOVED***
				setDocument();
			***REMOVED***, false );
		***REMOVED*** else if ( parent.attachEvent ) ***REMOVED***
			parent.attachEvent( "onunload", function() ***REMOVED***
				setDocument();
			***REMOVED***
		***REMOVED***
	***REMOVED***

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) ***REMOVED***
		div.className = "i";
		return !div.getAttribute("className");
	***REMOVED***

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) ***REMOVED***
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	***REMOVED***

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName ) && assert(function( div ) ***REMOVED***
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	***REMOVED***

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) ***REMOVED***
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	***REMOVED***

	// ID find and filter
	if ( support.getById ) ***REMOVED***
		Expr.find["ID"] = function( id, context ) ***REMOVED***
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) ***REMOVED***
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			***REMOVED***
		***REMOVED***;
		Expr.filter["ID"] = function( id ) ***REMOVED***
			var attrId = id.replace( runescape, funescape );
			return function( elem ) ***REMOVED***
				return elem.getAttribute("id") === attrId;
			***REMOVED***;
		***REMOVED***;
	***REMOVED*** else ***REMOVED***
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) ***REMOVED***
			var attrId = id.replace( runescape, funescape );
			return function( elem ) ***REMOVED***
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			***REMOVED***;
		***REMOVED***;
	***REMOVED***

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) ***REMOVED***
			if ( typeof context.getElementsByTagName !== strundefined ) ***REMOVED***
				return context.getElementsByTagName( tag );
			***REMOVED***
		***REMOVED*** :
		function( tag, context ) ***REMOVED***
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) ***REMOVED***
				while ( (elem = results[i++]) ) ***REMOVED***
					if ( elem.nodeType === 1 ) ***REMOVED***
						tmp.push( elem );
					***REMOVED***
				***REMOVED***

				return tmp;
			***REMOVED***
			return results;
		***REMOVED***;

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) ***REMOVED***
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) ***REMOVED***
			return context.getElementsByClassName( className );
		***REMOVED***
	***REMOVED***;

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) ***REMOVED***
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) ***REMOVED***
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowclip^='']").length ) ***REMOVED***
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			***REMOVED***

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) ***REMOVED***
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			***REMOVED***

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) ***REMOVED***
				rbuggyQSA.push(":checked");
			***REMOVED***
		***REMOVED***

		assert(function( div ) ***REMOVED***
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) ***REMOVED***
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			***REMOVED***

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) ***REMOVED***
				rbuggyQSA.push( ":enabled", ":disabled" );
			***REMOVED***

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		***REMOVED***
	***REMOVED***

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) ***REMOVED***

		assert(function( div ) ***REMOVED***
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		***REMOVED***
	***REMOVED***

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) ***REMOVED***
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		***REMOVED*** :
		function( a, b ) ***REMOVED***
			if ( b ) ***REMOVED***
				while ( (b = b.parentNode) ) ***REMOVED***
					if ( b === a ) ***REMOVED***
						return true;
					***REMOVED***
				***REMOVED***
			***REMOVED***
			return false;
		***REMOVED***;

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) ***REMOVED***

		// Flag for duplicate removal
		if ( a === b ) ***REMOVED***
			hasDuplicate = true;
			return 0;
		***REMOVED***

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) ***REMOVED***
			return compare;
		***REMOVED***

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) ***REMOVED***

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) ***REMOVED***
				return -1;
			***REMOVED***
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) ***REMOVED***
				return 1;
			***REMOVED***

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		***REMOVED***

		return compare & 4 ? -1 : 1;
	***REMOVED*** :
	function( a, b ) ***REMOVED***
		// Exit early if the nodes are identical
		if ( a === b ) ***REMOVED***
			hasDuplicate = true;
			return 0;
		***REMOVED***

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) ***REMOVED***
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		***REMOVED*** else if ( aup === bup ) ***REMOVED***
			return siblingCheck( a, b );
		***REMOVED***

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) ***REMOVED***
			ap.unshift( cur );
		***REMOVED***
		cur = b;
		while ( (cur = cur.parentNode) ) ***REMOVED***
			bp.unshift( cur );
		***REMOVED***

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) ***REMOVED***
			i++;
		***REMOVED***

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	***REMOVED***;

	return doc;
***REMOVED***;

Sizzle.matches = function( expr, elements ) ***REMOVED***
	return Sizzle( expr, null, null, elements );
***REMOVED***;

Sizzle.matchesSelector = function( elem, expr ) ***REMOVED***
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) ***REMOVED***
		setDocument( elem );
	***REMOVED***

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) ***REMOVED***

		try ***REMOVED***
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) ***REMOVED***
				return ret;
			***REMOVED***
		***REMOVED*** catch(e) ***REMOVED******REMOVED***
	***REMOVED***

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
***REMOVED***;

Sizzle.contains = function( context, elem ) ***REMOVED***
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) ***REMOVED***
		setDocument( context );
	***REMOVED***
	return contains( context, elem );
***REMOVED***;

Sizzle.attr = function( elem, name ) ***REMOVED***
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) ***REMOVED***
		setDocument( elem );
	***REMOVED***

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
***REMOVED***;

Sizzle.error = function( msg ) ***REMOVED***
	throw new Error( "Syntax error, unrecognized expression: " + msg );
***REMOVED***;

/**
 * Document sorting and removing duplicates
 * @param ***REMOVED***ArrayLike***REMOVED*** results
 */
Sizzle.uniqueSort = function( results ) ***REMOVED***
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) ***REMOVED***
		while ( (elem = results[i++]) ) ***REMOVED***
			if ( elem === results[ i ] ) ***REMOVED***
				j = duplicates.push( i );
			***REMOVED***
		***REMOVED***
		while ( j-- ) ***REMOVED***
			results.splice( duplicates[ j ], 1 );
		***REMOVED***
	***REMOVED***

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
***REMOVED***;

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param ***REMOVED***Array|Element***REMOVED*** elem
 */
getText = Sizzle.getText = function( elem ) ***REMOVED***
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) ***REMOVED***
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) ***REMOVED***
			// Do not traverse comment nodes
			ret += getText( node );
		***REMOVED***
	***REMOVED*** else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) ***REMOVED***
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) ***REMOVED***
			return elem.textContent;
		***REMOVED*** else ***REMOVED***
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) ***REMOVED***
				ret += getText( elem );
			***REMOVED***
		***REMOVED***
	***REMOVED*** else if ( nodeType === 3 || nodeType === 4 ) ***REMOVED***
		return elem.nodeValue;
	***REMOVED***
	// Do not include comment or processing instruction nodes

	return ret;
***REMOVED***;

Expr = Sizzle.selectors = ***REMOVED***

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: ***REMOVED******REMOVED***,

	find: ***REMOVED******REMOVED***,

	relative: ***REMOVED***
		">": ***REMOVED*** dir: "parentNode", first: true ***REMOVED***,
		" ": ***REMOVED*** dir: "parentNode" ***REMOVED***,
		"+": ***REMOVED*** dir: "previousSibling", first: true ***REMOVED***,
		"~": ***REMOVED*** dir: "previousSibling" ***REMOVED***
	***REMOVED***,

	preFilter: ***REMOVED***
		"ATTR": function( match ) ***REMOVED***
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) ***REMOVED***
				match[3] = " " + match[3] + " ";
			***REMOVED***

			return match.slice( 0, 4 );
		***REMOVED***,

		"CHILD": function( match ) ***REMOVED***
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) ***REMOVED***
				// nth-* requires argument
				if ( !match[3] ) ***REMOVED***
					Sizzle.error( match[0] );
				***REMOVED***

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			***REMOVED*** else if ( match[3] ) ***REMOVED***
				Sizzle.error( match[0] );
			***REMOVED***

			return match;
		***REMOVED***,

		"PSEUDO": function( match ) ***REMOVED***
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) ***REMOVED***
				return null;
			***REMOVED***

			// Accept quoted arguments as-is
			if ( match[3] ) ***REMOVED***
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			***REMOVED*** else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) ***REMOVED***

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			***REMOVED***

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		***REMOVED***
	***REMOVED***,

	filter: ***REMOVED***

		"TAG": function( nodeNameSelector ) ***REMOVED***
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() ***REMOVED*** return true; ***REMOVED*** :
				function( elem ) ***REMOVED***
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				***REMOVED***;
		***REMOVED***,

		"CLASS": function( className ) ***REMOVED***
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) ***REMOVED***
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				***REMOVED***
		***REMOVED***,

		"ATTR": function( name, operator, check ) ***REMOVED***
			return function( elem ) ***REMOVED***
				var result = Sizzle.attr( elem, name );

				if ( result == null ) ***REMOVED***
					return operator === "!=";
				***REMOVED***
				if ( !operator ) ***REMOVED***
					return true;
				***REMOVED***

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			***REMOVED***;
		***REMOVED***,

		"CHILD": function( type, what, argument, first, last ) ***REMOVED***
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) ***REMOVED***
					return !!elem.parentNode;
				***REMOVED*** :

				function( elem, context, xml ) ***REMOVED***
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) ***REMOVED***

						// :(first|last|only)-(child|of-type)
						if ( simple ) ***REMOVED***
							while ( dir ) ***REMOVED***
								node = elem;
								while ( (node = node[ dir ]) ) ***REMOVED***
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) ***REMOVED***
										return false;
									***REMOVED***
								***REMOVED***
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							***REMOVED***
							return true;
						***REMOVED***

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) ***REMOVED***
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = ***REMOVED******REMOVED***
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) ***REMOVED***

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) ***REMOVED***
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								***REMOVED***
							***REMOVED***

						// Use previously-cached element index if available
						***REMOVED*** else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = ***REMOVED******REMOVED***))[ type ]) && cache[0] === dirruns ) ***REMOVED***
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						***REMOVED*** else ***REMOVED***
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) ***REMOVED***

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) ***REMOVED***
									// Cache the index of each encountered element
									if ( useCache ) ***REMOVED***
										(node[ expando ] || (node[ expando ] = ***REMOVED******REMOVED***))[ type ] = [ dirruns, diff ];
									***REMOVED***

									if ( node === elem ) ***REMOVED***
										break;
									***REMOVED***
								***REMOVED***
							***REMOVED***
						***REMOVED***

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					***REMOVED***
				***REMOVED***;
		***REMOVED***,

		"PSEUDO": function( pseudo, argument ) ***REMOVED***
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) ***REMOVED***
				return fn( argument );
			***REMOVED***

			// But maintain support for old signatures
			if ( fn.length > 1 ) ***REMOVED***
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) ***REMOVED***
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) ***REMOVED***
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						***REMOVED***
					***REMOVED***) :
					function( elem ) ***REMOVED***
						return fn( elem, 0, args );
					***REMOVED***;
			***REMOVED***

			return fn;
		***REMOVED***
	***REMOVED***,

	pseudos: ***REMOVED***
		// Potentially complex pseudos
		"not": markFunction(function( selector ) ***REMOVED***
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) ***REMOVED***
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) ***REMOVED***
						if ( (elem = unmatched[i]) ) ***REMOVED***
							seed[i] = !(matches[i] = elem);
						***REMOVED***
					***REMOVED***
				***REMOVED***) :
				function( elem, context, xml ) ***REMOVED***
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				***REMOVED***;
		***REMOVED***),

		"has": markFunction(function( selector ) ***REMOVED***
			return function( elem ) ***REMOVED***
				return Sizzle( selector, elem ).length > 0;
			***REMOVED***;
		***REMOVED***),

		"contains": markFunction(function( text ) ***REMOVED***
			return function( elem ) ***REMOVED***
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			***REMOVED***;
		***REMOVED***),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) ***REMOVED***
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) ***REMOVED***
				Sizzle.error( "unsupported lang: " + lang );
			***REMOVED***
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) ***REMOVED***
				var elemLang;
				do ***REMOVED***
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) ***REMOVED***

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					***REMOVED***
				***REMOVED*** while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			***REMOVED***;
		***REMOVED***),

		// Miscellaneous
		"target": function( elem ) ***REMOVED***
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		***REMOVED***,

		"root": function( elem ) ***REMOVED***
			return elem === docElem;
		***REMOVED***,

		"focus": function( elem ) ***REMOVED***
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		***REMOVED***,

		// Boolean properties
		"enabled": function( elem ) ***REMOVED***
			return elem.disabled === false;
		***REMOVED***,

		"disabled": function( elem ) ***REMOVED***
			return elem.disabled === true;
		***REMOVED***,

		"checked": function( elem ) ***REMOVED***
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		***REMOVED***,

		"selected": function( elem ) ***REMOVED***
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) ***REMOVED***
				elem.parentNode.selectedIndex;
			***REMOVED***

			return elem.selected === true;
		***REMOVED***,

		// Contents
		"empty": function( elem ) ***REMOVED***
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) ***REMOVED***
				if ( elem.nodeType < 6 ) ***REMOVED***
					return false;
				***REMOVED***
			***REMOVED***
			return true;
		***REMOVED***,

		"parent": function( elem ) ***REMOVED***
			return !Expr.pseudos["empty"]( elem );
		***REMOVED***,

		// Element/input types
		"header": function( elem ) ***REMOVED***
			return rheader.test( elem.nodeName );
		***REMOVED***,

		"input": function( elem ) ***REMOVED***
			return rinputs.test( elem.nodeName );
		***REMOVED***,

		"button": function( elem ) ***REMOVED***
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		***REMOVED***,

		"text": function( elem ) ***REMOVED***
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		***REMOVED***,

		// Position-in-collection
		"first": createPositionalPseudo(function() ***REMOVED***
			return [ 0 ];
		***REMOVED***),

		"last": createPositionalPseudo(function( matchIndexes, length ) ***REMOVED***
			return [ length - 1 ];
		***REMOVED***),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) ***REMOVED***
			return [ argument < 0 ? argument + length : argument ];
		***REMOVED***),

		"even": createPositionalPseudo(function( matchIndexes, length ) ***REMOVED***
			var i = 0;
			for ( ; i < length; i += 2 ) ***REMOVED***
				matchIndexes.push( i );
			***REMOVED***
			return matchIndexes;
		***REMOVED***),

		"odd": createPositionalPseudo(function( matchIndexes, length ) ***REMOVED***
			var i = 1;
			for ( ; i < length; i += 2 ) ***REMOVED***
				matchIndexes.push( i );
			***REMOVED***
			return matchIndexes;
		***REMOVED***),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) ***REMOVED***
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) ***REMOVED***
				matchIndexes.push( i );
			***REMOVED***
			return matchIndexes;
		***REMOVED***),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) ***REMOVED***
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) ***REMOVED***
				matchIndexes.push( i );
			***REMOVED***
			return matchIndexes;
		***REMOVED***)
	***REMOVED***
***REMOVED***;

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in ***REMOVED*** radio: true, checkbox: true, file: true, password: true, image: true ***REMOVED*** ) ***REMOVED***
	Expr.pseudos[ i ] = createInputPseudo( i );
***REMOVED***
for ( i in ***REMOVED*** submit: true, reset: true ***REMOVED*** ) ***REMOVED***
	Expr.pseudos[ i ] = createButtonPseudo( i );
***REMOVED***

// Easy API for creating new setFilters
function setFilters() ***REMOVED******REMOVED***
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) ***REMOVED***
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) ***REMOVED***
		return parseOnly ? 0 : cached.slice( 0 );
	***REMOVED***

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) ***REMOVED***

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) ***REMOVED***
			if ( match ) ***REMOVED***
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			***REMOVED***
			groups.push( (tokens = []) );
		***REMOVED***

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) ***REMOVED***
			matched = match.shift();
			tokens.push(***REMOVED***
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			***REMOVED***
			soFar = soFar.slice( matched.length );
		***REMOVED***

		// Filters
		for ( type in Expr.filter ) ***REMOVED***
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) ***REMOVED***
				matched = match.shift();
				tokens.push(***REMOVED***
					value: matched,
					type: type,
					matches: match
				***REMOVED***
				soFar = soFar.slice( matched.length );
			***REMOVED***
		***REMOVED***

		if ( !matched ) ***REMOVED***
			break;
		***REMOVED***
	***REMOVED***

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
***REMOVED***;

function toSelector( tokens ) ***REMOVED***
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) ***REMOVED***
		selector += tokens[i].value;
	***REMOVED***
	return selector;
***REMOVED***

function addCombinator( matcher, combinator, base ) ***REMOVED***
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) ***REMOVED***
			while ( (elem = elem[ dir ]) ) ***REMOVED***
				if ( elem.nodeType === 1 || checkNonElements ) ***REMOVED***
					return matcher( elem, context, xml );
				***REMOVED***
			***REMOVED***
		***REMOVED*** :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) ***REMOVED***
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) ***REMOVED***
				while ( (elem = elem[ dir ]) ) ***REMOVED***
					if ( elem.nodeType === 1 || checkNonElements ) ***REMOVED***
						if ( matcher( elem, context, xml ) ) ***REMOVED***
							return true;
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED*** else ***REMOVED***
				while ( (elem = elem[ dir ]) ) ***REMOVED***
					if ( elem.nodeType === 1 || checkNonElements ) ***REMOVED***
						outerCache = elem[ expando ] || (elem[ expando ] = ***REMOVED******REMOVED***
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) ***REMOVED***

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						***REMOVED*** else ***REMOVED***
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) ***REMOVED***
								return true;
							***REMOVED***
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***;
***REMOVED***

function elementMatcher( matchers ) ***REMOVED***
	return matchers.length > 1 ?
		function( elem, context, xml ) ***REMOVED***
			var i = matchers.length;
			while ( i-- ) ***REMOVED***
				if ( !matchers[i]( elem, context, xml ) ) ***REMOVED***
					return false;
				***REMOVED***
			***REMOVED***
			return true;
		***REMOVED*** :
		matchers[0];
***REMOVED***

function multipleContexts( selector, contexts, results ) ***REMOVED***
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) ***REMOVED***
		Sizzle( selector, contexts[i], results );
	***REMOVED***
	return results;
***REMOVED***

function condense( unmatched, map, filter, context, xml ) ***REMOVED***
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) ***REMOVED***
		if ( (elem = unmatched[i]) ) ***REMOVED***
			if ( !filter || filter( elem, context, xml ) ) ***REMOVED***
				newUnmatched.push( elem );
				if ( mapped ) ***REMOVED***
					map.push( i );
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return newUnmatched;
***REMOVED***

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) ***REMOVED***
	if ( postFilter && !postFilter[ expando ] ) ***REMOVED***
		postFilter = setMatcher( postFilter );
	***REMOVED***
	if ( postFinder && !postFinder[ expando ] ) ***REMOVED***
		postFinder = setMatcher( postFinder, postSelector );
	***REMOVED***
	return markFunction(function( seed, results, context, xml ) ***REMOVED***
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) ***REMOVED***
			matcher( matcherIn, matcherOut, context, xml );
		***REMOVED***

		// Apply postFilter
		if ( postFilter ) ***REMOVED***
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) ***REMOVED***
				if ( (elem = temp[i]) ) ***REMOVED***
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				***REMOVED***
			***REMOVED***
		***REMOVED***

		if ( seed ) ***REMOVED***
			if ( postFinder || preFilter ) ***REMOVED***
				if ( postFinder ) ***REMOVED***
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) ***REMOVED***
						if ( (elem = matcherOut[i]) ) ***REMOVED***
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						***REMOVED***
					***REMOVED***
					postFinder( null, (matcherOut = []), temp, xml );
				***REMOVED***

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) ***REMOVED***
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) ***REMOVED***

						seed[temp] = !(results[temp] = elem);
					***REMOVED***
				***REMOVED***
			***REMOVED***

		// Add elements to results, through postFinder if defined
		***REMOVED*** else ***REMOVED***
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) ***REMOVED***
				postFinder( null, results, matcherOut, xml );
			***REMOVED*** else ***REMOVED***
				push.apply( results, matcherOut );
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

function matcherFromTokens( tokens ) ***REMOVED***
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) ***REMOVED***
			return elem === checkContext;
		***REMOVED***, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) ***REMOVED***
			return indexOf.call( checkContext, elem ) > -1;
		***REMOVED***, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) ***REMOVED***
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		***REMOVED*** ];

	for ( ; i < len; i++ ) ***REMOVED***
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) ***REMOVED***
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		***REMOVED*** else ***REMOVED***
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) ***REMOVED***
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) ***REMOVED***
					if ( Expr.relative[ tokens[j].type ] ) ***REMOVED***
						break;
					***REMOVED***
				***REMOVED***
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat(***REMOVED*** value: tokens[ i - 2 ].type === " " ? "*" : "" ***REMOVED***)
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			***REMOVED***
			matchers.push( matcher );
		***REMOVED***
	***REMOVED***

	return elementMatcher( matchers );
***REMOVED***

function matcherFromGroupMatchers( elementMatchers, setMatchers ) ***REMOVED***
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) ***REMOVED***
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) ***REMOVED***
				outermostContext = context !== document && context;
			***REMOVED***

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) ***REMOVED***
				if ( byElement && elem ) ***REMOVED***
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) ***REMOVED***
						if ( matcher( elem, context, xml ) ) ***REMOVED***
							results.push( elem );
							break;
						***REMOVED***
					***REMOVED***
					if ( outermost ) ***REMOVED***
						dirruns = dirrunsUnique;
					***REMOVED***
				***REMOVED***

				// Track unmatched elements for set filters
				if ( bySet ) ***REMOVED***
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) ***REMOVED***
						matchedCount--;
					***REMOVED***

					// Lengthen the array for every element, matched or not
					if ( seed ) ***REMOVED***
						unmatched.push( elem );
					***REMOVED***
				***REMOVED***
			***REMOVED***

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) ***REMOVED***
				j = 0;
				while ( (matcher = setMatchers[j++]) ) ***REMOVED***
					matcher( unmatched, setMatched, context, xml );
				***REMOVED***

				if ( seed ) ***REMOVED***
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) ***REMOVED***
						while ( i-- ) ***REMOVED***
							if ( !(unmatched[i] || setMatched[i]) ) ***REMOVED***
								setMatched[i] = pop.call( results );
							***REMOVED***
						***REMOVED***
					***REMOVED***

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				***REMOVED***

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) ***REMOVED***

					Sizzle.uniqueSort( results );
				***REMOVED***
			***REMOVED***

			// Override manipulation of globals by nested matchers
			if ( outermost ) ***REMOVED***
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			***REMOVED***

			return unmatched;
		***REMOVED***;

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
***REMOVED***

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) ***REMOVED***
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) ***REMOVED***
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) ***REMOVED***
			match = tokenize( selector );
		***REMOVED***
		i = match.length;
		while ( i-- ) ***REMOVED***
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) ***REMOVED***
				setMatchers.push( cached );
			***REMOVED*** else ***REMOVED***
				elementMatchers.push( cached );
			***REMOVED***
		***REMOVED***

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	***REMOVED***
	return cached;
***REMOVED***;

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param ***REMOVED***String|Function***REMOVED*** selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param ***REMOVED***Element***REMOVED*** context
 * @param ***REMOVED***Array***REMOVED*** [results]
 * @param ***REMOVED***Array***REMOVED*** [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) ***REMOVED***
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) ***REMOVED***

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) ***REMOVED***

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) ***REMOVED***
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			***REMOVED*** else if ( compiled ) ***REMOVED***
				context = context.parentNode;
			***REMOVED***

			selector = selector.slice( tokens.shift().value.length );
		***REMOVED***

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) ***REMOVED***
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) ***REMOVED***
				break;
			***REMOVED***
			if ( (find = Expr.find[ type ]) ) ***REMOVED***
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) ***REMOVED***

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) ***REMOVED***
						push.apply( results, seed );
						return results;
					***REMOVED***

					break;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
***REMOVED***;

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) ***REMOVED***
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
***REMOVED***

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) ***REMOVED***
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
***REMOVED***) ) ***REMOVED***
	addHandle( "type|href|height|width", function( elem, name, isXML ) ***REMOVED***
		if ( !isXML ) ***REMOVED***
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		***REMOVED***
	***REMOVED***
***REMOVED***

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) ***REMOVED***
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
***REMOVED***) ) ***REMOVED***
	addHandle( "value", function( elem, name, isXML ) ***REMOVED***
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) ***REMOVED***
			return elem.defaultValue;
		***REMOVED***
	***REMOVED***
***REMOVED***

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) ***REMOVED***
	return div.getAttribute("disabled") == null;
***REMOVED***) ) ***REMOVED***
	addHandle( booleans, function( elem, name, isXML ) ***REMOVED***
		var val;
		if ( !isXML ) ***REMOVED***
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		***REMOVED***
	***REMOVED***
***REMOVED***

return Sizzle;

***REMOVED***)( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) ***REMOVED***
	if ( jQuery.isFunction( qualifier ) ) ***REMOVED***
		return jQuery.grep( elements, function( elem, i ) ***REMOVED***
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		***REMOVED***

	***REMOVED***

	if ( qualifier.nodeType ) ***REMOVED***
		return jQuery.grep( elements, function( elem ) ***REMOVED***
			return ( elem === qualifier ) !== not;
		***REMOVED***

	***REMOVED***

	if ( typeof qualifier === "string" ) ***REMOVED***
		if ( risSimple.test( qualifier ) ) ***REMOVED***
			return jQuery.filter( qualifier, elements, not );
		***REMOVED***

		qualifier = jQuery.filter( qualifier, elements );
	***REMOVED***

	return jQuery.grep( elements, function( elem ) ***REMOVED***
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
	***REMOVED***
***REMOVED***

jQuery.filter = function( expr, elems, not ) ***REMOVED***
	var elem = elems[ 0 ];

	if ( not ) ***REMOVED***
		expr = ":not(" + expr + ")";
	***REMOVED***

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) ***REMOVED***
			return elem.nodeType === 1;
		***REMOVED***));
***REMOVED***;

jQuery.fn.extend(***REMOVED***
	find: function( selector ) ***REMOVED***
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) ***REMOVED***
			return this.pushStack( jQuery( selector ).filter(function() ***REMOVED***
				for ( i = 0; i < len; i++ ) ***REMOVED***
					if ( jQuery.contains( self[ i ], this ) ) ***REMOVED***
						return true;
					***REMOVED***
				***REMOVED***
			***REMOVED***) );
		***REMOVED***

		for ( i = 0; i < len; i++ ) ***REMOVED***
			jQuery.find( selector, self[ i ], ret );
		***REMOVED***

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	***REMOVED***,
	filter: function( selector ) ***REMOVED***
		return this.pushStack( winnow(this, selector || [], false) );
	***REMOVED***,
	not: function( selector ) ***REMOVED***
		return this.pushStack( winnow(this, selector || [], true) );
	***REMOVED***,
	is: function( selector ) ***REMOVED***
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	***REMOVED***
***REMOVED***


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) ***REMOVED***
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) ***REMOVED***
			return this;
		***REMOVED***

		// Handle HTML strings
		if ( typeof selector === "string" ) ***REMOVED***
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) ***REMOVED***
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			***REMOVED*** else ***REMOVED***
				match = rquickExpr.exec( selector );
			***REMOVED***

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) ***REMOVED***

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) ***REMOVED***
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) ***REMOVED***
						for ( match in context ) ***REMOVED***
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) ***REMOVED***
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							***REMOVED*** else ***REMOVED***
								this.attr( match, context[ match ] );
							***REMOVED***
						***REMOVED***
					***REMOVED***

					return this;

				// HANDLE: $(#id)
				***REMOVED*** else ***REMOVED***
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) ***REMOVED***
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) ***REMOVED***
							return rootjQuery.find( selector );
						***REMOVED***

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					***REMOVED***

					this.context = document;
					this.selector = selector;
					return this;
				***REMOVED***

			// HANDLE: $(expr, $(...))
			***REMOVED*** else if ( !context || context.jquery ) ***REMOVED***
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			***REMOVED*** else ***REMOVED***
				return this.constructor( context ).find( selector );
			***REMOVED***

		// HANDLE: $(DOMElement)
		***REMOVED*** else if ( selector.nodeType ) ***REMOVED***
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		***REMOVED*** else if ( jQuery.isFunction( selector ) ) ***REMOVED***
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		***REMOVED***

		if ( selector.selector !== undefined ) ***REMOVED***
			this.selector = selector.selector;
			this.context = selector.context;
		***REMOVED***

		return jQuery.makeArray( selector, this );
	***REMOVED***;

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = ***REMOVED***
		children: true,
		contents: true,
		next: true,
		prev: true
	***REMOVED***;

jQuery.extend(***REMOVED***
	dir: function( elem, dir, until ) ***REMOVED***
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) ***REMOVED***
			if ( cur.nodeType === 1 ) ***REMOVED***
				matched.push( cur );
			***REMOVED***
			cur = cur[dir];
		***REMOVED***
		return matched;
	***REMOVED***,

	sibling: function( n, elem ) ***REMOVED***
		var r = [];

		for ( ; n; n = n.nextSibling ) ***REMOVED***
			if ( n.nodeType === 1 && n !== elem ) ***REMOVED***
				r.push( n );
			***REMOVED***
		***REMOVED***

		return r;
	***REMOVED***
***REMOVED***

jQuery.fn.extend(***REMOVED***
	has: function( target ) ***REMOVED***
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() ***REMOVED***
			for ( i = 0; i < len; i++ ) ***REMOVED***
				if ( jQuery.contains( this, targets[i] ) ) ***REMOVED***
					return true;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	closest: function( selectors, context ) ***REMOVED***
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) ***REMOVED***
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) ***REMOVED***
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) ***REMOVED***

					matched.push( cur );
					break;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	***REMOVED***,

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) ***REMOVED***

		// No argument, return index in parent
		if ( !elem ) ***REMOVED***
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		***REMOVED***

		// index in selector
		if ( typeof elem === "string" ) ***REMOVED***
			return jQuery.inArray( this[0], jQuery( elem ) );
		***REMOVED***

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	***REMOVED***,

	add: function( selector, context ) ***REMOVED***
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	***REMOVED***,

	addBack: function( selector ) ***REMOVED***
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	***REMOVED***
***REMOVED***

function sibling( cur, dir ) ***REMOVED***
	do ***REMOVED***
		cur = cur[ dir ];
	***REMOVED*** while ( cur && cur.nodeType !== 1 );

	return cur;
***REMOVED***

jQuery.each(***REMOVED***
	parent: function( elem ) ***REMOVED***
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	***REMOVED***,
	parents: function( elem ) ***REMOVED***
		return jQuery.dir( elem, "parentNode" );
	***REMOVED***,
	parentsUntil: function( elem, i, until ) ***REMOVED***
		return jQuery.dir( elem, "parentNode", until );
	***REMOVED***,
	next: function( elem ) ***REMOVED***
		return sibling( elem, "nextSibling" );
	***REMOVED***,
	prev: function( elem ) ***REMOVED***
		return sibling( elem, "previousSibling" );
	***REMOVED***,
	nextAll: function( elem ) ***REMOVED***
		return jQuery.dir( elem, "nextSibling" );
	***REMOVED***,
	prevAll: function( elem ) ***REMOVED***
		return jQuery.dir( elem, "previousSibling" );
	***REMOVED***,
	nextUntil: function( elem, i, until ) ***REMOVED***
		return jQuery.dir( elem, "nextSibling", until );
	***REMOVED***,
	prevUntil: function( elem, i, until ) ***REMOVED***
		return jQuery.dir( elem, "previousSibling", until );
	***REMOVED***,
	siblings: function( elem ) ***REMOVED***
		return jQuery.sibling( ( elem.parentNode || ***REMOVED******REMOVED*** ).firstChild, elem );
	***REMOVED***,
	children: function( elem ) ***REMOVED***
		return jQuery.sibling( elem.firstChild );
	***REMOVED***,
	contents: function( elem ) ***REMOVED***
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	***REMOVED***
***REMOVED***, function( name, fn ) ***REMOVED***
	jQuery.fn[ name ] = function( until, selector ) ***REMOVED***
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) ***REMOVED***
			selector = until;
		***REMOVED***

		if ( selector && typeof selector === "string" ) ***REMOVED***
			ret = jQuery.filter( selector, ret );
		***REMOVED***

		if ( this.length > 1 ) ***REMOVED***
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) ***REMOVED***
				ret = jQuery.unique( ret );
			***REMOVED***

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) ***REMOVED***
				ret = ret.reverse();
			***REMOVED***
		***REMOVED***

		return this.pushStack( ret );
	***REMOVED***;
***REMOVED***
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = ***REMOVED******REMOVED***;

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) ***REMOVED***
	var object = optionsCache[ options ] = ***REMOVED******REMOVED***;
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) ***REMOVED***
		object[ flag ] = true;
	***REMOVED***
	return object;
***REMOVED***

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) ***REMOVED***

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( ***REMOVED******REMOVED***, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) ***REMOVED***
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) ***REMOVED***
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) ***REMOVED***
					memory = false; // To prevent further calls using add
					break;
				***REMOVED***
			***REMOVED***
			firing = false;
			if ( list ) ***REMOVED***
				if ( stack ) ***REMOVED***
					if ( stack.length ) ***REMOVED***
						fire( stack.shift() );
					***REMOVED***
				***REMOVED*** else if ( memory ) ***REMOVED***
					list = [];
				***REMOVED*** else ***REMOVED***
					self.disable();
				***REMOVED***
			***REMOVED***
		***REMOVED***,
		// Actual Callbacks object
		self = ***REMOVED***
			// Add a callback or a collection of callbacks to the list
			add: function() ***REMOVED***
				if ( list ) ***REMOVED***
					// First, we save the current length
					var start = list.length;
					(function add( args ) ***REMOVED***
						jQuery.each( args, function( _, arg ) ***REMOVED***
							var type = jQuery.type( arg );
							if ( type === "function" ) ***REMOVED***
								if ( !options.unique || !self.has( arg ) ) ***REMOVED***
									list.push( arg );
								***REMOVED***
							***REMOVED*** else if ( arg && arg.length && type !== "string" ) ***REMOVED***
								// Inspect recursively
								add( arg );
							***REMOVED***
						***REMOVED***
					***REMOVED***)( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) ***REMOVED***
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					***REMOVED*** else if ( memory ) ***REMOVED***
						firingStart = start;
						fire( memory );
					***REMOVED***
				***REMOVED***
				return this;
			***REMOVED***,
			// Remove a callback from the list
			remove: function() ***REMOVED***
				if ( list ) ***REMOVED***
					jQuery.each( arguments, function( _, arg ) ***REMOVED***
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) ***REMOVED***
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) ***REMOVED***
								if ( index <= firingLength ) ***REMOVED***
									firingLength--;
								***REMOVED***
								if ( index <= firingIndex ) ***REMOVED***
									firingIndex--;
								***REMOVED***
							***REMOVED***
						***REMOVED***
					***REMOVED***
				***REMOVED***
				return this;
			***REMOVED***,
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) ***REMOVED***
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			***REMOVED***,
			// Remove all callbacks from the list
			empty: function() ***REMOVED***
				list = [];
				firingLength = 0;
				return this;
			***REMOVED***,
			// Have the list do nothing anymore
			disable: function() ***REMOVED***
				list = stack = memory = undefined;
				return this;
			***REMOVED***,
			// Is it disabled?
			disabled: function() ***REMOVED***
				return !list;
			***REMOVED***,
			// Lock the list in its current state
			lock: function() ***REMOVED***
				stack = undefined;
				if ( !memory ) ***REMOVED***
					self.disable();
				***REMOVED***
				return this;
			***REMOVED***,
			// Is it locked?
			locked: function() ***REMOVED***
				return !stack;
			***REMOVED***,
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) ***REMOVED***
				if ( list && ( !fired || stack ) ) ***REMOVED***
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) ***REMOVED***
						stack.push( args );
					***REMOVED*** else ***REMOVED***
						fire( args );
					***REMOVED***
				***REMOVED***
				return this;
			***REMOVED***,
			// Call all the callbacks with the given arguments
			fire: function() ***REMOVED***
				self.fireWith( this, arguments );
				return this;
			***REMOVED***,
			// To know if the callbacks have already been called at least once
			fired: function() ***REMOVED***
				return !!fired;
			***REMOVED***
		***REMOVED***;

	return self;
***REMOVED***;


jQuery.extend(***REMOVED***

	Deferred: function( func ) ***REMOVED***
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = ***REMOVED***
				state: function() ***REMOVED***
					return state;
				***REMOVED***,
				always: function() ***REMOVED***
					deferred.done( arguments ).fail( arguments );
					return this;
				***REMOVED***,
				then: function( /* fnDone, fnFail, fnProgress */ ) ***REMOVED***
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) ***REMOVED***
						jQuery.each( tuples, function( i, tuple ) ***REMOVED***
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() ***REMOVED***
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) ***REMOVED***
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								***REMOVED*** else ***REMOVED***
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								***REMOVED***
							***REMOVED***
						***REMOVED***
						fns = null;
					***REMOVED***).promise();
				***REMOVED***,
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) ***REMOVED***
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				***REMOVED***
			***REMOVED***,
			deferred = ***REMOVED******REMOVED***;

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) ***REMOVED***
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) ***REMOVED***
				list.add(function() ***REMOVED***
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				***REMOVED***, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			***REMOVED***

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() ***REMOVED***
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			***REMOVED***;
			deferred[ tuple[0] + "With" ] = list.fireWith;
		***REMOVED***

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) ***REMOVED***
			func.call( deferred, deferred );
		***REMOVED***

		// All done!
		return deferred;
	***REMOVED***,

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) ***REMOVED***
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) ***REMOVED***
				return function( value ) ***REMOVED***
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) ***REMOVED***
						deferred.notifyWith( contexts, values );

					***REMOVED*** else if ( !(--remaining) ) ***REMOVED***
						deferred.resolveWith( contexts, values );
					***REMOVED***
				***REMOVED***;
			***REMOVED***,

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) ***REMOVED***
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) ***REMOVED***
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) ***REMOVED***
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				***REMOVED*** else ***REMOVED***
					--remaining;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) ***REMOVED***
			deferred.resolveWith( resolveContexts, resolveValues );
		***REMOVED***

		return deferred.promise();
	***REMOVED***
***REMOVED***


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) ***REMOVED***
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
***REMOVED***;

jQuery.extend(***REMOVED***
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) ***REMOVED***
		if ( hold ) ***REMOVED***
			jQuery.readyWait++;
		***REMOVED*** else ***REMOVED***
			jQuery.ready( true );
		***REMOVED***
	***REMOVED***,

	// Handle when the DOM is ready
	ready: function( wait ) ***REMOVED***

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) ***REMOVED***
			return;
		***REMOVED***

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) ***REMOVED***
			return setTimeout( jQuery.ready );
		***REMOVED***

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) ***REMOVED***
			return;
		***REMOVED***

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) ***REMOVED***
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		***REMOVED***
	***REMOVED***
***REMOVED***

/**
 * Clean-up method for dom ready events
 */
function detach() ***REMOVED***
	if ( document.addEventListener ) ***REMOVED***
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );

	***REMOVED*** else ***REMOVED***
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	***REMOVED***
***REMOVED***

/**
 * The ready event handler and self cleanup method
 */
function completed() ***REMOVED***
	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) ***REMOVED***
		detach();
		jQuery.ready();
	***REMOVED***
***REMOVED***

jQuery.ready.promise = function( obj ) ***REMOVED***
	if ( !readyList ) ***REMOVED***

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) ***REMOVED***
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		***REMOVED*** else if ( document.addEventListener ) ***REMOVED***
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		***REMOVED*** else ***REMOVED***
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try ***REMOVED***
				top = window.frameElement == null && document.documentElement;
			***REMOVED*** catch(e) ***REMOVED******REMOVED***

			if ( top && top.doScroll ) ***REMOVED***
				(function doScrollCheck() ***REMOVED***
					if ( !jQuery.isReady ) ***REMOVED***

						try ***REMOVED***
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						***REMOVED*** catch(e) ***REMOVED***
							return setTimeout( doScrollCheck, 50 );
						***REMOVED***

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					***REMOVED***
				***REMOVED***)();
			***REMOVED***
		***REMOVED***
	***REMOVED***
	return readyList.promise( obj );
***REMOVED***;


var strundefined = typeof undefined;



// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) ***REMOVED***
	break;
***REMOVED***
support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery(function() ***REMOVED***
	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) ***REMOVED***
		// Return for frameset docs that don't have a body
		return;
	***REMOVED***

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== strundefined ) ***REMOVED***
		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) ***REMOVED***
			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		***REMOVED***
	***REMOVED***

	body.removeChild( container );
***REMOVED***




(function() ***REMOVED***
	var div = document.createElement( "div" );

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) ***REMOVED***
		// Support: IE<9
		support.deleteExpando = true;
		try ***REMOVED***
			delete div.test;
		***REMOVED*** catch( e ) ***REMOVED***
			support.deleteExpando = false;
		***REMOVED***
	***REMOVED***

	// Null elements to avoid leaks in IE.
	div = null;
***REMOVED***)();


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( elem ) ***REMOVED***
	var noData = jQuery.noData[ (elem.nodeName + " ").toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute("classid") === noData;
***REMOVED***;


var rbrace = /^(?:\***REMOVED***[\w\W]*\***REMOVED***|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) ***REMOVED***
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) ***REMOVED***

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) ***REMOVED***
			try ***REMOVED***
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			***REMOVED*** catch( e ) ***REMOVED******REMOVED***

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		***REMOVED*** else ***REMOVED***
			data = undefined;
		***REMOVED***
	***REMOVED***

	return data;
***REMOVED***

// checks a cache object for emptiness
function isEmptyDataObject( obj ) ***REMOVED***
	var name;
	for ( name in obj ) ***REMOVED***

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) ***REMOVED***
			continue;
		***REMOVED***
		if ( name !== "toJSON" ) ***REMOVED***
			return false;
		***REMOVED***
	***REMOVED***

	return true;
***REMOVED***

function internalData( elem, name, data, pvt /* Internal Use Only */ ) ***REMOVED***
	if ( !jQuery.acceptData( elem ) ) ***REMOVED***
		return;
	***REMOVED***

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string" ) ***REMOVED***
		return;
	***REMOVED***

	if ( !id ) ***REMOVED***
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) ***REMOVED***
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		***REMOVED*** else ***REMOVED***
			id = internalKey;
		***REMOVED***
	***REMOVED***

	if ( !cache[ id ] ) ***REMOVED***
		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? ***REMOVED******REMOVED*** : ***REMOVED*** toJSON: jQuery.noop ***REMOVED***;
	***REMOVED***

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) ***REMOVED***
		if ( pvt ) ***REMOVED***
			cache[ id ] = jQuery.extend( cache[ id ], name );
		***REMOVED*** else ***REMOVED***
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		***REMOVED***
	***REMOVED***

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) ***REMOVED***
		if ( !thisCache.data ) ***REMOVED***
			thisCache.data = ***REMOVED******REMOVED***;
		***REMOVED***

		thisCache = thisCache.data;
	***REMOVED***

	if ( data !== undefined ) ***REMOVED***
		thisCache[ jQuery.camelCase( name ) ] = data;
	***REMOVED***

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) ***REMOVED***

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) ***REMOVED***

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		***REMOVED***
	***REMOVED*** else ***REMOVED***
		ret = thisCache;
	***REMOVED***

	return ret;
***REMOVED***

function internalRemoveData( elem, name, pvt ) ***REMOVED***
	if ( !jQuery.acceptData( elem ) ) ***REMOVED***
		return;
	***REMOVED***

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) ***REMOVED***
		return;
	***REMOVED***

	if ( name ) ***REMOVED***

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) ***REMOVED***

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) ***REMOVED***

				// try the string as a key before any manipulation
				if ( name in thisCache ) ***REMOVED***
					name = [ name ];
				***REMOVED*** else ***REMOVED***

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) ***REMOVED***
						name = [ name ];
					***REMOVED*** else ***REMOVED***
						name = name.split(" ");
					***REMOVED***
				***REMOVED***
			***REMOVED*** else ***REMOVED***
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			***REMOVED***

			i = name.length;
			while ( i-- ) ***REMOVED***
				delete thisCache[ name[i] ];
			***REMOVED***

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) ***REMOVED***
				return;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// See jQuery.data for more information
	if ( !pvt ) ***REMOVED***
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) ***REMOVED***
			return;
		***REMOVED***
	***REMOVED***

	// Destroy the cache
	if ( isNode ) ***REMOVED***
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	***REMOVED*** else if ( support.deleteExpando || cache != cache.window ) ***REMOVED***
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, null
	***REMOVED*** else ***REMOVED***
		cache[ id ] = null;
	***REMOVED***
***REMOVED***

jQuery.extend(***REMOVED***
	cache: ***REMOVED******REMOVED***,

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: ***REMOVED***
		"applet ": true,
		"embed ": true,
		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	***REMOVED***,

	hasData: function( elem ) ***REMOVED***
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	***REMOVED***,

	data: function( elem, name, data ) ***REMOVED***
		return internalData( elem, name, data );
	***REMOVED***,

	removeData: function( elem, name ) ***REMOVED***
		return internalRemoveData( elem, name );
	***REMOVED***,

	// For internal use only.
	_data: function( elem, name, data ) ***REMOVED***
		return internalData( elem, name, data, true );
	***REMOVED***,

	_removeData: function( elem, name ) ***REMOVED***
		return internalRemoveData( elem, name, true );
	***REMOVED***
***REMOVED***

jQuery.fn.extend(***REMOVED***
	data: function( key, value ) ***REMOVED***
		var i, name, data,
			elem = this[0],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) ***REMOVED***
			if ( this.length ) ***REMOVED***
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) ***REMOVED***
					i = attrs.length;
					while ( i-- ) ***REMOVED***

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) ***REMOVED***
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) ***REMOVED***
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							***REMOVED***
						***REMOVED***
					***REMOVED***
					jQuery._data( elem, "parsedAttrs", true );
				***REMOVED***
			***REMOVED***

			return data;
		***REMOVED***

		// Sets multiple values
		if ( typeof key === "object" ) ***REMOVED***
			return this.each(function() ***REMOVED***
				jQuery.data( this, key );
			***REMOVED***
		***REMOVED***

		return arguments.length > 1 ?

			// Sets one value
			this.each(function() ***REMOVED***
				jQuery.data( this, key, value );
			***REMOVED***) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	***REMOVED***,

	removeData: function( key ) ***REMOVED***
		return this.each(function() ***REMOVED***
			jQuery.removeData( this, key );
		***REMOVED***
	***REMOVED***
***REMOVED***


jQuery.extend(***REMOVED***
	queue: function( elem, type, data ) ***REMOVED***
		var queue;

		if ( elem ) ***REMOVED***
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) ***REMOVED***
				if ( !queue || jQuery.isArray(data) ) ***REMOVED***
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				***REMOVED*** else ***REMOVED***
					queue.push( data );
				***REMOVED***
			***REMOVED***
			return queue || [];
		***REMOVED***
	***REMOVED***,

	dequeue: function( elem, type ) ***REMOVED***
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() ***REMOVED***
				jQuery.dequeue( elem, type );
			***REMOVED***;

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) ***REMOVED***
			fn = queue.shift();
			startLength--;
		***REMOVED***

		if ( fn ) ***REMOVED***

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) ***REMOVED***
				queue.unshift( "inprogress" );
			***REMOVED***

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		***REMOVED***

		if ( !startLength && hooks ) ***REMOVED***
			hooks.empty.fire();
		***REMOVED***
	***REMOVED***,

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) ***REMOVED***
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, ***REMOVED***
			empty: jQuery.Callbacks("once memory").add(function() ***REMOVED***
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			***REMOVED***)
		***REMOVED***
	***REMOVED***
***REMOVED***

jQuery.fn.extend(***REMOVED***
	queue: function( type, data ) ***REMOVED***
		var setter = 2;

		if ( typeof type !== "string" ) ***REMOVED***
			data = type;
			type = "fx";
			setter--;
		***REMOVED***

		if ( arguments.length < setter ) ***REMOVED***
			return jQuery.queue( this[0], type );
		***REMOVED***

		return data === undefined ?
			this :
			this.each(function() ***REMOVED***
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) ***REMOVED***
					jQuery.dequeue( this, type );
				***REMOVED***
			***REMOVED***
	***REMOVED***,
	dequeue: function( type ) ***REMOVED***
		return this.each(function() ***REMOVED***
			jQuery.dequeue( this, type );
		***REMOVED***
	***REMOVED***,
	clearQueue: function( type ) ***REMOVED***
		return this.queue( type || "fx", [] );
	***REMOVED***,
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) ***REMOVED***
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() ***REMOVED***
				if ( !( --count ) ) ***REMOVED***
					defer.resolveWith( elements, [ elements ] );
				***REMOVED***
			***REMOVED***;

		if ( typeof type !== "string" ) ***REMOVED***
			obj = type;
			type = undefined;
		***REMOVED***
		type = type || "fx";

		while ( i-- ) ***REMOVED***
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) ***REMOVED***
				count++;
				tmp.empty.add( resolve );
			***REMOVED***
		***REMOVED***
		resolve();
		return defer.promise( obj );
	***REMOVED***
***REMOVED***
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) ***REMOVED***
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	***REMOVED***;



// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) ***REMOVED***
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) ***REMOVED***
		chainable = true;
		for ( i in key ) ***REMOVED***
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		***REMOVED***

	// Sets one value
	***REMOVED*** else if ( value !== undefined ) ***REMOVED***
		chainable = true;

		if ( !jQuery.isFunction( value ) ) ***REMOVED***
			raw = true;
		***REMOVED***

		if ( bulk ) ***REMOVED***
			// Bulk operations run against the entire set
			if ( raw ) ***REMOVED***
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			***REMOVED*** else ***REMOVED***
				bulk = fn;
				fn = function( elem, key, value ) ***REMOVED***
					return bulk.call( jQuery( elem ), value );
				***REMOVED***;
			***REMOVED***
		***REMOVED***

		if ( fn ) ***REMOVED***
			for ( ; i < length; i++ ) ***REMOVED***
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[0], key ) : emptyGet;
***REMOVED***;
var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() ***REMOVED***
	// Minified: var a,b,c
	var input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		fragment = document.createDocumentFragment();

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );
	div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	support.noCloneEvent = true;
	if ( div.attachEvent ) ***REMOVED***
		div.attachEvent( "onclick", function() ***REMOVED***
			support.noCloneEvent = false;
		***REMOVED***

		div.cloneNode( true ).click();
	***REMOVED***

	// Execute the test only if not already executed in another module.
	if (support.deleteExpando == null) ***REMOVED***
		// Support: IE<9
		support.deleteExpando = true;
		try ***REMOVED***
			delete div.test;
		***REMOVED*** catch( e ) ***REMOVED***
			support.deleteExpando = false;
		***REMOVED***
	***REMOVED***
***REMOVED***)();


(function() ***REMOVED***
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
	for ( i in ***REMOVED*** submit: true, change: true, focusin: true ***REMOVED***) ***REMOVED***
		eventName = "on" + i;

		if ( !(support[ i + "Bubbles" ] = eventName in window) ) ***REMOVED***
			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i + "Bubbles" ] = div.attributes[ eventName ].expando === false;
		***REMOVED***
	***REMOVED***

	// Null elements to avoid leaks in IE.
	div = null;
***REMOVED***)();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() ***REMOVED***
	return true;
***REMOVED***

function returnFalse() ***REMOVED***
	return false;
***REMOVED***

function safeActiveElement() ***REMOVED***
	try ***REMOVED***
		return document.activeElement;
	***REMOVED*** catch ( err ) ***REMOVED*** ***REMOVED***
***REMOVED***

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = ***REMOVED***

	global: ***REMOVED******REMOVED***,

	add: function( elem, types, handler, data, selector ) ***REMOVED***
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) ***REMOVED***
			return;
		***REMOVED***

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) ***REMOVED***
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		***REMOVED***

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) ***REMOVED***
			handler.guid = jQuery.guid++;
		***REMOVED***

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) ***REMOVED***
			events = elemData.events = ***REMOVED******REMOVED***;
		***REMOVED***
		if ( !(eventHandle = elemData.handle) ) ***REMOVED***
			eventHandle = elemData.handle = function( e ) ***REMOVED***
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			***REMOVED***;
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		***REMOVED***

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) ***REMOVED***
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) ***REMOVED***
				continue;
			***REMOVED***

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || ***REMOVED******REMOVED***;

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || ***REMOVED******REMOVED***;

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend(***REMOVED***
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			***REMOVED***, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) ***REMOVED***
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) ***REMOVED***
					// Bind the global event handler to the element
					if ( elem.addEventListener ) ***REMOVED***
						elem.addEventListener( type, eventHandle, false );

					***REMOVED*** else if ( elem.attachEvent ) ***REMOVED***
						elem.attachEvent( "on" + type, eventHandle );
					***REMOVED***
				***REMOVED***
			***REMOVED***

			if ( special.add ) ***REMOVED***
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) ***REMOVED***
					handleObj.handler.guid = handler.guid;
				***REMOVED***
			***REMOVED***

			// Add to the element's handler list, delegates in front
			if ( selector ) ***REMOVED***
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			***REMOVED*** else ***REMOVED***
				handlers.push( handleObj );
			***REMOVED***

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		***REMOVED***

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	***REMOVED***,

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) ***REMOVED***
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) ***REMOVED***
			return;
		***REMOVED***

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) ***REMOVED***
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) ***REMOVED***
				for ( type in events ) ***REMOVED***
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				***REMOVED***
				continue;
			***REMOVED***

			special = jQuery.event.special[ type ] || ***REMOVED******REMOVED***;
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) ***REMOVED***
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) ***REMOVED***
					handlers.splice( j, 1 );

					if ( handleObj.selector ) ***REMOVED***
						handlers.delegateCount--;
					***REMOVED***
					if ( special.remove ) ***REMOVED***
						special.remove.call( elem, handleObj );
					***REMOVED***
				***REMOVED***
			***REMOVED***

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) ***REMOVED***
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) ***REMOVED***
					jQuery.removeEvent( elem, type, elemData.handle );
				***REMOVED***

				delete events[ type ];
			***REMOVED***
		***REMOVED***

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) ***REMOVED***
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		***REMOVED***
	***REMOVED***,

	trigger: function( event, data, elem, onlyHandlers ) ***REMOVED***
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) ***REMOVED***
			return;
		***REMOVED***

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) ***REMOVED***
			return;
		***REMOVED***

		if ( type.indexOf(".") >= 0 ) ***REMOVED***
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		***REMOVED***
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) ***REMOVED***
			event.target = elem;
		***REMOVED***

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || ***REMOVED******REMOVED***;
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) ***REMOVED***
			return;
		***REMOVED***

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) ***REMOVED***

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) ***REMOVED***
				cur = cur.parentNode;
			***REMOVED***
			for ( ; cur; cur = cur.parentNode ) ***REMOVED***
				eventPath.push( cur );
				tmp = cur;
			***REMOVED***

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) ***REMOVED***
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			***REMOVED***
		***REMOVED***

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) ***REMOVED***

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || ***REMOVED******REMOVED*** )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) ***REMOVED***
				handle.apply( cur, data );
			***REMOVED***

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) ***REMOVED***
				event.result = handle.apply( cur, data );
				if ( event.result === false ) ***REMOVED***
					event.preventDefault();
				***REMOVED***
			***REMOVED***
		***REMOVED***
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) ***REMOVED***

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) ***REMOVED***

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) ***REMOVED***

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) ***REMOVED***
						elem[ ontype ] = null;
					***REMOVED***

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try ***REMOVED***
						elem[ type ]();
					***REMOVED*** catch ( e ) ***REMOVED***
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					***REMOVED***
					jQuery.event.triggered = undefined;

					if ( tmp ) ***REMOVED***
						elem[ ontype ] = tmp;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return event.result;
	***REMOVED***,

	dispatch: function( event ) ***REMOVED***

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || ***REMOVED******REMOVED*** )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || ***REMOVED******REMOVED***;

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) ***REMOVED***
			return;
		***REMOVED***

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) ***REMOVED***
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) ***REMOVED***

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) ***REMOVED***

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || ***REMOVED******REMOVED***).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) ***REMOVED***
						if ( (event.result = ret) === false ) ***REMOVED***
							event.preventDefault();
							event.stopPropagation();
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) ***REMOVED***
			special.postDispatch.call( this, event );
		***REMOVED***

		return event.result;
	***REMOVED***,

	handlers: function( event, handlers ) ***REMOVED***
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) ***REMOVED***

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) ***REMOVED***
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) ***REMOVED***
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) ***REMOVED***
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) ***REMOVED***
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						***REMOVED***
						if ( matches[ sel ] ) ***REMOVED***
							matches.push( handleObj );
						***REMOVED***
					***REMOVED***
					if ( matches.length ) ***REMOVED***
						handlerQueue.push(***REMOVED*** elem: cur, handlers: matches ***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) ***REMOVED***
			handlerQueue.push(***REMOVED*** elem: this, handlers: handlers.slice( delegateCount ) ***REMOVED***
		***REMOVED***

		return handlerQueue;
	***REMOVED***,

	fix: function( event ) ***REMOVED***
		if ( event[ jQuery.expando ] ) ***REMOVED***
			return event;
		***REMOVED***

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) ***REMOVED***
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				***REMOVED******REMOVED***;
		***REMOVED***
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) ***REMOVED***
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		***REMOVED***

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) ***REMOVED***
			event.target = originalEvent.srcElement || document;
		***REMOVED***

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) ***REMOVED***
			event.target = event.target.parentNode;
		***REMOVED***

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	***REMOVED***,

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: ***REMOVED******REMOVED***,

	keyHooks: ***REMOVED***
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) ***REMOVED***

			// Add which for key events
			if ( event.which == null ) ***REMOVED***
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			***REMOVED***

			return event;
		***REMOVED***
	***REMOVED***,

	mouseHooks: ***REMOVED***
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) ***REMOVED***
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) ***REMOVED***
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			***REMOVED***

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) ***REMOVED***
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			***REMOVED***

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) ***REMOVED***
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			***REMOVED***

			return event;
		***REMOVED***
	***REMOVED***,

	special: ***REMOVED***
		load: ***REMOVED***
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		***REMOVED***,
		focus: ***REMOVED***
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() ***REMOVED***
				if ( this !== safeActiveElement() && this.focus ) ***REMOVED***
					try ***REMOVED***
						this.focus();
						return false;
					***REMOVED*** catch ( e ) ***REMOVED***
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					***REMOVED***
				***REMOVED***
			***REMOVED***,
			delegateType: "focusin"
		***REMOVED***,
		blur: ***REMOVED***
			trigger: function() ***REMOVED***
				if ( this === safeActiveElement() && this.blur ) ***REMOVED***
					this.blur();
					return false;
				***REMOVED***
			***REMOVED***,
			delegateType: "focusout"
		***REMOVED***,
		click: ***REMOVED***
			// For checkbox, fire native event so checked state will be right
			trigger: function() ***REMOVED***
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) ***REMOVED***
					this.click();
					return false;
				***REMOVED***
			***REMOVED***,

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) ***REMOVED***
				return jQuery.nodeName( event.target, "a" );
			***REMOVED***
		***REMOVED***,

		beforeunload: ***REMOVED***
			postDispatch: function( event ) ***REMOVED***

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) ***REMOVED***
					event.originalEvent.returnValue = event.result;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	simulate: function( type, elem, event, bubble ) ***REMOVED***
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			***REMOVED***
				type: type,
				isSimulated: true,
				originalEvent: ***REMOVED******REMOVED***
			***REMOVED***
		);
		if ( bubble ) ***REMOVED***
			jQuery.event.trigger( e, null, elem );
		***REMOVED*** else ***REMOVED***
			jQuery.event.dispatch.call( elem, e );
		***REMOVED***
		if ( e.isDefaultPrevented() ) ***REMOVED***
			event.preventDefault();
		***REMOVED***
	***REMOVED***
***REMOVED***;

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) ***REMOVED***
		if ( elem.removeEventListener ) ***REMOVED***
			elem.removeEventListener( type, handle, false );
		***REMOVED***
	***REMOVED*** :
	function( elem, type, handle ) ***REMOVED***
		var name = "on" + type;

		if ( elem.detachEvent ) ***REMOVED***

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === strundefined ) ***REMOVED***
				elem[ name ] = null;
			***REMOVED***

			elem.detachEvent( name, handle );
		***REMOVED***
	***REMOVED***;

jQuery.Event = function( src, props ) ***REMOVED***
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) ***REMOVED***
		return new jQuery.Event( src, props );
	***REMOVED***

	// Event object
	if ( src && src.type ) ***REMOVED***
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	***REMOVED*** else ***REMOVED***
		this.type = src;
	***REMOVED***

	// Put explicitly provided properties onto the event object
	if ( props ) ***REMOVED***
		jQuery.extend( this, props );
	***REMOVED***

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
***REMOVED***;

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = ***REMOVED***
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() ***REMOVED***
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) ***REMOVED***
			return;
		***REMOVED***

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) ***REMOVED***
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		***REMOVED*** else ***REMOVED***
			e.returnValue = false;
		***REMOVED***
	***REMOVED***,
	stopPropagation: function() ***REMOVED***
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) ***REMOVED***
			return;
		***REMOVED***
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) ***REMOVED***
			e.stopPropagation();
		***REMOVED***

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	***REMOVED***,
	stopImmediatePropagation: function() ***REMOVED***
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) ***REMOVED***
			e.stopImmediatePropagation();
		***REMOVED***

		this.stopPropagation();
	***REMOVED***
***REMOVED***;

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each(***REMOVED***
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
***REMOVED***, function( orig, fix ) ***REMOVED***
	jQuery.event.special[ orig ] = ***REMOVED***
		delegateType: fix,
		bindType: fix,

		handle: function( event ) ***REMOVED***
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) ***REMOVED***
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			***REMOVED***
			return ret;
		***REMOVED***
	***REMOVED***;
***REMOVED***

// IE submit delegation
if ( !support.submitBubbles ) ***REMOVED***

	jQuery.event.special.submit = ***REMOVED***
		setup: function() ***REMOVED***
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) ***REMOVED***
				return false;
			***REMOVED***

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) ***REMOVED***
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) ***REMOVED***
					jQuery.event.add( form, "submit._submit", function( event ) ***REMOVED***
						event._submit_bubble = true;
					***REMOVED***
					jQuery._data( form, "submitBubbles", true );
				***REMOVED***
			***REMOVED***
			// return undefined since we don't need an event listener
		***REMOVED***,

		postDispatch: function( event ) ***REMOVED***
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) ***REMOVED***
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) ***REMOVED***
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				***REMOVED***
			***REMOVED***
		***REMOVED***,

		teardown: function() ***REMOVED***
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) ***REMOVED***
				return false;
			***REMOVED***

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		***REMOVED***
	***REMOVED***;
***REMOVED***

// IE change delegation and checkbox/radio fix
if ( !support.changeBubbles ) ***REMOVED***

	jQuery.event.special.change = ***REMOVED***

		setup: function() ***REMOVED***

			if ( rformElems.test( this.nodeName ) ) ***REMOVED***
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) ***REMOVED***
					jQuery.event.add( this, "propertychange._change", function( event ) ***REMOVED***
						if ( event.originalEvent.propertyName === "checked" ) ***REMOVED***
							this._just_changed = true;
						***REMOVED***
					***REMOVED***
					jQuery.event.add( this, "click._change", function( event ) ***REMOVED***
						if ( this._just_changed && !event.isTrigger ) ***REMOVED***
							this._just_changed = false;
						***REMOVED***
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					***REMOVED***
				***REMOVED***
				return false;
			***REMOVED***
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) ***REMOVED***
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) ***REMOVED***
					jQuery.event.add( elem, "change._change", function( event ) ***REMOVED***
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) ***REMOVED***
							jQuery.event.simulate( "change", this.parentNode, event, true );
						***REMOVED***
					***REMOVED***
					jQuery._data( elem, "changeBubbles", true );
				***REMOVED***
			***REMOVED***
		***REMOVED***,

		handle: function( event ) ***REMOVED***
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) ***REMOVED***
				return event.handleObj.handler.apply( this, arguments );
			***REMOVED***
		***REMOVED***,

		teardown: function() ***REMOVED***
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		***REMOVED***
	***REMOVED***;
***REMOVED***

// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) ***REMOVED***
	jQuery.each(***REMOVED*** focus: "focusin", blur: "focusout" ***REMOVED***, function( orig, fix ) ***REMOVED***

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) ***REMOVED***
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			***REMOVED***;

		jQuery.event.special[ fix ] = ***REMOVED***
			setup: function() ***REMOVED***
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) ***REMOVED***
					doc.addEventListener( orig, handler, true );
				***REMOVED***
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			***REMOVED***,
			teardown: function() ***REMOVED***
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) ***REMOVED***
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				***REMOVED*** else ***REMOVED***
					jQuery._data( doc, fix, attaches );
				***REMOVED***
			***REMOVED***
		***REMOVED***;
	***REMOVED***
***REMOVED***

jQuery.fn.extend(***REMOVED***

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) ***REMOVED***
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) ***REMOVED***
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) ***REMOVED***
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			***REMOVED***
			for ( type in types ) ***REMOVED***
				this.on( type, selector, data, types[ type ], one );
			***REMOVED***
			return this;
		***REMOVED***

		if ( data == null && fn == null ) ***REMOVED***
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		***REMOVED*** else if ( fn == null ) ***REMOVED***
			if ( typeof selector === "string" ) ***REMOVED***
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			***REMOVED*** else ***REMOVED***
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			***REMOVED***
		***REMOVED***
		if ( fn === false ) ***REMOVED***
			fn = returnFalse;
		***REMOVED*** else if ( !fn ) ***REMOVED***
			return this;
		***REMOVED***

		if ( one === 1 ) ***REMOVED***
			origFn = fn;
			fn = function( event ) ***REMOVED***
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			***REMOVED***;
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		***REMOVED***
		return this.each( function() ***REMOVED***
			jQuery.event.add( this, types, fn, data, selector );
		***REMOVED***
	***REMOVED***,
	one: function( types, selector, data, fn ) ***REMOVED***
		return this.on( types, selector, data, fn, 1 );
	***REMOVED***,
	off: function( types, selector, fn ) ***REMOVED***
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) ***REMOVED***
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		***REMOVED***
		if ( typeof types === "object" ) ***REMOVED***
			// ( types-object [, selector] )
			for ( type in types ) ***REMOVED***
				this.off( type, selector, types[ type ] );
			***REMOVED***
			return this;
		***REMOVED***
		if ( selector === false || typeof selector === "function" ) ***REMOVED***
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		***REMOVED***
		if ( fn === false ) ***REMOVED***
			fn = returnFalse;
		***REMOVED***
		return this.each(function() ***REMOVED***
			jQuery.event.remove( this, types, fn, selector );
		***REMOVED***
	***REMOVED***,

	trigger: function( type, data ) ***REMOVED***
		return this.each(function() ***REMOVED***
			jQuery.event.trigger( type, data, this );
		***REMOVED***
	***REMOVED***,
	triggerHandler: function( type, data ) ***REMOVED***
		var elem = this[0];
		if ( elem ) ***REMOVED***
			return jQuery.event.trigger( type, data, elem, true );
		***REMOVED***
	***REMOVED***
***REMOVED***


function createSafeFragment( document ) ***REMOVED***
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) ***REMOVED***
		while ( list.length ) ***REMOVED***
			safeFrag.createElement(
				list.pop()
			);
		***REMOVED***
	***REMOVED***
	return safeFrag;
***REMOVED***

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = ***REMOVED***
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	***REMOVED***,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

function getAll( context, tag ) ***REMOVED***
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) ***REMOVED***
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) ***REMOVED***
			if ( !tag || jQuery.nodeName( elem, tag ) ) ***REMOVED***
				found.push( elem );
			***REMOVED*** else ***REMOVED***
				jQuery.merge( found, getAll( elem, tag ) );
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
***REMOVED***

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) ***REMOVED***
	if ( rcheckableType.test( elem.type ) ) ***REMOVED***
		elem.defaultChecked = elem.checked;
	***REMOVED***
***REMOVED***

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) ***REMOVED***
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
***REMOVED***

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) ***REMOVED***
	elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type;
	return elem;
***REMOVED***
function restoreScript( elem ) ***REMOVED***
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) ***REMOVED***
		elem.type = match[1];
	***REMOVED*** else ***REMOVED***
		elem.removeAttribute("type");
	***REMOVED***
	return elem;
***REMOVED***

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) ***REMOVED***
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) ***REMOVED***
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	***REMOVED***
***REMOVED***

function cloneCopyEvent( src, dest ) ***REMOVED***

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) ***REMOVED***
		return;
	***REMOVED***

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) ***REMOVED***
		delete curData.handle;
		curData.events = ***REMOVED******REMOVED***;

		for ( type in events ) ***REMOVED***
			for ( i = 0, l = events[ type ].length; i < l; i++ ) ***REMOVED***
				jQuery.event.add( dest, type, events[ type ][ i ] );
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// make the cloned public data object a copy from the original
	if ( curData.data ) ***REMOVED***
		curData.data = jQuery.extend( ***REMOVED******REMOVED***, curData.data );
	***REMOVED***
***REMOVED***

function fixCloneNodeIssues( src, dest ) ***REMOVED***
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) ***REMOVED***
		return;
	***REMOVED***

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) ***REMOVED***
		data = jQuery._data( dest );

		for ( e in data.events ) ***REMOVED***
			jQuery.removeEvent( dest, e, data.handle );
		***REMOVED***

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	***REMOVED***

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) ***REMOVED***
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	***REMOVED*** else if ( nodeName === "object" ) ***REMOVED***
		if ( dest.parentNode ) ***REMOVED***
			dest.outerHTML = src.outerHTML;
		***REMOVED***

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) ***REMOVED***
			dest.innerHTML = src.innerHTML;
		***REMOVED***

	***REMOVED*** else if ( nodeName === "input" && rcheckableType.test( src.type ) ) ***REMOVED***
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) ***REMOVED***
			dest.value = src.value;
		***REMOVED***

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	***REMOVED*** else if ( nodeName === "option" ) ***REMOVED***
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	***REMOVED*** else if ( nodeName === "input" || nodeName === "textarea" ) ***REMOVED***
		dest.defaultValue = src.defaultValue;
	***REMOVED***
***REMOVED***

jQuery.extend(***REMOVED***
	clone: function( elem, dataAndEvents, deepDataAndEvents ) ***REMOVED***
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) ***REMOVED***
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		***REMOVED*** else ***REMOVED***
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		***REMOVED***

		if ( (!support.noCloneEvent || !support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) ***REMOVED***

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) ***REMOVED***
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) ***REMOVED***
					fixCloneNodeIssues( node, destElements[i] );
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// Copy the events from the original to the clone
		if ( dataAndEvents ) ***REMOVED***
			if ( deepDataAndEvents ) ***REMOVED***
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) ***REMOVED***
					cloneCopyEvent( node, destElements[i] );
				***REMOVED***
			***REMOVED*** else ***REMOVED***
				cloneCopyEvent( elem, clone );
			***REMOVED***
		***REMOVED***

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) ***REMOVED***
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		***REMOVED***

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	***REMOVED***,

	buildFragment: function( elems, context, scripts, selection ) ***REMOVED***
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) ***REMOVED***
			elem = elems[ i ];

			if ( elem || elem === 0 ) ***REMOVED***

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) ***REMOVED***
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				***REMOVED*** else if ( !rhtml.test( elem ) ) ***REMOVED***
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				***REMOVED*** else ***REMOVED***
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = (rtagName.exec( elem ) || [ "", "" ])[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) ***REMOVED***
						tmp = tmp.lastChild;
					***REMOVED***

					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) ***REMOVED***
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					***REMOVED***

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) ***REMOVED***

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) ***REMOVED***
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) ***REMOVED***
								elem.removeChild( tbody );
							***REMOVED***
						***REMOVED***
					***REMOVED***

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) ***REMOVED***
						tmp.removeChild( tmp.firstChild );
					***REMOVED***

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// Fix #11356: Clear elements from fragment
		if ( tmp ) ***REMOVED***
			safe.removeChild( tmp );
		***REMOVED***

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) ***REMOVED***
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		***REMOVED***

		i = 0;
		while ( (elem = nodes[ i++ ]) ) ***REMOVED***

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) ***REMOVED***
				continue;
			***REMOVED***

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) ***REMOVED***
				setGlobalEval( tmp );
			***REMOVED***

			// Capture executables
			if ( scripts ) ***REMOVED***
				j = 0;
				while ( (elem = tmp[ j++ ]) ) ***REMOVED***
					if ( rscriptType.test( elem.type || "" ) ) ***REMOVED***
						scripts.push( elem );
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		tmp = null;

		return safe;
	***REMOVED***,

	cleanData: function( elems, /* internal */ acceptData ) ***REMOVED***
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) ***REMOVED***
			if ( acceptData || jQuery.acceptData( elem ) ) ***REMOVED***

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) ***REMOVED***
					if ( data.events ) ***REMOVED***
						for ( type in data.events ) ***REMOVED***
							if ( special[ type ] ) ***REMOVED***
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							***REMOVED*** else ***REMOVED***
								jQuery.removeEvent( elem, type, data.handle );
							***REMOVED***
						***REMOVED***
					***REMOVED***

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) ***REMOVED***

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) ***REMOVED***
							delete elem[ internalKey ];

						***REMOVED*** else if ( typeof elem.removeAttribute !== strundefined ) ***REMOVED***
							elem.removeAttribute( internalKey );

						***REMOVED*** else ***REMOVED***
							elem[ internalKey ] = null;
						***REMOVED***

						deletedIds.push( id );
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

jQuery.fn.extend(***REMOVED***
	text: function( value ) ***REMOVED***
		return access( this, function( value ) ***REMOVED***
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		***REMOVED***, null, value, arguments.length );
	***REMOVED***,

	append: function() ***REMOVED***
		return this.domManip( arguments, function( elem ) ***REMOVED***
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) ***REMOVED***
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	prepend: function() ***REMOVED***
		return this.domManip( arguments, function( elem ) ***REMOVED***
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) ***REMOVED***
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	before: function() ***REMOVED***
		return this.domManip( arguments, function( elem ) ***REMOVED***
			if ( this.parentNode ) ***REMOVED***
				this.parentNode.insertBefore( elem, this );
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	after: function() ***REMOVED***
		return this.domManip( arguments, function( elem ) ***REMOVED***
			if ( this.parentNode ) ***REMOVED***
				this.parentNode.insertBefore( elem, this.nextSibling );
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	remove: function( selector, keepData /* Internal Use Only */ ) ***REMOVED***
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) ***REMOVED***

			if ( !keepData && elem.nodeType === 1 ) ***REMOVED***
				jQuery.cleanData( getAll( elem ) );
			***REMOVED***

			if ( elem.parentNode ) ***REMOVED***
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) ***REMOVED***
					setGlobalEval( getAll( elem, "script" ) );
				***REMOVED***
				elem.parentNode.removeChild( elem );
			***REMOVED***
		***REMOVED***

		return this;
	***REMOVED***,

	empty: function() ***REMOVED***
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) ***REMOVED***
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) ***REMOVED***
				jQuery.cleanData( getAll( elem, false ) );
			***REMOVED***

			// Remove any remaining nodes
			while ( elem.firstChild ) ***REMOVED***
				elem.removeChild( elem.firstChild );
			***REMOVED***

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) ***REMOVED***
				elem.options.length = 0;
			***REMOVED***
		***REMOVED***

		return this;
	***REMOVED***,

	clone: function( dataAndEvents, deepDataAndEvents ) ***REMOVED***
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() ***REMOVED***
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		***REMOVED***
	***REMOVED***,

	html: function( value ) ***REMOVED***
		return access( this, function( value ) ***REMOVED***
			var elem = this[ 0 ] || ***REMOVED******REMOVED***,
				i = 0,
				l = this.length;

			if ( value === undefined ) ***REMOVED***
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			***REMOVED***

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ (rtagName.exec( value ) || [ "", "" ])[ 1 ].toLowerCase() ] ) ***REMOVED***

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try ***REMOVED***
					for (; i < l; i++ ) ***REMOVED***
						// Remove element nodes and prevent memory leaks
						elem = this[i] || ***REMOVED******REMOVED***;
						if ( elem.nodeType === 1 ) ***REMOVED***
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						***REMOVED***
					***REMOVED***

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				***REMOVED*** catch(e) ***REMOVED******REMOVED***
			***REMOVED***

			if ( elem ) ***REMOVED***
				this.empty().append( value );
			***REMOVED***
		***REMOVED***, null, value, arguments.length );
	***REMOVED***,

	replaceWith: function() ***REMOVED***
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) ***REMOVED***
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) ***REMOVED***
				arg.replaceChild( elem, this );
			***REMOVED***
		***REMOVED***

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	***REMOVED***,

	detach: function( selector ) ***REMOVED***
		return this.remove( selector, true );
	***REMOVED***,

	domManip: function( args, callback ) ***REMOVED***

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) ***REMOVED***
			return this.each(function( index ) ***REMOVED***
				var self = set.eq( index );
				if ( isFunction ) ***REMOVED***
					args[0] = value.call( this, index, self.html() );
				***REMOVED***
				self.domManip( args, callback );
			***REMOVED***
		***REMOVED***

		if ( l ) ***REMOVED***
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) ***REMOVED***
				fragment = first;
			***REMOVED***

			if ( first ) ***REMOVED***
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) ***REMOVED***
					node = fragment;

					if ( i !== iNoClone ) ***REMOVED***
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) ***REMOVED***
							jQuery.merge( scripts, getAll( node, "script" ) );
						***REMOVED***
					***REMOVED***

					callback.call( this[i], node, i );
				***REMOVED***

				if ( hasScripts ) ***REMOVED***
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) ***REMOVED***
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) ***REMOVED***

							if ( node.src ) ***REMOVED***
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) ***REMOVED***
									jQuery._evalUrl( node.src );
								***REMOVED***
							***REMOVED*** else ***REMOVED***
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							***REMOVED***
						***REMOVED***
					***REMOVED***
				***REMOVED***

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			***REMOVED***
		***REMOVED***

		return this;
	***REMOVED***
***REMOVED***

jQuery.each(***REMOVED***
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
***REMOVED***, function( name, original ) ***REMOVED***
	jQuery.fn[ name ] = function( selector ) ***REMOVED***
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) ***REMOVED***
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		***REMOVED***

		return this.pushStack( ret );
	***REMOVED***;
***REMOVED***


var iframe,
	elemdisplay = ***REMOVED******REMOVED***;

/**
 * Retrieve the actual display of a element
 * @param ***REMOVED***String***REMOVED*** name nodeName of the element
 * @param ***REMOVED***Object***REMOVED*** doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) ***REMOVED***
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
***REMOVED***

/**
 * Try to determine the default display value of an element
 * @param ***REMOVED***String***REMOVED*** nodeName
 */
function defaultDisplay( nodeName ) ***REMOVED***
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) ***REMOVED***
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) ***REMOVED***

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		***REMOVED***

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	***REMOVED***

	return display;
***REMOVED***


(function() ***REMOVED***
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() ***REMOVED***
		if ( shrinkWrapBlocksVal != null ) ***REMOVED***
			return shrinkWrapBlocksVal;
		***REMOVED***

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) ***REMOVED***
			// Test fired too early or in an unsupported environment, exit.
			return;
		***REMOVED***

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== strundefined ) ***REMOVED***
			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		***REMOVED***

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	***REMOVED***;

***REMOVED***)();
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) ***REMOVED***
	getStyles = function( elem ) ***REMOVED***
		return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
	***REMOVED***;

	curCSS = function( elem, name, computed ) ***REMOVED***
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		if ( computed ) ***REMOVED***

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) ***REMOVED***
				ret = jQuery.style( elem, name );
			***REMOVED***

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) ***REMOVED***

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			***REMOVED***
		***REMOVED***

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	***REMOVED***;
***REMOVED*** else if ( document.documentElement.currentStyle ) ***REMOVED***
	getStyles = function( elem ) ***REMOVED***
		return elem.currentStyle;
	***REMOVED***;

	curCSS = function( elem, name, computed ) ***REMOVED***
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) ***REMOVED***
			ret = style[ name ];
		***REMOVED***

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) ***REMOVED***

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) ***REMOVED***
				rs.left = elem.currentStyle.left;
			***REMOVED***
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) ***REMOVED***
				rs.left = rsLeft;
			***REMOVED***
		***REMOVED***

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	***REMOVED***;
***REMOVED***




function addGetHookIf( conditionFn, hookFn ) ***REMOVED***
	// Define the hook, we'll check on the first run if it's really needed.
	return ***REMOVED***
		get: function() ***REMOVED***
			var condition = conditionFn();

			if ( condition == null ) ***REMOVED***
				// The test was not ready at this point; screw the hook this time
				// but check again when needed next time.
				return;
			***REMOVED***

			if ( condition ) ***REMOVED***
				// Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it.
				// Since there are no other hooks for marginRight, remove the whole object.
				delete this.get;
				return;
			***REMOVED***

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments );
		***REMOVED***
	***REMOVED***;
***REMOVED***


(function() ***REMOVED***
	// Minified: var b,c,d,e,f,g, h,i
	var div, style, a, pixelPositionVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal;

	// Setup
	div = document.createElement( "div" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];
	style = a && a.style;

	// Finish early in limited (non-browser) environments
	if ( !style ) ***REMOVED***
		return;
	***REMOVED***

	style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
		style.WebkitBoxSizing === "";

	jQuery.extend(support, ***REMOVED***
		reliableHiddenOffsets: function() ***REMOVED***
			if ( reliableHiddenOffsetsVal == null ) ***REMOVED***
				computeStyleTests();
			***REMOVED***
			return reliableHiddenOffsetsVal;
		***REMOVED***,

		boxSizingReliable: function() ***REMOVED***
			if ( boxSizingReliableVal == null ) ***REMOVED***
				computeStyleTests();
			***REMOVED***
			return boxSizingReliableVal;
		***REMOVED***,

		pixelPosition: function() ***REMOVED***
			if ( pixelPositionVal == null ) ***REMOVED***
				computeStyleTests();
			***REMOVED***
			return pixelPositionVal;
		***REMOVED***,

		// Support: Android 2.3
		reliableMarginRight: function() ***REMOVED***
			if ( reliableMarginRightVal == null ) ***REMOVED***
				computeStyleTests();
			***REMOVED***
			return reliableMarginRightVal;
		***REMOVED***
	***REMOVED***

	function computeStyleTests() ***REMOVED***
		// Minified: var b,c,d,j
		var div, body, container, contents;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) ***REMOVED***
			// Test fired too early or in an unsupported environment, exit.
			return;
		***REMOVED***

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = false;
		reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) ***REMOVED***
			pixelPositionVal = ( window.getComputedStyle( div, null ) || ***REMOVED******REMOVED*** ).top !== "1%";
			boxSizingReliableVal =
				( window.getComputedStyle( div, null ) || ***REMOVED*** width: "4px" ***REMOVED*** ).width === "4px";

			// Support: Android 2.3
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents, null ) || ***REMOVED******REMOVED*** ).marginRight );
		***REMOVED***

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		contents = div.getElementsByTagName( "td" );
		contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
		reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		if ( reliableHiddenOffsetsVal ) ***REMOVED***
			contents[ 0 ].style.display = "";
			contents[ 1 ].style.display = "none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
		***REMOVED***

		body.removeChild( container );
	***REMOVED***

***REMOVED***)();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) ***REMOVED***
	var ret, name,
		old = ***REMOVED******REMOVED***;

	// Remember the old values, and insert the new ones
	for ( name in options ) ***REMOVED***
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	***REMOVED***

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) ***REMOVED***
		elem.style[ name ] = old[ name ];
	***REMOVED***

	return ret;
***REMOVED***;


var
		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = ***REMOVED*** position: "absolute", visibility: "hidden", display: "block" ***REMOVED***,
	cssNormalTransform = ***REMOVED***
		letterSpacing: "0",
		fontWeight: "400"
	***REMOVED***,

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) ***REMOVED***

	// shortcut for names that are not vendor prefixed
	if ( name in style ) ***REMOVED***
		return name;
	***REMOVED***

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) ***REMOVED***
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) ***REMOVED***
			return name;
		***REMOVED***
	***REMOVED***

	return origName;
***REMOVED***

function showHide( elements, show ) ***REMOVED***
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) ***REMOVED***
		elem = elements[ index ];
		if ( !elem.style ) ***REMOVED***
			continue;
		***REMOVED***

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) ***REMOVED***
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) ***REMOVED***
				elem.style.display = "";
			***REMOVED***

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) ***REMOVED***
				values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			***REMOVED***
		***REMOVED*** else ***REMOVED***
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) ***REMOVED***
				jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) ***REMOVED***
		elem = elements[ index ];
		if ( !elem.style ) ***REMOVED***
			continue;
		***REMOVED***
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) ***REMOVED***
			elem.style.display = show ? values[ index ] || "" : "none";
		***REMOVED***
	***REMOVED***

	return elements;
***REMOVED***

function setPositiveNumber( elem, value, subtract ) ***REMOVED***
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
***REMOVED***

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) ***REMOVED***
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) ***REMOVED***
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) ***REMOVED***
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		***REMOVED***

		if ( isBorderBox ) ***REMOVED***
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) ***REMOVED***
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			***REMOVED***

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) ***REMOVED***
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			***REMOVED***
		***REMOVED*** else ***REMOVED***
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) ***REMOVED***
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return val;
***REMOVED***

function getWidthOrHeight( elem, name, extra ) ***REMOVED***

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) ***REMOVED***
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) ***REMOVED***
			val = elem.style[ name ];
		***REMOVED***

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) ***REMOVED***
			return val;
		***REMOVED***

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	***REMOVED***

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
***REMOVED***

jQuery.extend(***REMOVED***
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: ***REMOVED***
		opacity: ***REMOVED***
			get: function( elem, computed ) ***REMOVED***
				if ( computed ) ***REMOVED***
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: ***REMOVED***
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	***REMOVED***,

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: ***REMOVED***
		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	***REMOVED***,

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) ***REMOVED***
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) ***REMOVED***
			return;
		***REMOVED***

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) ***REMOVED***
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) ***REMOVED***
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			***REMOVED***

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) ***REMOVED***
				return;
			***REMOVED***

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) ***REMOVED***
				value += "px";
			***REMOVED***

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) ***REMOVED***
				style[ name ] = "inherit";
			***REMOVED***

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) ***REMOVED***

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try ***REMOVED***
					style[ name ] = value;
				***REMOVED*** catch(e) ***REMOVED******REMOVED***
			***REMOVED***

		***REMOVED*** else ***REMOVED***
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) ***REMOVED***
				return ret;
			***REMOVED***

			// Otherwise just get the value from the style object
			return style[ name ];
		***REMOVED***
	***REMOVED***,

	css: function( elem, name, extra, styles ) ***REMOVED***
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) ***REMOVED***
			val = hooks.get( elem, true, extra );
		***REMOVED***

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) ***REMOVED***
			val = curCSS( elem, name, styles );
		***REMOVED***

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) ***REMOVED***
			val = cssNormalTransform[ name ];
		***REMOVED***

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) ***REMOVED***
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		***REMOVED***
		return val;
	***REMOVED***
***REMOVED***

jQuery.each([ "height", "width" ], function( i, name ) ***REMOVED***
	jQuery.cssHooks[ name ] = ***REMOVED***
		get: function( elem, computed, extra ) ***REMOVED***
			if ( computed ) ***REMOVED***
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() ***REMOVED***
						return getWidthOrHeight( elem, name, extra );
					***REMOVED***) :
					getWidthOrHeight( elem, name, extra );
			***REMOVED***
		***REMOVED***,

		set: function( elem, value, extra ) ***REMOVED***
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		***REMOVED***
	***REMOVED***;
***REMOVED***

if ( !support.opacity ) ***REMOVED***
	jQuery.cssHooks.opacity = ***REMOVED***
		get: function( elem, computed ) ***REMOVED***
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		***REMOVED***,

		set: function( elem, value ) ***REMOVED***
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) ***REMOVED***

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) ***REMOVED***
					return;
				***REMOVED***
			***REMOVED***

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		***REMOVED***
	***REMOVED***;
***REMOVED***

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) ***REMOVED***
		if ( computed ) ***REMOVED***
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// Work around by temporarily setting element display to inline-block
			return jQuery.swap( elem, ***REMOVED*** "display": "inline-block" ***REMOVED***,
				curCSS, [ elem, "marginRight" ] );
		***REMOVED***
	***REMOVED***
);

// These hooks are used by animate to expand properties
jQuery.each(***REMOVED***
	margin: "",
	padding: "",
	border: "Width"
***REMOVED***, function( prefix, suffix ) ***REMOVED***
	jQuery.cssHooks[ prefix + suffix ] = ***REMOVED***
		expand: function( value ) ***REMOVED***
			var i = 0,
				expanded = ***REMOVED******REMOVED***,

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) ***REMOVED***
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			***REMOVED***

			return expanded;
		***REMOVED***
	***REMOVED***;

	if ( !rmargin.test( prefix ) ) ***REMOVED***
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	***REMOVED***
***REMOVED***

jQuery.fn.extend(***REMOVED***
	css: function( name, value ) ***REMOVED***
		return access( this, function( elem, name, value ) ***REMOVED***
			var styles, len,
				map = ***REMOVED******REMOVED***,
				i = 0;

			if ( jQuery.isArray( name ) ) ***REMOVED***
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) ***REMOVED***
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				***REMOVED***

				return map;
			***REMOVED***

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		***REMOVED***, name, value, arguments.length > 1 );
	***REMOVED***,
	show: function() ***REMOVED***
		return showHide( this, true );
	***REMOVED***,
	hide: function() ***REMOVED***
		return showHide( this );
	***REMOVED***,
	toggle: function( state ) ***REMOVED***
		if ( typeof state === "boolean" ) ***REMOVED***
			return state ? this.show() : this.hide();
		***REMOVED***

		return this.each(function() ***REMOVED***
			if ( isHidden( this ) ) ***REMOVED***
				jQuery( this ).show();
			***REMOVED*** else ***REMOVED***
				jQuery( this ).hide();
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***


function Tween( elem, options, prop, end, easing ) ***REMOVED***
	return new Tween.prototype.init( elem, options, prop, end, easing );
***REMOVED***
jQuery.Tween = Tween;

Tween.prototype = ***REMOVED***
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) ***REMOVED***
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	***REMOVED***,
	cur: function() ***REMOVED***
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	***REMOVED***,
	run: function( percent ) ***REMOVED***
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) ***REMOVED***
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		***REMOVED*** else ***REMOVED***
			this.pos = eased = percent;
		***REMOVED***
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) ***REMOVED***
			this.options.step.call( this.elem, this.now, this );
		***REMOVED***

		if ( hooks && hooks.set ) ***REMOVED***
			hooks.set( this );
		***REMOVED*** else ***REMOVED***
			Tween.propHooks._default.set( this );
		***REMOVED***
		return this;
	***REMOVED***
***REMOVED***;

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = ***REMOVED***
	_default: ***REMOVED***
		get: function( tween ) ***REMOVED***
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) ***REMOVED***
				return tween.elem[ tween.prop ];
			***REMOVED***

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		***REMOVED***,
		set: function( tween ) ***REMOVED***
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) ***REMOVED***
				jQuery.fx.step[ tween.prop ]( tween );
			***REMOVED*** else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) ***REMOVED***
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			***REMOVED*** else ***REMOVED***
				tween.elem[ tween.prop ] = tween.now;
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***;

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = ***REMOVED***
	set: function( tween ) ***REMOVED***
		if ( tween.elem.nodeType && tween.elem.parentNode ) ***REMOVED***
			tween.elem[ tween.prop ] = tween.now;
		***REMOVED***
	***REMOVED***
***REMOVED***;

jQuery.easing = ***REMOVED***
	linear: function( p ) ***REMOVED***
		return p;
	***REMOVED***,
	swing: function( p ) ***REMOVED***
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	***REMOVED***
***REMOVED***;

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = ***REMOVED******REMOVED***;




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = ***REMOVED***
		"*": [ function( prop, value ) ***REMOVED***
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) ***REMOVED***
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do ***REMOVED***
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				***REMOVED*** while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			***REMOVED***

			// Update tween properties
			if ( parts ) ***REMOVED***
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			***REMOVED***

			return tween;
		***REMOVED*** ]
	***REMOVED***;

// Animations created synchronously will run synchronously
function createFxNow() ***REMOVED***
	setTimeout(function() ***REMOVED***
		fxNow = undefined;
	***REMOVED***
	return ( fxNow = jQuery.now() );
***REMOVED***

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) ***REMOVED***
	var which,
		attrs = ***REMOVED*** height: type ***REMOVED***,
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) ***REMOVED***
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	***REMOVED***

	if ( includeWidth ) ***REMOVED***
		attrs.opacity = attrs.width = type;
	***REMOVED***

	return attrs;
***REMOVED***

function createTween( value, prop, animation ) ***REMOVED***
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) ***REMOVED***
		if ( (tween = collection[ index ].call( animation, prop, value )) ) ***REMOVED***

			// we're done with this property
			return tween;
		***REMOVED***
	***REMOVED***
***REMOVED***

function defaultPrefilter( elem, props, opts ) ***REMOVED***
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = ***REMOVED******REMOVED***,
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) ***REMOVED***
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) ***REMOVED***
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() ***REMOVED***
				if ( !hooks.unqueued ) ***REMOVED***
					oldfire();
				***REMOVED***
			***REMOVED***;
		***REMOVED***
		hooks.unqueued++;

		anim.always(function() ***REMOVED***
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() ***REMOVED***
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) ***REMOVED***
					hooks.empty.fire();
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) ***REMOVED***
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) ***REMOVED***

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) ***REMOVED***
				style.display = "inline-block";
			***REMOVED*** else ***REMOVED***
				style.zoom = 1;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	if ( opts.overflow ) ***REMOVED***
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) ***REMOVED***
			anim.always(function() ***REMOVED***
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// show/hide pass
	for ( prop in props ) ***REMOVED***
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) ***REMOVED***
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) ***REMOVED***

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) ***REMOVED***
					hidden = true;
				***REMOVED*** else ***REMOVED***
					continue;
				***REMOVED***
			***REMOVED***
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		***REMOVED*** else ***REMOVED***
			display = undefined;
		***REMOVED***
	***REMOVED***

	if ( !jQuery.isEmptyObject( orig ) ) ***REMOVED***
		if ( dataShow ) ***REMOVED***
			if ( "hidden" in dataShow ) ***REMOVED***
				hidden = dataShow.hidden;
			***REMOVED***
		***REMOVED*** else ***REMOVED***
			dataShow = jQuery._data( elem, "fxshow", ***REMOVED******REMOVED*** );
		***REMOVED***

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) ***REMOVED***
			dataShow.hidden = !hidden;
		***REMOVED***
		if ( hidden ) ***REMOVED***
			jQuery( elem ).show();
		***REMOVED*** else ***REMOVED***
			anim.done(function() ***REMOVED***
				jQuery( elem ).hide();
			***REMOVED***
		***REMOVED***
		anim.done(function() ***REMOVED***
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) ***REMOVED***
				jQuery.style( elem, prop, orig[ prop ] );
			***REMOVED***
		***REMOVED***
		for ( prop in orig ) ***REMOVED***
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) ***REMOVED***
				dataShow[ prop ] = tween.start;
				if ( hidden ) ***REMOVED***
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				***REMOVED***
			***REMOVED***
		***REMOVED***

	// If this is a noop like .hide().hide(), restore an overwritten display value
	***REMOVED*** else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) ***REMOVED***
		style.display = display;
	***REMOVED***
***REMOVED***

function propFilter( props, specialEasing ) ***REMOVED***
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) ***REMOVED***
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) ***REMOVED***
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		***REMOVED***

		if ( index !== name ) ***REMOVED***
			props[ name ] = value;
			delete props[ index ];
		***REMOVED***

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) ***REMOVED***
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) ***REMOVED***
				if ( !( index in props ) ) ***REMOVED***
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				***REMOVED***
			***REMOVED***
		***REMOVED*** else ***REMOVED***
			specialEasing[ name ] = easing;
		***REMOVED***
	***REMOVED***
***REMOVED***

function Animation( elem, properties, options ) ***REMOVED***
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() ***REMOVED***
			// don't match elem in the :animated selector
			delete tick.elem;
		***REMOVED***),
		tick = function() ***REMOVED***
			if ( stopped ) ***REMOVED***
				return false;
			***REMOVED***
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) ***REMOVED***
				animation.tweens[ index ].run( percent );
			***REMOVED***

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) ***REMOVED***
				return remaining;
			***REMOVED*** else ***REMOVED***
				deferred.resolveWith( elem, [ animation ] );
				return false;
			***REMOVED***
		***REMOVED***,
		animation = deferred.promise(***REMOVED***
			elem: elem,
			props: jQuery.extend( ***REMOVED******REMOVED***, properties ),
			opts: jQuery.extend( true, ***REMOVED*** specialEasing: ***REMOVED******REMOVED*** ***REMOVED***, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) ***REMOVED***
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			***REMOVED***,
			stop: function( gotoEnd ) ***REMOVED***
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) ***REMOVED***
					return this;
				***REMOVED***
				stopped = true;
				for ( ; index < length ; index++ ) ***REMOVED***
					animation.tweens[ index ].run( 1 );
				***REMOVED***

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) ***REMOVED***
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				***REMOVED*** else ***REMOVED***
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				***REMOVED***
				return this;
			***REMOVED***
		***REMOVED***),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) ***REMOVED***
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) ***REMOVED***
			return result;
		***REMOVED***
	***REMOVED***

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) ***REMOVED***
		animation.opts.start.call( elem, animation );
	***REMOVED***

	jQuery.fx.timer(
		jQuery.extend( tick, ***REMOVED***
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		***REMOVED***)
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
***REMOVED***

jQuery.Animation = jQuery.extend( Animation, ***REMOVED***
	tweener: function( props, callback ) ***REMOVED***
		if ( jQuery.isFunction( props ) ) ***REMOVED***
			callback = props;
			props = [ "*" ];
		***REMOVED*** else ***REMOVED***
			props = props.split(" ");
		***REMOVED***

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) ***REMOVED***
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		***REMOVED***
	***REMOVED***,

	prefilter: function( callback, prepend ) ***REMOVED***
		if ( prepend ) ***REMOVED***
			animationPrefilters.unshift( callback );
		***REMOVED*** else ***REMOVED***
			animationPrefilters.push( callback );
		***REMOVED***
	***REMOVED***
***REMOVED***

jQuery.speed = function( speed, easing, fn ) ***REMOVED***
	var opt = speed && typeof speed === "object" ? jQuery.extend( ***REMOVED******REMOVED***, speed ) : ***REMOVED***
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	***REMOVED***;

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) ***REMOVED***
		opt.queue = "fx";
	***REMOVED***

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() ***REMOVED***
		if ( jQuery.isFunction( opt.old ) ) ***REMOVED***
			opt.old.call( this );
		***REMOVED***

		if ( opt.queue ) ***REMOVED***
			jQuery.dequeue( this, opt.queue );
		***REMOVED***
	***REMOVED***;

	return opt;
***REMOVED***;

jQuery.fn.extend(***REMOVED***
	fadeTo: function( speed, to, easing, callback ) ***REMOVED***

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate(***REMOVED*** opacity: to ***REMOVED***, speed, easing, callback );
	***REMOVED***,
	animate: function( prop, speed, easing, callback ) ***REMOVED***
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() ***REMOVED***
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( ***REMOVED******REMOVED***, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) ***REMOVED***
					anim.stop( true );
				***REMOVED***
			***REMOVED***;
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	***REMOVED***,
	stop: function( type, clearQueue, gotoEnd ) ***REMOVED***
		var stopQueue = function( hooks ) ***REMOVED***
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		***REMOVED***;

		if ( typeof type !== "string" ) ***REMOVED***
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		***REMOVED***
		if ( clearQueue && type !== false ) ***REMOVED***
			this.queue( type || "fx", [] );
		***REMOVED***

		return this.each(function() ***REMOVED***
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) ***REMOVED***
				if ( data[ index ] && data[ index ].stop ) ***REMOVED***
					stopQueue( data[ index ] );
				***REMOVED***
			***REMOVED*** else ***REMOVED***
				for ( index in data ) ***REMOVED***
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) ***REMOVED***
						stopQueue( data[ index ] );
					***REMOVED***
				***REMOVED***
			***REMOVED***

			for ( index = timers.length; index--; ) ***REMOVED***
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) ***REMOVED***
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				***REMOVED***
			***REMOVED***

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) ***REMOVED***
				jQuery.dequeue( this, type );
			***REMOVED***
		***REMOVED***
	***REMOVED***,
	finish: function( type ) ***REMOVED***
		if ( type !== false ) ***REMOVED***
			type = type || "fx";
		***REMOVED***
		return this.each(function() ***REMOVED***
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) ***REMOVED***
				hooks.stop.call( this, true );
			***REMOVED***

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) ***REMOVED***
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) ***REMOVED***
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				***REMOVED***
			***REMOVED***

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) ***REMOVED***
				if ( queue[ index ] && queue[ index ].finish ) ***REMOVED***
					queue[ index ].finish.call( this );
				***REMOVED***
			***REMOVED***

			// turn off finishing flag
			delete data.finish;
		***REMOVED***
	***REMOVED***
***REMOVED***

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) ***REMOVED***
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) ***REMOVED***
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	***REMOVED***;
***REMOVED***

// Generate shortcuts for custom animations
jQuery.each(***REMOVED***
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: ***REMOVED*** opacity: "show" ***REMOVED***,
	fadeOut: ***REMOVED*** opacity: "hide" ***REMOVED***,
	fadeToggle: ***REMOVED*** opacity: "toggle" ***REMOVED***
***REMOVED***, function( name, props ) ***REMOVED***
	jQuery.fn[ name ] = function( speed, easing, callback ) ***REMOVED***
		return this.animate( props, speed, easing, callback );
	***REMOVED***;
***REMOVED***

jQuery.timers = [];
jQuery.fx.tick = function() ***REMOVED***
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) ***REMOVED***
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) ***REMOVED***
			timers.splice( i--, 1 );
		***REMOVED***
	***REMOVED***

	if ( !timers.length ) ***REMOVED***
		jQuery.fx.stop();
	***REMOVED***
	fxNow = undefined;
***REMOVED***;

jQuery.fx.timer = function( timer ) ***REMOVED***
	jQuery.timers.push( timer );
	if ( timer() ) ***REMOVED***
		jQuery.fx.start();
	***REMOVED*** else ***REMOVED***
		jQuery.timers.pop();
	***REMOVED***
***REMOVED***;

jQuery.fx.interval = 13;

jQuery.fx.start = function() ***REMOVED***
	if ( !timerId ) ***REMOVED***
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	***REMOVED***
***REMOVED***;

jQuery.fx.stop = function() ***REMOVED***
	clearInterval( timerId );
	timerId = null;
***REMOVED***;

jQuery.fx.speeds = ***REMOVED***
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
***REMOVED***;


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) ***REMOVED***
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) ***REMOVED***
		var timeout = setTimeout( next, time );
		hooks.stop = function() ***REMOVED***
			clearTimeout( timeout );
		***REMOVED***;
	***REMOVED***
***REMOVED***;


(function() ***REMOVED***
	// Minified: var a,b,c,d,e
	var input, div, select, a, opt;

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests.
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute("style") );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
***REMOVED***)();


var rreturn = /\r/g;

jQuery.fn.extend(***REMOVED***
	val: function( value ) ***REMOVED***
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) ***REMOVED***
			if ( elem ) ***REMOVED***
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) ***REMOVED***
					return ret;
				***REMOVED***

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			***REMOVED***

			return;
		***REMOVED***

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) ***REMOVED***
			var val;

			if ( this.nodeType !== 1 ) ***REMOVED***
				return;
			***REMOVED***

			if ( isFunction ) ***REMOVED***
				val = value.call( this, i, jQuery( this ).val() );
			***REMOVED*** else ***REMOVED***
				val = value;
			***REMOVED***

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) ***REMOVED***
				val = "";
			***REMOVED*** else if ( typeof val === "number" ) ***REMOVED***
				val += "";
			***REMOVED*** else if ( jQuery.isArray( val ) ) ***REMOVED***
				val = jQuery.map( val, function( value ) ***REMOVED***
					return value == null ? "" : value + "";
				***REMOVED***
			***REMOVED***

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) ***REMOVED***
				this.value = val;
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

jQuery.extend(***REMOVED***
	valHooks: ***REMOVED***
		option: ***REMOVED***
			get: function( elem ) ***REMOVED***
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			***REMOVED***
		***REMOVED***,
		select: ***REMOVED***
			get: function( elem ) ***REMOVED***
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) ***REMOVED***
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) ***REMOVED***

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) ***REMOVED***
							return value;
						***REMOVED***

						// Multi-Selects return an array
						values.push( value );
					***REMOVED***
				***REMOVED***

				return values;
			***REMOVED***,

			set: function( elem, value ) ***REMOVED***
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) ***REMOVED***
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) ***REMOVED***

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try ***REMOVED***
							option.selected = optionSet = true;

						***REMOVED*** catch ( _ ) ***REMOVED***

							// Will be executed only in IE6
							option.scrollHeight;
						***REMOVED***

					***REMOVED*** else ***REMOVED***
						option.selected = false;
					***REMOVED***
				***REMOVED***

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) ***REMOVED***
					elem.selectedIndex = -1;
				***REMOVED***

				return options;
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() ***REMOVED***
	jQuery.valHooks[ this ] = ***REMOVED***
		set: function( elem, value ) ***REMOVED***
			if ( jQuery.isArray( value ) ) ***REMOVED***
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			***REMOVED***
		***REMOVED***
	***REMOVED***;
	if ( !support.checkOn ) ***REMOVED***
		jQuery.valHooks[ this ].get = function( elem ) ***REMOVED***
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		***REMOVED***;
	***REMOVED***
***REMOVED***




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend(***REMOVED***
	attr: function( name, value ) ***REMOVED***
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	***REMOVED***,

	removeAttr: function( name ) ***REMOVED***
		return this.each(function() ***REMOVED***
			jQuery.removeAttr( this, name );
		***REMOVED***
	***REMOVED***
***REMOVED***

jQuery.extend(***REMOVED***
	attr: function( elem, name, value ) ***REMOVED***
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) ***REMOVED***
			return;
		***REMOVED***

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) ***REMOVED***
			return jQuery.prop( elem, name, value );
		***REMOVED***

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) ***REMOVED***
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		***REMOVED***

		if ( value !== undefined ) ***REMOVED***

			if ( value === null ) ***REMOVED***
				jQuery.removeAttr( elem, name );

			***REMOVED*** else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) ***REMOVED***
				return ret;

			***REMOVED*** else ***REMOVED***
				elem.setAttribute( name, value + "" );
				return value;
			***REMOVED***

		***REMOVED*** else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) ***REMOVED***
			return ret;

		***REMOVED*** else ***REMOVED***
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		***REMOVED***
	***REMOVED***,

	removeAttr: function( elem, value ) ***REMOVED***
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) ***REMOVED***
			while ( (name = attrNames[i++]) ) ***REMOVED***
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) ***REMOVED***
					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) ***REMOVED***
						elem[ propName ] = false;
					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					***REMOVED*** else ***REMOVED***
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					***REMOVED***

				// See #9699 for explanation of this approach (setting first, then removal)
				***REMOVED*** else ***REMOVED***
					jQuery.attr( elem, name, "" );
				***REMOVED***

				elem.removeAttribute( getSetAttribute ? name : propName );
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	attrHooks: ***REMOVED***
		type: ***REMOVED***
			set: function( elem, value ) ***REMOVED***
				if ( !support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) ***REMOVED***
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) ***REMOVED***
						elem.value = val;
					***REMOVED***
					return value;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

// Hook for boolean attributes
boolHook = ***REMOVED***
	set: function( elem, value, name ) ***REMOVED***
		if ( value === false ) ***REMOVED***
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		***REMOVED*** else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) ***REMOVED***
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		***REMOVED*** else ***REMOVED***
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		***REMOVED***

		return name;
	***REMOVED***
***REMOVED***;

// Retrieve booleans specially
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) ***REMOVED***

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ?
		function( elem, name, isXML ) ***REMOVED***
			var ret, handle;
			if ( !isXML ) ***REMOVED***
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			***REMOVED***
			return ret;
		***REMOVED*** :
		function( elem, name, isXML ) ***REMOVED***
			if ( !isXML ) ***REMOVED***
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			***REMOVED***
		***REMOVED***;
***REMOVED***

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) ***REMOVED***
	jQuery.attrHooks.value = ***REMOVED***
		set: function( elem, value, name ) ***REMOVED***
			if ( jQuery.nodeName( elem, "input" ) ) ***REMOVED***
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			***REMOVED*** else ***REMOVED***
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			***REMOVED***
		***REMOVED***
	***REMOVED***;
***REMOVED***

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) ***REMOVED***

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = ***REMOVED***
		set: function( elem, value, name ) ***REMOVED***
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) ***REMOVED***
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			***REMOVED***

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) ***REMOVED***
				return value;
			***REMOVED***
		***REMOVED***
	***REMOVED***;

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) ***REMOVED***
			var ret;
			if ( !isXML ) ***REMOVED***
				return (ret = elem.getAttributeNode( name )) && ret.value !== "" ?
					ret.value :
					null;
			***REMOVED***
		***REMOVED***;

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = ***REMOVED***
		get: function( elem, name ) ***REMOVED***
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) ***REMOVED***
				return ret.value;
			***REMOVED***
		***REMOVED***,
		set: nodeHook.set
	***REMOVED***;

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = ***REMOVED***
		set: function( elem, value, name ) ***REMOVED***
			nodeHook.set( elem, value === "" ? false : value, name );
		***REMOVED***
	***REMOVED***;

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) ***REMOVED***
		jQuery.attrHooks[ name ] = ***REMOVED***
			set: function( elem, value ) ***REMOVED***
				if ( value === "" ) ***REMOVED***
					elem.setAttribute( name, "auto" );
					return value;
				***REMOVED***
			***REMOVED***
		***REMOVED***;
	***REMOVED***
***REMOVED***

if ( !support.style ) ***REMOVED***
	jQuery.attrHooks.style = ***REMOVED***
		get: function( elem ) ***REMOVED***
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		***REMOVED***,
		set: function( elem, value ) ***REMOVED***
			return ( elem.style.cssText = value + "" );
		***REMOVED***
	***REMOVED***;
***REMOVED***




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend(***REMOVED***
	prop: function( name, value ) ***REMOVED***
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	***REMOVED***,

	removeProp: function( name ) ***REMOVED***
		name = jQuery.propFix[ name ] || name;
		return this.each(function() ***REMOVED***
			// try/catch handles cases where IE balks (such as removing a property on window)
			try ***REMOVED***
				this[ name ] = undefined;
				delete this[ name ];
			***REMOVED*** catch( e ) ***REMOVED******REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

jQuery.extend(***REMOVED***
	propFix: ***REMOVED***
		"for": "htmlFor",
		"class": "className"
	***REMOVED***,

	prop: function( elem, name, value ) ***REMOVED***
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) ***REMOVED***
			return;
		***REMOVED***

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) ***REMOVED***
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		***REMOVED***

		if ( value !== undefined ) ***REMOVED***
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		***REMOVED*** else ***REMOVED***
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		***REMOVED***
	***REMOVED***,

	propHooks: ***REMOVED***
		tabIndex: ***REMOVED***
			get: function( elem ) ***REMOVED***
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						-1;
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) ***REMOVED***
	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) ***REMOVED***
		jQuery.propHooks[ name ] = ***REMOVED***
			get: function( elem ) ***REMOVED***
				return elem.getAttribute( name, 4 );
			***REMOVED***
		***REMOVED***;
	***REMOVED***
***REMOVED***

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) ***REMOVED***
	jQuery.propHooks.selected = ***REMOVED***
		get: function( elem ) ***REMOVED***
			var parent = elem.parentNode;

			if ( parent ) ***REMOVED***
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) ***REMOVED***
					parent.parentNode.selectedIndex;
				***REMOVED***
			***REMOVED***
			return null;
		***REMOVED***
	***REMOVED***;
***REMOVED***

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() ***REMOVED***
	jQuery.propFix[ this.toLowerCase() ] = this;
***REMOVED***

// IE6/7 call enctype encoding
if ( !support.enctype ) ***REMOVED***
	jQuery.propFix.enctype = "encoding";
***REMOVED***




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend(***REMOVED***
	addClass: function( value ) ***REMOVED***
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) ***REMOVED***
			return this.each(function( j ) ***REMOVED***
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			***REMOVED***
		***REMOVED***

		if ( proceed ) ***REMOVED***
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) ***REMOVED***
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) ***REMOVED***
					j = 0;
					while ( (clazz = classes[j++]) ) ***REMOVED***
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) ***REMOVED***
							cur += clazz + " ";
						***REMOVED***
					***REMOVED***

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) ***REMOVED***
						elem.className = finalValue;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return this;
	***REMOVED***,

	removeClass: function( value ) ***REMOVED***
		var classes, elem, cur, clazz, j, finalValue,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) ***REMOVED***
			return this.each(function( j ) ***REMOVED***
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			***REMOVED***
		***REMOVED***
		if ( proceed ) ***REMOVED***
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) ***REMOVED***
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) ***REMOVED***
					j = 0;
					while ( (clazz = classes[j++]) ) ***REMOVED***
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) ***REMOVED***
							cur = cur.replace( " " + clazz + " ", " " );
						***REMOVED***
					***REMOVED***

					// only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) ***REMOVED***
						elem.className = finalValue;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return this;
	***REMOVED***,

	toggleClass: function( value, stateVal ) ***REMOVED***
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) ***REMOVED***
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		***REMOVED***

		if ( jQuery.isFunction( value ) ) ***REMOVED***
			return this.each(function( i ) ***REMOVED***
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			***REMOVED***
		***REMOVED***

		return this.each(function() ***REMOVED***
			if ( type === "string" ) ***REMOVED***
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) ***REMOVED***
					// check each className given, space separated list
					if ( self.hasClass( className ) ) ***REMOVED***
						self.removeClass( className );
					***REMOVED*** else ***REMOVED***
						self.addClass( className );
					***REMOVED***
				***REMOVED***

			// Toggle whole class name
			***REMOVED*** else if ( type === strundefined || type === "boolean" ) ***REMOVED***
				if ( this.className ) ***REMOVED***
					// store className if set
					jQuery._data( this, "__className__", this.className );
				***REMOVED***

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	hasClass: function( selector ) ***REMOVED***
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) ***REMOVED***
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) ***REMOVED***
				return true;
			***REMOVED***
		***REMOVED***

		return false;
	***REMOVED***
***REMOVED***




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) ***REMOVED***

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) ***REMOVED***
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	***REMOVED***;
***REMOVED***

jQuery.fn.extend(***REMOVED***
	hover: function( fnOver, fnOut ) ***REMOVED***
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	***REMOVED***,

	bind: function( types, data, fn ) ***REMOVED***
		return this.on( types, null, data, fn );
	***REMOVED***,
	unbind: function( types, fn ) ***REMOVED***
		return this.off( types, null, fn );
	***REMOVED***,

	delegate: function( selector, types, data, fn ) ***REMOVED***
		return this.on( types, selector, data, fn );
	***REMOVED***,
	undelegate: function( selector, types, fn ) ***REMOVED***
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	***REMOVED***
***REMOVED***


var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens = /(,)|(\[|***REMOVED***)|(***REMOVED***|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]***REMOVED***4***REMOVED***)*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) ***REMOVED***
	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) ***REMOVED***
		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	***REMOVED***

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) ***REMOVED***

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) ***REMOVED***
			depth = 0;
		***REMOVED***

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) ***REMOVED***
			return token;
		***REMOVED***

		// Commas must not follow "[", "***REMOVED***", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "***REMOVED***"): depth += true - false (increment)
		// array/object close ("]" or "***REMOVED***"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	***REMOVED***) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
***REMOVED***;


// Cross-browser xml parsing
jQuery.parseXML = function( data ) ***REMOVED***
	var xml, tmp;
	if ( !data || typeof data !== "string" ) ***REMOVED***
		return null;
	***REMOVED***
	try ***REMOVED***
		if ( window.DOMParser ) ***REMOVED*** // Standard
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		***REMOVED*** else ***REMOVED*** // IE
			xml = new ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		***REMOVED***
	***REMOVED*** catch( e ) ***REMOVED***
		xml = undefined;
	***REMOVED***
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) ***REMOVED***
		jQuery.error( "Invalid XML: " + data );
	***REMOVED***
	return xml;
***REMOVED***;


var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = ***REMOVED******REMOVED***,

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = ***REMOVED******REMOVED***,

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try ***REMOVED***
	ajaxLocation = location.href;
***REMOVED*** catch( e ) ***REMOVED***
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
***REMOVED***

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) ***REMOVED***

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) ***REMOVED***

		if ( typeof dataTypeExpression !== "string" ) ***REMOVED***
			func = dataTypeExpression;
			dataTypeExpression = "*";
		***REMOVED***

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) ***REMOVED***
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) ***REMOVED***
				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) ***REMOVED***
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				***REMOVED*** else ***REMOVED***
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***;
***REMOVED***

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) ***REMOVED***

	var inspected = ***REMOVED******REMOVED***,
		seekingTransport = ( structure === transports );

	function inspect( dataType ) ***REMOVED***
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) ***REMOVED***
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) ***REMOVED***
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			***REMOVED*** else if ( seekingTransport ) ***REMOVED***
				return !( selected = dataTypeOrTransport );
			***REMOVED***
		***REMOVED***
		return selected;
	***REMOVED***

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
***REMOVED***

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) ***REMOVED***
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || ***REMOVED******REMOVED***;

	for ( key in src ) ***REMOVED***
		if ( src[ key ] !== undefined ) ***REMOVED***
			( flatOptions[ key ] ? target : ( deep || (deep = ***REMOVED******REMOVED***) ) )[ key ] = src[ key ];
		***REMOVED***
	***REMOVED***
	if ( deep ) ***REMOVED***
		jQuery.extend( true, target, deep );
	***REMOVED***

	return target;
***REMOVED***

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) ***REMOVED***
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) ***REMOVED***
		dataTypes.shift();
		if ( ct === undefined ) ***REMOVED***
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		***REMOVED***
	***REMOVED***

	// Check if we're dealing with a known content-type
	if ( ct ) ***REMOVED***
		for ( type in contents ) ***REMOVED***
			if ( contents[ type ] && contents[ type ].test( ct ) ) ***REMOVED***
				dataTypes.unshift( type );
				break;
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) ***REMOVED***
		finalDataType = dataTypes[ 0 ];
	***REMOVED*** else ***REMOVED***
		// Try convertible dataTypes
		for ( type in responses ) ***REMOVED***
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) ***REMOVED***
				finalDataType = type;
				break;
			***REMOVED***
			if ( !firstDataType ) ***REMOVED***
				firstDataType = type;
			***REMOVED***
		***REMOVED***
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	***REMOVED***

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) ***REMOVED***
		if ( finalDataType !== dataTypes[ 0 ] ) ***REMOVED***
			dataTypes.unshift( finalDataType );
		***REMOVED***
		return responses[ finalDataType ];
	***REMOVED***
***REMOVED***

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) ***REMOVED***
	var conv2, current, conv, tmp, prev,
		converters = ***REMOVED******REMOVED***,
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) ***REMOVED***
		for ( conv in s.converters ) ***REMOVED***
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		***REMOVED***
	***REMOVED***

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) ***REMOVED***

		if ( s.responseFields[ current ] ) ***REMOVED***
			jqXHR[ s.responseFields[ current ] ] = response;
		***REMOVED***

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) ***REMOVED***
			response = s.dataFilter( response, s.dataType );
		***REMOVED***

		prev = current;
		current = dataTypes.shift();

		if ( current ) ***REMOVED***

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) ***REMOVED***

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			***REMOVED*** else if ( prev !== "*" && prev !== current ) ***REMOVED***

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) ***REMOVED***
					for ( conv2 in converters ) ***REMOVED***

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) ***REMOVED***

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) ***REMOVED***
								// Condense equivalence converters
								if ( conv === true ) ***REMOVED***
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								***REMOVED*** else if ( converters[ conv2 ] !== true ) ***REMOVED***
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								***REMOVED***
								break;
							***REMOVED***
						***REMOVED***
					***REMOVED***
				***REMOVED***

				// Apply converter (if not an equivalence)
				if ( conv !== true ) ***REMOVED***

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) ***REMOVED***
						response = conv( response );
					***REMOVED*** else ***REMOVED***
						try ***REMOVED***
							response = conv( response );
						***REMOVED*** catch ( e ) ***REMOVED***
							return ***REMOVED*** state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current ***REMOVED***;
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return ***REMOVED*** state: "success", data: response ***REMOVED***;
***REMOVED***

jQuery.extend(***REMOVED***

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: ***REMOVED******REMOVED***,
	etag: ***REMOVED******REMOVED***,

	ajaxSettings: ***REMOVED***
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: ***REMOVED******REMOVED***,
		*/

		accepts: ***REMOVED***
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		***REMOVED***,

		contents: ***REMOVED***
			xml: /xml/,
			html: /html/,
			json: /json/
		***REMOVED***,

		responseFields: ***REMOVED***
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		***REMOVED***,

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: ***REMOVED***

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		***REMOVED***,

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: ***REMOVED***
			url: true,
			context: true
		***REMOVED***
	***REMOVED***,

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) ***REMOVED***
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	***REMOVED***,

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) ***REMOVED***

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) ***REMOVED***
			options = url;
			url = undefined;
		***REMOVED***

		// Force options to be an object
		options = options || ***REMOVED******REMOVED***;

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( ***REMOVED******REMOVED***, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || ***REMOVED******REMOVED***,
			// Headers (they are sent all at once)
			requestHeaders = ***REMOVED******REMOVED***,
			requestHeadersNames = ***REMOVED******REMOVED***,
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = ***REMOVED***
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) ***REMOVED***
					var match;
					if ( state === 2 ) ***REMOVED***
						if ( !responseHeaders ) ***REMOVED***
							responseHeaders = ***REMOVED******REMOVED***;
							while ( (match = rheaders.exec( responseHeadersString )) ) ***REMOVED***
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							***REMOVED***
						***REMOVED***
						match = responseHeaders[ key.toLowerCase() ];
					***REMOVED***
					return match == null ? null : match;
				***REMOVED***,

				// Raw string
				getAllResponseHeaders: function() ***REMOVED***
					return state === 2 ? responseHeadersString : null;
				***REMOVED***,

				// Caches the header
				setRequestHeader: function( name, value ) ***REMOVED***
					var lname = name.toLowerCase();
					if ( !state ) ***REMOVED***
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					***REMOVED***
					return this;
				***REMOVED***,

				// Overrides response content-type header
				overrideMimeType: function( type ) ***REMOVED***
					if ( !state ) ***REMOVED***
						s.mimeType = type;
					***REMOVED***
					return this;
				***REMOVED***,

				// Status-dependent callbacks
				statusCode: function( map ) ***REMOVED***
					var code;
					if ( map ) ***REMOVED***
						if ( state < 2 ) ***REMOVED***
							for ( code in map ) ***REMOVED***
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							***REMOVED***
						***REMOVED*** else ***REMOVED***
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						***REMOVED***
					***REMOVED***
					return this;
				***REMOVED***,

				// Cancel the request
				abort: function( statusText ) ***REMOVED***
					var finalText = statusText || strAbort;
					if ( transport ) ***REMOVED***
						transport.abort( finalText );
					***REMOVED***
					done( 0, finalText );
					return this;
				***REMOVED***
			***REMOVED***;

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) ***REMOVED***
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		***REMOVED***

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) ***REMOVED***
			s.data = jQuery.param( s.data, s.traditional );
		***REMOVED***

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) ***REMOVED***
			return jqXHR;
		***REMOVED***

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) ***REMOVED***
			jQuery.event.trigger("ajaxStart");
		***REMOVED***

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) ***REMOVED***

			// If data is available, append data to url
			if ( s.data ) ***REMOVED***
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			***REMOVED***

			// Add anti-cache in url if needed
			if ( s.cache === false ) ***REMOVED***
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			***REMOVED***
		***REMOVED***

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) ***REMOVED***
			if ( jQuery.lastModified[ cacheURL ] ) ***REMOVED***
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			***REMOVED***
			if ( jQuery.etag[ cacheURL ] ) ***REMOVED***
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			***REMOVED***
		***REMOVED***

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) ***REMOVED***
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		***REMOVED***

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) ***REMOVED***
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		***REMOVED***

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) ***REMOVED***
			// Abort if not done already and return
			return jqXHR.abort();
		***REMOVED***

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in ***REMOVED*** success: 1, error: 1, complete: 1 ***REMOVED*** ) ***REMOVED***
			jqXHR[ i ]( s[ i ] );
		***REMOVED***

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) ***REMOVED***
			done( -1, "No Transport" );
		***REMOVED*** else ***REMOVED***
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) ***REMOVED***
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			***REMOVED***
			// Timeout
			if ( s.async && s.timeout > 0 ) ***REMOVED***
				timeoutTimer = setTimeout(function() ***REMOVED***
					jqXHR.abort("timeout");
				***REMOVED***, s.timeout );
			***REMOVED***

			try ***REMOVED***
				state = 1;
				transport.send( requestHeaders, done );
			***REMOVED*** catch ( e ) ***REMOVED***
				// Propagate exception as error if not done
				if ( state < 2 ) ***REMOVED***
					done( -1, e );
				// Simply rethrow otherwise
				***REMOVED*** else ***REMOVED***
					throw e;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) ***REMOVED***
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) ***REMOVED***
				return;
			***REMOVED***

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) ***REMOVED***
				clearTimeout( timeoutTimer );
			***REMOVED***

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) ***REMOVED***
				response = ajaxHandleResponses( s, jqXHR, responses );
			***REMOVED***

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) ***REMOVED***

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) ***REMOVED***
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) ***REMOVED***
						jQuery.lastModified[ cacheURL ] = modified;
					***REMOVED***
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) ***REMOVED***
						jQuery.etag[ cacheURL ] = modified;
					***REMOVED***
				***REMOVED***

				// if no content
				if ( status === 204 || s.type === "HEAD" ) ***REMOVED***
					statusText = "nocontent";

				// if not modified
				***REMOVED*** else if ( status === 304 ) ***REMOVED***
					statusText = "notmodified";

				// If we have data, let's convert it
				***REMOVED*** else ***REMOVED***
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				***REMOVED***
			***REMOVED*** else ***REMOVED***
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) ***REMOVED***
					statusText = "error";
					if ( status < 0 ) ***REMOVED***
						status = 0;
					***REMOVED***
				***REMOVED***
			***REMOVED***

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) ***REMOVED***
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			***REMOVED*** else ***REMOVED***
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			***REMOVED***

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) ***REMOVED***
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			***REMOVED***

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) ***REMOVED***
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) ***REMOVED***
					jQuery.event.trigger("ajaxStop");
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return jqXHR;
	***REMOVED***,

	getJSON: function( url, data, callback ) ***REMOVED***
		return jQuery.get( url, data, callback, "json" );
	***REMOVED***,

	getScript: function( url, callback ) ***REMOVED***
		return jQuery.get( url, undefined, callback, "script" );
	***REMOVED***
***REMOVED***

jQuery.each( [ "get", "post" ], function( i, method ) ***REMOVED***
	jQuery[ method ] = function( url, data, callback, type ) ***REMOVED***
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) ***REMOVED***
			type = type || callback;
			callback = data;
			data = undefined;
		***REMOVED***

		return jQuery.ajax(***REMOVED***
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		***REMOVED***
	***REMOVED***;
***REMOVED***

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) ***REMOVED***
	jQuery.fn[ type ] = function( fn ) ***REMOVED***
		return this.on( type, fn );
	***REMOVED***;
***REMOVED***


jQuery._evalUrl = function( url ) ***REMOVED***
	return jQuery.ajax(***REMOVED***
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	***REMOVED***
***REMOVED***;


jQuery.fn.extend(***REMOVED***
	wrapAll: function( html ) ***REMOVED***
		if ( jQuery.isFunction( html ) ) ***REMOVED***
			return this.each(function(i) ***REMOVED***
				jQuery(this).wrapAll( html.call(this, i) );
			***REMOVED***
		***REMOVED***

		if ( this[0] ) ***REMOVED***
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) ***REMOVED***
				wrap.insertBefore( this[0] );
			***REMOVED***

			wrap.map(function() ***REMOVED***
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) ***REMOVED***
					elem = elem.firstChild;
				***REMOVED***

				return elem;
			***REMOVED***).append( this );
		***REMOVED***

		return this;
	***REMOVED***,

	wrapInner: function( html ) ***REMOVED***
		if ( jQuery.isFunction( html ) ) ***REMOVED***
			return this.each(function(i) ***REMOVED***
				jQuery(this).wrapInner( html.call(this, i) );
			***REMOVED***
		***REMOVED***

		return this.each(function() ***REMOVED***
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) ***REMOVED***
				contents.wrapAll( html );

			***REMOVED*** else ***REMOVED***
				self.append( html );
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	wrap: function( html ) ***REMOVED***
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) ***REMOVED***
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		***REMOVED***
	***REMOVED***,

	unwrap: function() ***REMOVED***
		return this.parent().each(function() ***REMOVED***
			if ( !jQuery.nodeName( this, "body" ) ) ***REMOVED***
				jQuery( this ).replaceWith( this.childNodes );
			***REMOVED***
		***REMOVED***).end();
	***REMOVED***
***REMOVED***


jQuery.expr.filters.hidden = function( elem ) ***REMOVED***
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
		(!support.reliableHiddenOffsets() &&
			((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
***REMOVED***;

jQuery.expr.filters.visible = function( elem ) ***REMOVED***
	return !jQuery.expr.filters.hidden( elem );
***REMOVED***;




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) ***REMOVED***
	var name;

	if ( jQuery.isArray( obj ) ) ***REMOVED***
		// Serialize array item.
		jQuery.each( obj, function( i, v ) ***REMOVED***
			if ( traditional || rbracket.test( prefix ) ) ***REMOVED***
				// Treat each array item as a scalar.
				add( prefix, v );

			***REMOVED*** else ***REMOVED***
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			***REMOVED***
		***REMOVED***

	***REMOVED*** else if ( !traditional && jQuery.type( obj ) === "object" ) ***REMOVED***
		// Serialize object item.
		for ( name in obj ) ***REMOVED***
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		***REMOVED***

	***REMOVED*** else ***REMOVED***
		// Serialize scalar item.
		add( prefix, obj );
	***REMOVED***
***REMOVED***

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) ***REMOVED***
	var prefix,
		s = [],
		add = function( key, value ) ***REMOVED***
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		***REMOVED***;

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) ***REMOVED***
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	***REMOVED***

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) ***REMOVED***
		// Serialize the form elements
		jQuery.each( a, function() ***REMOVED***
			add( this.name, this.value );
		***REMOVED***

	***REMOVED*** else ***REMOVED***
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) ***REMOVED***
			buildParams( prefix, a[ prefix ], traditional, add );
		***REMOVED***
	***REMOVED***

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
***REMOVED***;

jQuery.fn.extend(***REMOVED***
	serialize: function() ***REMOVED***
		return jQuery.param( this.serializeArray() );
	***REMOVED***,
	serializeArray: function() ***REMOVED***
		return this.map(function() ***REMOVED***
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		***REMOVED***)
		.filter(function() ***REMOVED***
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		***REMOVED***)
		.map(function( i, elem ) ***REMOVED***
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) ***REMOVED***
						return ***REMOVED*** name: elem.name, value: val.replace( rCRLF, "\r\n" ) ***REMOVED***;
					***REMOVED***) :
					***REMOVED*** name: elem.name, value: val.replace( rCRLF, "\r\n" ) ***REMOVED***;
		***REMOVED***).get();
	***REMOVED***
***REMOVED***


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	// Support: IE6+
	function() ***REMOVED***

		// XHR cannot access local files, always use ActiveX for that case
		return !this.isLocal &&

			// Support: IE7-8
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR();
	***REMOVED*** :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = ***REMOVED******REMOVED***,
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
if ( window.ActiveXObject ) ***REMOVED***
	jQuery( window ).on( "unload", function() ***REMOVED***
		for ( var key in xhrCallbacks ) ***REMOVED***
			xhrCallbacks[ key ]( undefined, true );
		***REMOVED***
	***REMOVED***
***REMOVED***

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) ***REMOVED***

	jQuery.ajaxTransport(function( options ) ***REMOVED***
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) ***REMOVED***

			var callback;

			return ***REMOVED***
				send: function( headers, complete ) ***REMOVED***
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open( options.type, options.url, options.async, options.username, options.password );

					// Apply custom fields if provided
					if ( options.xhrFields ) ***REMOVED***
						for ( i in options.xhrFields ) ***REMOVED***
							xhr[ i ] = options.xhrFields[ i ];
						***REMOVED***
					***REMOVED***

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) ***REMOVED***
						xhr.overrideMimeType( options.mimeType );
					***REMOVED***

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) ***REMOVED***
						headers["X-Requested-With"] = "XMLHttpRequest";
					***REMOVED***

					// Set headers
					for ( i in headers ) ***REMOVED***
						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) ***REMOVED***
							xhr.setRequestHeader( i, headers[ i ] + "" );
						***REMOVED***
					***REMOVED***

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) ***REMOVED***
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) ***REMOVED***
							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) ***REMOVED***
								if ( xhr.readyState !== 4 ) ***REMOVED***
									xhr.abort();
								***REMOVED***
							***REMOVED*** else ***REMOVED***
								responses = ***REMOVED******REMOVED***;
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) ***REMOVED***
									responses.text = xhr.responseText;
								***REMOVED***

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try ***REMOVED***
									statusText = xhr.statusText;
								***REMOVED*** catch( e ) ***REMOVED***
									// We normalize with Webkit giving an empty statusText
									statusText = "";
								***REMOVED***

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) ***REMOVED***
									status = responses.text ? 200 : 404;
								// IE - #1450: sometimes returns 1223 when it should be 204
								***REMOVED*** else if ( status === 1223 ) ***REMOVED***
									status = 204;
								***REMOVED***
							***REMOVED***
						***REMOVED***

						// Call complete if needed
						if ( responses ) ***REMOVED***
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						***REMOVED***
					***REMOVED***;

					if ( !options.async ) ***REMOVED***
						// if we're in sync mode we fire the callback
						callback();
					***REMOVED*** else if ( xhr.readyState === 4 ) ***REMOVED***
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					***REMOVED*** else ***REMOVED***
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					***REMOVED***
				***REMOVED***,

				abort: function() ***REMOVED***
					if ( callback ) ***REMOVED***
						callback( undefined, true );
					***REMOVED***
				***REMOVED***
			***REMOVED***;
		***REMOVED***
	***REMOVED***
***REMOVED***

// Functions to create xhrs
function createStandardXHR() ***REMOVED***
	try ***REMOVED***
		return new window.XMLHttpRequest();
	***REMOVED*** catch( e ) ***REMOVED******REMOVED***
***REMOVED***

function createActiveXHR() ***REMOVED***
	try ***REMOVED***
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	***REMOVED*** catch( e ) ***REMOVED******REMOVED***
***REMOVED***




// Install script dataType
jQuery.ajaxSetup(***REMOVED***
	accepts: ***REMOVED***
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	***REMOVED***,
	contents: ***REMOVED***
		script: /(?:java|ecma)script/
	***REMOVED***,
	converters: ***REMOVED***
		"text script": function( text ) ***REMOVED***
			jQuery.globalEval( text );
			return text;
		***REMOVED***
	***REMOVED***
***REMOVED***

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) ***REMOVED***
	if ( s.cache === undefined ) ***REMOVED***
		s.cache = false;
	***REMOVED***
	if ( s.crossDomain ) ***REMOVED***
		s.type = "GET";
		s.global = false;
	***REMOVED***
***REMOVED***

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) ***REMOVED***

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) ***REMOVED***

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return ***REMOVED***

			send: function( _, callback ) ***REMOVED***

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) ***REMOVED***
					script.charset = s.scriptCharset;
				***REMOVED***

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) ***REMOVED***

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) ***REMOVED***

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) ***REMOVED***
							script.parentNode.removeChild( script );
						***REMOVED***

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) ***REMOVED***
							callback( 200, "success" );
						***REMOVED***
					***REMOVED***
				***REMOVED***;

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			***REMOVED***,

			abort: function() ***REMOVED***
				if ( script ) ***REMOVED***
					script.onload( undefined, true );
				***REMOVED***
			***REMOVED***
		***REMOVED***;
	***REMOVED***
***REMOVED***




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup(***REMOVED***
	jsonp: "callback",
	jsonpCallback: function() ***REMOVED***
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	***REMOVED***
***REMOVED***

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) ***REMOVED***

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) ***REMOVED***

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) ***REMOVED***
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		***REMOVED*** else if ( s.jsonp !== false ) ***REMOVED***
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		***REMOVED***

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() ***REMOVED***
			if ( !responseContainer ) ***REMOVED***
				jQuery.error( callbackName + " was not called" );
			***REMOVED***
			return responseContainer[ 0 ];
		***REMOVED***;

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() ***REMOVED***
			responseContainer = arguments;
		***REMOVED***;

		// Clean-up function (fires after converters)
		jqXHR.always(function() ***REMOVED***
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) ***REMOVED***
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			***REMOVED***

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) ***REMOVED***
				overwritten( responseContainer[ 0 ] );
			***REMOVED***

			responseContainer = overwritten = undefined;
		***REMOVED***

		// Delegate to script
		return "script";
	***REMOVED***
***REMOVED***




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) ***REMOVED***
	if ( !data || typeof data !== "string" ) ***REMOVED***
		return null;
	***REMOVED***
	if ( typeof context === "boolean" ) ***REMOVED***
		keepScripts = context;
		context = false;
	***REMOVED***
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) ***REMOVED***
		return [ context.createElement( parsed[1] ) ];
	***REMOVED***

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) ***REMOVED***
		jQuery( scripts ).remove();
	***REMOVED***

	return jQuery.merge( [], parsed.childNodes );
***REMOVED***;


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) ***REMOVED***
	if ( typeof url !== "string" && _load ) ***REMOVED***
		return _load.apply( this, arguments );
	***REMOVED***

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) ***REMOVED***
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	***REMOVED***

	// If it's a function
	if ( jQuery.isFunction( params ) ) ***REMOVED***

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	***REMOVED*** else if ( params && typeof params === "object" ) ***REMOVED***
		type = "POST";
	***REMOVED***

	// If we have elements to modify, make the request
	if ( self.length > 0 ) ***REMOVED***
		jQuery.ajax(***REMOVED***
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		***REMOVED***).done(function( responseText ) ***REMOVED***

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		***REMOVED***).complete( callback && function( jqXHR, status ) ***REMOVED***
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		***REMOVED***
	***REMOVED***

	return this;
***REMOVED***;




jQuery.expr.filters.animated = function( elem ) ***REMOVED***
	return jQuery.grep(jQuery.timers, function( fn ) ***REMOVED***
		return elem === fn.elem;
	***REMOVED***).length;
***REMOVED***;





var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) ***REMOVED***
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
***REMOVED***

jQuery.offset = ***REMOVED***
	setOffset: function( elem, options, i ) ***REMOVED***
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = ***REMOVED******REMOVED***;

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) ***REMOVED***
			elem.style.position = "relative";
		***REMOVED***

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) ***REMOVED***
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		***REMOVED*** else ***REMOVED***
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		***REMOVED***

		if ( jQuery.isFunction( options ) ) ***REMOVED***
			options = options.call( elem, i, curOffset );
		***REMOVED***

		if ( options.top != null ) ***REMOVED***
			props.top = ( options.top - curOffset.top ) + curTop;
		***REMOVED***
		if ( options.left != null ) ***REMOVED***
			props.left = ( options.left - curOffset.left ) + curLeft;
		***REMOVED***

		if ( "using" in options ) ***REMOVED***
			options.using.call( elem, props );
		***REMOVED*** else ***REMOVED***
			curElem.css( props );
		***REMOVED***
	***REMOVED***
***REMOVED***;

jQuery.fn.extend(***REMOVED***
	offset: function( options ) ***REMOVED***
		if ( arguments.length ) ***REMOVED***
			return options === undefined ?
				this :
				this.each(function( i ) ***REMOVED***
					jQuery.offset.setOffset( this, options, i );
				***REMOVED***
		***REMOVED***

		var docElem, win,
			box = ***REMOVED*** top: 0, left: 0 ***REMOVED***,
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) ***REMOVED***
			return;
		***REMOVED***

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) ***REMOVED***
			return box;
		***REMOVED***

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== strundefined ) ***REMOVED***
			box = elem.getBoundingClientRect();
		***REMOVED***
		win = getWindow( doc );
		return ***REMOVED***
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		***REMOVED***;
	***REMOVED***,

	position: function() ***REMOVED***
		if ( !this[ 0 ] ) ***REMOVED***
			return;
		***REMOVED***

		var offsetParent, offset,
			parentOffset = ***REMOVED*** top: 0, left: 0 ***REMOVED***,
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = ***REMOVED***top:0, left: 0***REMOVED***, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) ***REMOVED***
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		***REMOVED*** else ***REMOVED***
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) ***REMOVED***
				parentOffset = offsetParent.offset();
			***REMOVED***

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		***REMOVED***

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return ***REMOVED***
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		***REMOVED***;
	***REMOVED***,

	offsetParent: function() ***REMOVED***
		return this.map(function() ***REMOVED***
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) ***REMOVED***
				offsetParent = offsetParent.offsetParent;
			***REMOVED***
			return offsetParent || docElem;
		***REMOVED***
	***REMOVED***
***REMOVED***

// Create scrollLeft and scrollTop methods
jQuery.each( ***REMOVED*** scrollLeft: "pageXOffset", scrollTop: "pageYOffset" ***REMOVED***, function( method, prop ) ***REMOVED***
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) ***REMOVED***
		return access( this, function( elem, method, val ) ***REMOVED***
			var win = getWindow( elem );

			if ( val === undefined ) ***REMOVED***
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			***REMOVED***

			if ( win ) ***REMOVED***
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			***REMOVED*** else ***REMOVED***
				elem[ method ] = val;
			***REMOVED***
		***REMOVED***, method, val, arguments.length, null );
	***REMOVED***;
***REMOVED***

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) ***REMOVED***
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) ***REMOVED***
			if ( computed ) ***REMOVED***
				computed = curCSS( elem, prop );
				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			***REMOVED***
		***REMOVED***
	);
***REMOVED***


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( ***REMOVED*** Height: "height", Width: "width" ***REMOVED***, function( name, type ) ***REMOVED***
	jQuery.each( ***REMOVED*** padding: "inner" + name, content: type, "": "outer" + name ***REMOVED***, function( defaultExtra, funcName ) ***REMOVED***
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) ***REMOVED***
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) ***REMOVED***
				var doc;

				if ( jQuery.isWindow( elem ) ) ***REMOVED***
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				***REMOVED***

				// Get document width or height
				if ( elem.nodeType === 9 ) ***REMOVED***
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				***REMOVED***

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			***REMOVED***, type, chainable ? margin : undefined, chainable, null );
		***REMOVED***;
	***REMOVED***
***REMOVED***


// The number of elements contained in the matched element set
jQuery.fn.size = function() ***REMOVED***
	return this.length;
***REMOVED***;

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) ***REMOVED***
	define( "jquery", [], function() ***REMOVED***
		return jQuery;
	***REMOVED***
***REMOVED***




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) ***REMOVED***
	if ( window.$ === jQuery ) ***REMOVED***
		window.$ = _$;
	***REMOVED***

	if ( deep && window.jQuery === jQuery ) ***REMOVED***
		window.jQuery = _jQuery;
	***REMOVED***

	return jQuery;
***REMOVED***;

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) ***REMOVED***
	window.jQuery = window.$ = jQuery;
***REMOVED***




return jQuery;

***REMOVED***));
