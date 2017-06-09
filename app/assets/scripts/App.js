import Router from './modules/Router';
import NavigateHash from './modules/NavigateHash';

const appBaseUrl = "";
const menus = Array.from(document.querySelectorAll('.route'));
const rootMenu = document.querySelector(".route-root");
const modals = Array.from(document.querySelectorAll('.modal'));
const errModul = 'error404';

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

new NavigateHash(pageRouter, modals, errModul, menus, rootMenu, appBaseUrl);

window.onhashchange = () => {
  new NavigateHash(pageRouter, modals, errModul, menus, rootMenu, appBaseUrl);
};
