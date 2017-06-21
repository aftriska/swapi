!function(e){function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}var n={};s.m=e,s.c=n,s.i=function(e){return e},s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},s.p="",s(s.s=0)}([function(e,s,n){"use strict";function t(e){if(Array.isArray(e)){for(var s=0,n=Array(e.length);s<e.length;s++)n[s]=e[s];return n}return Array.from(e)}function a(){var e=location.pathname,s=location.hash,n=s.substr(1),t=r.filter(function(s){return""+i+s.path===e&&s.name===n})[0],a=document.querySelector("a[href='"+s+"']");t?""===t.name?(M(),x(u),D(),E("homePage")):(M(),P(),x(a),D(),E(t.name)):(C(),D(),E("error404"))}var l=!1,i="/swapi",r=[{path:"/",name:""},{path:"/",name:"films"},{path:"/",name:"people"},{path:"/",name:"species"},{path:"/",name:"planets"},{path:"/",name:"starships"},{path:"/",name:"vehicles"}],o=r.slice(1),p=Array.from(document.querySelectorAll(".route")),c=Array.from(document.querySelectorAll(".modal")),u=document.querySelector("[name=route]"),d=document.querySelector(".spinner"),m=JSON.parse(sessionStorage.getItem("nextPages"))||{},b=function(){d.classList.add("spinner--is-visible")},g=function(){d.classList.remove("spinner--is-visible")},f=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},h=function(e){var s=document.querySelector("div[data-page=films"),n=e.sort(function(e,s){return e.release_date>s.release_date?1:-1});s.innerHTML=n.map(function(e,s){var n=new Date(e.release_date).toDateString(),t=e.opening_crawl.substr(0,199);return'\n    <div class="row__large-6">\n      <div class="modal__item">\n        <p><h4 class="item-top-title">EPISODE '+e.episode_id+'</h4></p>\n        <p><h3 class="item-title">'+e.title+'</h3></p>\n        <p><span class="subtitle-yellow">Director:</span> '+e.director+' <span class="subtitle-yellow">Producer:</span> '+e.producer+' <span class="subtitle-yellow">Release Date:</span> '+n+'</p>\n        <p><span class="item-description">'+t+'...</p>\n        <p><button class="item-extend-description">More Details...</button></p>\n      </div>\n    </div>\n    '}).join("")},y=function(e){document.querySelector("div[data-page=people").innerHTML=e.map(function(e,s){return'\n    <div class="row__large-4">\n      <div class="modal__item">\n        <p><em>'+(s+1)+'</em></p>\n        <p><h4 class="item-top-title">'+e.name+'</h4></p>\n        <p>\n          <span class="subtitle-yellow">Birth Year:</span> '+e.birth_year+'<br />\n          <span class="subtitle-yellow">Gender:</span> '+e.gender+'<br />\n          <span class="subtitle-yellow">Height:</span> '+e.height+' <span class="subtitle-yellow">Mass:</span> '+e.mass+'<br />\n          <span class="subtitle-yellow">Eye Color:</span> '+e.eye_color+' <span class="subtitle-yellow">Hair Color:</span> '+e.hair_color+'<br />\n          <span class="subtitle-yellow">Skin Color:</span> '+e.skin_color+'\n        </p>\n        <p><button class="item-extend-description">More Details..</button></p>\n      </div>\n    </div>\n    '}).join("")},w=function(e){document.querySelector("div[data-page=species").innerHTML=e.map(function(e,s){return'\n    <div class="row__large-4">\n      <div class="modal__item">\n        <p><em>'+(s+1)+'</em></p>\n        <p><h4 class="item-top-title">'+e.name+'</h4></p>\n        <p>\n          <span class="subtitle-yellow">Language:</span> '+e.language+'<br />\n          <span class="subtitle-yellow">Classification:</span> '+e.classification+'<br />\n          <span class="subtitle-yellow">Designation:</span> '+e.designation+'<br />\n          <span class="subtitle-yellow">Avg Height:</span> '+e.average_height+'<br />\n          <span class="subtitle-yellow">Avg Lifespan:</span> '+e.average_lifespan+'<br />\n          <span class="subtitle-yellow">Eye Colors:</span> '+e.eye_colors+'<br />\n          <span class="subtitle-yellow">Hair Colors:</span> '+e.hair_colors+'<br />\n          <span class="subtitle-yellow">Skin Colors:</span> '+e.skin_colors+'\n        </p>\n        <p><button class="item-extend-description">More Details...</button></p>\n      </div>\n    </div>\n    '}).join("")},v=function(e){document.querySelector("div[data-page=planets").innerHTML=e.map(function(e,s){return'\n    <div class="row__large-4">\n      <div class="modal__item">\n        <p><em>'+(s+1)+'</em></p>\n        <p><h4 class="item-top-title">'+e.name+'</h4></p>\n        <p>\n          <span class="subtitle-yellow">Diameter:</span> '+e.diameter+'<br />\n          <span class="subtitle-yellow">Orbital Period:</span> '+e.orbital_period+'<br />\n          <span class="subtitle-yellow">Rotation Period:</span> '+e.rotation_period+'<br />\n          <span class="subtitle-yellow">Surface Water:</span> '+e.surface_water+'<br />\n          <span class="subtitle-yellow">Terrain:</span> '+e.terrain+'<br />\n          <span class="subtitle-yellow">Climate:</span> '+e.climate+'<br />\n          <span class="subtitle-yellow">Gravity:</span> '+e.gravity+'<br />\n          <span class="subtitle-yellow">Population:</span> '+f(e.population)+'<br />\n        </p>\n        <p><button class="item-extend-description">More Details...</button></p>\n      </div>\n    </div>\n    '}).join("")},_=function(e){document.querySelector("div[data-page=starships").innerHTML=e.map(function(e,s){return'\n    <div class="row__large-4">\n      <div class="modal__item">\n        <p><em>'+(s+1)+'</em></p>\n        <p><h4 class="item-top-title">'+e.name+'</h4></p>\n        <p>\n          <span class="subtitle-yellow">Model:</span> '+e.model+'<br />\n          <span class="subtitle-yellow">Starship Class:</span> '+e.starship_class+'<br />\n          <span class="subtitle-yellow">Length:</span> '+f(e.length)+'<br />\n          <span class="subtitle-yellow">MGLT:</span> '+e.mglt+'<br />\n          <span class="subtitle-yellow">Hyperdrive Rating:</span> '+e.hyperdrive_rating+'<br />\n          <span class="subtitle-yellow">Max. Atmosphering Speed:</span> '+e.max_atmosphering_speed+'<br />\n          <span class="subtitle-yellow">Manufacturer:</span> '+e.manufacturer+'<br />\n          <span class="subtitle-yellow">Crew:</span> '+f(e.crew)+'<br />\n          <span class="subtitle-yellow">Passengers:</span> '+f(e.passengers)+'<br />\n          <span class="subtitle-yellow">Cargo Capacity:</span> '+f(e.cargo_capacity)+'<br />\n          <span class="subtitle-yellow">Consumables:</span> '+e.consumables+'<br />\n          <span class="subtitle-yellow">Cost (in credits):</span> '+f(e.cost_in_credits)+'\n        </p>\n        <p><button class="item-extend-description">More Details...</button></p>\n      </div>\n    </div>\n    '}).join("")},S=function(e){document.querySelector("div[data-page=vehicles").innerHTML=e.map(function(e,s){return'\n    <div class="row__large-4">\n      <div class="modal__item">\n        <p><em>'+(s+1)+'</em></p>\n        <p><h4 class="item-top-title">'+e.name+'</h4></p>\n        <p>\n          <span class="subtitle-yellow">Model:</span> '+e.model+'<br />\n          <span class="subtitle-yellow">Vehicle Class:</span> '+e.vehicle_class+'<br />\n          <span class="subtitle-yellow">Length:</span> '+f(e.length)+'<br />\n          <span class="subtitle-yellow">Max. Atmosphering Speed:</span> '+e.max_atmosphering_speed+'<br />\n          <span class="subtitle-yellow">Manufacturer:</span> '+e.manufacturer+'<br />\n          <span class="subtitle-yellow">Crew:</span> '+f(e.crew)+'<br />\n          <span class="subtitle-yellow">Passengers:</span> '+f(e.passengers)+'<br />\n          <span class="subtitle-yellow">Cargo Capacity:</span> '+f(e.cargo_capacity)+'<br />\n          <span class="subtitle-yellow">Consumables:</span> '+e.consumables+'<br />\n          <span class="subtitle-yellow">Cost (in credits):</span> '+f(e.cost_in_credits)+'\n        </p>\n        <p><button class="item-extend-description">More Details...</button></p>\n      </div>\n    </div>\n    '}).join("")},L=function(e){var s=JSON.parse(sessionStorage.getItem(""+e));switch(e){case"films":h(s);break;case"people":y(s);break;case"species":w(s);break;case"planets":v(s);break;case"starships":_(s);break;case"vehicles":S(s)}},M=function(){u.classList.remove("larger"),p.forEach(function(e){return e.classList.remove("larger")})},x=function(e){e.classList.add("larger")},C=function(){p.forEach(function(e){return e.style.display="none"})},P=function(){p.forEach(function(e){return e.style.display="block"})},D=function(){c.forEach(function(e){return e.classList.remove("modal--is-visible")})},E=function(e){c.find(function(s){return s.id===e}).classList.add("modal--is-visible")},H=function(e){var s,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(){var a=this,l=arguments,i=function(){s=null,t||e.apply(a,l)},r=t&&!s;clearTimeout(s),s=setTimeout(i,n),r&&e.apply(a,l)}},O=function(e){if(e.target.scrollTop+e.target.offsetHeight>=e.target.scrollHeight&&(console.log("modal's bottom reached"),!1===l)){var s=m[""+e.target.id],n=JSON.parse(sessionStorage.getItem(""+e.target.id));console.log("Url to fetch is "+s),null!==s&&(l=!0,b(),fetch(s).then(function(e){return e.json()}).then(function(s){m[""+e.target.id]=s.next,n.push.apply(n,t(s.results)),sessionStorage.setItem("nextPages",JSON.stringify(m)),sessionStorage.setItem(""+e.target.id,JSON.stringify(n)),L(e.target.id),l=!1,g()}).catch(function(e){console.log("There has been a problem with your fetch operation: "+e.message)}))}};!function(){E("homePage"),o.forEach(function(e){var s="http://swapi.co/api/"+e.name+"/",n=JSON.parse(sessionStorage.getItem(""+e.name))||[];0===n.length?(b(),fetch(s).then(function(e){return e.json()}).then(function(s){m[""+e.name]=s.next,n.push.apply(n,t(s.results)),sessionStorage.setItem("nextPages",JSON.stringify(m)),sessionStorage.setItem(""+e.name,JSON.stringify(n)),L(e.name),g()}).catch(function(e){console.log("There has been a problem with your fetch operation: "+e.message)})):L(e.name)})}(),window.addEventListener("load",a),window.onpopstate=a,c.forEach(function(e){e.addEventListener("scroll",H(O))}),u.addEventListener("click",function(){window.history.pushState({},"name",i+"/"),P(),M(),x(u),D(),E("homePage")})}]);