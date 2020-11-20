
(function (global) {
  var ajaxUtils = {};
    
    
  
  function getRequestObject() {
      return ( new XMLHttpRequest() );
  }
    
    
  // Makes an Ajax GET request to 'requestUrl'
  ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse) {
      
      var request = getRequestObject(); //XMLHttpRequest object
      request.onreadystatechange = function() { 
          handleResponse(request, responseHandler,isJsonResponse); 
        };
      request.open("GET", requestUrl, true);
      request.send(null); // for POST only
    };
    
    
 
  function handleResponse(request,responseHandler,isJsonResponse) {
    if ((request.readyState == 4) && (request.status == 200)) {
          
      if (isJsonResponse == undefined) {
        isJsonResponse = true; //Just in case
      }

      if (isJsonResponse) {
        responseHandler(JSON.parse(request.responseText));
      }else {
        responseHandler(request.responseText); //plain text
      }

    }
  }
    
    

  global.$ajaxUtils = ajaxUtils;
  })(window);