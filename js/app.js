

// AJAX html INCLUDES from css tricks

fetch("./htmls/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });









    



(function (global) {
  var dc = {};
  
  var ankiHtml = "./htmls/ankitut.html";


  const insertHtml = (selector, html)=>{
    let element = document.querySelector(selector);
    element.innerHTML = html;
  }

  dc.getHtml = function () {
    console.log(  );
    $ajaxUtils.sendGetRequest(
      ankiHtml,
      function (receivedHtml) {
        console.log(receivedHtml, "inserted HTML yay!!!!!!!!!")
        insertHtml("#ankiExplained",receivedHtml);

      },
      false);

  }





 


  dc.devopen = function () {
    document.querySelector("#devBtn").style.display = "inline";
  }

  dc.devTog = function () {
    $(".devMode").css("display", "block")
    $(".col1").css("background", "crimson")
  }



  
  global.$dc = dc;
  })(window);