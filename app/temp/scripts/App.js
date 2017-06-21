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


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isFetching = false;
// use /swapi for baseUrl when building to production...
var baseUrl = "/swapi";
var fetchBaseUrl = 'http://swapi.co/api/';
var router = [{ path: "/", name: "" }, { path: "/", name: "films" }, { path: "/", name: "people" }, { path: "/", name: "species" }, { path: "/", name: "planets" }, { path: "/", name: "starships" }, { path: "/", name: "vehicles" }];
var swapiSource = router.slice(1);
var menus = Array.from(document.querySelectorAll('.route'));
var modals = Array.from(document.querySelectorAll('.modal'));
var homeBtn = document.querySelector('[name=route]');
var spinner = document.querySelector('.spinner');
var nextPages = JSON.parse(sessionStorage.getItem('nextPages')) || {};

var showSpinner = function showSpinner() {
  spinner.classList.add('spinner--is-visible');
};

var hideSpinner = function hideSpinner() {
  spinner.classList.remove('spinner--is-visible');
};

var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var populateFilms = function populateFilms(data) {
  // console.log(data);
  var toInsert = document.querySelector("div[data-page=films");
  var ordered = data.sort(function (a, b) {
    return a.release_date > b.release_date ? 1 : -1;
  });

  toInsert.innerHTML = ordered.map(function (data, i) {
    var d = new Date(data.release_date);
    var newDate = d.toDateString();
    var shortDesc = data.opening_crawl.substr(0, 199);
    return "\n    <div class=\"row__large-6\">\n      <div class=\"modal__item\">\n        <p><h4 class=\"item-top-title\">EPISODE " + data.episode_id + "</h4></p>\n        <p><h3 class=\"item-title\">" + data.title + "</h3></p>\n        <p><span class=\"subtitle-yellow\">Director:</span> " + data.director + " <span class=\"subtitle-yellow\">Producer:</span> " + data.producer + " <span class=\"subtitle-yellow\">Release Date:</span> " + newDate + "</p>\n        <p><span class=\"item-description\">" + shortDesc + "...</p>\n        <p><button class=\"item-extend-description\">More Details...</button></p>\n      </div>\n    </div>\n    ";
  }).join('');
};

// <p><span class="subtitle-yellow">In the film:<span></p>
// <div class="item-details"><button>Characters</button> <button>Planets</button><button>Starships</button><button>Vehicles</button><button>Species</button></div>
// </p>

// FOR PEOPLE DETAILS
// const dataFilms = JSON.parse(sessionStorage.getItem(`films`));
// console.log(dataFilms);
//
//   const filmsList = d.films.map(film => {
//     const dataFilm = dataFilms.filter( df => {
//       return film === df.url;
//     })[0];
//     return `${dataFilm.title}`;
//   }).join(', ');

var populatePeople = function populatePeople(data) {
  // console.log(data);
  var toInsert = document.querySelector("div[data-page=people");

  toInsert.innerHTML = data.map(function (d, i) {
    return "\n    <div class=\"row__large-4\">\n      <div class=\"modal__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        <p><h4 class=\"item-top-title\">" + d.name + "</h4></p>\n        <p>\n          <span class=\"subtitle-yellow\">Birth Year:</span> " + d.birth_year + "<br />\n          <span class=\"subtitle-yellow\">Gender:</span> " + d.gender + "<br />\n          <span class=\"subtitle-yellow\">Height:</span> " + d.height + " <span class=\"subtitle-yellow\">Mass:</span> " + d.mass + "<br />\n          <span class=\"subtitle-yellow\">Eye Color:</span> " + d.eye_color + " <span class=\"subtitle-yellow\">Hair Color:</span> " + d.hair_color + "<br />\n          <span class=\"subtitle-yellow\">Skin Color:</span> " + d.skin_color + "\n        </p>\n        <p><button class=\"item-extend-description\">More Details..</button></p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var populateSpecies = function populateSpecies(data) {
  // console.log(data);
  var toInsert = document.querySelector("div[data-page=species");

  toInsert.innerHTML = data.map(function (d, i) {
    return "\n    <div class=\"row__large-4\">\n      <div class=\"modal__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        <p><h4 class=\"item-top-title\">" + d.name + "</h4></p>\n        <p>\n          <span class=\"subtitle-yellow\">Language:</span> " + d.language + "<br />\n          <span class=\"subtitle-yellow\">Classification:</span> " + d.classification + "<br />\n          <span class=\"subtitle-yellow\">Designation:</span> " + d.designation + "<br />\n          <span class=\"subtitle-yellow\">Avg Height:</span> " + d.average_height + "<br />\n          <span class=\"subtitle-yellow\">Avg Lifespan:</span> " + d.average_lifespan + "<br />\n          <span class=\"subtitle-yellow\">Eye Colors:</span> " + d.eye_colors + "<br />\n          <span class=\"subtitle-yellow\">Hair Colors:</span> " + d.hair_colors + "<br />\n          <span class=\"subtitle-yellow\">Skin Colors:</span> " + d.skin_colors + "\n        </p>\n        <p><button class=\"item-extend-description\">More Details...</button></p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var populatePlanets = function populatePlanets(data) {
  // console.log(data);
  var toInsert = document.querySelector("div[data-page=planets");

  toInsert.innerHTML = data.map(function (d, i) {
    return "\n    <div class=\"row__large-4\">\n      <div class=\"modal__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        <p><h4 class=\"item-top-title\">" + d.name + "</h4></p>\n        <p>\n          <span class=\"subtitle-yellow\">Diameter:</span> " + d.diameter + "<br />\n          <span class=\"subtitle-yellow\">Orbital Period:</span> " + d.orbital_period + "<br />\n          <span class=\"subtitle-yellow\">Rotation Period:</span> " + d.rotation_period + "<br />\n          <span class=\"subtitle-yellow\">Surface Water:</span> " + d.surface_water + "<br />\n          <span class=\"subtitle-yellow\">Terrain:</span> " + d.terrain + "<br />\n          <span class=\"subtitle-yellow\">Climate:</span> " + d.climate + "<br />\n          <span class=\"subtitle-yellow\">Gravity:</span> " + d.gravity + "<br />\n          <span class=\"subtitle-yellow\">Population:</span> " + numberWithCommas(d.population) + "<br />\n        </p>\n        <p><button class=\"item-extend-description\">More Details...</button></p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var populateStarships = function populateStarships(data) {
  // console.log(data);
  var toInsert = document.querySelector("div[data-page=starships");

  toInsert.innerHTML = data.map(function (d, i) {
    return "\n    <div class=\"row__large-4\">\n      <div class=\"modal__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        <p><h4 class=\"item-top-title\">" + d.name + "</h4></p>\n        <p>\n          <span class=\"subtitle-yellow\">Model:</span> " + d.model + "<br />\n          <span class=\"subtitle-yellow\">Starship Class:</span> " + d.starship_class + "<br />\n          <span class=\"subtitle-yellow\">Length:</span> " + numberWithCommas(d.length) + "<br />\n          <span class=\"subtitle-yellow\">MGLT:</span> " + d.mglt + "<br />\n          <span class=\"subtitle-yellow\">Hyperdrive Rating:</span> " + d.hyperdrive_rating + "<br />\n          <span class=\"subtitle-yellow\">Max. Atmosphering Speed:</span> " + d.max_atmosphering_speed + "<br />\n          <span class=\"subtitle-yellow\">Manufacturer:</span> " + d.manufacturer + "<br />\n          <span class=\"subtitle-yellow\">Crew:</span> " + numberWithCommas(d.crew) + "<br />\n          <span class=\"subtitle-yellow\">Passengers:</span> " + numberWithCommas(d.passengers) + "<br />\n          <span class=\"subtitle-yellow\">Cargo Capacity:</span> " + numberWithCommas(d.cargo_capacity) + "<br />\n          <span class=\"subtitle-yellow\">Consumables:</span> " + d.consumables + "<br />\n          <span class=\"subtitle-yellow\">Cost (in credits):</span> " + numberWithCommas(d.cost_in_credits) + "\n        </p>\n        <p><button class=\"item-extend-description\">More Details...</button></p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var populateVehicles = function populateVehicles(data) {
  // console.log(data);
  var toInsert = document.querySelector("div[data-page=vehicles");

  toInsert.innerHTML = data.map(function (d, i) {
    return "\n    <div class=\"row__large-4\">\n      <div class=\"modal__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        <p><h4 class=\"item-top-title\">" + d.name + "</h4></p>\n        <p>\n          <span class=\"subtitle-yellow\">Model:</span> " + d.model + "<br />\n          <span class=\"subtitle-yellow\">Vehicle Class:</span> " + d.vehicle_class + "<br />\n          <span class=\"subtitle-yellow\">Length:</span> " + numberWithCommas(d.length) + "<br />\n          <span class=\"subtitle-yellow\">Max. Atmosphering Speed:</span> " + d.max_atmosphering_speed + "<br />\n          <span class=\"subtitle-yellow\">Manufacturer:</span> " + d.manufacturer + "<br />\n          <span class=\"subtitle-yellow\">Crew:</span> " + numberWithCommas(d.crew) + "<br />\n          <span class=\"subtitle-yellow\">Passengers:</span> " + numberWithCommas(d.passengers) + "<br />\n          <span class=\"subtitle-yellow\">Cargo Capacity:</span> " + numberWithCommas(d.cargo_capacity) + "<br />\n          <span class=\"subtitle-yellow\">Consumables:</span> " + d.consumables + "<br />\n          <span class=\"subtitle-yellow\">Cost (in credits):</span> " + numberWithCommas(d.cost_in_credits) + "\n        </p>\n        <p><button class=\"item-extend-description\">More Details...</button></p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var populateAllContent = function populateAllContent(modal) {
  var localData = JSON.parse(sessionStorage.getItem("" + modal));
  switch (modal) {
    case 'films':
      populateFilms(localData);
      break;
    case 'people':
      populatePeople(localData);
      break;
    case 'species':
      populateSpecies(localData);
      break;
    case 'planets':
      populatePlanets(localData);
      break;
    case 'starships':
      populateStarships(localData);
      break;
    case 'vehicles':
      populateVehicles(localData);
      break;
  }
};

var clearLargeNav = function clearLargeNav() {
  // console.log(`clear large Nav`);
  homeBtn.classList.remove('larger');
  menus.forEach(function (m) {
    return m.classList.remove('larger');
  });
};

var largeNav = function largeNav(nav) {
  // console.log(`add large Nav to "${nav.innerHTML}"`);
  nav.classList.add('larger');
};

var hideMenu = function hideMenu() {
  // console.log(`hide menu`);
  menus.forEach(function (m) {
    return m.style.display = 'none';
  });
};

var showMenu = function showMenu() {
  // console.log(`show menu`);
  menus.forEach(function (m) {
    return m.style.display = 'block';
  });
};

var hideAllModals = function hideAllModals() {
  // console.log(`hide all modals`);
  modals.forEach(function (m) {
    return m.classList.remove('modal--is-visible');
  });
};

var showModal = function showModal(modal) {
  // console.log(`show modal`);
  var modalToOpen = modals.find(function (m) {
    return m.id === modal;
  });
  modalToOpen.classList.add('modal--is-visible');
};

var initialLoad = function initialLoad() {
  showModal('homePage');
  swapiSource.forEach(function (s) {
    var urlToFetch = "http://swapi.co/api/" + s.name + "/";
    var localData = JSON.parse(sessionStorage.getItem("" + s.name)) || [];

    if (localData.length === 0) {
      showSpinner();
      fetch(urlToFetch).then(function (blob) {
        return blob.json();
      }).then(function (data) {
        // console.log(`from fetch...`);
        nextPages["" + s.name] = data.next;
        localData.push.apply(localData, _toConsumableArray(data.results));
        sessionStorage.setItem('nextPages', JSON.stringify(nextPages));
        sessionStorage.setItem("" + s.name, JSON.stringify(localData));
        populateAllContent(s.name);
        hideSpinner();
      }).catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    } else {
      // console.log(`from local...`);
      populateAllContent(s.name);
    }
  });
};

function loadPage() {
  var currentPath = location.pathname;
  var currentHash = location.hash;
  var pageToLoad = currentHash.substr(1);

  var validUrl = router.filter(function (r) {
    return "" + baseUrl + r.path === currentPath && r.name === pageToLoad;
  })[0];

  var currentNav = document.querySelector("a[href='" + currentHash + "']");

  if (validUrl) {
    if (validUrl.name === "") {
      clearLargeNav();
      largeNav(homeBtn);
      hideAllModals();
      showModal('homePage');
    } else {
      clearLargeNav();
      showMenu();
      largeNav(currentNav);
      hideAllModals();
      showModal(validUrl.name);
    }
  } else {
    hideMenu();
    hideAllModals();
    showModal('error404');
  }
}

var debounce = function debounce(func) {
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

var loadNextPage = function loadNextPage(e) {
  // console.dir(e.target);
  // console.log(`current modal is ${e.target.id}`);

  var modalBottom = e.target.scrollTop + e.target.offsetHeight;

  if (modalBottom >= e.target.scrollHeight) {
    console.log("modal's bottom reached");

    if (isFetching === false) {
      var nextPage = nextPages["" + e.target.id];
      var localData = JSON.parse(sessionStorage.getItem("" + e.target.id));
      console.log("Url to fetch is " + nextPage);
      // console.log(localData);

      if (nextPage !== null) {
        isFetching = true;
        showSpinner();
        fetch(nextPage).then(function (blob) {
          return blob.json();
        }).then(function (data) {
          nextPages["" + e.target.id] = data.next;
          localData.push.apply(localData, _toConsumableArray(data.results));
          sessionStorage.setItem('nextPages', JSON.stringify(nextPages));
          sessionStorage.setItem("" + e.target.id, JSON.stringify(localData));
          populateAllContent(e.target.id);
          isFetching = false;
          hideSpinner();
        }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
        });
      }
    }
  }
};

initialLoad();
window.addEventListener('load', loadPage);
window.onpopstate = loadPage;

modals.forEach(function (m) {
  m.addEventListener('scroll', debounce(loadNextPage));
});

homeBtn.addEventListener('click', function () {
  window.history.pushState({}, "name", baseUrl + "/");
  showMenu();
  clearLargeNav();
  largeNav(homeBtn);
  hideAllModals();
  showModal('homePage');
});

/***/ })
/******/ ]);