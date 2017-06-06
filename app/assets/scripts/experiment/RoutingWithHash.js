var openPages = Array.from(document.querySelectorAll('.modal'));

function openPage(pageId) {
  openPages.forEach(page => page.classList.remove('modal--is-visible'));

  // console.log(pageId);
  var modal = document.querySelector(pageId);
  // console.log(modal);
  modal.classList.add('modal--is-visible');
  // console.log(location.hash);
}

window.onhashchange = function() {
  var currentHash = location.hash;
  // console.log(currentHash);

  var route = pageRouter.routes.filter(r => {
    return r.hash === currentHash;
  })[0];

  // console.log(route);

  if(route) {
    if(currentHash !== ''){ openPage(currentHash); }
  } else {
    openPage('#error404');
  }
};

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
    name: 'Root'
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

var currentHash = location.hash;
// console.log(currentHash);

var route = pageRouter.routes.filter(r => {
  return r.hash === currentHash;
})[0];

// console.log(route);

if(route) {
  if(currentHash !== ''){ openPage(currentHash); }
} else {
  openPage('#error404');
}
