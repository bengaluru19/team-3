var config = ***REMOVED***
	***REMOVED***,
    authDomain: "***REMOVED***",
    databaseURL: "https://***REMOVED***/",
    projectId: "***REMOVED***",
	***REMOVED***;
firebase.initializeApp(config);
var database=firebase.database();


function getVendor(category, lat, lng) ***REMOVED***
	res = []
	
	return database.ref('Users').once("value").then((snapshot) => ***REMOVED***
		
		snapshot.forEach((childSnapshot)=>***REMOVED***
			console.log(childSnapshot.key)
			console.log(childSnapshot.child("Name").val())
			res.push(***REMOVED***VendorDeviceID:childSnapshot.key,Name:childSnapshot.child("Name").val(),distance:'10km'***REMOVED***
		***REMOVED***
		
	***REMOVED***).then(()=>***REMOVED***
		return res;
	***REMOVED***
***REMOVED***

function getProducts(vendorID) ***REMOVED***
	
	res = ***REMOVED******REMOVED***
	return database.ref('Users/'+vendorID+'/').once("value").then((snapshot) => ***REMOVED***
		snapshot.forEach((childSnapshot)=>***REMOVED***
			res[childSnapshot.key] = childSnapshot.val();
		***REMOVED***
	***REMOVED***)
	.then(
	()=>***REMOVED***
		return [***REMOVED***ProductID:123232,
			ProductName:res["Product1Name"],
			ProductPrice:res["Product1Price"] ***REMOVED***,
			***REMOVED***ProductID:123132,
			ProductName:res["Product2Name"],
			ProductPrice:res["Product2Price"] ***REMOVED***]***REMOVED***
	);

***REMOVED***

function orderProducts(vendorID,productID,ProductName,Count) ***REMOVED***

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://ghuqwtuoqc.execute-api.us-west-2.amazonaws.com/Production", true);
	xhttp.send();
	xhttp.onreadystatechange = function() ***REMOVED***
    if (this.readyState == 4 && this.status == 200) ***REMOVED***
      return database.ref('Users/'+vendorID+'/CustomerOrders').set(***REMOVED***
		OrderStatus : 1,
		ProductCount : Count,
		ProductID : productID,
		ProductName : ProductName
	***REMOVED***
    ***REMOVED***
  ***REMOVED***;
	
***REMOVED***

function isAccepted(vendorID,productID) ***REMOVED***
	var res1 = database.ref('Users/'+vendorID+'/CustomerOrders').child("OrderStatus").once("value").then((snapshot) => ***REMOVED***
		res = snapshot.val();
		if(res == -1) ***REMOVED***
			return "Rejected";
		***REMOVED***else if(res == 1) ***REMOVED***
			return "Accepted";	
		***REMOVED***else if(res == 0) ***REMOVED***
			return "Yet to confirm"
		***REMOVED***
	***REMOVED***	 
	return res1;
***REMOVED***

orderProducts(123,12,'Apple',10231);
