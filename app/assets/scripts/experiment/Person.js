// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
//
// const cities = [];
//
// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data));

// const directories = [];
//
// const filmOne = fetchData('http://swapi.co/api/films/1/');
// const filmTwo = fetchData('http://swapi.co/api/films/2/');
//
// function fetchData(swapiUrl) {
//   fetch(swapiUrl)
//     .then(blob => blob.json())
//     .then(data => directories.push(data));
// }

class Person {
  constructor(param1, param2) {
    this.name = param1;
    this.age = param2;
  }

  greet() {
    console.log(`Param1 is ${this.name} and Param2 is ${this.age}.`);
  }
}

export default Person;

//
// var routesArray = [{
//   films: 'http://swapi.co/api/films/',
//   people: 'http://swapi.co/api/people/',
//   starships: 'http://swapi.co/api/starships/',
//   planets: 'http://swapi.co/api/planets/'
// }];
//
// // console.log(routesArray[0]);
//
// var routes = routesArray[0];
//
// var result = Object.keys(routes).map(function(e) {
//   return [String(e), routes[e]];
// });
//
// // console.log(Object.keys(routes));
// // console.log(result);
//
// var myRoutesArray = [];
//
// function createRouteArray(result) {
//   result.map(e => {
//     const route = {
//       name: e[0],
//       swapiUrl: e[1]
//     };
//     myRoutesArray.push(route);
//   });
// }
//
// createRouteArray(result)
//
// console.log(myRoutesArray);
