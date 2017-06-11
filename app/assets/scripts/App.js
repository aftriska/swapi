import Router from './modules/Router';
import NavigateHash from './modules/NavigateHash';
import HomeButton from './modules/HomeButton';

const pageRouter = new Router('pageRouter', [
  {
    hash: '',
    name: 'root',
    path: '/'
  },
  {
    hash: '#films',
    name: 'films',
    path: '/#films'
  },
  {
    hash: '#people',
    name: 'people',
    path: '/#people'
  },
  {
    hash: '#starships',
    name: 'starships',
    path: '/#starships'
  },
  {
    hash: '#species',
    name: 'species',
    path: '/#species'
  },
  {
    hash: '#planets',
    name: 'planets',
    path: '/#planets'
  },
  {
    hash: '#vehicles',
    name: 'vehicles',
    path: '/#vehicles'
  }
]);

new NavigateHash(pageRouter);

window.onhashchange = () => {
  new NavigateHash(pageRouter);
};

window.onpopstate = () => {
  new NavigateHash(pageRouter);
};

const homeButton = new HomeButton();
