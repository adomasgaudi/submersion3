

// AJAX html INCLUDES from css tricks

fetch("./include/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });


// img width
let height = document.querySelector(".cardsrow img").offsetHeight;
let width = height + 24;
let text = " "+ width + "px "
console.log(height, height+30, text)
document.querySelectorAll(".cardsrow img").forEach(e=>{
  e.style.width = text;
});




    



(function (global) {
  var dc = {};
  
  var ankiHtml = "./include/ankitut.html";


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
        insertHtml("#article",receivedHtml);

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