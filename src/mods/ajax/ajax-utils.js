
(function (global) {
  let ajaxUtils = {};
    
    
  
 
    
  // Makes an Ajax GET request to 'requestUrl'
  ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse) {
      
      var request = new XMLHttpRequest(); //XMLHttpRequest object
      request.onreadystatechange = function() { 
          handleResponse(request, responseHandler,isJsonResponse); 
        };
        
      request.open("GET", requestUrl, true);
      request.send(null); // for POST only
    };
    
    
  function handleResponse(request,responseHandler,isJsonResponse) {
    if ((request.readyState == 4) && (request.status == 200)) {
          
      (isJsonResponse == "undefinded") ? (isJsonResponse = true) : null;

      isJsonResponse 
      ? responseHandler(JSON.parse(request.responseText)) 
      : responseHandler(request.responseText);

    }
  }

    
    

  global.$ajaxUtils = ajaxUtils;
  })(window);