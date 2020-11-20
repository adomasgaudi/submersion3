"use strict";

// AJAX html INCLUDES from css tricks
fetch("./htmls/footer.html").then(function (response) {
  return response.text();
}).then(function (data) {
  document.querySelector("footer").innerHTML = data;
});

(function (global) {
  var dc = {};
  var ankiHtml = "./htmls/ankitut.html";

  var insertHtml = function insertHtml(selector, html) {
    var element = document.querySelector(selector);
    element.innerHTML = html;
  };

  dc.getHtml = function () {
    console.log();
    $ajaxUtils.sendGetRequest(ankiHtml, function (receivedHtml) {
      console.log(receivedHtml, "inserted HTML yay!!!!!!!!!");
      insertHtml("#ankiExplained", receivedHtml);
    }, false);
  };

  dc.devopen = function () {
    document.querySelector("#devBtn").style.display = "inline";
  };

  dc.devTog = function () {
    $(".devMode").css("display", "block");
    $(".col1").css("background", "crimson");
  };

  global.$dc = dc;
})(window);