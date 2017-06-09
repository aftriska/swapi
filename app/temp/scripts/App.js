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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

var NavigateHash = function () {
  function NavigateHash(pageRouter, modals, errModul, menus, rootMenu, appBaseUrl) {
    _classCallCheck(this, NavigateHash);

    this.bUrl = appBaseUrl;
    this.router = pageRouter;
    this.modals = modals;
    this.menus = menus;
    this.rootMenu = rootMenu;
    this.currPath = location.pathname;
    this.currHash = location.hash;
    this.errHash = errModul;
    this.navigate();
  }

  _createClass(NavigateHash, [{
    key: 'navigate',
    value: function navigate() {
      var _this = this;

      this.menus.forEach(function (m) {
        return m.style.display = 'block';
      });

      var rPath = this.router.routes.filter(function (r) {
        return '' + _this.bUrl + r.path === _this.currPath;
      })[0];

      var rHash = this.router.routes.filter(function (r) {
        return r.hash === _this.currHash;
      })[0];

      if (rPath) {
        if (rHash) {
          if (rHash.name !== "root") {
            this.openPage(rHash.name);
          } else {
            this.hideModuls();
          }
        } else {
          this.openPage(this.errHash);
        }
      } else {
        this.menus.forEach(function (m) {
          return m.style.display = 'none';
        });
        this.rootMenu.style.display = 'block';
        this.openPage(this.errHash);
      }
    }
  }, {
    key: 'openPage',
    value: function openPage(modalHash) {
      this.hideModuls();
      var modal = this.modals.find(function (m) {
        return m.attributes[0].value === modalHash;
      });

      modal.classList.add('modal--is-visible');
    }
  }, {
    key: 'hideModuls',
    value: function hideModuls() {
      this.modals.forEach(function (modal) {
        return modal.classList.remove('modal--is-visible');
      });
    }
  }]);

  return NavigateHash;
}();

exports.default = NavigateHash;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function Router(name, routes) {
  _classCallCheck(this, Router);

  this.name = name;
  this.routes = routes;
};

exports.default = Router;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Router = __webpack_require__(1);

var _Router2 = _interopRequireDefault(_Router);

var _NavigateHash = __webpack_require__(0);

var _NavigateHash2 = _interopRequireDefault(_NavigateHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appBaseUrl = "";
var menus = Array.from(document.querySelectorAll('.route'));
var rootMenu = document.querySelector(".route-root");
var modals = Array.from(document.querySelectorAll('.modal'));
var errModul = 'error404';

var pageRouter = new _Router2.default('pageRouter', [{
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
}]);

new _NavigateHash2.default(pageRouter, modals, errModul, menus, rootMenu, appBaseUrl);

window.onhashchange = function () {
  new _NavigateHash2.default(pageRouter, modals, errModul, menus, rootMenu, appBaseUrl);
};

/***/ })
/******/ ]);