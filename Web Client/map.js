<script>
function getLocation() ***REMOVED***
  if (navigator.geolocation) 
 ***REMOVED***
      navigator.geolocation.getCurrentPosition(showPosition);
  ***REMOVED*** 
***REMOVED***

function showPosition(pos) 
***REMOVED***
  var c=pos.coords;
  var cords=[];
  cords.push(c.latitude);
  cords.push(c.longitude);
  console.log(cords)
***REMOVED***

</script>