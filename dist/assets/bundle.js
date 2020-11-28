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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_mods_sec_one_sec_one_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _src_mods_sec_one_sec_one_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_mods_sec_one_sec_one_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_mods_ajax_ajax_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _src_mods_ajax_ajax_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_mods_ajax_ajax_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_mods_ajax_iife__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _src_mods_ajax_iife__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_mods_ajax_iife__WEBPACK_IMPORTED_MODULE_2__);
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

  fetchHtml("../../dist/includes/out_header_jumbo.html", (da)=>{
    $('[refer="out_header_jumbo"]').replaceWith(da);
  }) 
  console.log('hello');
  
  

  fetchHtml("../../dist/includes/sec_one.html", (da) =>{
    $('[refer="sec_one"]').replaceWith(da);
  }) 



  fetchHtml("../../dist/includes/sec_patience.html", (da)=>{
    $('[refer="sec_patience"]').replaceWith(da);
  }) 

  fetchHtml("../../dist/includes/out_footer.html", (da)=>{
    $('[refer="out_footer"]').replaceWith(da);
  }) 
//////////////////////////////////////


// form mods



// @pepros-append ../../src/mods/sec_one/sec-one.js
// @pepros-append ./app.js

  
// import './init-ajax.js';
// import './add-link.js';
console.log('-------from init-all.js');







/***/ }),
/* 1 */
/***/ (function(module, exports) {

// import "./main/main.js";
// import "./mod-vids/vids.js";
// import "./mod-res-title/re.js"; 






/***/ }),
/* 2 */
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {



// path is from /dist/assets/bundle.js
                  //     ./ == assets
                  //     ../ == dist
                  //     ../../ == submersion3


// old import method

(function (global) {
  var dc = {};
  
  dc.articleList = {}
  dc.articleList.vids = "../../dist/includes/artc_vids.html";
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
        console.log(receivedHtml, "inserted HTML yay!!!!!!!!!")
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

/***/ })
/******/ ]);