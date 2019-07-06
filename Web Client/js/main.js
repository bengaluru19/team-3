/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2015, Codrops
 * http://www.codrops.com
 */

;(function(window) ***REMOVED***

	'use strict';

	var support = ***REMOVED*** animations : Modernizr.cssanimations ***REMOVED***,
		animEndEventNames = ***REMOVED*** 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' ***REMOVED***,
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		onEndAnimation = function( el, callback ) ***REMOVED***
			var onEndCallbackFn = function( ev ) ***REMOVED***
				if( support.animations ) ***REMOVED***
					if( ev.target != this ) return;
					this.removeEventListener( animEndEventName, onEndCallbackFn );
				***REMOVED***
				if( callback && typeof callback === 'function' ) ***REMOVED*** callback.call(); ***REMOVED***
			***REMOVED***;
			if( support.animations ) ***REMOVED***
				el.addEventListener( animEndEventName, onEndCallbackFn );
			***REMOVED***
			else ***REMOVED***
				onEndCallbackFn();
			***REMOVED***
		***REMOVED***;

	function extend( a, b ) ***REMOVED***
		for( var key in b ) ***REMOVED*** 
			if( b.hasOwnProperty( key ) ) ***REMOVED***
				a[key] = b[key];
			***REMOVED***
		***REMOVED***
		return a;
	***REMOVED***

	function MLMenu(el, options) ***REMOVED***
		this.el = el;
		this.options = extend( ***REMOVED******REMOVED***, this.options );
		extend( this.options, options );
		
		// the menus (<ul>´s)
		this.menus = [].slice.call(this.el.querySelectorAll('.menu__level'));

		// index of current menu
		// Each level is actually a different menu so 0 is root, 1 is sub-1, 2 sub-2, etc.
		this.current_menu = 0;

		/* Determine what current menu actually is */
		var current_menu;
		this.menus.forEach(function(menuEl, pos) ***REMOVED***
			var items = menuEl.querySelectorAll('.menu__item');
			items.forEach(function(itemEl, iPos) ***REMOVED***
				var currentLink = itemEl.querySelector('.menu__link--current');
				if (currentLink) ***REMOVED***
					// This is the actual menu__level that should have current
					current_menu = pos;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		if (current_menu) ***REMOVED***
			this.current_menu = current_menu;	
		***REMOVED***

		this._init();
	***REMOVED***

	MLMenu.prototype.options = ***REMOVED***
		// show breadcrumbs
		breadcrumbsCtrl : true,
		// initial breadcrumb text
		initialBreadcrumb : 'all',
		// show back button
		backCtrl : true,
		// delay between each menu item sliding animation
		itemsDelayInterval : 60,
		// direction 
		direction : 'r2l',
		// callback: item that doesn´t have a submenu gets clicked
		// onItemClick([event], [inner HTML of the clicked item])
		onItemClick : function(ev, itemName) ***REMOVED*** return false; ***REMOVED***
	***REMOVED***;

	MLMenu.prototype._init = function() ***REMOVED***
		// iterate the existing menus and create an array of menus, 
		// more specifically an array of objects where each one holds the info of each menu element and its menu items
		this.menusArr = [];
		this.breadCrumbs = false;
		var self = this;
		var submenus = [];

		/* Loops over root level menu items */
		this.menus.forEach(function(menuEl, pos) ***REMOVED***
			var menu = ***REMOVED***menuEl : menuEl, menuItems : [].slice.call(menuEl.querySelectorAll('.menu__item'))***REMOVED***;
			
			self.menusArr.push(menu);

			// set current menu class
			if( pos === self.current_menu ) ***REMOVED***
				classie.add(menuEl, 'menu__level--current');
			***REMOVED***

			var menu_x = menuEl.getAttribute('data-menu');
			var links = menuEl.querySelectorAll('.menu__link');
			links.forEach(function(linkEl, lPos) ***REMOVED***
				var submenu = linkEl.getAttribute('data-submenu');
				if (submenu) ***REMOVED***
					var pushMe = ***REMOVED***"menu":submenu, "name": linkEl.innerHTML ***REMOVED***;
					if (submenus[pos]) ***REMOVED***
						submenus[pos].push(pushMe);
					***REMOVED*** else ***REMOVED***
						submenus[pos] = []
						submenus[pos].push(pushMe);
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		/* For each MENU, find their parent MENU */		
		this.menus.forEach(function(menuEl, pos) ***REMOVED***
			var menu_x = menuEl.getAttribute('data-menu');
			submenus.forEach(function(subMenuEl, menu_root) ***REMOVED***
				subMenuEl.forEach(function(subMenuItem, subPos) ***REMOVED***
					if (subMenuItem.menu == menu_x) ***REMOVED***
						self.menusArr[pos].backIdx = menu_root;
						self.menusArr[pos].name = subMenuItem.name;
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// create breadcrumbs
		if( self.options.breadcrumbsCtrl ) ***REMOVED***
			this.breadcrumbsCtrl = document.createElement('nav');
			this.breadcrumbsCtrl.className = 'menu__breadcrumbs';
			this.breadcrumbsCtrl.setAttribute('aria-label', 'You are here');
			this.el.insertBefore(this.breadcrumbsCtrl, this.el.firstChild);
			// add initial breadcrumb
			this._addBreadcrumb(0);
			
			// Need to add breadcrumbs for all parents of current submenu
			if (self.menusArr[self.current_menu].backIdx != 0 && self.current_menu != 0) ***REMOVED***
				this._crawlCrumbs(self.menusArr[self.current_menu].backIdx, self.menusArr);
				this.breadCrumbs = true;
			***REMOVED***

			// Create current submenu breadcrumb
			if (self.current_menu != 0) ***REMOVED***
				this._addBreadcrumb(self.current_menu);
				this.breadCrumbs = true;
			***REMOVED***
		***REMOVED***

		// create back button
		if (this.options.backCtrl) ***REMOVED***
			this.backCtrl = document.createElement('button');
			if (this.breadCrumbs) ***REMOVED***
				this.backCtrl.className = 'menu__back';	
			***REMOVED*** else ***REMOVED***
				this.backCtrl.className = 'menu__back menu__back--hidden';
			***REMOVED***
			this.backCtrl.setAttribute('aria-label', 'Go back');
			this.backCtrl.innerHTML = '<span class="icon icon--arrow-left"></span>';
			this.el.insertBefore(this.backCtrl, this.el.firstChild);
		***REMOVED***

		// event binding
		this._initEvents();
	***REMOVED***;

	MLMenu.prototype._initEvents = function() ***REMOVED***
		var self = this;

		for(var i = 0, len = this.menusArr.length; i < len; ++i) ***REMOVED***
			this.menusArr[i].menuItems.forEach(function(item, pos) ***REMOVED***
				item.querySelector('a').addEventListener('click', function(ev) ***REMOVED*** 
					var submenu = ev.target.getAttribute('data-submenu'),
						itemName = ev.target.innerHTML,
						subMenuEl = self.el.querySelector('ul[data-menu="' + submenu + '"]');

					// check if there's a sub menu for this item
					if( submenu && subMenuEl ) ***REMOVED***
						ev.preventDefault();
						// open it
						self._openSubMenu(subMenuEl, pos, itemName);
					***REMOVED***
					else ***REMOVED***
						// add class current
						var currentlink = self.el.querySelector('.menu__link--current');
						if( currentlink ) ***REMOVED***
							classie.remove(self.el.querySelector('.menu__link--current'), 'menu__link--current');
						***REMOVED***
						classie.add(ev.target, 'menu__link--current');
						
						// callback
						self.options.onItemClick(ev, itemName);
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***
		
		// back navigation
		if( this.options.backCtrl ) ***REMOVED***
			this.backCtrl.addEventListener('click', function() ***REMOVED***
				self._back();
			***REMOVED***
		***REMOVED***
	***REMOVED***;

	MLMenu.prototype._openSubMenu = function(subMenuEl, clickPosition, subMenuName) ***REMOVED***
		if( this.isAnimating ) ***REMOVED***
			return false;
		***REMOVED***
		this.isAnimating = true;
		
		// save "parent" menu index for back navigation
		this.menusArr[this.menus.indexOf(subMenuEl)].backIdx = this.current_menu;
		// save "parent" menu´s name
		this.menusArr[this.menus.indexOf(subMenuEl)].name = subMenuName;
		// current menu slides out
		this._menuOut(clickPosition);
		// next menu (submenu) slides in
		this._menuIn(subMenuEl, clickPosition);
	***REMOVED***;

	MLMenu.prototype._back = function() ***REMOVED***
		if( this.isAnimating ) ***REMOVED***
			return false;
		***REMOVED***
		this.isAnimating = true;

		// current menu slides out
		this._menuOut();
		// next menu (previous menu) slides in
		var backMenu = this.menusArr[this.menusArr[this.current_menu].backIdx].menuEl;
		this._menuIn(backMenu);

		// remove last breadcrumb
		if( this.options.breadcrumbsCtrl ) ***REMOVED***
			this.breadcrumbsCtrl.removeChild(this.breadcrumbsCtrl.lastElementChild);
		***REMOVED***
	***REMOVED***;

	MLMenu.prototype._menuOut = function(clickPosition) ***REMOVED***
		// the current menu
		var self = this,
			currentMenu = this.menusArr[this.current_menu].menuEl,
			isBackNavigation = typeof clickPosition == 'undefined' ? true : false;

		// slide out current menu items - first, set the delays for the items
		this.menusArr[this.current_menu].menuItems.forEach(function(item, pos) ***REMOVED***
			item.style.WebkitAnimationDelay = item.style.animationDelay = isBackNavigation ? parseInt(pos * self.options.itemsDelayInterval) + 'ms' : parseInt(Math.abs(clickPosition - pos) * self.options.itemsDelayInterval) + 'ms';
		***REMOVED***
		// animation class
		if( this.options.direction === 'r2l' ) ***REMOVED***
			classie.add(currentMenu, !isBackNavigation ? 'animate-outToLeft' : 'animate-outToRight');
		***REMOVED***
		else ***REMOVED***
			classie.add(currentMenu, isBackNavigation ? 'animate-outToLeft' : 'animate-outToRight');	
		***REMOVED***
	***REMOVED***;

	MLMenu.prototype._menuIn = function(nextMenuEl, clickPosition) ***REMOVED***
		var self = this,
			// the current menu
			currentMenu = this.menusArr[this.current_menu].menuEl,
			isBackNavigation = typeof clickPosition == 'undefined' ? true : false,
			// index of the nextMenuEl
			nextMenuIdx = this.menus.indexOf(nextMenuEl),

			nextMenu = this.menusArr[nextMenuIdx],
			nextMenuEl = nextMenu.menuEl,
			nextMenuItems = nextMenu.menuItems,
			nextMenuItemsTotal = nextMenuItems.length;

		// slide in next menu items - first, set the delays for the items
		nextMenuItems.forEach(function(item, pos) ***REMOVED***
			item.style.WebkitAnimationDelay = item.style.animationDelay = isBackNavigation ? parseInt(pos * self.options.itemsDelayInterval) + 'ms' : parseInt(Math.abs(clickPosition - pos) * self.options.itemsDelayInterval) + 'ms';

			// we need to reset the classes once the last item animates in
			// the "last item" is the farthest from the clicked item
			// let's calculate the index of the farthest item
			var farthestIdx = clickPosition <= nextMenuItemsTotal/2 || isBackNavigation ? nextMenuItemsTotal - 1 : 0;

			if( pos === farthestIdx ) ***REMOVED***
				onEndAnimation(item, function() ***REMOVED***
					// reset classes
					if( self.options.direction === 'r2l' ) ***REMOVED***
						classie.remove(currentMenu, !isBackNavigation ? 'animate-outToLeft' : 'animate-outToRight');
						classie.remove(nextMenuEl, !isBackNavigation ? 'animate-inFromRight' : 'animate-inFromLeft');
					***REMOVED***
					else ***REMOVED***
						classie.remove(currentMenu, isBackNavigation ? 'animate-outToLeft' : 'animate-outToRight');
						classie.remove(nextMenuEl, isBackNavigation ? 'animate-inFromRight' : 'animate-inFromLeft');
					***REMOVED***
					classie.remove(currentMenu, 'menu__level--current');
					classie.add(nextMenuEl, 'menu__level--current');

					//reset current
					self.current_menu = nextMenuIdx;

					// control back button and breadcrumbs navigation elements
					if( !isBackNavigation ) ***REMOVED***
						// show back button
						if( self.options.backCtrl ) ***REMOVED***
							classie.remove(self.backCtrl, 'menu__back--hidden');
						***REMOVED***
						
						// add breadcrumb
						self._addBreadcrumb(nextMenuIdx);
					***REMOVED***
					else if( self.current_menu === 0 && self.options.backCtrl ) ***REMOVED***
						// hide back button
						classie.add(self.backCtrl, 'menu__back--hidden');
					***REMOVED***

					// we can navigate again..
					self.isAnimating = false;

					// focus retention
					nextMenuEl.focus();
				***REMOVED***
			***REMOVED***
		***REMOVED***

		// animation class
		if( this.options.direction === 'r2l' ) ***REMOVED***
			classie.add(nextMenuEl, !isBackNavigation ? 'animate-inFromRight' : 'animate-inFromLeft');
		***REMOVED***
		else ***REMOVED***
			classie.add(nextMenuEl, isBackNavigation ? 'animate-inFromRight' : 'animate-inFromLeft');
		***REMOVED***
	***REMOVED***;

	MLMenu.prototype._addBreadcrumb = function(idx) ***REMOVED***
		if( !this.options.breadcrumbsCtrl ) ***REMOVED***
			return false;
		***REMOVED***

		var bc = document.createElement('a');
		bc.href = '#'; // make it focusable
		bc.innerHTML = idx ? this.menusArr[idx].name : this.options.initialBreadcrumb;
		this.breadcrumbsCtrl.appendChild(bc);

		var self = this;
		bc.addEventListener('click', function(ev) ***REMOVED***
			ev.preventDefault();

			// do nothing if this breadcrumb is the last one in the list of breadcrumbs
			if( !bc.nextSibling || self.isAnimating ) ***REMOVED***
				return false;
			***REMOVED***
			self.isAnimating = true;
			
			// current menu slides out
			self._menuOut();
			// next menu slides in
			var nextMenu = self.menusArr[idx].menuEl;
			self._menuIn(nextMenu);

			// remove breadcrumbs that are ahead
			var siblingNode;
			while (siblingNode = bc.nextSibling) ***REMOVED***
				self.breadcrumbsCtrl.removeChild(siblingNode);
			***REMOVED***
		***REMOVED***
	***REMOVED***;

	MLMenu.prototype._crawlCrumbs = function(currentMenu, menuArray) ***REMOVED***
		if (menuArray[currentMenu].backIdx != 0) ***REMOVED***
			this._crawlCrumbs(menuArray[currentMenu].backIdx, menuArray);
		***REMOVED***
		// create breadcrumb
		this._addBreadcrumb(currentMenu);
	***REMOVED***

	window.MLMenu = MLMenu;

***REMOVED***)(window);