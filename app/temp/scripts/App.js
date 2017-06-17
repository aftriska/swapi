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
            return validHash.name;
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isFetching = false;
var fetchBaseUrl = 'http://swapi.co/api/';
var pageRouter = new _Router2.default();
var homeButton = new _HomeButton2.default();
var nextPages = JSON.parse(sessionStorage.getItem('nextPages')) || {
  films: fetchBaseUrl + 'films/',
  people: fetchBaseUrl + 'people/',
  species: fetchBaseUrl + 'species/',
  planets: fetchBaseUrl + 'planets/',
  starships: fetchBaseUrl + 'starships/',
  vehicles: fetchBaseUrl + 'vehicles/'
};

sessionStorage.setItem('nextPages', JSON.stringify(nextPages));

function setInitialModulContent() {
  var visibleModal = document.querySelector('.modal--is-visible');
  if (!visibleModal) return;

  var rowContent = visibleModal.querySelector(".row");

  if (rowContent.innerHTML === "") {
    console.log('modul has no content');
    var toFetch = rowContent.dataset.page;
    console.log('page to fetch: ' + toFetch);

    var dataToShow = JSON.parse(sessionStorage.getItem('' + toFetch)) || [];
    console.log('local data for ' + toFetch + ' is:');
    console.log(dataToShow);

    if (dataToShow.length === 0) {
      console.log('data not yet exist. the fetch method will start.');
      // if local storage is empty, means this is the first time we fetched a data (fetching cannot be canceled, so if somehow while fetching, the user click another hash, then this fetch must put the result in the right modul and local Storage, because once user click another hash/url, the visible modul will be changed :( ..... AAARRRGHHHH!!!)
      // fetch data
      // set next page
      // store data to local storage
      // populate data with local storage

      var urlToFetch = nextPages['' + toFetch];
      console.log('urlToFetch: ' + urlToFetch);

      isFetching = true;
      console.log('isFetching = ' + isFetching);

      fetch(urlToFetch).then(function (blob) {
        return blob.json();
      }).then(function (data) {
        // console.log(data);

        nextPages['' + toFetch] = data.next;
        sessionStorage.setItem('nextPages', JSON.stringify(nextPages));

        dataToShow.push.apply(dataToShow, _toConsumableArray(data.results));
        sessionStorage.setItem('' + toFetch, JSON.stringify(dataToShow));

        console.log('now we can insert a content to the modul');
        showData(toFetch);

        isFetching = false;
        console.log('isFetching = ' + isFetching);

        // setNextPage(pageToFetch, data.next);
        // tempResults.length = 0;
        // tempResults.push(...data.results);
        // insertData();
      }).catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    } else {
      console.log('show data from local storage');
      showData(toFetch);
    }
  } else {
    console.log('modul has content, there\'s nothing to do on the page. Use scroll to load more data.');
  }
}

function showData(toFetch) {
  switch (toFetch) {
    case 'films':
      showFilms();
      break;
    case 'people':
      console.log('show people');
      break;
    case 'species':
      console.log('show species');
      break;
    case 'planets':
      console.log('show planets');
      break;
    case 'starships':
      console.log('show starships');
      break;
    case 'vehicles':
      console.log('show vehicles');
      break;
  }
}

function showFilms() {
  var toInsert = document.querySelector('div[data-page=films');
  console.log(toInsert);
  var filmsData = JSON.parse(sessionStorage.getItem('films'));

  var ordered = filmsData.sort(function (a, b) {
    return a.release_date > b.release_date ? 1 : -1;
  });
  // console.log(ordered);

  toInsert.innerHTML = ordered.map(function (data, i) {
    var d = new Date(data.release_date);
    var newDate = d.toDateString();
    var shortDesc = data.opening_crawl.substr(0, 199);
    return '\n    <div class="row__large-6">\n      <div class="modal__item">\n        <p><h4 class="item-top-title">EPISODE ' + data.episode_id + '</h4></p>\n        <p><h3 class="item-title">' + data.title + '</h3></p>\n        <p><span class="subtitle-yellow">Director:</span> ' + data.director + ' <span class="subtitle-yellow">Producer:</span> ' + data.producer + ' <span class="subtitle-yellow">Release Date:</span> ' + newDate + '</p>\n        <p><span class="item-description">' + shortDesc + '...<button class="item-extend-description">...more</button>\n        <p><span class="subtitle-yellow">In the film:<span></p>\n        <div class="item-details"><button>Characters</button> <button>Planets</button><button>Starships</button><button>Vehicles</button><button>Species</button></div>\n        </p>\n      </div>\n    </div>\n    ';
  }).join('');
}

function animateModulItems(toFetch) {
  var modalItems = Array.from(document.querySelector('div[data-page=' + toFetch + ']').querySelectorAll('.modal__item'));

  console.log(modalItems);

  modalItems.forEach(function (item) {
    return item.classList.add('modal__item--inserted');
  });
}

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

window.addEventListener('load', loadPage);
window.onpopstate = loadPage;

function loadPage() {
  var pageToLoad = new _NavigatePage2.default(pageRouter);
  setInitialModulContent();
  setLoadOnScroll();
}

window.addEventListener('scroll', debounce(checkBottom));

function setLoadOnScroll() {
  var visibleModal = document.querySelector('.modal--is-visible');
  if (visibleModal) {
    visibleModal.addEventListener('scroll', debounce(checkBottom));
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

function checkBottom(e) {
  // console.log(e.target.id);
  var modulBottom = e.target.scrollTop + e.target.offsetHeight;
  if (modulBottom >= e.target.scrollHeight) {
    console.log("bottom reached");
    // if isLoading is true, then do nothing (as the current fetch event is still occuring)
    if (isFetching === false) {
      // if nextPage is not null: fetch new data.
      var nextPage = nextPages['' + e.target.id];
      if (nextPage !== null) {
        isFetching = true; // while fetching data, we pause every event on when the bottom of the page reached if user plays with the scrolling.
        console.log('fetching data...');
        // fetch data
        // set next page
        // store data to local storage
        // populate data with local storage
      }
    }
  }
}

/***/ })
/******/ ]);