/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */

;(function ($, window, undefined) ***REMOVED***
  'use strict';

  /* PLUGIN DEFINITION
   * ========================= */

  $.fn.backstretch = function (images, options) ***REMOVED***
    // We need at least one image or method name
    if (images === undefined || images.length === 0) ***REMOVED***
      $.error("No images were supplied for Backstretch");
    ***REMOVED***

    /*
     * Scroll the page one pixel to get the right window height on iOS
     * Pretty harmless for everyone else
    */
    if ($(window).scrollTop() === 0 ) ***REMOVED***
      window.scrollTo(0, 0);
    ***REMOVED***

    return this.each(function () ***REMOVED***
      var $this = $(this)
        , obj = $this.data('backstretch');

      // Do we already have an instance attached to this element?
      if (obj) ***REMOVED***

        // Is this a method they're trying to execute?
        if (typeof images == 'string' && typeof obj[images] == 'function') ***REMOVED***
          // Call the method
          obj[images](options);

          // No need to do anything further
          return;
        ***REMOVED***

        // Merge the old options with the new
        options = $.extend(obj.options, options);

        // Remove the old instance
        obj.destroy(true);
      ***REMOVED***

      obj = new Backstretch(this, images, options);
      $this.data('backstretch', obj);
    ***REMOVED***
  ***REMOVED***;

  // If no element is supplied, we'll attach to body
  $.backstretch = function (images, options) ***REMOVED***
    // Return the instance
    return $('body')
            .backstretch(images, options)
            .data('backstretch');
  ***REMOVED***;

  // Custom selector
  $.expr[':'].backstretch = function(elem) ***REMOVED***
    return $(elem).data('backstretch') !== undefined;
  ***REMOVED***;

  /* DEFAULTS
   * ========================= */

  $.fn.backstretch.defaults = ***REMOVED***
      centeredX: true   // Should we center the image on the X axis?
    , centeredY: true   // Should we center the image on the Y axis?
    , duration: 5000    // Amount of time in between slides (if slideshow)
    , fade: 0           // Speed of fade transition between slides
  ***REMOVED***;

  /* STYLES
   * 
   * Baked-in styles that we'll apply to our elements.
   * In an effort to keep the plugin simple, these are not exposed as options.
   * That said, anyone can override these in their own stylesheet.
   * ========================= */
  var styles = ***REMOVED***
      wrap: ***REMOVED***
          left: 0
        , top: 0
        , overflow: 'hidden'
        , margin: 0
        , padding: 0
        , height: '100%'
        , width: '100%'
        , zIndex: -999999
      ***REMOVED***
    , img: ***REMOVED***
          position: 'absolute'
        , display: 'none'
        , margin: 0
        , padding: 0
        , border: 'none'
        , width: 'auto'
        , height: 'auto'
        , maxHeight: 'none'
        , maxWidth: 'none'
        , zIndex: -999999
      ***REMOVED***
  ***REMOVED***;

  /* CLASS DEFINITION
   * ========================= */
  var Backstretch = function (container, images, options) ***REMOVED***
    this.options = $.extend(***REMOVED******REMOVED***, $.fn.backstretch.defaults, options || ***REMOVED******REMOVED***

    /* In its simplest form, we allow Backstretch to be called on an image path.
     * e.g. $.backstretch('/path/to/image.jpg')
     * So, we need to turn this back into an array.
     */
    this.images = $.isArray(images) ? images : [images];

    // Preload images
    $.each(this.images, function () ***REMOVED***
      $('<img />')[0].src = this;
    ***REMOVED***    

    // Convenience reference to know if the container is body.
    this.isBody = container === document.body;

    /* We're keeping track of a few different elements
     *
     * Container: the element that Backstretch was called on.
     * Wrap: a DIV that we place the image into, so we can hide the overflow.
     * Root: Convenience reference to help calculate the correct height.
     */
    this.$container = $(container);
    this.$root = this.isBody ? supportsFixedPosition ? $(window) : $(document) : this.$container;

    // Don't create a new wrap if one already exists (from a previous instance of Backstretch)
    var $existing = this.$container.children(".backstretch").first();
    this.$wrap = $existing.length ? $existing : $('<div class="backstretch"></div>').css(styles.wrap).appendTo(this.$container);

    // Non-body elements need some style adjustments
    if (!this.isBody) ***REMOVED***
      // If the container is statically positioned, we need to make it relative,
      // and if no zIndex is defined, we should set it to zero.
      var position = this.$container.css('position')
        , zIndex = this.$container.css('zIndex');

      this.$container.css(***REMOVED***
          position: position === 'static' ? 'relative' : position
        , zIndex: zIndex === 'auto' ? 0 : zIndex
        , background: 'none'
      ***REMOVED***
      
      // Needs a higher z-index
      this.$wrap.css(***REMOVED***zIndex: -999998***REMOVED***
    ***REMOVED***

    // Fixed or absolute positioning?
    this.$wrap.css(***REMOVED***
      position: this.isBody && supportsFixedPosition ? 'fixed' : 'absolute'
    ***REMOVED***

    // Set the first image
    this.index = 0;
    this.show(this.index);

    // Listen for resize
    $(window).on('resize.backstretch', $.proxy(this.resize, this))
             .on('orientationchange.backstretch', $.proxy(function () ***REMOVED***
                // Need to do this in order to get the right window height
                if (this.isBody && window.pageYOffset === 0) ***REMOVED***
                  window.scrollTo(0, 1);
                  this.resize();
                ***REMOVED***
             ***REMOVED***, this));
  ***REMOVED***;

  /* PUBLIC METHODS
   * ========================= */
  Backstretch.prototype = ***REMOVED***
      resize: function () ***REMOVED***
        try ***REMOVED***
          var bgCSS = ***REMOVED***left: 0, top: 0***REMOVED***
            , rootWidth = this.isBody ? this.$root.width() : this.$root.innerWidth()
            , bgWidth = rootWidth
            , rootHeight = this.isBody ? ( window.innerHeight ? window.innerHeight : this.$root.height() ) : this.$root.innerHeight()
            , bgHeight = bgWidth / this.$img.data('ratio')
            , bgOffset;

            // Make adjustments based on image ratio
            if (bgHeight >= rootHeight) ***REMOVED***
                bgOffset = (bgHeight - rootHeight) / 2;
                if(this.options.centeredY) ***REMOVED***
                  bgCSS.top = '-' + bgOffset + 'px';
                ***REMOVED***
            ***REMOVED*** else ***REMOVED***
                bgHeight = rootHeight;
                bgWidth = bgHeight * this.$img.data('ratio');
                bgOffset = (bgWidth - rootWidth) / 2;
                if(this.options.centeredX) ***REMOVED***
                  bgCSS.left = '-' + bgOffset + 'px';
                ***REMOVED***
            ***REMOVED***

            this.$wrap.css(***REMOVED***width: rootWidth, height: rootHeight***REMOVED***)
                      .find('img:not(.deleteable)').css(***REMOVED***width: bgWidth, height: bgHeight***REMOVED***).css(bgCSS);
        ***REMOVED*** catch(err) ***REMOVED***
            // IE7 seems to trigger resize before the image is loaded.
            // This try/catch block is a hack to let it fail gracefully.
        ***REMOVED***

        return this;
      ***REMOVED***

      // Show the slide at a certain position
    , show: function (newIndex) ***REMOVED***

        // Validate index
        if (Math.abs(newIndex) > this.images.length - 1) ***REMOVED***
          return;
        ***REMOVED***

        // Vars
        var self = this
          , oldImage = self.$wrap.find('img').addClass('deleteable')
          , evtOptions = ***REMOVED*** relatedTarget: self.$container[0] ***REMOVED***;

        // Trigger the "before" event
        self.$container.trigger($.Event('backstretch.before', evtOptions), [self, newIndex]); 

        // Set the new index
        this.index = newIndex;

        // Pause the slideshow
        clearInterval(self.interval);

        // New image
        self.$img = $('<img />')
                      .css(styles.img)
                      .bind('load', function (e) ***REMOVED***
                        var imgWidth = this.width || $(e.target).width()
                          , imgHeight = this.height || $(e.target).height();
                        
                        // Save the ratio
                        $(this).data('ratio', imgWidth / imgHeight);

                        // Show the image, then delete the old one
                        // "speed" option has been deprecated, but we want backwards compatibilty
                        $(this).fadeIn(self.options.speed || self.options.fade, function () ***REMOVED***
                          oldImage.remove();

                          // Resume the slideshow
                          if (!self.paused) ***REMOVED***
                            self.cycle();
                          ***REMOVED***

                          // Trigger the "after" and "show" events
                          // "show" is being deprecated
                          $(['after', 'show']).each(function () ***REMOVED***
                            self.$container.trigger($.Event('backstretch.' + this, evtOptions), [self, newIndex]);
                          ***REMOVED***
                        ***REMOVED***

                        // Resize
                        self.resize();
                      ***REMOVED***)
                      .appendTo(self.$wrap);

        // Hack for IE img onload event
        self.$img.attr('src', self.images[newIndex]);
        return self;
      ***REMOVED***

    , next: function () ***REMOVED***
        // Next slide
        return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
      ***REMOVED***

    , prev: function () ***REMOVED***
        // Previous slide
        return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1);
      ***REMOVED***

    , pause: function () ***REMOVED***
        // Pause the slideshow
        this.paused = true;
        return this;
      ***REMOVED***

    , resume: function () ***REMOVED***
        // Resume the slideshow
        this.paused = false;
        this.next();
        return this;
      ***REMOVED***

    , cycle: function () ***REMOVED***
        // Start/resume the slideshow
        if(this.images.length > 1) ***REMOVED***
          // Clear the interval, just in case
          clearInterval(this.interval);

          this.interval = setInterval($.proxy(function () ***REMOVED***
            // Check for paused slideshow
            if (!this.paused) ***REMOVED***
              this.next();
            ***REMOVED***
          ***REMOVED***, this), this.options.duration);
        ***REMOVED***
        return this;
      ***REMOVED***

    , destroy: function (preserveBackground) ***REMOVED***
        // Stop the resize events
        $(window).off('resize.backstretch orientationchange.backstretch');

        // Clear the interval
        clearInterval(this.interval);

        // Remove Backstretch
        if(!preserveBackground) ***REMOVED***
          this.$wrap.remove();          
        ***REMOVED***
        this.$container.removeData('backstretch');
      ***REMOVED***
  ***REMOVED***;

  /* SUPPORTS FIXED POSITION?
   *
   * Based on code from jQuery Mobile 1.1.0
   * http://jquerymobile.com/
   *
   * In a nutshell, we need to figure out if fixed positioning is supported.
   * Unfortunately, this is very difficult to do on iOS, and usually involves
   * injecting content, scrolling the page, etc.. It's ugly.
   * jQuery Mobile uses this workaround. It's not ideal, but works.
   *
   * Modified to detect IE6
   * ========================= */

  var supportsFixedPosition = (function () ***REMOVED***
    var ua = navigator.userAgent
      , platform = navigator.platform
        // Rendering engine is Webkit, and capture major version
      , wkmatch = ua.match( /AppleWebKit\/([0-9]+)/ )
      , wkversion = !!wkmatch && wkmatch[ 1 ]
      , ffmatch = ua.match( /Fennec\/([0-9]+)/ )
      , ffversion = !!ffmatch && ffmatch[ 1 ]
      , operammobilematch = ua.match( /Opera Mobi\/([0-9]+)/ )
      , omversion = !!operammobilematch && operammobilematch[ 1 ]
      , iematch = ua.match( /MSIE ([0-9]+)/ )
      , ieversion = !!iematch && iematch[ 1 ];

    return !(
      // iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
      ((platform.indexOf( "iPhone" ) > -1 || platform.indexOf( "iPad" ) > -1  || platform.indexOf( "iPod" ) > -1 ) && wkversion && wkversion < 534) ||
      
      // Opera Mini
      (window.operamini && (***REMOVED******REMOVED***).toString.call( window.operamini ) === "[object OperaMini]") ||
      (operammobilematch && omversion < 7458) ||
      
      //Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
      (ua.indexOf( "Android" ) > -1 && wkversion && wkversion < 533) ||
      
      // Firefox Mobile before 6.0 -
      (ffversion && ffversion < 6) ||
      
      // WebOS less than 3
      ("palmGetResource" in window && wkversion && wkversion < 534) ||
      
      // MeeGo
      (ua.indexOf( "MeeGo" ) > -1 && ua.indexOf( "NokiaBrowser/8.5.0" ) > -1) ||
      
      // IE6
      (ieversion && ieversion <= 6)
    );
  ***REMOVED***());

***REMOVED***(jQuery, window));