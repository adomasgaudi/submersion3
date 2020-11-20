

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
  
  dc.artList = {}
  dc.artList.anki = "./include/ankitut.html";
  dc.artList.vids = "./include/vids.html";
  // console.log(dc.artList.anki, dc.artList[anki])

  const insertHtml = (selector, html)=>{
    let element = document.querySelector(selector);
    element.innerHTML = html;
  }

  dc.getHtml = function (article) {
    // console.log(article, artList[article]);
    $ajaxUtils.sendGetRequest(
      dc.artList[article],
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
    $("section:last-of-type").css("background", "crimson")

  }



  
  global.$dc = dc;
  })(window);