// import RevealOnClick from './modules/RevealOnClick';
//
// new RevealOnClick('films');
// new RevealOnClick('people');
// new RevealOnClick('starships');

// console.log(location.hash);
// to build for local prod server with routing stick to the subfolder, set the base url to the name of the subfolder. ALSO change the folder destination in the gulp build task to the relevant subfolder.
// var appBaseUrl = "/swapi";
var appBaseUrl = "";
var openModals = Array.from(document.querySelectorAll('.modal'));
var activeRoutes = Array.from(document.querySelectorAll('[route]'));
// console.log(activeRoutes);

window.addEventListener('popstate', navigateOnPop);

function openPage(modalHash) {

  openModals.forEach(modal => modal.classList.remove('modal--is-visible'));

  // console.log(pageId);
  if(modalHash !== '') {
    var modal = document.querySelector(modalHash);
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
  console.log(`on clicked button: ${currentPath}`);

  var rPath = pageRouter.routes.filter(r => {
    return r.path === currentPath;
  })[0];

  if(rPath) {
    window.history.pushState({}, 'name', `${appBaseUrl}${rPath.path}`);
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
  console.log(`on popstate: ${currentPath}`);

  var rPath = pageRouter.routes.filter(r => {
    return `${appBaseUrl}${r.path}` === currentPath;
  })[0];

  if(rPath) {
    var route = rPath.hash;
    // console.log(`on popstate: ${route}`);
    openPage(route);
  } else {
    openPage('#error404');
  }
}

activeRoutes.forEach(function(activeRoute) {
  activeRoute.addEventListener('click', navigate, false);
});

var Router = function(name, routes) {
  return {
    name: name,
    routes: routes
  }
};

//step 3: create a list of routes
var pageRouter = new Router('pageRouter', [
  {
    hash: '',
    path: '/'
  },
  {
    hash: '#films',
    path: '/films'
  },
  {
    hash: '#people',
    path: '/people'
  },
  {
    hash: '#starships',
    path: '/starships'
  }
]);

// var currentHash = location.hash;
// console.log(currentHash);

var currentPath = location.pathname;
console.log(`on page load: ${currentPath}`);

// var rHash = pageRouter.routes.filter(r => {
//   return r.hash === currentHash;
// })[0];

var rPath = pageRouter.routes.filter(r => {
  return `${appBaseUrl}${r.path}` === currentPath;
})[0];

console.log(rPath);

// if(rHash) {
//   if(currentHash !== ''){ openPage(currentHash); }
// } else {
//   openPage('#error404');
// }

if(rPath) {
  var route = rPath.hash;
  console.log(`on page load: ${route}`);
  openPage(route);
} else {
  openPage('#error404');
}
