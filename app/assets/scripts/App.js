let isFetching = false;
// use /swapi for baseUrl when building to production...
const baseUrl = "/swapi";
const router = [
  { path: "/", name: ""},
  { path: "/", name: "films"},
  { path: "/", name: "people"},
  { path: "/", name: "species"},
  { path: "/", name: "planets"},
  { path: "/", name: "starships"},
  { path: "/", name: "vehicles"}
];
const swapiSource = router.slice(1);
const menus = Array.from(document.querySelectorAll('.route'));
const pages = Array.from(document.querySelectorAll('.page-section'));
const modal = document.querySelector('.modal');
const detailOpening = document.querySelector('.detail-opening');
const detailFilms = document.querySelector('.detail-films');
const detailPeople = document.querySelector('.detail-people');
const detailSpecies = document.querySelector('.detail-species');
const detailPlanets = document.querySelector('.detail-planets');
const detailStarships = document.querySelector('.detail-starships');
const detailVehicles = document.querySelector('.detail-vehicles');
const homeBtn = document.querySelector('[name=route]');
const modalClose = document.querySelector('.modal__close');
const spinner = document.querySelector('.spinner');
const nextPages = JSON.parse(sessionStorage.getItem('nextPages')) || {};

const showSpinner = () => {
  spinner.classList.add('spinner--is-visible');
}

const hideSpinner = () => {
  spinner.classList.remove('spinner--is-visible');
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const filmsIntro = (item) => {
  const releaseDate= new Date(item.release_date);
  const newDate = releaseDate.toDateString();
  return `
    <p><h4 class="item-top-title">EPISODE ${item.episode_id}</h4></p>
    <p><h3 class="item-title">${item.title}</h3></p>
    <p><span class="subtitle-yellow">Director:</span> ${item.director} <span class="subtitle-yellow">Producer:</span> ${item.producer} <span class="subtitle-yellow">Release Date:</span> ${newDate}</p>
  `;
}

const createDetailButton = (dataUrl, dataSource, buttonContent) => {
  return `
    <button data-type="detailBtn" data-url="${dataUrl}" data-source="${dataSource}" class="item-extend-description">${buttonContent}</button>
  `;
}

const populateFilms = (data) => {
  // console.log(data);
  const toInsert = document.querySelector(`div[data-page=films`);
  const ordered = data.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));

  toInsert.innerHTML = ordered.map((d, i) => {
    const intro = filmsIntro(d);
    const detailButton = createDetailButton(d.url, "films", "More Details...");
    const shortDesc = d.opening_crawl.substr(0,199);
    return `
    <div class="row__large-6">
      <div class="page-section__item">
        ${intro}
        <p><span class="item-description">${shortDesc}...</p>
        <p>${detailButton}</p>
      </div>
    </div>
    `
    ;
  }).join('');
}

const peopleIntro = (item) => {
  return `
    <p><h4 class="item-top-title">${item.name}</h4></p>
    <p>
      <span class="subtitle-yellow">Birth Year:</span> ${item.birth_year}<br />
      <span class="subtitle-yellow">Gender:</span> ${item.gender}<br />
      <span class="subtitle-yellow">Height:</span> ${item.height} <span class="subtitle-yellow">Mass:</span> ${item.mass}<br />
      <span class="subtitle-yellow">Eye Color:</span> ${item.eye_color} <span class="subtitle-yellow">Hair Color:</span> ${item.hair_color}<br />
      <span class="subtitle-yellow">Skin Color:</span> ${item.skin_color}
    </p>
  `;
}

const populatePeople = (data) => {
  const toInsert = document.querySelector(`div[data-page=people`);

  toInsert.innerHTML = data.map((d, i) => {
    const intro = peopleIntro(d);
    const detailButton = createDetailButton(d.url, "people", "More Details...");
    return `
    <div class="row__large-4">
      <div class="page-section__item">
        <p><em>${i+1}</em></p>
        ${intro}
        <p>${detailButton}</p>
      </div>
    </div>
    `;
  }).join('');
}

const speciesIntro = (item) => {
  return `
  <p><h4 class="item-top-title">${item.name}</h4></p>
  <p>
    <span class="subtitle-yellow">Language:</span> ${item.language}<br />
    <span class="subtitle-yellow">Classification:</span> ${item.classification}<br />
    <span class="subtitle-yellow">Designation:</span> ${item.designation}<br />
    <span class="subtitle-yellow">Avg Height:</span> ${item.average_height}<br />
    <span class="subtitle-yellow">Avg Lifespan:</span> ${item.average_lifespan}<br />
    <span class="subtitle-yellow">Eye Colors:</span> ${item.eye_colors}<br />
    <span class="subtitle-yellow">Hair Colors:</span> ${item.hair_colors}<br />
    <span class="subtitle-yellow">Skin Colors:</span> ${item.skin_colors}
  </p>
  `;
}

const populateSpecies = (data) => {
  const toInsert = document.querySelector(`div[data-page=species`);

  toInsert.innerHTML = data.map((d, i) => {
    const intro = speciesIntro(d);
    const detailButton = createDetailButton(d.url, "species", "More Details...");
    return `
    <div class="row__large-4">
      <div class="page-section__item">
        <p><em>${i+1}</em></p>
        ${intro}
        <p>${detailButton}</p>
      </div>
    </div>
    `;
  }).join('');
}

const planetsIntro = (item) => {
  return `
  <p><h4 class="item-top-title">${item.name}</h4></p>
  <p>
    <span class="subtitle-yellow">Diameter:</span> ${item.diameter}<br />
    <span class="subtitle-yellow">Orbital Period:</span> ${item.orbital_period}<br />
    <span class="subtitle-yellow">Rotation Period:</span> ${item.rotation_period}<br />
    <span class="subtitle-yellow">Surface Water:</span> ${item.surface_water}<br />
    <span class="subtitle-yellow">Terrain:</span> ${item.terrain}<br />
    <span class="subtitle-yellow">Climate:</span> ${item.climate}<br />
    <span class="subtitle-yellow">Gravity:</span> ${item.gravity}<br />
    <span class="subtitle-yellow">Population:</span> ${numberWithCommas(item.population)}<br />
  </p>
  `;
}

const populatePlanets = (data) => {
  const toInsert = document.querySelector(`div[data-page=planets`);

  toInsert.innerHTML = data.map((d, i) => {
    const intro = planetsIntro(d);
    const detailButton = createDetailButton(d.url, "planets", "More Details...");
    return `
    <div class="row__large-4">
      <div class="page-section__item">
        <p><em>${i+1}</em></p>
        ${intro}
        <p>${detailButton}</p>
      </div>
    </div>
    `;
  }).join('');
}

const starshipsIntro = (item) => {
  return `
  <p><h4 class="item-top-title">${item.name}</h4></p>
  <p>
    <span class="subtitle-yellow">Model:</span> ${item.model}<br />
    <span class="subtitle-yellow">Starship Class:</span> ${item.starship_class}<br />
    <span class="subtitle-yellow">Length:</span> ${numberWithCommas(item.length)}<br />
    <span class="subtitle-yellow">MGLT:</span> ${item.mglt}<br />
    <span class="subtitle-yellow">Hyperdrive Rating:</span> ${item.hyperdrive_rating}<br />
    <span class="subtitle-yellow">Max. Atmosphering Speed:</span> ${item.max_atmosphering_speed}<br />
    <span class="subtitle-yellow">Manufacturer:</span> ${item.manufacturer}<br />
    <span class="subtitle-yellow">Crew:</span> ${numberWithCommas(item.crew)}<br />
    <span class="subtitle-yellow">Passengers:</span> ${numberWithCommas(item.passengers)}<br />
    <span class="subtitle-yellow">Cargo Capacity:</span> ${numberWithCommas(item.cargo_capacity)}<br />
    <span class="subtitle-yellow">Consumables:</span> ${item.consumables}<br />
    <span class="subtitle-yellow">Cost (in credits):</span> ${numberWithCommas(item.cost_in_credits)}
  </p>
  `;
}

const populateStarships = (data) => {
  const toInsert = document.querySelector(`div[data-page=starships`);

  toInsert.innerHTML = data.map((d, i) => {
    const intro = starshipsIntro(d);
    const detailButton = createDetailButton(d.url, "starships", "More Details...");
    return `
    <div class="row__large-4">
      <div class="page-section__item">
        <p><em>${i+1}</em></p>
        ${intro}
        <p>${detailButton}</p>
      </div>
    </div>
    `;
  }).join('');
}

const vehiclesIntro = (item) => {
  return `
  <p><h4 class="item-top-title">${item.name}</h4></p>
  <p>
    <span class="subtitle-yellow">Model:</span> ${item.model}<br />
    <span class="subtitle-yellow">Vehicle Class:</span> ${item.vehicle_class}<br />
    <span class="subtitle-yellow">Length:</span> ${numberWithCommas(item.length)}<br />
    <span class="subtitle-yellow">Max. Atmosphering Speed:</span> ${item.max_atmosphering_speed}<br />
    <span class="subtitle-yellow">Manufacturer:</span> ${item.manufacturer}<br />
    <span class="subtitle-yellow">Crew:</span> ${numberWithCommas(item.crew)}<br />
    <span class="subtitle-yellow">Passengers:</span> ${numberWithCommas(item.passengers)}<br />
    <span class="subtitle-yellow">Cargo Capacity:</span> ${numberWithCommas(item.cargo_capacity)}<br />
    <span class="subtitle-yellow">Consumables:</span> ${item.consumables}<br />
    <span class="subtitle-yellow">Cost (in credits):</span> ${numberWithCommas(item.cost_in_credits)}
  </p>
  `;
}

const populateVehicles = (data) => {
  const toInsert = document.querySelector(`div[data-page=vehicles`);

  toInsert.innerHTML = data.map((d, i) => {
    const intro = vehiclesIntro(d);
    const detailButton = createDetailButton(d.url, "vehicles", "More Details...");
    return `
    <div class="row__large-4">
      <div class="page-section__item">
        <p><em>${i+1}</em></p>
        ${intro}
        <p>${detailButton}</p>
      </div>
    </div>
    `;
  }).join('');
}

const populateAllContent = (pageToLoad) => {
  const localData = JSON.parse(sessionStorage.getItem(`${pageToLoad}`));
  switch(pageToLoad) {
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

const clearLargeNav = () => {
  homeBtn.classList.remove('larger');
  menus.forEach(m => m.classList.remove('larger'));
}

const largeNav = (nav) => {
  nav.classList.add('larger');
}

const hideMenu = () => {
  menus.forEach(m => m.style.display = 'none');
}

const showMenu = () => {
  menus.forEach(m => m.style.display = 'block');
}

const hideAllPages = () => {
  pages.forEach(p => p.classList.remove('page-section--is-visible'));
}

const showPage = (page) => {
  const pageToOpen = pages.find(p => { return p.id === page });
  pageToOpen.classList.add('page-section--is-visible');
}

const initialLoad = () => {
  hideModal();
  swapiSource.forEach(s => {
    const urlToFetch = `http://swapi.co/api/${s.name}/`;
    const localData = JSON.parse(sessionStorage.getItem(`${s.name}`)) || [];

    if(localData.length === 0) {
      showSpinner();
      fetch(urlToFetch)
      .then(blob => blob.json())
      .then(data => {
        nextPages[`${s.name}`] = data.next;
        localData.push(...data.results);
        sessionStorage.setItem('nextPages', JSON.stringify(nextPages));
        sessionStorage.setItem(`${s.name}`, JSON.stringify(localData));
        populateAllContent(s.name);
        setDetailButtons();
        hideSpinner();
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    } else {
      populateAllContent(s.name);
    }
  });
}

const loadPage = () => {
  hideModal();
  setDetailButtons();
  const currentPath = location.pathname;
  const currentHash = location.hash;
  const pageToLoad = currentHash.substr(1);

  const validUrl = router.filter(r => {
    return `${baseUrl}${r.path}` === currentPath && r.name === pageToLoad
  })[0];

  const currentNav = document.querySelector(`a[href='${currentHash}']`);

  if(validUrl) {
    if(validUrl.name === "") {
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
}

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

const fetchNextPage = (toFetch) => {
  const nextPage = nextPages[`${toFetch}`];
  const localData = JSON.parse(sessionStorage.getItem(`${toFetch}`));

  if(nextPage !== null){
    showSpinner();
    fetch(nextPage)
    .then(blob => blob.json())
    .then(data => {
      nextPages[`${toFetch}`] = data.next;
      sessionStorage.setItem('nextPages', JSON.stringify(nextPages));
      const resultsLength = data.results.length;
      let dataExistCount = 0;
      data.results.forEach(r => {
        // console.log(r.url);
        const dataExist = localData.filter(d => {
          return r.url === d.url
        })[0];

        if(dataExist) {
          dataExistCount++;
          if(dataExistCount === resultsLength) {
            fetchNextPage(toFetch);
          }
        } else {
          localData.push(r);
          sessionStorage.setItem(`${toFetch}`, JSON.stringify(localData));
          populateAllContent(toFetch);
          setDetailButtons();
          hideSpinner();
        }
      });
    })
    .catch(function(error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      hideSpinner();
    });
  }
  else {
    hideSpinner();
  }
}

const loadNextPage = (e) => {
  const pageBottom = e.target.scrollTop + e.target.offsetHeight;

  if(pageBottom >= e.target.scrollHeight) {
    fetchNextPage(e.target.id);
  }
}

const populateDetail = (itemToShow, pageType) => {
  let item = null;
  let peopleLength = 0;
  let speciesLength = 0;
  let planetsLength = 0;
  let filmsLength = 0;
  let starshipsLength = 0;
  let vehiclesLength = 0;
  let peopleList = null;

  detailOpening.innerHTML = "";
  detailFilms.innerHTML = "";
  detailPeople.innerHTML = "";
  detailSpecies.innerHTML = "";
  detailPlanets.innerHTML = "";
  detailStarships.innerHTML = "";
  detailVehicles.innerHTML = "";

  const films = JSON.parse(sessionStorage.getItem(`films`));
  const people = JSON.parse(sessionStorage.getItem(`people`));
  const species = JSON.parse(sessionStorage.getItem(`species`));
  const planets = JSON.parse(sessionStorage.getItem(`planets`));
  const starships = JSON.parse(sessionStorage.getItem(`starships`));
  const vehicles = JSON.parse(sessionStorage.getItem(`vehicles`));

  switch(pageType) {
    case 'films':
      item = films.filter(data => {return itemToShow === data.url})[0];
      peopleLength = item.characters.length;
      speciesLength = item.species.length;
      planetsLength = item.planets.length;
      starshipsLength = item.starships.length;
      vehiclesLength = item.vehicles.length;
      peopleList = item.characters;

      const intro = filmsIntro(item);
      detailOpening.innerHTML = `
        ${intro}
        <p><span class="item-description">${item.opening_crawl}</p>
      `;
      break;
    case 'people':
      item = people.filter(data => {return itemToShow === data.url})[0];
      filmsLength = item.films.length;
      speciesLength = item.species.length;
      starshipsLength = item.starships.length;
      vehiclesLength = item.vehicles.length;

      detailOpening.innerHTML = peopleIntro(item);
      break;
    case 'species':
      item = species.filter(data => {return itemToShow === data.url})[0];
      filmsLength = item.films.length;
      peopleLength = item.people.length;
      peopleList = item.people;
      detailOpening.innerHTML = speciesIntro(item);
      break;
    case 'planets':
      item = planets.filter(data => {return itemToShow === data.url})[0];
      filmsLength = item.films.length;
      peopleLength = item.residents.length;
      peopleList = item.residents;
      detailOpening.innerHTML = planetsIntro(item);
      break;
    case 'starships':
      item = starships.filter(data => {return itemToShow === data.url})[0];
      filmsLength = item.films.length;
      peopleLength = item.pilots.length;
      peopleList = item.pilots;
      detailOpening.innerHTML = starshipsIntro(item);
      break;
    case 'vehicles':
      item = vehicles.filter(data => {return itemToShow === data.url})[0];
      filmsLength = item.films.length;
      peopleLength = item.pilots.length;
      peopleList = item.pilots;
      detailOpening.innerHTML = vehiclesIntro(item);
      break;
  }

  if(filmsLength !== 0) {
    detailFilms.innerHTML = `
      <p><strong>Films:</strong></p>
    `;

    item.films.forEach((f, i) => {
      const filmsDetail = films.find(film => {
        return film.url === f
      });

      if(filmsDetail) {
        detailFilms.innerHTML += createDetailButton(filmsDetail.url, "films", filmsDetail.title);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(f)
        .then(blob => blob.json())
        .then(data => {
          films.push(data);
          sessionStorage.setItem(`films`, JSON.stringify(films));
          detailFilms.innerHTML += createDetailButton(data.url, "films", data.title);
          populateAllContent('films');
          setDetailButtons();
          hideSpinner();
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if(peopleLength !== 0) {
    detailPeople.innerHTML = `
      <p><strong>Characters:</strong></p>
    `;

    peopleList.forEach((c, i) => {
      const peopleDetail = people.find(p => {
        return p.url === c
      });

      if(peopleDetail) {
        detailPeople.innerHTML += createDetailButton(peopleDetail.url, "people", peopleDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(c)
        .then(blob => blob.json())
        .then(data => {
          people.push(data);
          sessionStorage.setItem(`people`, JSON.stringify(people));
          detailPeople.innerHTML += createDetailButton(data.url, "people", data.name);
          populateAllContent('people');
          setDetailButtons();
          hideSpinner();
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if(speciesLength !== 0) {
    detailSpecies.innerHTML = `
      <p><strong>Species:</strong></p>
    `;

    item.species.forEach((s, i) => {
      const speciesDetail = species.find(sp => {
        return sp.url === s
      });

      if(speciesDetail) {
        detailSpecies.innerHTML += createDetailButton(speciesDetail.url, "species", speciesDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(s)
        .then(blob => blob.json())
        .then(data => {
          species.push(data);
          sessionStorage.setItem(`species`, JSON.stringify(species));
          detailSpecies.innerHTML += createDetailButton(data.url, "species", data.name);
          populateAllContent('species');
          setDetailButtons();
          hideSpinner();
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if(planetsLength !== 0) {
    detailPlanets.innerHTML = `
      <p><strong>Planets:</strong></p>
    `;

    item.planets.forEach((p, i) => {
      const planetsDetail = planets.find(pla => {
        return pla.url === p
      });

      if(planetsDetail) {
        detailPlanets.innerHTML += createDetailButton(planetsDetail.url, "planets", planetsDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(p)
        .then(blob => blob.json())
        .then(data => {
          planets.push(data);
          sessionStorage.setItem(`planets`, JSON.stringify(planets));
          detailPlanets.innerHTML += createDetailButton(data.url, "planets", data.name);
          populateAllContent('planets');
          setDetailButtons();
          hideSpinner();
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if(starshipsLength !== 0) {
    detailStarships.innerHTML = `
      <p><strong>Starships:</strong></p>
    `;

    item.starships.forEach((s, i) => {
      const starshipsDetail = starships.find(sta => {
        return sta.url === s
      });

      if(starshipsDetail) {
        detailStarships.innerHTML += createDetailButton(starshipsDetail.url, "starships", starshipsDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(s)
        .then(blob => blob.json())
        .then(data => {
          starships.push(data);
          sessionStorage.setItem(`starships`, JSON.stringify(starships));
          detailStarships.innerHTML += createDetailButton(data.url, "starships", data.name);
          populateAllContent('starships');
          setDetailButtons();
          hideSpinner();
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }

  if(vehiclesLength !== 0) {
    detailVehicles.innerHTML = `
      <p><strong>Vehicles:</strong></p>
    `;

    item.vehicles.forEach((v, i) => {
      const vehiclesDetail = vehicles.find(ve => {
        return ve.url === v
      });

      if(vehiclesDetail) {
        detailVehicles.innerHTML += createDetailButton(vehiclesDetail.url, "vehicles", vehiclesDetail.name);
        setDetailButtons();
      } else {
        showSpinner();
        fetch(v)
        .then(blob => blob.json())
        .then(data => {
          vehicles.push(data);
          sessionStorage.setItem(`vehicles`, JSON.stringify(vehicles));
          detailVehicles.innerHTML += createDetailButton(data.url, "vehicles", data.name);
          populateAllContent('vehicles');
          setDetailButtons();
          hideSpinner();
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          hideSpinner();
        });
      }
    });
  }
}

const showModal = () => {
  modal.classList.add('modal--is-visible');
}

const hideModal = () => {
  modal.classList.remove('modal--is-visible');
}

const keyPressHandler = (e) => {
  if (e.keyCode == 27) {
    hideModal();
  }
}

const showDetail = (e) => {
  populateDetail(e.target.dataset.url, e.target.dataset.source);
  showModal();
}

const setDetailButtons = () => {
  const detailButtons = Array.from(document.querySelectorAll('[data-type=detailBtn]'));
  detailButtons.forEach(b => {
    b.addEventListener('click', showDetail);
  });
}

initialLoad();
window.addEventListener('load', loadPage);
window.onpopstate = loadPage;
window.addEventListener('keydown', keyPressHandler);

pages.forEach(m => {
  m.addEventListener('scroll', loadNextPage);
});

homeBtn.addEventListener('click', () => {
  window.history.pushState({}, "name", `${baseUrl}/`);
  showMenu();
  clearLargeNav();
  largeNav(homeBtn);
  hideAllPages();
  showPage('homePage');
  hideModal();
});

modalClose.addEventListener('click', hideModal);
