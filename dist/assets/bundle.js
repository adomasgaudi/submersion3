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

// AJAX html INCLUDES from css tricks


  const insertHtml = function(url, callback){
    fetch(url).then(response => {
      return response.text()
    })
    .then(data => { callback(data) });
  }
/////////////////////////////////////////////////////








// import htmls from pugs

  insertHtml("../../dist/includes/out_header_jumbo.html", (da)=>{
    $('[refer="out_header_jumbo"]').replaceWith(da);
  }) 
  
  insertHtml("../../dist/includes/sec_one.html", (da) =>{
    $('[refer="sec_one"]').replaceWith(da);
  }) 

        insertHtml('../../dist/includes/aside.html', (da)=>{
          $('[refer="aside"]').replaceWith(da);
        })

        insertHtml('../../dist/includes/main.html', (da)=>{
          $('[refer="main"]').replaceWith(da);
        })








  insertHtml("../../dist/includes/sec_patience.html", (da)=>{
    $('[refer="sec_patience"]').replaceWith(da);
  }) 
  insertHtml("../../dist/includes/out_footer.html", (da)=>{
    $('[refer="out_footer"]').replaceWith(da);
  }) 
  insertHtml("../../dist/includes/out_scripts.html", (da)=>{
    $('[refer="out_scripts"]').replaceWith(da);
  }) 
 

 
  // insertHtml("./include/footer.html", (da)=>{
  //   $('footer').replaceWith(da);
  // })


  // insertHtml("./include/foot-scripts.html", (da)=>{
  //   document.querySelector("body").innerHTML += da;
  //   console.log('scripts were added ------------------')
  // })



  // insertHtml("./mod-res-title/re.html", (da)=>{
  //   $('.resources-top').replaceWith(da);
  //   $('.link').replaceWith(`<link rel="stylesheet", href="./mod-res-title/re.css">`);
  // })






// import './test.css';
// import './init-ajax.js';
// import '../digital_clock/date';

// console.log("webpack")
// $dom.runs("bubba hunnnnaa")
  







/***/ })
/******/ ]);