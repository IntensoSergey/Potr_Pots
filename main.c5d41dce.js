parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return s(e)||n(e)||i(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"==typeof e)return r(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function s(e){if(Array.isArray(e))return r(e)}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")});var l=document.querySelector(".form");l.addEventListener("submit",function(e){e.preventDefault(),l.reset()});var o=document.querySelector(".materials__slide"),a=document.getElementsByClassName("slide__list-description"),c=document.getElementsByClassName("slide__list-link");o.addEventListener("click",function(t){t.preventDefault();var i=t.target.closest(".slide__list"),n=t.target.closest(".slide__list-link");if(!n||!o.contains(n))return null;var s=t.target.nextElementSibling,r=i.getAttribute("id")[i.getAttribute("id").length-1];e(c).forEach(function(e){var t=e.href[e.href.length-1];Number(t)!==Number(r)?e.classList.remove("slide__list-link--close"):e.classList.add("slide__list-link--close")}),e(a).forEach(function(e){var t=e.closest(".slide__list").getAttribute("id"),i=t[t.length-1];Number(r)!==Number(i)&&e.classList.remove("slide__list-description--open")}),s.classList.contains("slide__list-description--open")?(n.classList.remove("slide__list-link--close"),s.classList.remove("slide__list-description--open")):(n.classList.add("slide__list-link--close"),s.classList.add("slide__list-description--open"))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c5d41dce.js.map