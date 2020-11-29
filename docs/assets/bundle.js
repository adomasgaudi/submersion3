/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {


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
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////// 

// AJAX html INCLUDES from css tricks


  const fetchHtml = function(url, callback){
    fetch(url).then(response => {
      return response.text()
    })
    .then(data => { callback(data) });
  }
/////////////////////////////////////////////////////







//////////////////////////////////////
// import main htmls

  // fetchHtml("../../docs/includes/out_header_jumbo.html", (da)=>{
  //   $('[refer="out_header_jumbo"]').replaceWith(da);
  // }) 
  // console.log('hello');
  // fetchHtml("../../docs/includes/sec_one.html", (da) =>{
  //   $('[refer="sec_one"]').replaceWith(da);
  // }) 


  // fetchHtml("../../docs/includes/sec_patience.html", (da)=>{
  //   $('[refer="sec_patience"]').replaceWith(da);
  // }) 

  // fetchHtml("../../docs/includes/out_footer.html", (da)=>{
  //   $('[refer="out_footer"]').replaceWith(da);
  // }) 
//////////////////////////////////////




console.log('-------from init-all.js');










/////////////////////////////////////////////////
// section one
/////////////////////////////////////////////////

// console.log(document.querySelector('aside')) 
// document.querySelector('.link_card_title').addEventListener('click',()=>{

//   document.querySelector('.expand').classList.toggle('.expand_toggle');
// })








// (function (global) {
//   var dc = {};


window.sizeFix = function(){
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
  window.sizeFix()
});




  
// global.$dc = dc;
// })(window);



// IMG FIX
window.onload = () => {

  let imgHeight = $('.cardsrow img').outerHeight();
  document.querySelectorAll(".cardsrow img").forEach(e=>{
    e.style.width = " "+ (imgHeight+24) + "px ";
  });

};

console.log('main.js');

/***/ })
/******/ ]);