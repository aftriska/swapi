!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.btn=document.querySelector("[name=route]"),this.bUrl="/swapi/",this.modals=Array.from(document.querySelectorAll(".modal")),this.menus=Array.from(document.querySelectorAll(".route")),this.events()}return a(e,[{key:"events",value:function(){this.btn.addEventListener("click",this.clearPage.bind(this))}},{key:"clearPage",value:function(){window.history.pushState({},"name",this.bUrl),this.menus.forEach(function(e){return e.style.display="block"}),this.modals.forEach(function(e){return e.classList.remove("modal--is-visible")})}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.router=t,this.bUrl="/swapi",this.modals=Array.from(document.querySelectorAll(".modal")),this.menus=Array.from(document.querySelectorAll(".route")),this.currPath=location.pathname,this.currHash=location.hash,this.errHash="error404",this.navigate()}return a(e,[{key:"navigate",value:function(){var e=this;this.menus.forEach(function(e){return e.style.display="block"});var t=this.router.routes.filter(function(t){return""+e.bUrl+t.path===e.currPath})[0],n=this.router.routes.filter(function(t){return t.hash===e.currHash})[0];t?n?"root"!==n.name?this.openPage(n.name):this.hideModuls():this.openPage(this.errHash):(this.menus.forEach(function(e){return e.style.display="none"}),this.openPage(this.errHash))}},{key:"openPage",value:function(e){this.hideModuls(),this.modals.find(function(t){return t.attributes[0].value===e}).classList.add("modal--is-visible")}},{key:"hideModuls",value:function(){this.modals.forEach(function(e){return e.classList.remove("modal--is-visible")})}}]),e}();t.default=o},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function e(t,n){r(this,e),this.name=t,this.routes=n};t.default=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var a=r(n(2)),o=r(n(1)),i=r(n(0)),s=new a.default("pageRouter",[{hash:"",name:"root",path:"/"},{hash:"#films",name:"films",path:"/#films"},{hash:"#people",name:"people",path:"/#people"},{hash:"#starships",name:"starships",path:"/#starships"},{hash:"#species",name:"species",path:"/#species"},{hash:"#planets",name:"planets",path:"/#planets"},{hash:"#vehicles",name:"vehicles",path:"/#vehicles"}]);new o.default(s),window.onhashchange=function(){new o.default(s)},window.onpopstate=function(){new o.default(s)};new i.default}]);