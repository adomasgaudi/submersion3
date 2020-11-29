

// path is from /dist/assets/bundle.js
                  //     ./ == assets
                  //     ../ == dist
                  //     ../../ == submersion3


// old import method

(function (global) {
  var dc = {};
  
  dc.articleList = {}
  dc.articleList.vids = "../../docs/includes/artc_vids.html";
  // console.log(dc.articleList['vids'])
  // dc.articleList.anki = "./include/vids.html";
  // console.log(dc.articleList.anki, dc.articleList[anki])

  const insertHtml = (selector, html)=>{
    let element = document.querySelector(selector);
    element.innerHTML = html;
  }

  dc.getHtml = function (article) {
    console.log(dc.articleList[article], 'is callled', $ajaxUtils)
    // console.log(article, articleList[article]);
    $ajaxUtils.sendGetRequest(
      dc.articleList[article],
      function (receivedHtml) {
        // console.log(receivedHtml, "inserted HTML yay!!!!!!!!!")
        insertHtml("#article",receivedHtml);
        window.sizeFix();
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