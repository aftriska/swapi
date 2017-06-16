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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GetLocalData = function () {
  function GetLocalData(storageName) {
    _classCallCheck(this, GetLocalData);

    this.storageName = storageName;
    this.getData();
  }

  _createClass(GetLocalData, [{
    key: "getData",
    value: function getData() {
      return JSON.parse(localStorage.getItem(this.storageName)) || [];
    }
  }]);

  return GetLocalData;
}();

exports.default = GetLocalData;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeButton = function () {
  function HomeButton() {
    _classCallCheck(this, HomeButton);

    this.homeBtn = document.querySelector('[name=route]');
    this.baseUrl = "/";
    this.modals = Array.from(document.querySelectorAll('.modal'));
    this.menus = Array.from(document.querySelectorAll('.route'));
    this.events();
  }

  _createClass(HomeButton, [{
    key: 'events',
    value: function events() {
      this.homeBtn.addEventListener('click', this.clearPage.bind(this));
    }
  }, {
    key: 'clearPage',
    value: function clearPage() {
      window.history.pushState({}, "name", this.baseUrl);
      this.showMenus();
      this.hideModals();
    }
  }, {
    key: 'showMenus',
    value: function showMenus() {
      this.menus.forEach(function (m) {
        return m.style.display = 'block';
      });
    }
  }, {
    key: 'hideModals',
    value: function hideModals() {
      this.modals.forEach(function (modal) {
        return modal.classList.remove('modal--is-visible');
      });
    }
  }]);

  return HomeButton;
}();

exports.default = HomeButton;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavigatePage = function () {
  function NavigatePage(pageRouter) {
    _classCallCheck(this, NavigatePage);

    this.router = pageRouter;
    this.baseUrl = "";
    this.modals = Array.from(document.querySelectorAll('.modal'));
    this.menus = Array.from(document.querySelectorAll('.route'));;
    this.currentPath = location.pathname;
    this.currentHash = location.hash;
    this.errorHash = 'error404';
    this.events();
  }

  _createClass(NavigatePage, [{
    key: 'events',
    value: function events() {
      var _this = this;

      this.showMenus();

      var validPath = this.router.routes.filter(function (r) {
        return '' + _this.baseUrl + r.path === _this.currentPath;
      })[0];

      var validHash = this.router.routes.filter(function (r) {
        return r.hash === _this.currentHash;
      })[0];

      if (validPath) {
        if (validHash) {
          if (validHash.name !== "root") {
            this.openPage(validHash.name);
          } else {
            this.hideAllModuls();
          }
        } else {
          this.openPage(this.errorHash);
        }
      } else {
        this.hideMenus();
        this.openPage(this.errorHash);
      }
    }
  }, {
    key: 'openPage',
    value: function openPage(modalHash) {
      this.hideAllModuls();

      var validModal = this.modals.find(function (m) {
        return m.attributes[0].value === modalHash;
      });

      validModal.classList.add('modal--is-visible');
    }
  }, {
    key: 'hideAllModuls',
    value: function hideAllModuls() {
      this.modals.forEach(function (modal) {
        return modal.classList.remove('modal--is-visible');
      });
    }
  }, {
    key: 'showMenus',
    value: function showMenus() {
      this.menus.forEach(function (m) {
        return m.style.display = 'block';
      });
    }
  }, {
    key: 'hideMenus',
    value: function hideMenus() {
      this.menus.forEach(function (m) {
        return m.style.display = 'none';
      });
    }
  }]);

  return NavigatePage;
}();

exports.default = NavigatePage;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function Router() {
  _classCallCheck(this, Router);

  this.name = 'pageRouter';
  this.routes = [{
    hash: '',
    name: 'root',
    path: '/'
  }, {
    hash: '#films',
    name: 'films',
    path: '/#films'
  }, {
    hash: '#people',
    name: 'people',
    path: '/#people'
  }, {
    hash: '#starships',
    name: 'starships',
    path: '/#starships'
  }, {
    hash: '#species',
    name: 'species',
    path: '/#species'
  }, {
    hash: '#planets',
    name: 'planets',
    path: '/#planets'
  }, {
    hash: '#vehicles',
    name: 'vehicles',
    path: '/#vehicles'
  }];
};

exports.default = Router;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Router = __webpack_require__(3);

var _Router2 = _interopRequireDefault(_Router);

var _NavigatePage = __webpack_require__(2);

var _NavigatePage2 = _interopRequireDefault(_NavigatePage);

var _HomeButton = __webpack_require__(1);

var _HomeButton2 = _interopRequireDefault(_HomeButton);

var _GetLocalData = __webpack_require__(0);

var _GetLocalData2 = _interopRequireDefault(_GetLocalData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pageRouter = new _Router2.default();
var homeButton = new _HomeButton2.default();
// const nextPages = JSON.parse(localStorage.getItem('nextPages')) || {};
// const tempResults = [];
//
// function setNextPages() {
//   const validHash = pageRouter.routes.filter(r => {
//     return r.hash === location.hash;
//   })[0];
//
//   if(validHash) {
//     if(validHash.name !== "root") {
//       const pageToFetch = validHash.name;
//
//       //load all pages until the nextPage is null
//
//       const endpoint = `http://swapi.co/api/${pageToFetch}/`;
//
//       fetch(endpoint)
//       .then(blob => blob.json())
//       .then(data => {
//         setNextPage(pageToFetch, data.next);
//         tempResults.length = 0;
//         tempResults.push(...data.results);
//         insertData();
//       });
//     }
//   }
// }
//
// function setNextPage(pageToFetch, pageUrl) {
//   nextPages[`${pageToFetch}`] = pageUrl;
//   localStorage.setItem('nextPages', JSON.stringify(nextPages));
// }
//
// function insertData() {
//   console.log(tempResults);
//   tempResults.forEach(r => console.log("hi"));
// }

window.addEventListener('load', function () {
  new _NavigatePage2.default(pageRouter);
  // setNextPages();
  manipulateModal();
});

window.onpopstate = function () {
  new _NavigatePage2.default(pageRouter);
  // setNextPages();
  manipulateModal();
};

function manipulateModal() {
  var openedModal = document.querySelector('.modal--is-visible');
  if (openedModal) {
    // console.log(openedModal.style.getPropertyValue('height'));
    openedModal.addEventListener('scroll', debounce(checkSlide));
  }
}

function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function checkSlide(e) {
  // console.log(e);
  // console.log(`e.target.offsetHeight: ${e.target.offsetHeight}`);
  // console.log(e.target.scrollTop);
  // console.log(e.target.scrollHeight);

  var modulBottom = e.target.scrollTop + e.target.offsetHeight;
  // console.log(`modulBottom: ${modulBottom}`);

  if (modulBottom >= e.target.scrollHeight) {
    console.log("bottom reached");
  }
}

/***/ })
/******/ ]);