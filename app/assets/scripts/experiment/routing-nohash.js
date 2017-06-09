// If using a subfolder as the root of the Single Page Application, set the appBaseUrl to: "/subfolder_name".
// When building the production folder using gulp build task, the gulp destination MUST BE ALSO set to the relevant subfolder.
// For example: var appBaseUrl = "/swapi";
// Add these lines below in the index.html when using buttons as links.
// <li><button route="/films" class="route">Films</button></li>
// <li><button route="/people" class="route">People</button></li>
// <li><button route="/starships" class="route">Starships</button></li>

var appBaseUrl = "";
var openModals = Array.from(document.querySelectorAll('.modal'));
var activeRoutes = Array.from(document.querySelectorAll('[route]'));

window.addEventListener('popstate', navigatePath);

function openPage(modalHash) {
  openModals.forEach(modal => modal.classList.remove('modal--is-visible'));

  if(modalHash !== '') {
    var modal = document.querySelector(modalHash);
    modal.classList.add('modal--is-visible');
  }
}

function navigate(e) {
  var currentPath = e.target.attributes[0].value;

  var rPath = pageRouter.routes.filter(r => {
    return r.path === currentPath;
  })[0];

  if(rPath) {
    window.history.pushState({}, 'name', `${appBaseUrl}${rPath.path}`);
    openPage(rPath.hash);
  } else {
    openPage('#error404');
  }
}

function navigatePath() {
  var currentPath = location.pathname;

  var rPath = pageRouter.routes.filter(r => {
    return `${appBaseUrl}${r.path}` === currentPath;
  })[0];

  (rPath) ? openPage(rPath.hash) : openPage('#error404');
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

navigatePath();
