"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/

/******/
[
/* 0 */

/***/
function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  __webpack_require__.r(__webpack_exports__);
  /* harmony import */


  var _init_ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
  /* harmony import */


  var _init_ajax_js__WEBPACK_IMPORTED_MODULE_0___default =
  /*#__PURE__*/
  __webpack_require__.n(_init_ajax_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */


  var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
  /* harmony import */


  var _app_js__WEBPACK_IMPORTED_MODULE_1___default =
  /*#__PURE__*/
  __webpack_require__.n(_app_js__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */


  var _add_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
  /* harmony import */


  var _add_link_js__WEBPACK_IMPORTED_MODULE_2___default =
  /*#__PURE__*/
  __webpack_require__.n(_add_link_js__WEBPACK_IMPORTED_MODULE_2__); // AJAX html INCLUDES from css tricks


  var fetchHtml = function fetchHtml(url, callback) {
    fetch(url).then(function (response) {
      return response.text();
    }).then(function (data) {
      callback(data);
    });
  }; /////////////////////////////////////////////////////
  // const insertHtml = function (callback)
  // import main htmls


  fetchHtml("../../dist/includes/out_header_jumbo.html", function (da) {
    $('[refer="out_header_jumbo"]').replaceWith(da);
  });
  console.log('hi');
  fetchHtml("../../dist/includes/sec_one.html", function (da) {
    $('[refer="sec_one"]').replaceWith(da);
  });
  fetchHtml("../../dist/includes/sec_patience.html", function (da) {
    $('[refer="sec_patience"]').replaceWith(da);
  });
  fetchHtml("../../dist/includes/out_footer.html", function (da) {
    $('[refer="out_footer"]').replaceWith(da);
  });
  /***/
},
/* 1 */

/***/
function (module, exports) {
  (function (global) {
    var ajaxUtils = {}; // Makes an Ajax GET request to 'requestUrl'

    ajaxUtils.sendGetRequest = function (requestUrl, responseHandler, isJsonResponse) {
      var request = new XMLHttpRequest(); //XMLHttpRequest object

      request.onreadystatechange = function () {
        handleResponse(request, responseHandler, isJsonResponse);
      };

      request.open("GET", requestUrl, true);
      request.send(null); // for POST only
    };

    function handleResponse(request, responseHandler, isJsonResponse) {
      if (request.readyState == 4 && request.status == 200) {
        isJsonResponse == undefinded ? isJsonResponse = true : null;
        isJsonResponse ? responseHandler(JSON.parse(request.responseText)) : responseHandler(request.responseText);
      }
    }

    global.$ajaxUtils = ajaxUtils;
  })(window);
  /***/

},
/* 2 */

/***/
function (module, exports) {
  window.onload = function () {
    var imgHeight = $('.cardsrow img').outerHeight();
    document.querySelectorAll(".cardsrow img").forEach(function (e) {
      e.style.width = " " + (imgHeight + 24) + "px ";
    });
  };

  function sizeFix() {
    var vidWidth = $('#article iframe').outerWidth();
    var vidHeight;
    console.log(vidWidth, vidHeight);

    if (vidWidth > 500) {
      vidHeight = vidWidth / 16 * 9;
      console.log("16:9", vidWidth, vidHeight);
    } else {
      vidHeight = vidWidth / 4 * 3;
      console.log("4:3");
    }

    document.querySelectorAll("#article iframe").forEach(function (e) {
      e.style.height = " " + vidHeight + "px ";
    });
  }

  window.addEventListener('resize', function () {
    sizeFix();
  }); // (function(global){    
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

  (function (global) {
    var dc = {};
    dc.artList = {};
    dc.artList.anki = "./include/ankitut.html";
    dc.artList.vids = "./include/vids.html"; // console.log(dc.artList.anki, dc.artList[anki])

    var insertHtml = function insertHtml(selector, html) {
      var element = document.querySelector(selector);
      element.innerHTML = html;
    };

    dc.getHtml = function (article) {
      // console.log(article, artList[article]);
      $ajaxUtils.sendGetRequest(dc.artList[article], function (receivedHtml) {
        // console.log(receivedHtml, "inserted HTML yay!!!!!!!!!")
        insertHtml("#article", receivedHtml);
        sizeFix();
      }, false);
    };

    dc.devopen = function () {
      document.querySelector("#devBtn").style.display = "inline";
    };

    dc.devTog = function () {
      $(".devMode").css("display", "block");
      $(".col1").css("background", "crimson");
      $("section:last-of-type").css("background", "crimson");
    };

    global.$dc = dc;
  })(window);
  /***/

},
/* 3 */

/***/
function (module, exports) {
  // add a link to a list
  var form = document.querySelector('form');
  var input = document.querySelector('#link_name');
  var list = document.querySelector('#link-base'); //BUiLD links

  var buildLinks = function buildLinks(varx, id) {
    var text = "\n  <li data-id=\"".concat(id, "\">\n    <div class=\"row\">\n    \n      <div class=\"col-7\"><a href=\"").concat(varx.url, "\">").concat(varx.name, "</a></div>\n      <div class=\"col-3\">\n      <span style=\"text-align: right\">").concat(varx.date.toDate().toDateString(), "</span>\n      </div>\n      <div class=\"col-2\">\n        <button class=\"btn btn-danger btn-sm my-2\" style=\"border-radius: 10%; \">Del</button>\n      </div>\n\n    </div>\n  </li>\n  "); //^^^^^^^^^//

    document.querySelector("#link-base").innerHTML += text;
  }; // ADD link


  form.addEventListener('submit', function (e) {
    e.preventDefault();
    input.value;
    var now = new Date();
    var link = {
      name: form.link_name.value,
      url: form.link_url.value,
      date: firebase.firestore.Timestamp.fromDate(now)
    };
    db.collection('links').add(link).then(function () {
      console.log('link added');
    });
  }); // DELETE link

  list.addEventListener('click', function (e) {
    console.log(e.target.parentElement.parentElement.parentElement);

    if (e.target.tagName === 'BUTTON') {
      var id = e.target.parentElement.parentElement.parentElement.getAttribute('data-id');
      db.collection('links').doc(id)["delete"]().then(function () {
        console.log("deleted");
      });
    } // console.log(e.target.tagName)

  }); //ASYNC
  // on page start add links from firebase

  db.collection('links').get().then(function (snap) {
    snap.docs.forEach(function (onedoc) {
      buildLinks(onedoc.data(), onedoc.id);
    });
  })["catch"](function (err) {
    console.log(err);
  });
  /***/
}
/******/
]);