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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import RevealOnClick from './modules/RevealOnClick';
//
// new RevealOnClick('films');
// new RevealOnClick('people');
// new RevealOnClick('starships');

// console.log(location.hash);
var openPages = Array.from(document.querySelectorAll('.modal'));
var activeRoutes = Array.from(document.querySelectorAll('[route]'));
// console.log(activeRoutes);

window.addEventListener('popstate', navigateOnPop);

function openPage(pageId) {

  openPages.forEach(function (page) {
    return page.classList.remove('modal--is-visible');
  });

  // console.log(pageId);
  if (pageId !== '') {
    var modal = document.querySelector(pageId);
    // console.log(modal);
    modal.classList.add('modal--is-visible');
    // console.log(location.hash);
  }
}

// window.onhashchange = function() {
//   var currentHash = location.hash;
//   console.log(currentHash);
//
//   var rHash = pageRouter.routes.filter(r => {
//     return r.hash === currentHash;
//   })[0];
//
//   console.log(route);
//
//   if(rHash) {
//     if(currentHash !== ''){ openPage(currentHash); }
//   } else {
//     openPage('#error404');
//   }
// };

function navigate(e) {
  // console.log(location.pathname);
  // console.log(e);
  var currentPath = e.target.attributes[0].value;
  console.log('on clicked button: ' + currentPath);

  var rPath = pageRouter.routes.filter(function (r) {
    return r.path === currentPath;
  })[0];

  if (rPath) {
    window.history.pushState({}, 'name', rPath.path);
    var route = rPath.hash;
    // console.log(`on clicked button: ${route}`);
    openPage(route);
  } else {
    openPage('#error404');
  }
}

function navigateOnPop() {
  // console.log(location.pathname);
  // console.log(e);
  var currentPath = location.pathname;
  console.log('on popstate: ' + currentPath);

  var rPath = pageRouter.routes.filter(function (r) {
    return r.path === currentPath;
  })[0];

  if (rPath) {
    var route = rPath.hash;
    // console.log(`on popstate: ${route}`);
    openPage(route);
  } else {
    openPage('#error404');
  }
}

activeRoutes.forEach(function (activeRoute) {
  activeRoute.addEventListener('click', navigate, false);
});

var Router = function Router(name, routes) {
  return {
    name: name,
    routes: routes
  };
};

//step 3: create a list of routes
var pageRouter = new Router('pageRouter', [{
  hash: '',
  path: '/'
}, {
  hash: '#films',
  path: '/films'
}, {
  hash: '#people',
  path: '/people'
}, {
  hash: '#starships',
  path: '/starships'
}]);

// var currentHash = location.hash;
// console.log(currentHash);

var currentPath = location.pathname;
console.log('on page load: ' + currentPath);

// var rHash = pageRouter.routes.filter(r => {
//   return r.hash === currentHash;
// })[0];

var rPath = pageRouter.routes.filter(function (r) {
  return r.path === currentPath;
})[0];

// console.log(route);

// if(rHash) {
//   if(currentHash !== ''){ openPage(currentHash); }
// } else {
//   openPage('#error404');
// }

if (rPath) {
  var route = rPath.hash;
  // console.log(`on page load: ${route}`);
  openPage(route);
} else {
  openPage('#error404');
}

/***/ })
/******/ ]);