'use strict';

const ***REMOVED***
    dialogflow,
  	RegisterUpdate,
    BasicCard,
    BrowseCarousel,
    BrowseCarouselItem,
    Button,
    Permission,
    Carousel,
    Image,
    LinkOutSuggestion,
    List,
    MediaObject,
    Suggestions,
    SimpleResponse,
    Table
***REMOVED*** = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow(***REMOVED***debug: true***REMOVED***

***REMOVED***
***REMOVED***
   var fire = admin.initializeApp(***REMOVED***
  credential: admin.credential.cert(***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

return fire
***REMOVED***

app.intent('Default Welcome Intent', (conv, ***REMOVED***Name,ShopName,Category,PhoneNo,Product1Name,Product1Price,Product2Name,Product2Price***REMOVED***) => ***REMOVED***
	var gotName = Name.length > 0 ;
	var gotShopName = ShopName.length > 0 ;
	var gotCategory = Category.length > 0 ;
	var gotPhoneNo = PhoneNo.length > 0 ;
	var gotProduct1Name = Product1Name.length > 0 ;
	var gotProduct1Price = Product1Price.length > 0 ;
	var gotProduct2Name = Product2Name.length > 0 ;
	var gotProduct2Price = Product2Price.length > 0 ;
    var userId=conv.user.id;

	if (!admin.apps.length) ***REMOVED***
        fire=fire_init();
	***REMOVED***

	
	return db.ref(`Users/$***REMOVED***userId***REMOVED***`).once("value").then((snapshot) => ***REMOVED***
		if(snapshot.exists()) ***REMOVED***
			conv.ask("आप पहले से ही पंजीकृत हैं");
		***REMOVED***else ***REMOVED***
			if(!gotName && !gotShopName && !gotCategory && !gotPhoneNo && !gotProduct1Name && !gotProduct1Price && !gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask("तुम्हारा नाम क्या हे");
			***REMOVED***else if(gotName && !gotShopName && !gotCategory && !gotPhoneNo && !gotProduct1Name && !gotProduct1Price && !gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask("आपकी दुकान का नाम क्या है");
				conv.ask(`$***REMOVED***Name***REMOVED***`);
			***REMOVED***else if(gotName && gotShopName && !gotCategory && !gotPhoneNo && !gotProduct1Name && !gotProduct1Price && !gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask("उत्पादों की बिक्री जो आप बेचते हैं");
			***REMOVED***else if(gotName && gotShopName && gotCategory && !gotPhoneNo && !gotProduct1Name && !gotProduct1Price && !gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask("कृपया अपना फ़ोन नंबर लिखें");
			***REMOVED***else if(gotName && gotShopName && gotCategory && gotPhoneNo && !gotProduct1Name && !gotProduct1Price && !gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask("पहले उत्पाद का नाम");
			***REMOVED***else if(gotName && gotShopName && gotCategory && gotPhoneNo && gotProduct1Name && !gotProduct1Price && !gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask("पहले उत्पाद की कीमत");
			***REMOVED***else if(gotName && gotShopName && gotCategory && gotPhoneNo && gotProduct1Name && gotProduct1Price && !gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask("दूसरे उत्पाद का नाम");
			***REMOVED***else if(gotName && gotShopName && gotCategory && gotPhoneNo && gotProduct1Name && gotProduct1Price && gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask("दूसरे उत्पाद की कीमत");
			***REMOVED***else if(gotName && gotShopName && gotCategory && gotPhoneNo && gotProduct1Name && gotProduct1Price && gotProduct2Name && gotProduct2Price) ***REMOVED***
				conv.ask(`***REMOVED***$Name***REMOVED*** ***REMOVED***$ShopName***REMOVED***`);
			***REMOVED***
		***REMOVED***
	***REMOVED***
	
	
	
	

***REMOVED***

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
