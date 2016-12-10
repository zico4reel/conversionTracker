
var conversionTracker ={

 setCookie : function(name, value, daysToLive) {
	var cookies = name + "=" + encodeURIComponent(value);

    if (typeof daysToLive === "number"){
         cookies += "; max-age=" + (daysToLive*60*60*24);
	}

    document.cookie = cookies;


 }, 

 getCookies :  function() {
    var cookies = {};           // The object we will return
    var all = document.cookie;  // Get all cookies in one big string
    if (all === ""){             // If the property is the empty string
        return cookies;
         // return an empty object
	}
    var list = all.split("; "); // Split into individual name=value pairs
    for(var i = 0; i < list.length; i++) {
  // For each cookie
        var cookie = list[i];
        var p = cookie.indexOf("=");        // Find the first = sign
        var name = cookie.substring(0,p);   // Get cookie name
        var value = cookie.substring(p+1);  // Get cookie value
        value = decodeURIComponent(value);  // Decode the value
        cookies[name] = value;              // Store name and value in object
    }
    return cookies;
 },

isNotEmpty: function(cookies){

	if(cookies !="" && cookies !== undefined){
		return true;
	}else{return false;}

},

getUrl : function(){

  var urlObject = {};     

    var query = window.location.search.substring(1);  

    var pairs = query.split("&");              

    for(var i = 0; i < pairs.length; i++) {    
        var pos = pairs[i].indexOf('=');       
        if (pos == -1){ continue;}               
        var name = pairs[i].substring(0,pos);  
        var value = pairs[i].substring(pos+1); 
        value = decodeURIComponent(value);     
        urlObject[name] = value;                    
    }
    return urlObject;                              

},

 showAsSid : function(cookieUrl){


	window.history.pushState({state:1},document.title.innerHTML,"?sid="+cookieUrl);	

 }
}