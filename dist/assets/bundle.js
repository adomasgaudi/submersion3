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
/* harmony import */ var _init_ajax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _init_ajax_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_init_ajax_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _add_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _add_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_add_link_js__WEBPACK_IMPORTED_MODULE_3__);
// AJAX html INCLUDES from css tricks


  const fetchHtml = function(url, callback){
    fetch(url).then(response => {
      return response.text()
    })
    .then(data => { callback(data) });
  }
/////////////////////////////////////////////////////

// const insertHtml = function (callback)






// import main htmls


  fetchHtml("../../dist/includes/out_header_jumbo.html", (da)=>{
    $('[refer="out_header_jumbo"]').replaceWith(da);
  }) 
  console.log('hello');
  
  

  fetchHtml("../../dist/includes/sec_one.html", (da) =>{
    $('[refer="sec_one"]').replaceWith(da);
  }) 
    
  // @pepros-append ../../src/mods/sec_one/sec-one.js


  fetchHtml("../../dist/includes/sec_patience.html", (da)=>{
    $('[refer="sec_patience"]').replaceWith(da);
  }) 

  fetchHtml("../../dist/includes/out_footer.html", (da)=>{
    $('[refer="out_footer"]').replaceWith(da);
  }) 

















// old import method

// (function (global) {
//   var dc = {};
  
//   dc.artList = {}
//   dc.artList.anki = "./include/ankitut.html";
//   dc.artList.vids = "./include/vids.html";
//   // console.log(dc.artList.anki, dc.artList[anki])

//   const insertHtml = (selector, html)=>{
//     let element = document.querySelector(selector);
//     element.innerHTML = html;
//   }

//   dc.getHtml = function (article) {
//     // console.log(article, artList[article]);
//     $ajaxUtils.sendGetRequest(
//       dc.artList[article],
//       function (receivedHtml) {
//         // console.log(receivedHtml, "inserted HTML yay!!!!!!!!!")
//         insertHtml("#article",receivedHtml);

//         sizeFix();
//       },
//       false);
//   }



//   dc.devopen = function () {
//     document.querySelector("#devBtn").style.display = "inline";
//   }

//   dc.devTog = function () {
//     $(".devMode").css("display", "block")
//     $(".col1").css("background", "crimson")
//     $("section:last-of-type").css("background", "crimson")

//   }



  
//   global.$dc = dc;
//   })(window);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _main_main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_main_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mod_vids_vids_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _mod_vids_vids_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mod_vids_vids_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mod_res_title_re_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _mod_res_title_re_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mod_res_title_re_js__WEBPACK_IMPORTED_MODULE_2__);


 

/***/ }),
/* 2 */
/***/ (function(module, exports) {



// IMG FIX
window.onload = () => {

  let imgHeight = $('.cardsrow img').outerHeight();
  document.querySelectorAll(".cardsrow img").forEach(e=>{
    e.style.width = " "+ (imgHeight+24) + "px ";
  });

};

console.log('main.js');

/***/ }),
/* 3 */
/***/ (function(module, exports) {






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





/***/ }),
/* 4 */
/***/ (function(module, exports) {


// (function(global){    

//  })(window);

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   let topbody = document.body.scrollTop;
//   console.log(topbody)
//   // document.querySelector("body").style.fontSize = "30px";
//   // if (topbody.scrollTop > 50 ) {
//   //   console.log('scrolling')
//   // } else {
//   //   console.log('scrolling2')
//   //   document.querySelector("#sticky").style.fontSize = "90px";
//   // }
// }

// get the sticky element
// const stickyElm = document.querySelector('.resources')
// let options = {
//   // root: document.querySelector('.resources'),
//   rootMargin: '0px',
//   threshold: 1
// }

// const observer = new IntersectionObserver( 
//   ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
//   options
// );

// observer.observe(stickyElm) 



// //to check when element get's position sticky
// var observer = new IntersectionObserver(function(entries) {
//   // no intersection 
//   if (entries[0].intersectionRatio === 0)
//     document.querySelector(".resources").classList.add("isSticky");
  
//   else if (entries[0].intersectionRatio === 1)
//     document.querySelector(".resources").classList.remove("isSticky");
// }, 
// { threshold: [0, 1] });


// observer.observe(document.querySelector(".resources-top"));


/***/ }),
/* 5 */
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
          
      isJsonResponse == undefinded ? (isJsonResponse = true) : null;

      isJsonResponse 
      ? responseHandler(JSON.parse(request.responseText)) 
      : responseHandler(request.responseText);

    }
  }

    
    

  global.$ajaxUtils = ajaxUtils;
  })(window);

/***/ }),
/* 6 */
/***/ (function(module, exports) {





// old import method

// (function (global) {
//   var dc = {};
  
//   dc.artList = {}
//   dc.artList.anki = "./include/ankitut.html";
//   dc.artList.vids = "./include/vids.html";
//   // console.log(dc.artList.anki, dc.artList[anki])

//   const insertHtml = (selector, html)=>{
//     let element = document.querySelector(selector);
//     element.innerHTML = html;
//   }

//   dc.getHtml = function (article) {
//     // console.log(article, artList[article]);
//     $ajaxUtils.sendGetRequest(
//       dc.artList[article],
//       function (receivedHtml) {
//         // console.log(receivedHtml, "inserted HTML yay!!!!!!!!!")
//         insertHtml("#article",receivedHtml);

//         sizeFix();
//       },
//       false);
//   }



//   dc.devopen = function () {
//     document.querySelector("#devBtn").style.display = "inline";
//   }

//   dc.devTog = function () {
//     $(".devMode").css("display", "block")
//     $(".col1").css("background", "crimson")
//     $("section:last-of-type").css("background", "crimson")

//   }



  
//   global.$dc = dc;
//   })(window);

/***/ }),
/* 7 */
/***/ (function(module, exports) {





// // add a link to a list
// let form = document.querySelector('form');
// let input = document.querySelector('#link_name');
// let list = document.querySelector('#link-base');


// //BUiLD links
// const buildLinks = function(varx, id){
  
//   let text = `
//   <li data-id="${id}">
//     <div class="row">
    
//       <div class="col-7"><a href="${varx.url}">${varx.name}</a></div>
//       <div class="col-3">
//       <span style="text-align: right">${varx.date.toDate().toDateString()}</span>
//       </div>
//       <div class="col-2">
//         <button class="btn btn-danger btn-sm my-2" style="border-radius: 10%; ">Del</button>
//       </div>

//     </div>
//   </li>
//   `;

//   //^^^^^^^^^//
//   document.querySelector("#link-base").innerHTML += text;
// }





// // ADD link
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   input.value
//   const now = new Date();
//   const link = {
//     name: form.link_name.value,
//     url: form.link_url.value,
//     date: firebase.firestore.Timestamp.fromDate(now)
//   }


//   db.collection('links').add(link).then(()=>{
//     console.log('link added')
//   })


// })

// // DELETE link
// list.addEventListener('click', e=>{
//   console.log(e.target.parentElement.parentElement.parentElement)
//   if(e.target.tagName === 'BUTTON'){
//     const id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
//     db.collection('links').doc(id).delete().then(()=>{
//       console.log("deleted")
//     });
//   }
//   // console.log(e.target.tagName)
// })








// //ASYNC
// // on page start add links from firebase
// db.collection('links').get().then((snap)=>{
//   snap.docs.forEach((onedoc)=>{
//     buildLinks(onedoc.data(), onedoc.id);
//   })

// }).catch(err => {console.log(err)})

/***/ })
/******/ ]);