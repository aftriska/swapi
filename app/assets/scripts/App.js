import Router from './modules/Router';
import NavigatePage from './modules/NavigatePage';
import HomeButton from './modules/HomeButton';
import GetLocalData from './modules/GetLocalData';

const pageRouter = new Router();
const homeButton = new HomeButton();
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

window.addEventListener('load', () => {
  new NavigatePage(pageRouter);
  // setNextPages();
  manipulateModal();
});

window.onpopstate = () => {
  new NavigatePage(pageRouter);
  // setNextPages();
  manipulateModal();
};

function manipulateModal() {
  const openedModal = document.querySelector('.modal--is-visible');
  if(openedModal) {
    // console.log(openedModal.style.getPropertyValue('height'));
    openedModal.addEventListener('scroll', debounce(checkSlide));
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

function checkSlide(e) {
  // console.log(e);
  // console.log(`e.target.offsetHeight: ${e.target.offsetHeight}`);
  // console.log(e.target.scrollTop);
  // console.log(e.target.scrollHeight);

  const modulBottom = e.target.scrollTop + e.target.offsetHeight;
  // console.log(`modulBottom: ${modulBottom}`);

  if(modulBottom >= e.target.scrollHeight) {
    console.log("bottom reached");
  }
}
