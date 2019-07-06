
jQuery(document).ready(function() ***REMOVED***
	
    /*
        Fullscreen background
    */
    $.backstretch("assets/img/backgrounds/1.jpg");
    
    /*
        Login form validation
    */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function() ***REMOVED***
    	$(this).removeClass('input-error');
    ***REMOVED***
    
    $('.login-form').on('submit', function(e) ***REMOVED***
    	
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function()***REMOVED***
    		if( $(this).val() == "" ) ***REMOVED***
    			e.preventDefault();
    			$(this).addClass('input-error');
    		***REMOVED***
    		else ***REMOVED***
    			$(this).removeClass('input-error');
    		***REMOVED***
    	***REMOVED***
    	
    ***REMOVED***
    
    /*
        Registration form validation
    */
    $('.registration-form input[type="text"], .registration-form textarea').on('focus', function() ***REMOVED***
    	$(this).removeClass('input-error');
    ***REMOVED***
    
    $('.registration-form').on('submit', function(e) ***REMOVED***
    	
    	$(this).find('input[type="text"], textarea').each(function()***REMOVED***
    		if( $(this).val() == "" ) ***REMOVED***
    			e.preventDefault();
    			$(this).addClass('input-error');
    		***REMOVED***
    		else ***REMOVED***
    			$(this).removeClass('input-error');
    		***REMOVED***
    	***REMOVED***
    	
    ***REMOVED***
    
    
***REMOVED***
