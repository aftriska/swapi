var openModals = Array.from(document.querySelectorAll('.modal'));

function openPage(modalHash) {
  openModals.forEach(modal => modal.classList.remove('modal--is-visible'));

  if(modalHash !== '') {
    var modal = document.querySelector(modalHash);
    modal.classList.add('modal--is-visible');
  }
}

function navigateHash() {
  var currentHash = location.hash;

  var rHash = pageRouter.routes.filter(r => {
    return r.hash === currentHash;
  })[0];

  (rHash) ? openPage(rHash.hash) : openPage('#error404');
}

window.onhashchange = function() {
  navigateHash();
};

var Router = function(name, routes) {
  return {
    name: name,
    routes: routes
  }
};

var pageRouter = new Router('pageRouter', [
  {
    hash: '',
    name: ''
  },
  {
    hash: '#films',
    name: 'films'
  },
  {
    hash: '#people',
    name: 'people'
  },
  {
    hash: '#starships',
    name: 'starships'
  }
]);

/** Start Part 1: To handle Error when user writes a non-exist hash directly on the browser. **/
navigateHash();
/** End of Part 1 **/
