let isFetching = false;
const baseUrl = "";
const fetchBaseUrl = 'http://swapi.co/api/';
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
const modals = Array.from(document.querySelectorAll('.modal'));
const homeBtn = document.querySelector('[name=route]');
const nextPages = JSON.parse(sessionStorage.getItem('nextPages')) || {};

const initialLoad = () => {
  swapiSource.forEach(s => {
    const urlToFetch = `http://swapi.co/api/${s.name}/`;
    const localData = JSON.parse(sessionStorage.getItem(`${s.name}`)) || [];

    if(localData.length === 0) {
      fetch(urlToFetch)
      .then(blob => blob.json())
      .then(data => {
        // console.log(`from fetch...`);
        nextPages[`${s.name}`] = data.next;
        localData.push(...data.results);
        sessionStorage.setItem('nextPages', JSON.stringify(nextPages));
        sessionStorage.setItem(`${s.name}`, JSON.stringify(localData));
        populateAllContent(s.name);
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    } else {
      // console.log(`from local...`);
      populateAllContent(s.name);
    }
  });
}

const populateAllContent = (modal) => {
  const localData = JSON.parse(sessionStorage.getItem(`${modal}`));
  switch(modal) {
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

const populateFilms = (data) => {
  // console.log(data);
  const toInsert = document.querySelector(`div[data-page=films`);
  const ordered = data.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));

  const toAppend = ordered.map((data, i) => {
    const d = new Date(data.release_date);
    const newDate = d.toDateString();
    const shortDesc = data.opening_crawl.substr(0,199);
    return `
    <div class="row__large-6">
      <div class="modal__item">
        <p><h4 class="item-top-title">EPISODE ${data.episode_id}</h4></p>
        <p><h3 class="item-title">${data.title}</h3></p>
        <p><span class="subtitle-yellow">Director:</span> ${data.director} <span class="subtitle-yellow">Producer:</span> ${data.producer} <span class="subtitle-yellow">Release Date:</span> ${newDate}</p>
        <p><span class="item-description">${shortDesc}...</p>
        <p><button class="item-extend-description">More Details...</button></p>
      </div>
    </div>
    `;
  }).join('');

  toInsert.innerHTML = toInsert.innerHTML + toAppend;
}

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

const populatePeople = (data) => {
  // console.log(data);
  const toInsert = document.querySelector(`div[data-page=people`);

  const toAppend = data.map((d, i) => {
    return `
    <div class="row__large-4">
      <div class="modal__item">
        <p><h4 class="item-top-title">${d.name}</h4></p>
        <p>
          <span class="subtitle-yellow">Birth Year:</span> ${d.birth_year}<br />
          <span class="subtitle-yellow">Gender:</span> ${d.gender}<br />
          <span class="subtitle-yellow">Height:</span> ${d.height} <span class="subtitle-yellow">Mass:</span> ${d.mass}<br />
          <span class="subtitle-yellow">Eye Color:</span> ${d.eye_color} <span class="subtitle-yellow">Hair Color:</span> ${d.hair_color}<br />
          <span class="subtitle-yellow">Skin Color:</span> ${d.skin_color}
        </p>
        <p><button class="item-extend-description">More Details..</button></p>
      </div>
    </div>
    `;
  }).join('');

  toInsert.innerHTML = toInsert.innerHTML + toAppend;
}

const populateSpecies = (data) => {
  // console.log(data);
  const toInsert = document.querySelector(`div[data-page=species`);

  const toAppend = data.map((d, i) => {
    return `
    <div class="row__large-4">
      <div class="modal__item">
        <p><h4 class="item-top-title">${d.name}</h4></p>
        <p>
          <span class="subtitle-yellow">Language:</span> ${d.language}<br />
          <span class="subtitle-yellow">Classification:</span> ${d.classification}<br />
          <span class="subtitle-yellow">Designation:</span> ${d.designation}<br />
          <span class="subtitle-yellow">Avg Height:</span> ${d.average_height}<br />
          <span class="subtitle-yellow">Avg Lifespan:</span> ${d.average_lifespan}<br />
          <span class="subtitle-yellow">Eye Colors:</span> ${d.eye_colors}<br />
          <span class="subtitle-yellow">Hair Colors:</span> ${d.hair_colors}<br />
          <span class="subtitle-yellow">Skin Colors:</span> ${d.skin_colors}
        </p>
        <p><button class="item-extend-description">More Details...</button></p>
      </div>
    </div>
    `;
  }).join('');

  toInsert.innerHTML = toInsert.innerHTML + toAppend;
}

const populatePlanets = (data) => {
  // console.log(data);
  const toInsert = document.querySelector(`div[data-page=planets`);

  const toAppend = data.map((d, i) => {
    return `
    <div class="row__large-4">
      <div class="modal__item">
        <p><h4 class="item-top-title">${d.name}</h4></p>
        <p>
          <span class="subtitle-yellow">Diameter:</span> ${d.diameter}<br />
          <span class="subtitle-yellow">Orbital Period:</span> ${d.orbital_period}<br />
          <span class="subtitle-yellow">Rotation Period:</span> ${d.rotation_period}<br />
          <span class="subtitle-yellow">Surface Water:</span> ${d.surface_water}<br />
          <span class="subtitle-yellow">Terrain:</span> ${d.terrain}<br />
          <span class="subtitle-yellow">Climate:</span> ${d.climate}<br />
          <span class="subtitle-yellow">Gravity:</span> ${d.gravity}<br />
          <span class="subtitle-yellow">Population:</span> ${numberWithCommas(d.population)}<br />
        </p>
        <p><button class="item-extend-description">More Details...</button></p>
      </div>
    </div>
    `;
  }).join('');

  toInsert.innerHTML = toInsert.innerHTML + toAppend;
}

const populateStarships = (data) => {
  // console.log(data);
  const toInsert = document.querySelector(`div[data-page=starships`);

  const toAppend = data.map((d, i) => {
    return `
    <div class="row__large-4">
      <div class="modal__item">
        <p><h4 class="item-top-title">${d.name}</h4></p>
        <p>
          <span class="subtitle-yellow">Model:</span> ${d.model}<br />
          <span class="subtitle-yellow">Starship Class:</span> ${d.starship_class}<br />
          <span class="subtitle-yellow">Length:</span> ${numberWithCommas(d.length)}<br />
          <span class="subtitle-yellow">MGLT:</span> ${d.mglt}<br />
          <span class="subtitle-yellow">Hyperdrive Rating:</span> ${d.hyperdrive_rating}<br />
          <span class="subtitle-yellow">Max. Atmosphering Speed:</span> ${d.max_atmosphering_speed}<br />
          <span class="subtitle-yellow">Manufacturer:</span> ${d.manufacturer}<br />
          <span class="subtitle-yellow">Crew:</span> ${numberWithCommas(d.crew)}<br />
          <span class="subtitle-yellow">Passengers:</span> ${numberWithCommas(d.passengers)}<br />
          <span class="subtitle-yellow">Cargo Capacity:</span> ${numberWithCommas(d.cargo_capacity)}<br />
          <span class="subtitle-yellow">Consumables:</span> ${d.consumables}<br />
          <span class="subtitle-yellow">Cost (in credits):</span> ${numberWithCommas(d.cost_in_credits)}
        </p>
        <p><button class="item-extend-description">More Details...</button></p>
      </div>
    </div>
    `;
  }).join('');

  toInsert.innerHTML = toInsert.innerHTML + toAppend;
}

const populateVehicles = (data) => {
  // console.log(data);
  const toInsert = document.querySelector(`div[data-page=vehicles`);

  const toAppend = data.map((d, i) => {
    return `
    <div class="row__large-4">
      <div class="modal__item">
        <p><h4 class="item-top-title">${d.name}</h4></p>
        <p>
          <span class="subtitle-yellow">Model:</span> ${d.model}<br />
          <span class="subtitle-yellow">Vehicle Class:</span> ${d.vehicle_class}<br />
          <span class="subtitle-yellow">Length:</span> ${numberWithCommas(d.length)}<br />
          <span class="subtitle-yellow">Max. Atmosphering Speed:</span> ${d.max_atmosphering_speed}<br />
          <span class="subtitle-yellow">Manufacturer:</span> ${d.manufacturer}<br />
          <span class="subtitle-yellow">Crew:</span> ${numberWithCommas(d.crew)}<br />
          <span class="subtitle-yellow">Passengers:</span> ${numberWithCommas(d.passengers)}<br />
          <span class="subtitle-yellow">Cargo Capacity:</span> ${numberWithCommas(d.cargo_capacity)}<br />
          <span class="subtitle-yellow">Consumables:</span> ${d.consumables}<br />
          <span class="subtitle-yellow">Cost (in credits):</span> ${numberWithCommas(d.cost_in_credits)}
        </p>
        <p><button class="item-extend-description">More Details...</button></p>
      </div>
    </div>
    `;
  }).join('');

  toInsert.innerHTML = toInsert.innerHTML + toAppend;
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const clearLargeNav = () => {
  // console.log(`clear large Nav`);
  homeBtn.classList.remove('larger');
  menus.forEach(m => m.classList.remove('larger'));
}

const largeNav = (nav) => {
  // console.log(`add large Nav to "${nav.innerHTML}"`);
  nav.classList.add('larger');
}

function loadPage() {
  const currentPath = location.pathname;
  const currentHash = location.hash;
  const pageToLoad = currentHash.substr(1);

  const validUrl = router.filter(r => {
    return r.path === currentPath && r.name === pageToLoad
  })[0];

  const currentMenu = document.querySelector(`a[href='${currentHash}']`);

  if(validUrl) {
    if(validUrl.name === "") {
      clearLargeNav();
      largeNav(homeBtn);
      hideAllModals();
    } else {
      clearLargeNav();
      showMenu();
      largeNav(currentMenu);
      hideAllModals();
      showModal(validUrl.name);
    }
  } else {
    hideMenu();
    hideAllModals();
    showModal('error404');
  }
}

const hideMenu = () => {
  // console.log(`hide menu`);
  menus.forEach(m => m.style.display = 'none');
}

const showMenu = () => {
  // console.log(`show menu`);
  menus.forEach(m => m.style.display = 'block');
}

const hideAllModals = () => {
  // console.log(`hide all modals`);
  modals.forEach(m => m.classList.remove('modal--is-visible'));
}

const showModal = (modal) => {
  // console.log(`show modal`);
  const modalToOpen = modals.find(m => { return m.id === modal });
  modalToOpen.classList.add('modal--is-visible');
}

initialLoad();
window.addEventListener('load', loadPage);
window.onpopstate = loadPage;

homeBtn.addEventListener('click', () => {
  window.history.pushState({}, "name", `/${baseUrl}`);
  showMenu();
  clearLargeNav();
  largeNav(homeBtn);
  hideAllModals();
});
