

// AJAX html INCLUDES from css tricks

fetch("./include/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

  window.onload = () => {

    let imgHeight = $('.cardsrow img').outerHeight();
    document.querySelectorAll(".cardsrow img").forEach(e=>{
      e.style.width = " "+ (imgHeight+24) + "px ";
    });

    





  };

  function sizeFix(){
    let vidWidth = $('#article iframe').outerWidth();
    let vidHeight;
    console.log( vidWidth, vidHeight);
    if(vidWidth > 500){
      vidHeight = (vidWidth/16)*9;
      console.log("16:9", vidWidth, vidHeight);
    }else{
      vidHeight = (vidWidth/4)*3;
      console.log("4:3");
    }
    document.querySelectorAll("#article iframe").forEach(e=>{
      e.style.height = " "+ (vidHeight) + "px ";
    });
  }



  window.addEventListener('resize', function(){
    
    sizeFix()
  });


// (function(global){    

//  })(window);




    



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
        // console.log(receivedHtml, "inserted HTML yay!!!!!!!!!")
        insertHtml("#article",receivedHtml);

        sizeFix();
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