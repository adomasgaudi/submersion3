"use strict";

// AJAX html INCLUDES
fetch("./htmls/footer.html").then(function (response) {
  return response.text();
}).then(function (data) {
  document.querySelector("footer").innerHTML = data;
});