require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var s=e[n]=new t.Module(n);r[n][0].call(s.exports,i,s,s.exports)}return e[n].exports}function o(r){this.id=r,this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.isParcelRequire=!0,t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({5:[function(require,module,exports) {

},{}],1:[function(require,module,exports) {
"use strict";require("flexboxgrid"),require("./styles/styles.scss"),document.write("JS's connected !");var e=document.querySelector(".header_menu_burger"),t=document.querySelector(".header_menu_overlay");e.addEventListener("click",function(){t.classList.toggle("is-active")});var c=document.getElementById("audio"),a=document.querySelector(".header_music"),r=document.querySelector(".header_music_before"),s=document.querySelector(".header_music_after");a.addEventListener("click",function(){!1===c.muted?c.muted=!0:c.muted=!1,s.classList.toggle("pulse"),r.classList.toggle("pulse")});var u=document.querySelector(".header_language_en"),l=document.querySelector(".header_language_kr");u.addEventListener("click",function(){u.classList.toggle("language-active"),l.classList.toggle("language-active")}),l.addEventListener("click",function(){u.classList.toggle("language-active"),l.classList.toggle("language-active")});
},{"flexboxgrid":5,"./styles/styles.scss":5}]},{},[1])