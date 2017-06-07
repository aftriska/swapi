import Router from './modules/Router';
import NavigateHash from './modules/NavigateHash';

const appBaseUrl = "";
const menus = document.querySelector('.primary-nav');
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
  }
]);

new NavigateHash(pageRouter, modals, errModul, menus, appBaseUrl);

window.onhashchange = () => {
  new NavigateHash(pageRouter, modals, errModul, menus, appBaseUrl);
};
