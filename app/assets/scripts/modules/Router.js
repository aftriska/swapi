class Router {
  constructor() {
    this.name = 'pageRouter';
    this.routes = [
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
    ];
  }
}

export default Router;
