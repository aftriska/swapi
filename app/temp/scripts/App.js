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

// use /swapi for baseUrl when building to production...
var baseUrl = "";
var router = [{ path: "/", name: "" }, { path: "/", name: "films" }, { path: "/", name: "people" }, { path: "/", name: "species" }, { path: "/", name: "planets" }, { path: "/", name: "starships" }, { path: "/", name: "vehicles" }];
var swapiSource = router.slice(1);
var menus = Array.from(document.querySelectorAll('.route'));
var pages = Array.from(document.querySelectorAll('.page-section'));
var modal = document.querySelector('.modal');
var detailOpening = document.querySelector('.detail-opening');
var detailFilms = document.querySelector('.detail-films');
var detailPeople = document.querySelector('.detail-people');
var detailSpecies = document.querySelector('.detail-species');
var detailPlanets = document.querySelector('.detail-planets');
var detailStarships = document.querySelector('.detail-starships');
var detailVehicles = document.querySelector('.detail-vehicles');
var homeBtn = document.querySelector('[name=route]');
var modalClose = document.querySelector('.modal__close');
var spinner = document.querySelector('.spinner');
var nextPages = JSON.parse(sessionStorage.getItem('nextPages')) || {};
var myInit = {
  method: 'GET',
  mode: 'cors'
};

var showSpinner = function showSpinner() {
  spinner.classList.add('spinner--is-visible');
};

var hideSpinner = function hideSpinner() {
  spinner.classList.remove('spinner--is-visible');
};

var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var filmsIntro = function filmsIntro(item) {
  var releaseDate = new Date(item.release_date);
  var newDate = releaseDate.toDateString();
  return "\n    <p><h4 class=\"item-top-title\">EPISODE " + item.episode_id + "</h4></p>\n    <p><h3 class=\"item-title\">" + item.title + "</h3></p>\n    <p><span class=\"subtitle-yellow\">Director:</span> " + item.director + " <span class=\"subtitle-yellow\">Producer:</span> " + item.producer + " <span class=\"subtitle-yellow\">Release Date:</span> " + newDate + "</p>\n  ";
};

var createDetailButton = function createDetailButton(dataUrl, dataSource, buttonContent) {
  return "\n    <button data-type=\"detailBtn\" data-url=\"" + dataUrl + "\" data-source=\"" + dataSource + "\" class=\"item-extend-description\">" + buttonContent + "</button>\n  ";
};

var populateFilms = function populateFilms(data) {
  // console.log(data);
  var toInsert = document.querySelector("div[data-page=films");
  var ordered = data.sort(function (a, b) {
    return a.release_date > b.release_date ? 1 : -1;
  });

  toInsert.innerHTML = ordered.map(function (d, i) {
    var intro = filmsIntro(d);
    var detailButton = createDetailButton(d.url, "films", "More Details...");
    var shortDesc = d.opening_crawl.substr(0, 199);
    return "\n    <div class=\"row__large-6\">\n      <div class=\"page-section__item\">\n        " + intro + "\n        <p><span class=\"item-description\">" + shortDesc + "...</p>\n        <p>" + detailButton + "</p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var peopleIntro = function peopleIntro(item) {
  return "\n    <p><h4 class=\"item-top-title\">" + item.name + "</h4></p>\n    <p>\n      <span class=\"subtitle-yellow\">Birth Year:</span> " + item.birth_year + "<br />\n      <span class=\"subtitle-yellow\">Gender:</span> " + item.gender + "<br />\n      <span class=\"subtitle-yellow\">Height:</span> " + item.height + " <span class=\"subtitle-yellow\">Mass:</span> " + item.mass + "<br />\n      <span class=\"subtitle-yellow\">Eye Color:</span> " + item.eye_color + " <span class=\"subtitle-yellow\">Hair Color:</span> " + item.hair_color + "<br />\n      <span class=\"subtitle-yellow\">Skin Color:</span> " + item.skin_color + "\n    </p>\n  ";
};

var populatePeople = function populatePeople(data) {
  var toInsert = document.querySelector("div[data-page=people");

  toInsert.innerHTML = data.map(function (d, i) {
    var intro = peopleIntro(d);
    var detailButton = createDetailButton(d.url, "people", "More Details...");
    return "\n    <div class=\"row__large-4\">\n      <div class=\"page-section__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        " + intro + "\n        <p>" + detailButton + "</p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var speciesIntro = function speciesIntro(item) {
  return "\n  <p><h4 class=\"item-top-title\">" + item.name + "</h4></p>\n  <p>\n    <span class=\"subtitle-yellow\">Language:</span> " + item.language + "<br />\n    <span class=\"subtitle-yellow\">Classification:</span> " + item.classification + "<br />\n    <span class=\"subtitle-yellow\">Designation:</span> " + item.designation + "<br />\n    <span class=\"subtitle-yellow\">Avg Height:</span> " + item.average_height + "<br />\n    <span class=\"subtitle-yellow\">Avg Lifespan:</span> " + item.average_lifespan + "<br />\n    <span class=\"subtitle-yellow\">Eye Colors:</span> " + item.eye_colors + "<br />\n    <span class=\"subtitle-yellow\">Hair Colors:</span> " + item.hair_colors + "<br />\n    <span class=\"subtitle-yellow\">Skin Colors:</span> " + item.skin_colors + "\n  </p>\n  ";
};

var populateSpecies = function populateSpecies(data) {
  var toInsert = document.querySelector("div[data-page=species");

  toInsert.innerHTML = data.map(function (d, i) {
    var intro = speciesIntro(d);
    var detailButton = createDetailButton(d.url, "species", "More Details...");
    return "\n    <div class=\"row__large-4\">\n      <div class=\"page-section__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        " + intro + "\n        <p>" + detailButton + "</p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var planetsIntro = function planetsIntro(item) {
  return "\n  <p><h4 class=\"item-top-title\">" + item.name + "</h4></p>\n  <p>\n    <span class=\"subtitle-yellow\">Diameter:</span> " + item.diameter + "<br />\n    <span class=\"subtitle-yellow\">Orbital Period:</span> " + item.orbital_period + "<br />\n    <span class=\"subtitle-yellow\">Rotation Period:</span> " + item.rotation_period + "<br />\n    <span class=\"subtitle-yellow\">Surface Water:</span> " + item.surface_water + "<br />\n    <span class=\"subtitle-yellow\">Terrain:</span> " + item.terrain + "<br />\n    <span class=\"subtitle-yellow\">Climate:</span> " + item.climate + "<br />\n    <span class=\"subtitle-yellow\">Gravity:</span> " + item.gravity + "<br />\n    <span class=\"subtitle-yellow\">Population:</span> " + numberWithCommas(item.population) + "<br />\n  </p>\n  ";
};

var populatePlanets = function populatePlanets(data) {
  var toInsert = document.querySelector("div[data-page=planets");

  toInsert.innerHTML = data.map(function (d, i) {
    var intro = planetsIntro(d);
    var detailButton = createDetailButton(d.url, "planets", "More Details...");
    return "\n    <div class=\"row__large-4\">\n      <div class=\"page-section__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        " + intro + "\n        <p>" + detailButton + "</p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var starshipsIntro = function starshipsIntro(item) {
  return "\n  <p><h4 class=\"item-top-title\">" + item.name + "</h4></p>\n  <p>\n    <span class=\"subtitle-yellow\">Model:</span> " + item.model + "<br />\n    <span class=\"subtitle-yellow\">Starship Class:</span> " + item.starship_class + "<br />\n    <span class=\"subtitle-yellow\">Length:</span> " + numberWithCommas(item.length) + "<br />\n    <span class=\"subtitle-yellow\">MGLT:</span> " + item.mglt + "<br />\n    <span class=\"subtitle-yellow\">Hyperdrive Rating:</span> " + item.hyperdrive_rating + "<br />\n    <span class=\"subtitle-yellow\">Max. Atmosphering Speed:</span> " + item.max_atmosphering_speed + "<br />\n    <span class=\"subtitle-yellow\">Manufacturer:</span> " + item.manufacturer + "<br />\n    <span class=\"subtitle-yellow\">Crew:</span> " + numberWithCommas(item.crew) + "<br />\n    <span class=\"subtitle-yellow\">Passengers:</span> " + numberWithCommas(item.passengers) + "<br />\n    <span class=\"subtitle-yellow\">Cargo Capacity:</span> " + numberWithCommas(item.cargo_capacity) + "<br />\n    <span class=\"subtitle-yellow\">Consumables:</span> " + item.consumables + "<br />\n    <span class=\"subtitle-yellow\">Cost (in credits):</span> " + numberWithCommas(item.cost_in_credits) + "\n  </p>\n  ";
};

var populateStarships = function populateStarships(data) {
  var toInsert = document.querySelector("div[data-page=starships");

  toInsert.innerHTML = data.map(function (d, i) {
    var intro = starshipsIntro(d);
    var detailButton = createDetailButton(d.url, "starships", "More Details...");
    return "\n    <div class=\"row__large-4\">\n      <div class=\"page-section__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        " + intro + "\n        <p>" + detailButton + "</p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var vehiclesIntro = function vehiclesIntro(item) {
  return "\n  <p><h4 class=\"item-top-title\">" + item.name + "</h4></p>\n  <p>\n    <span class=\"subtitle-yellow\">Model:</span> " + item.model + "<br />\n    <span class=\"subtitle-yellow\">Vehicle Class:</span> " + item.vehicle_class + "<br />\n    <span class=\"subtitle-yellow\">Length:</span> " + numberWithCommas(item.length) + "<br />\n    <span class=\"subtitle-yellow\">Max. Atmosphering Speed:</span> " + item.max_atmosphering_speed + "<br />\n    <span class=\"subtitle-yellow\">Manufacturer:</span> " + item.manufacturer + "<br />\n    <span class=\"subtitle-yellow\">Crew:</span> " + numberWithCommas(item.crew) + "<br />\n    <span class=\"subtitle-yellow\">Passengers:</span> " + numberWithCommas(item.passengers) + "<br />\n    <span class=\"subtitle-yellow\">Cargo Capacity:</span> " + numberWithCommas(item.cargo_capacity) + "<br />\n    <span class=\"subtitle-yellow\">Consumables:</span> " + item.consumables + "<br />\n    <span class=\"subtitle-yellow\">Cost (in credits):</span> " + numberWithCommas(item.cost_in_credits) + "\n  </p>\n  ";
};

var populateVehicles = function populateVehicles(data) {
  var toInsert = document.querySelector("div[data-page=vehicles");

  toInsert.innerHTML = data.map(function (d, i) {
    var intro = vehiclesIntro(d);
    var detailButton = createDetailButton(d.url, "vehicles", "More Details...");
    return "\n    <div class=\"row__large-4\">\n      <div class=\"page-section__item\">\n        <p><em>" + (i + 1) + "</em></p>\n        " + intro + "\n        <p>" + detailButton + "</p>\n      </div>\n    </div>\n    ";
  }).join('');
};

var populateAllContent = function populateAllContent(pageToLoad) {
  var localData = JSON.parse(sessionStorage.getItem("" + pageToLoad));
  switch (pageToLoad) {
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
  homeBtn.classList.remove('larger');
  menus.forEach(function (m) {
    return m.classList.remove('larger');
  });
};

var largeNav = function largeNav(nav) {
  nav.classList.add('larger');
};

var hideMenu = function hideMenu() {
  menus.forEach(function (m) {
    return m.style.display = 'none';
  });
};

var showMenu = function showMenu() {
  menus.forEach(function (m) {
    return m.style.display = 'block';
  });
};

var hideAllPages = function hideAllPages() {
  pages.forEach(function (p) {
    return p.classList.remove('page-section--is-visible');
  });
};

var showPage = function showPage(page) {
  var pageToOpen = pages.find(function (p) {
    return p.id === page;
  });
  pageToOpen.classList.add('page-section--is-visible');
};

var initialLoad = function initialLoad() {
  hideModal();
  swapiSource.forEach(function (s) {
    var urlToFetch = "http://swapi.co/api/" + s.name + "/";
    var localData = JSON.parse(sessionStorage.getItem("" + s.name)) || [];

    if (localData.length === 0) {
      showSpinner();
      fetch(urlToFetch, myInit).then(function (blob) {
        return blob.json();
      }).then(function (data) {
        nextPages["" + s.name] = data.next;
        localData.push.apply(localData, _toConsumableArray(data.results));
        sessionStorage.setItem('nextPages', JSON.stringify(nextPages));
        sessionStorage.setItem("" + s.name, JSON.stringify(localData));
        populateAllContent(s.name);
        setDetailButtons();
        hideSpinner();
      }).catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    } else {
      populateAllContent(s.name);
    }
  });
};

var loadPage = function loadPage() {
  hideModal();
  setDetailButtons();
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
      hideAllPages();
      showPage('homePage');
    } else {
      clearLargeNav();
      showMenu();
      largeNav(currentNav);
      hideAllPages();
      showPage(validUrl.name);
    }
  } else {
    hideMenu();
    hideAllPages();
    showPage('error404');
  }
};

// const debounce = (func, wait = 5, immediate = true) => {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// };

var fetchNextPage = function fetchNextPage(toFetch) {
  var nextPage = nextPages["" + toFetch];
  var localData = JSON.parse(sessionStorage.getItem("" + toFetch));

  if (nextPage !== null) {
    showSpinner();
    fetch(nextPage, myInit).then(function (blob) {
      return blob.json();
    }).then(function (data) {
      nextPages["" + toFetch] = data.next;
      sessionStorage.setItem('nextPages', JSON.stringify(nextPages));
      var resultsLength = data.results.length;
      var dataExistCount = 0;
      data.results.forEach(function (r) {
        // console.log(r.url);
        var dataExist = localData.filter(function (d) {
          return r.url === d.url;
        })[0];

        if (dataExist) {
          dataExistCount++;
          if (dataExistCount === resultsLength) {
            fetchNextPage(toFetch);
          }
        } else {
          localData.push(r);
          sessionStorage.setItem("" + toFetch, JSON.stringify(localData));
          populateAllContent(toFetch);
          setDetailButtons();
          hideSpinner();
        }
      });
    }).catch(function (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      hideSpinner();
    });
  } else {
    hideSpinner();
  }
};

var loadNextPage = function loadNextPage(e) {
  var pageBottom = e.target.scrollTop + e.target.offsetHeight;

  if (pageBottom >= e.target.scrollHeight) {
    fetchNextPage(e.target.id);
  }
};

var populateDetail = function populateDetail(itemToShow, pageType) {
  var item = null;
  var peopleLength = 0;
  var speciesLength = 0;
  var planetsLength = 0;
  var filmsLength = 0;
  var starshipsLength = 0;
  var vehiclesLength = 0;
  var peopleList = null;

  detailOpening.innerHTML = "";
  detailFilms.innerHTML = "";
  detailPeople.innerHTML = "";
  detailSpecies.innerHTML = "";
  detailPlanets.innerHTML = "";
  detailStarships.innerHTML = "";
  detailVehicles.innerHTML = "";

  var films = JSON.parse(sessionStorage.getItem("films"));
  var people = JSON.parse(sessionStorage.getItem("people"));
  var species = JSON.parse(sessionStorage.getItem("species"));
  var planets = JSON.parse(sessionStorage.getItem("planets"));
  var starships = JSON.parse(sessionStorage.getItem("starships"));
  var vehicles = JSON.parse(sessionStorage.getItem("vehicles"));

  switch (pageType) {
    case 'films':
      item = films.filter(function (data) {
        return itemToShow === data.url;
      })[0];
      peopleLength = item.characters.length;
      speciesLength = item.species.length;
      planetsLength = item.planets.length;
      starshipsLength = item.starships.length;
      vehiclesLength = item.vehicles.length;
      peopleList = item.characters;

      var intro = filmsIntro(item);
      detailOpening.innerHTML = "\n        " + intro + "\n        <p><span class=\"item-description\">" + item.opening_crawl + "</p>\n      ";
      break;
    case 'people':
      item = people.filter(function (data) {
        return itemToShow === data.url;
      })[0];
      filmsLength = item.films.length;
      speciesLength = item.species.length;
      starshipsLength = item.starships.length;
      vehiclesLength = item.vehicles.length;

      detailOpening.innerHTML = peopleIntro(item);
      break;
    case 'species':
      item = species.filter(function (data) {
        return itemToShow === data.url;
      })[0];
      filmsLength = item.films.length;
      peopleLength = item.people.length;
      peopleList = item.people;
      detailOpening.innerHTML = speciesIntro(item);
      break;
    case 'planets':
      item = planets.filter(function (data) {
        return itemToShow === data.url;
      })[0];
      filmsLength = item.films.length;
      peopleLength = item.residents.length;
      peopleList = item.residents;
      detailOpening.innerHTML = planetsIntro(item);
      break;
    case 'starships':
      item = starships.filter(function (data) {
        return itemToShow === data.url;
      })[0];
      filmsLength = item.films.length;
      peopleLength = item.pilots.length;
      peopleList = item.pilots;
      detailOpening.innerHTML = starshipsIntro(item);
      break;
    case 'vehicles':
      item = vehicles.filter(function (data) {
        return itemToShow === data.url;
      })[0];
      filmsLength = item.films.length;
      peopleLength = item.pilots.length;
      peopleList = item.pilots;
      detailOpening.innerHTML = vehiclesIntro(item);
      break;
  }

  if (filmsLength !== 0) {
    detailFilms.innerHTML = "\n      <p><strong>Films:</strong></p>\n    ";

    item.films.forEach(function (f, i) {
      var filmsDetail = films.find(function (film) {
        return film.url === f;
      });

      if (filmsDetail) {
        detailFilms.innerHTML += createDetailButton(filmsDetail.url, "films", filmsDetail.title);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(f, myInit).then(function (blob) {
          return blob.json();
        }).then(function (data) {
          films.push(data);
          sessionStorage.setItem("films", JSON.stringify(films));
          detailFilms.innerHTML += createDetailButton(data.url, "films", data.title);
          populateAllContent('films');
          setDetailButtons();
          hideSpinner();
        }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if (peopleLength !== 0) {
    detailPeople.innerHTML = "\n      <p><strong>Characters:</strong></p>\n    ";

    peopleList.forEach(function (c, i) {
      var peopleDetail = people.find(function (p) {
        return p.url === c;
      });

      if (peopleDetail) {
        detailPeople.innerHTML += createDetailButton(peopleDetail.url, "people", peopleDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(c, myInit).then(function (blob) {
          return blob.json();
        }).then(function (data) {
          people.push(data);
          sessionStorage.setItem("people", JSON.stringify(people));
          detailPeople.innerHTML += createDetailButton(data.url, "people", data.name);
          populateAllContent('people');
          setDetailButtons();
          hideSpinner();
        }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if (speciesLength !== 0) {
    detailSpecies.innerHTML = "\n      <p><strong>Species:</strong></p>\n    ";

    item.species.forEach(function (s, i) {
      var speciesDetail = species.find(function (sp) {
        return sp.url === s;
      });

      if (speciesDetail) {
        detailSpecies.innerHTML += createDetailButton(speciesDetail.url, "species", speciesDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(s, myInit).then(function (blob) {
          return blob.json();
        }).then(function (data) {
          species.push(data);
          sessionStorage.setItem("species", JSON.stringify(species));
          detailSpecies.innerHTML += createDetailButton(data.url, "species", data.name);
          populateAllContent('species');
          setDetailButtons();
          hideSpinner();
        }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if (planetsLength !== 0) {
    detailPlanets.innerHTML = "\n      <p><strong>Planets:</strong></p>\n    ";

    item.planets.forEach(function (p, i) {
      var planetsDetail = planets.find(function (pla) {
        return pla.url === p;
      });

      if (planetsDetail) {
        detailPlanets.innerHTML += createDetailButton(planetsDetail.url, "planets", planetsDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(p, myInit).then(function (blob) {
          return blob.json();
        }).then(function (data) {
          planets.push(data);
          sessionStorage.setItem("planets", JSON.stringify(planets));
          detailPlanets.innerHTML += createDetailButton(data.url, "planets", data.name);
          populateAllContent('planets');
          setDetailButtons();
          hideSpinner();
        }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if (starshipsLength !== 0) {
    detailStarships.innerHTML = "\n      <p><strong>Starships:</strong></p>\n    ";

    item.starships.forEach(function (s, i) {
      var starshipsDetail = starships.find(function (sta) {
        return sta.url === s;
      });

      if (starshipsDetail) {
        detailStarships.innerHTML += createDetailButton(starshipsDetail.url, "starships", starshipsDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(s, myInit).then(function (blob) {
          return blob.json();
        }).then(function (data) {
          starships.push(data);
          sessionStorage.setItem("starships", JSON.stringify(starships));
          detailStarships.innerHTML += createDetailButton(data.url, "starships", data.name);
          populateAllContent('starships');
          setDetailButtons();
          hideSpinner();
        }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if (vehiclesLength !== 0) {
    detailVehicles.innerHTML = "\n      <p><strong>Vehicles:</strong></p>\n    ";

    item.vehicles.forEach(function (v, i) {
      var vehiclesDetail = vehicles.find(function (ve) {
        return ve.url === v;
      });

      if (vehiclesDetail) {
        detailVehicles.innerHTML += createDetailButton(vehiclesDetail.url, "vehicles", vehiclesDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(v, myInit).then(function (blob) {
          return blob.json();
        }).then(function (data) {
          vehicles.push(data);
          sessionStorage.setItem("vehicles", JSON.stringify(vehicles));
          detailVehicles.innerHTML += createDetailButton(data.url, "vehicles", data.name);
          populateAllContent('vehicles');
          setDetailButtons();
          hideSpinner();
        }).catch(function (error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }
};

var showModal = function showModal() {
  modal.classList.add('modal--is-visible');
};

var hideModal = function hideModal() {
  modal.classList.remove('modal--is-visible');
};

var keyPressHandler = function keyPressHandler(e) {
  if (e.keyCode == 27) {
    hideModal();
  }
};

var showDetail = function showDetail(e) {
  populateDetail(e.target.dataset.url, e.target.dataset.source);
  showModal();
};

var setDetailButtons = function setDetailButtons() {
  var detailButtons = Array.from(document.querySelectorAll('[data-type=detailBtn]'));
  detailButtons.forEach(function (b) {
    b.addEventListener('click', showDetail);
  });
};

initialLoad();
window.addEventListener('load', loadPage);
window.onpopstate = loadPage;
window.addEventListener('keydown', keyPressHandler);

pages.forEach(function (m) {
  m.addEventListener('scroll', loadNextPage);
});

homeBtn.addEventListener('click', function () {
  window.history.pushState({}, "name", baseUrl + "/");
  showMenu();
  clearLargeNav();
  largeNav(homeBtn);
  hideAllPages();
  showPage('homePage');
  hideModal();
});

modalClose.addEventListener('click', hideModal);

/***/ })
/******/ ]);