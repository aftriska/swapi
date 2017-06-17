import Router from './modules/Router';
import NavigatePage from './modules/NavigatePage';
import HomeButton from './modules/HomeButton';
import GetLocalData from './modules/GetLocalData';

let isFetching = false;
const fetchBaseUrl = 'http://swapi.co/api/';
const pageRouter = new Router();
const homeButton = new HomeButton();
const nextPages = JSON.parse(sessionStorage.getItem('nextPages')) || {
  films: `${fetchBaseUrl}films/`,
  people: `${fetchBaseUrl}people/`,
  species: `${fetchBaseUrl}species/`,
  planets: `${fetchBaseUrl}planets/`,
  starships: `${fetchBaseUrl}starships/`,
  vehicles: `${fetchBaseUrl}vehicles/`
};

sessionStorage.setItem('nextPages', JSON.stringify(nextPages));

function setInitialModulContent() {
  const visibleModal = document.querySelector('.modal--is-visible');
  if(!visibleModal) return;

  const rowContent = visibleModal.querySelector(".row");

  if(rowContent.innerHTML === "") {
    console.log(`modul has no content`);
    const toFetch = rowContent.dataset.page;
    console.log(`page to fetch: ${toFetch}`);

    const dataToShow = JSON.parse(sessionStorage.getItem(`${toFetch}`)) || [];
    console.log(`local data for ${toFetch} is:`);
    console.log(dataToShow);

    if(dataToShow.length === 0) {
      console.log(`data not yet exist. the fetch method will start.`);
      // if local storage is empty, means this is the first time we fetched a data (fetching cannot be canceled, so if somehow while fetching, the user click another hash, then this fetch must put the result in the right modul and local Storage, because once user click another hash/url, the visible modul will be changed :( ..... AAARRRGHHHH!!!)
      // fetch data
      // set next page
      // store data to local storage
      // populate data with local storage

      const urlToFetch = nextPages[`${toFetch}`];
      console.log(`urlToFetch: ${urlToFetch}`);

      isFetching = true;
      console.log(`isFetching = ${isFetching}`);

      fetch(urlToFetch)
      .then(blob => blob.json())
      .then(data => {
        // console.log(data);

        nextPages[`${toFetch}`] = data.next;
        sessionStorage.setItem('nextPages', JSON.stringify(nextPages));

        dataToShow.push(...data.results);
        sessionStorage.setItem(`${toFetch}`, JSON.stringify(dataToShow));

        console.log(`now we can insert a content to the modul`);
        showData(toFetch);

        isFetching = false;
        console.log(`isFetching = ${isFetching}`);

        // setNextPage(pageToFetch, data.next);
        // tempResults.length = 0;
        // tempResults.push(...data.results);
        // insertData();
      })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
    } else {
      console.log(`show data from local storage`);
      showData(toFetch);
    }
  } else {
    console.log(`modul has content, there's nothing to do on the page. Use scroll to load more data.`);
  }
}

function showData(toFetch) {
  switch(toFetch) {
    case 'films':
      showFilms();
      break;
    case 'people':
      console.log(`show people`);
      break;
    case 'species':
      console.log(`show species`);
      break;
    case 'planets':
      console.log(`show planets`);
      break;
    case 'starships':
      console.log(`show starships`);
      break;
    case 'vehicles':
      console.log(`show vehicles`);
      break;
  }
}

function showFilms() {
  const toInsert = document.querySelector(`div[data-page=films`);
  console.log(toInsert);
  const filmsData = JSON.parse(sessionStorage.getItem('films'));

  const ordered = filmsData.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
  // console.log(ordered);

  toInsert.innerHTML = ordered.map((data, i) => {
    const d = new Date(data.release_date);
    const newDate = d.toDateString();
    const shortDesc = data.opening_crawl.substr(0,199);
    return `
    <div class="row__large-6">
      <div class="modal__item">
        <p><h4 class="item-top-title">EPISODE ${data.episode_id}</h4></p>
        <p><h3 class="item-title">${data.title}</h3></p>
        <p><span class="subtitle-yellow">Director:</span> ${data.director} <span class="subtitle-yellow">Producer:</span> ${data.producer} <span class="subtitle-yellow">Release Date:</span> ${newDate}</p>
        <p><span class="item-description">${shortDesc}...<button class="item-extend-description">...more</button>
        <p><span class="subtitle-yellow">In the film:<span></p>
        <div class="item-details"><button>Characters</button> <button>Planets</button><button>Starships</button><button>Vehicles</button><button>Species</button></div>
        </p>
      </div>
    </div>
    `;
  }).join('');
}

function animateModulItems(toFetch) {
  const modalItems = Array.from(document.querySelector(`div[data-page=${toFetch}]`).querySelectorAll('.modal__item'));

  console.log(modalItems);

  modalItems.forEach(item => item.classList.add('modal__item--inserted'));
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
  const pageToLoad = new NavigatePage(pageRouter);
  setInitialModulContent();
  setLoadOnScroll();
}

window.addEventListener('scroll', debounce(checkBottom));

function setLoadOnScroll() {
  const visibleModal = document.querySelector('.modal--is-visible');
  if(visibleModal) {
    visibleModal.addEventListener('scroll', debounce(checkBottom));
  }
}

function debounce(func, wait = 10, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
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
  const modulBottom = e.target.scrollTop + e.target.offsetHeight;
  if(modulBottom >= e.target.scrollHeight) {
    console.log("bottom reached");
    // if isLoading is true, then do nothing (as the current fetch event is still occuring)
    if(isFetching === false) {
      // if nextPage is not null: fetch new data.
      const nextPage = nextPages[`${e.target.id}`];
      if(nextPage !== null) {
        isFetching = true; // while fetching data, we pause every event on when the bottom of the page reached if user plays with the scrolling.
        console.log(`fetching data...`);
        // fetch data
        // set next page
        // store data to local storage
        // populate data with local storage
      }
    }
  }
}
