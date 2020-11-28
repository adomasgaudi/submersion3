"use strict";

// IMG FIX
window.onload = function () {
  var imgHeight = $('.cardsrow img').outerHeight();
  document.querySelectorAll(".cardsrow img").forEach(function (e) {
    e.style.width = " " + (imgHeight + 24) + "px ";
  });
};

console.log('main.js');