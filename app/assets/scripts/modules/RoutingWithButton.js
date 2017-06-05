const modals = Array.from(document.querySelectorAll('.modal'));
const activeRoutes = Array.from(document.querySelectorAll('[route]'));
console.log(modals);

function navigate(e){
  // console.log('hi');

  const currentPath = e.target.attributes[0].value;
  // console.log(currentPath);
  const route = pageRouter.routes.filter(r => {
    return r.path === currentPath;
  })[0];

  if(route) {
    window.history.pushState({}, 'name', route.path);
    modals.forEach(modal => {
      // console.dir(modal);
      if(modal.attributes[0].value === route.name) {
        modal.classList.add('modal--is-visible');
      } else {
        modal.classList.remove('modal--is-visible');
      }
    });
  } else {
    openPage('#error404');
    modals.forEach(modal => {
      modal.classList.remove('modal--is-visible');
    });
  }
  console.log(window.history);
}

activeRoutes.forEach(route => {
  route.addEventListener('click', navigate);
});

const Router = function(name, routes) {
  return {
    name: name,
    routes: routes
  }
};

const pageRouter = new Router('pageRouter', [
  {
    path: '/',
    name: 'root'
  },
  {
    path: '/films',
    name: 'films'
  },
  {
    path: '/people',
    name: 'people'
  },
  {
    path: '/starships',
    name: 'starships'
  }
]);

const currentPath = window.location.pathname;

if(currentPath === '/') {
  modals.forEach(modal => {
    modal.classList.remove('modal--is-visible');
  });
  console.log(window.history);
} else {
  var route = pageRouter.routes.filter(r => {
    return r.path === currentPath;
  })[0];

  if(route) {
    modals.forEach(modal => {
      // console.dir(modal);
      if(modal.attributes[0].value === route.name) {
        modal.classList.add('modal--is-visible');
      } else {
        modal.classList.remove('modal--is-visible');
      }
    });
  } else {
    openPage('#error404');
    modals.forEach(modal => {
      modal.classList.remove('modal--is-visible');
    });
  }
  console.log(window.history);
}
