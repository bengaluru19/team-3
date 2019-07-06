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
var admin = require('firebase-admin');

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

***REMOVED***
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
        var fire=fire_init();
	***REMOVED***

	var ProductID;
	var ProductCount;
	var OrderStatus;
	var ProductName;
	
    var db=admin.database();
	return db.ref(`Users/123`).once("value").then((snapshot) => ***REMOVED***
		if(snapshot.exists()) ***REMOVED***
			if(!gotName) ***REMOVED***
					return db.ref('Users/123/CustomerOrders').once("value").then((snapshot)=>***REMOVED***
						 conv.ask("Product Name : "+snapshot.child('ProductName').val() +" Count: "+ snapshot.child('ProductCount').val());
						 return conv.ask(new Suggestions(['accept','reject']));
                    ***REMOVED***
			***REMOVED***else ***REMOVED***
              	if(Name == "accept") ***REMOVED***
                  	conv.close("Order was accepted");
                	return db.ref('Users/123/CustomerOrders').child("OrderStatus").set(1);
                ***REMOVED***else ***REMOVED***
                  	conv.close("Order was cancelled");
                	return db.ref('Users/123/CustomerOrders').child("OrderStatus").set(-1);
                ***REMOVED***
				
			***REMOVED***
			
		***REMOVED***else ***REMOVED***
			if(!gotName && !gotShopName && !gotCategory && !gotPhoneNo && !gotProduct1Name && !gotProduct1Price && !gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask("तुम्हारा नाम क्या हे");
			***REMOVED***else if(gotName && !gotShopName && !gotCategory && !gotPhoneNo && !gotProduct1Name && !gotProduct1Price && !gotProduct2Name && !gotProduct2Price) ***REMOVED***
				conv.ask(`$***REMOVED***Name***REMOVED***, आपकी दुकान का नाम क्या है`);
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
				conv.ask(`Done with the registration`);
				
				var ref=db.ref('Users').child(123);
				return ref.set(
				***REMOVED***
					Name: Name,
					ShopName: ShopName,
					Category: Category,
					PhoneNo:PhoneNo,
					Product1Name:Product1Name,
					Product1Price:Product1Price,
					Product2Name:Product2Name,
					Product2Price:Product2Price,
					lat:77,
					lng:91,
					Rating:0
				***REMOVED***
				);
			***REMOVED***
			
		***REMOVED***
	***REMOVED***
***REMOVED***


app.intent('CustomerOrders', (conv, ***REMOVED***YesNo***REMOVED***) => ***REMOVED***
	if (!admin.apps.length) ***REMOVED***
        var fire=fire_init();
	***REMOVED***
    var db=admin.database();
	 
***REMOVED***

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
