/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.1.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) ***REMOVED***
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('popper.js')) :
	typeof define === 'function' && define.amd ? define(['popper.js'], factory) :
	(global.Tooltip = factory(global.Popper));
***REMOVED***(this, (function (Popper) ***REMOVED*** 'use strict';

Popper = Popper && 'default' in Popper ? Popper['default'] : Popper;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument ***REMOVED***Any***REMOVED*** functionToCheck - variable to check
 * @returns ***REMOVED***Boolean***REMOVED*** answer to: is a function?
 */
function isFunction(functionToCheck) ***REMOVED***
  var getType = ***REMOVED******REMOVED***;
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
***REMOVED***

var classCallCheck = function (instance, Constructor) ***REMOVED***
  if (!(instance instanceof Constructor)) ***REMOVED***
    throw new TypeError("Cannot call a class as a function");
  ***REMOVED***
***REMOVED***;

var createClass = function () ***REMOVED***
  function defineProperties(target, props) ***REMOVED***
    for (var i = 0; i < props.length; i++) ***REMOVED***
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    ***REMOVED***
  ***REMOVED***

  return function (Constructor, protoProps, staticProps) ***REMOVED***
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  ***REMOVED***;
***REMOVED***();







var _extends = Object.assign || function (target) ***REMOVED***
  for (var i = 1; i < arguments.length; i++) ***REMOVED***
    var source = arguments[i];

    for (var key in source) ***REMOVED***
      if (Object.prototype.hasOwnProperty.call(source, key)) ***REMOVED***
        target[key] = source[key];
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***

  return target;
***REMOVED***;

var DEFAULT_OPTIONS = ***REMOVED***
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  title: '',
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: 'hover focus',
  offset: 0
***REMOVED***;

var Tooltip = function () ***REMOVED***
  /**
   * Create a new Tooltip.js instance
   * @class Tooltip
   * @param ***REMOVED***HTMLElement***REMOVED*** reference - The DOM node used as reference of the tooltip (it can be a jQuery element).
   * @param ***REMOVED***Object***REMOVED*** options
   * @param ***REMOVED***String***REMOVED*** options.placement=bottom
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
   *      left(-start, -end)`
   * @param ***REMOVED***HTMLElement|String|false***REMOVED*** options.container=false - Append the tooltip to a specific element.
   * @param ***REMOVED***Number|Object***REMOVED*** options.delay=0
   *      Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type.
   *      If a number is supplied, delay is applied to both hide/show.
   *      Object structure is: `***REMOVED*** show: 500, hide: 100 ***REMOVED***`
   * @param ***REMOVED***Boolean***REMOVED*** options.html=false - Insert HTML into the tooltip. If false, the content will inserted with `innerText`.
   * @param ***REMOVED***String|PlacementFunction***REMOVED*** options.placement='top' - One of the allowed placements, or a function returning one of them.
   * @param ***REMOVED***String***REMOVED*** [options.template='<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>']
   *      Base HTML to used when creating the tooltip.
   *      The tooltip's `title` will be injected into the `.tooltip-inner` or `.tooltip__inner`.
   *      `.tooltip-arrow` or `.tooltip__arrow` will become the tooltip's arrow.
   *      The outermost wrapper element should have the `.tooltip` class.
   * @param ***REMOVED***String|HTMLElement|TitleFunction***REMOVED*** options.title='' - Default title value if `title` attribute isn't present.
   * @param ***REMOVED***String***REMOVED*** [options.trigger='hover focus']
   *      How tooltip is triggered - click, hover, focus, manual.
   *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
   * @param ***REMOVED***HTMLElement***REMOVED*** options.boundariesElement
   *      The element used as boundaries for the tooltip. For more information refer to Popper.js'
   *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
   * @param ***REMOVED***Number|String***REMOVED*** options.offset=0 - Offset of the tooltip relative to its reference. For more information refer to Popper.js'
   *      [offset docs](https://popper.js.org/popper-documentation.html)
   * @param ***REMOVED***Object***REMOVED*** options.popperOptions=***REMOVED******REMOVED*** - Popper options, will be passed directly to popper instance. For more information refer to Popper.js'
   *      [options docs](https://popper.js.org/popper-documentation.html)
   * @return ***REMOVED***Object***REMOVED*** instance - The generated tooltip instance
   */
  function Tooltip(reference, options) ***REMOVED***
    classCallCheck(this, Tooltip);

    _initialiseProps.call(this);

    // apply user options over default ones
    options = _extends(***REMOVED******REMOVED***, DEFAULT_OPTIONS, options);

    reference.jquery && (reference = reference[0]);

    // cache reference and options
    this.reference = reference;
    this.options = options;

    // get events list
    var events = typeof options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) ***REMOVED***
      return ['click', 'hover', 'focus'].indexOf(trigger) !== -1;
    ***REMOVED***) : [];

    // set initial state
    this._isOpen = false;

    // set event listeners
    this._setEventListeners(reference, events, options);
  ***REMOVED***

  //
  // Public methods
  //

  /**
   * Reveals an element's tooltip. This is considered a "manual" triggering of the tooltip.
   * Tooltips with zero-length titles are never displayed.
   * @method Tooltip#show
   * @memberof Tooltip
   */


  /**
   * Hides an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#hide
   * @memberof Tooltip
   */


  /**
   * Hides and destroys an element’s tooltip.
   * @method Tooltip#dispose
   * @memberof Tooltip
   */


  /**
   * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
   * @method Tooltip#toggle
   * @memberof Tooltip
   */


  //
  // Defaults
  //


  //
  // Private methods
  //

  createClass(Tooltip, [***REMOVED***
    key: '_create',


    /**
     * Creates a new tooltip node
     * @memberof Tooltip
     * @private
     * @param ***REMOVED***HTMLElement***REMOVED*** reference
     * @param ***REMOVED***String***REMOVED*** template
     * @param ***REMOVED***String|HTMLElement|TitleFunction***REMOVED*** title
     * @param ***REMOVED***Boolean***REMOVED*** allowHtml
     * @return ***REMOVED***HTMLelement***REMOVED*** tooltipNode
     */
    value: function _create(reference, template, title, allowHtml) ***REMOVED***
      // create tooltip element
      var tooltipGenerator = window.document.createElement('div');
      tooltipGenerator.innerHTML = template.trim();
      var tooltipNode = tooltipGenerator.childNodes[0];

      // add unique ID to our tooltip (needed for accessibility reasons)
      tooltipNode.id = 'tooltip_' + Math.random().toString(36).substr(2, 10);

      // set initial `aria-hidden` state to `false` (it's visible!)
      tooltipNode.setAttribute('aria-hidden', 'false');

      // add title to tooltip
      var titleNode = tooltipGenerator.querySelector(this.innerSelector);
      if (title.nodeType === 1) ***REMOVED***
        // if title is a node, append it only if allowHtml is true
        allowHtml && titleNode.appendChild(title);
      ***REMOVED*** else if (isFunction(title)) ***REMOVED***
        // if title is a function, call it and set innerText or innerHtml depending by `allowHtml` value
        var titleText = title.call(reference);
        allowHtml ? titleNode.innerHTML = titleText : titleNode.innerText = titleText;
      ***REMOVED*** else ***REMOVED***
        // if it's just a simple text, set innerText or innerHtml depending by `allowHtml` value
        allowHtml ? titleNode.innerHTML = title : titleNode.innerText = title;
      ***REMOVED***

      // return the generated tooltip node
      return tooltipNode;
    ***REMOVED***
  ***REMOVED***, ***REMOVED***
    key: '_show',
    value: function _show(reference, options) ***REMOVED***
      // don't show if it's already visible
      if (this._isOpen) ***REMOVED***
        return this;
      ***REMOVED***
      this._isOpen = true;

      // if the tooltipNode already exists, just show it
      if (this._tooltipNode) ***REMOVED***
        this._tooltipNode.style.display = '';
        this._tooltipNode.setAttribute('aria-hidden', 'false');
        this.popperInstance.update();
        return this;
      ***REMOVED***

      // get title
      var title = reference.getAttribute('title') || options.title;

      // don't show tooltip if no title is defined
      if (!title) ***REMOVED***
        return this;
      ***REMOVED***

      // create tooltip node
      var tooltipNode = this._create(reference, options.template, title, options.html);

      // Add `aria-describedby` to our reference element for accessibility reasons
      reference.setAttribute('aria-describedby', tooltipNode.id);

      // append tooltip to container
      var container = this._findContainer(options.container, reference);

      this._append(tooltipNode, container);

      var popperOptions = _extends(***REMOVED******REMOVED***, options.popperOptions, ***REMOVED***
        placement: options.placement
      ***REMOVED***

      popperOptions.modifiers = _extends(***REMOVED******REMOVED***, popperOptions.modifiers, ***REMOVED***
        arrow: ***REMOVED***
          element: this.arrowSelector
        ***REMOVED***
      ***REMOVED***

      if (options.boundariesElement) ***REMOVED***
        popperOptions.modifiers.preventOverflow = ***REMOVED***
          boundariesElement: options.boundariesElement
        ***REMOVED***;
      ***REMOVED***

      this.popperInstance = new Popper(reference, tooltipNode, popperOptions);

      this._tooltipNode = tooltipNode;

      return this;
    ***REMOVED***
  ***REMOVED***, ***REMOVED***
    key: '_hide',
    value: function _hide() /*reference, options*/***REMOVED***
      // don't hide if it's already hidden
      if (!this._isOpen) ***REMOVED***
        return this;
      ***REMOVED***

      this._isOpen = false;

      // hide tooltipNode
      this._tooltipNode.style.display = 'none';
      this._tooltipNode.setAttribute('aria-hidden', 'true');

      return this;
    ***REMOVED***
  ***REMOVED***, ***REMOVED***
    key: '_dispose',
    value: function _dispose() ***REMOVED***
      var _this = this;

      if (this._tooltipNode) ***REMOVED***
        this._hide();

        // destroy instance
        this.popperInstance.destroy();

        // remove event listeners
        this._events.forEach(function (_ref) ***REMOVED***
          var func = _ref.func,
              event = _ref.event;

          _this.reference.removeEventListener(event, func);
        ***REMOVED***
        this._events = [];

        // destroy tooltipNode
        this._tooltipNode.parentNode.removeChild(this._tooltipNode);
        this._tooltipNode = null;
      ***REMOVED***
      return this;
    ***REMOVED***
  ***REMOVED***, ***REMOVED***
    key: '_findContainer',
    value: function _findContainer(container, reference) ***REMOVED***
      // if container is a query, get the relative element
      if (typeof container === 'string') ***REMOVED***
        container = window.document.querySelector(container);
      ***REMOVED*** else if (container === false) ***REMOVED***
        // if container is `false`, set it to reference parent
        container = reference.parentNode;
      ***REMOVED***
      return container;
    ***REMOVED***

    /**
     * Append tooltip to container
     * @memberof Tooltip
     * @private
     * @param ***REMOVED***HTMLElement***REMOVED*** tooltip
     * @param ***REMOVED***HTMLElement|String|false***REMOVED*** container
     */

  ***REMOVED***, ***REMOVED***
    key: '_append',
    value: function _append(tooltipNode, container) ***REMOVED***
      container.appendChild(tooltipNode);
    ***REMOVED***
  ***REMOVED***, ***REMOVED***
    key: '_setEventListeners',
    value: function _setEventListeners(reference, events, options) ***REMOVED***
      var _this2 = this;

      var directEvents = [];
      var oppositeEvents = [];

      events.forEach(function (event) ***REMOVED***
        switch (event) ***REMOVED***
          case 'hover':
            directEvents.push('mouseenter');
            oppositeEvents.push('mouseleave');
            break;
          case 'focus':
            directEvents.push('focus');
            oppositeEvents.push('blur');
            break;
          case 'click':
            directEvents.push('click');
            oppositeEvents.push('click');
            break;
        ***REMOVED***
      ***REMOVED***

      // schedule show tooltip
      directEvents.forEach(function (event) ***REMOVED***
        var func = function func(evt) ***REMOVED***
          if (_this2._isOpen === true) ***REMOVED***
            return;
          ***REMOVED***
          evt.usedByTooltip = true;
          _this2._scheduleShow(reference, options.delay, options, evt);
        ***REMOVED***;
        _this2._events.push(***REMOVED*** event: event, func: func ***REMOVED***
        reference.addEventListener(event, func);
      ***REMOVED***

      // schedule hide tooltip
      oppositeEvents.forEach(function (event) ***REMOVED***
        var func = function func(evt) ***REMOVED***
          if (evt.usedByTooltip === true) ***REMOVED***
            return;
          ***REMOVED***
          _this2._scheduleHide(reference, options.delay, options, evt);
        ***REMOVED***;
        _this2._events.push(***REMOVED*** event: event, func: func ***REMOVED***
        reference.addEventListener(event, func);
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***, ***REMOVED***
    key: '_scheduleShow',
    value: function _scheduleShow(reference, delay, options /*, evt */) ***REMOVED***
      var _this3 = this;

      // defaults to 0
      var computedDelay = delay && delay.show || delay || 0;
      window.setTimeout(function () ***REMOVED***
        return _this3._show(reference, options);
      ***REMOVED***, computedDelay);
    ***REMOVED***
  ***REMOVED***, ***REMOVED***
    key: '_scheduleHide',
    value: function _scheduleHide(reference, delay, options, evt) ***REMOVED***
      var _this4 = this;

      // defaults to 0
      var computedDelay = delay && delay.hide || delay || 0;
      window.setTimeout(function () ***REMOVED***
        if (_this4._isOpen === false) ***REMOVED***
          return;
        ***REMOVED***
        if (!document.body.contains(_this4._tooltipNode)) ***REMOVED***
          return;
        ***REMOVED***

        // if we are hiding because of a mouseleave, we must check that the new
        // reference isn't the tooltip, because in this case we don't want to hide it
        if (evt.type === 'mouseleave') ***REMOVED***
          var isSet = _this4._setTooltipNodeEvent(evt, reference, delay, options);

          // if we set the new event, don't hide the tooltip yet
          // the new event will take care to hide it if necessary
          if (isSet) ***REMOVED***
            return;
          ***REMOVED***
        ***REMOVED***

        _this4._hide(reference, options);
      ***REMOVED***, computedDelay);
    ***REMOVED***
  ***REMOVED***]);
  return Tooltip;
***REMOVED***();

/**
 * Placement function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback PlacementFunction
 * @param ***REMOVED***HTMLElement***REMOVED*** tooltip - tooltip DOM node.
 * @param ***REMOVED***HTMLElement***REMOVED*** reference - reference DOM node.
 * @return ***REMOVED***String***REMOVED*** placement - One of the allowed placement options.
 */

/**
 * Title function, its context is the Tooltip instance.
 * @memberof Tooltip
 * @callback TitleFunction
 * @return ***REMOVED***String***REMOVED*** placement - The desired title.
 */


var _initialiseProps = function _initialiseProps() ***REMOVED***
  var _this5 = this;

  this.show = function () ***REMOVED***
    return _this5._show(_this5.reference, _this5.options);
  ***REMOVED***;

  this.hide = function () ***REMOVED***
    return _this5._hide();
  ***REMOVED***;

  this.dispose = function () ***REMOVED***
    return _this5._dispose();
  ***REMOVED***;

  this.toggle = function () ***REMOVED***
    if (_this5._isOpen) ***REMOVED***
      return _this5.hide();
    ***REMOVED*** else ***REMOVED***
      return _this5.show();
    ***REMOVED***
  ***REMOVED***;

  this.arrowSelector = '.tooltip-arrow, .tooltip__arrow';
  this.innerSelector = '.tooltip-inner, .tooltip__inner';
  this._events = [];

  this._setTooltipNodeEvent = function (evt, reference, delay, options) ***REMOVED***
    var relatedreference = evt.relatedreference || evt.toElement;

    var callback = function callback(evt2) ***REMOVED***
      var relatedreference2 = evt2.relatedreference || evt2.toElement;

      // Remove event listener after call
      _this5._tooltipNode.removeEventListener(evt.type, callback);

      // If the new reference is not the reference element
      if (!reference.contains(relatedreference2)) ***REMOVED***
        // Schedule to hide tooltip
        _this5._scheduleHide(reference, options.delay, options, evt2);
      ***REMOVED***
    ***REMOVED***;

    if (_this5._tooltipNode.contains(relatedreference)) ***REMOVED***
      // listen to mouseleave on the tooltip element to be able to hide the tooltip
      _this5._tooltipNode.addEventListener(evt.type, callback);
      return true;
    ***REMOVED***

    return false;
  ***REMOVED***;
***REMOVED***;

return Tooltip;

***REMOVED***)));
//# sourceMappingURL=tooltip.js.map
