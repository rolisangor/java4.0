!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/index.js")}({"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,n){window.addEventListener("DOMContentLoaded",function(){"use strict";let e=n(/*! ./parts/tabs.js */"./src/parts/tabs.js"),t=n(/*! ./parts/timer.js */"./src/parts/timer.js"),r=n(/*! ./parts/modal.js */"./src/parts/modal.js"),o=n(/*! ./parts/form.js */"./src/parts/form.js"),s=n(/*! ./parts/slider.js */"./src/parts/slider.js"),c=n(/*! ./parts/calc.js */"./src/parts/calc.js");e(),t(),r(),o(),s(),c()})},"./src/parts/calc.js":
/*!***************************!*\
  !*** ./src/parts/calc.js ***!
  \***************************/
/*! no static exports found */function(e,t){e.exports=function(){let e=document.querySelectorAll(".counter-block-input")[0],t=document.querySelectorAll(".counter-block-input")[1],n=document.getElementById("select"),r=document.getElementById("total"),o=0,s=0,c=0;r.innerHTML=0,e.addEventListener("change",function(){o=+this.value,c=4e3*(s+o),""==t.value||""==e.value?r.innerHTML=0:r.innerHTML=c}),e.addEventListener("keypress",function(e){let t=e.keyCode;(t<48||t>57||47===t)&&e.preventDefault()}),t.addEventListener("change",function(){s=+this.value,c=4e3*(s+o),""==t.value||""==e.value?r.innerHTML=0:r.innerHTML=c}),t.addEventListener("keypress",function(e){let t=e.keyCode;(t<47||t>57)&&e.preventDefault()}),n.addEventListener("change",function(){if(""==t.value||""==e.value)r.innerHTML=0;else{let e=c;r.innerHTML=e*this.options[this.selectedIndex].value}})}},"./src/parts/form.js":
/*!***************************!*\
  !*** ./src/parts/form.js ***!
  \***************************/
/*! no static exports found */function(e,t){let n={loading:"Загрузка...",success:"Спасибо! Скоро мы с вами свяжемся!",failure:"Что-то пошло не так..."},r=document.querySelector(".main-form"),o=r.getElementsByTagName("input")[0],s=document.createElement("div"),c=document.querySelectorAll("input");s.classList.add("status"),o.addEventListener("keypress",function(e){let t=e.keyCode;(43!=t&&t<47||t>57)&&e.preventDefault()});let l=document.querySelector(".contact-form").getElementsByTagName("form")[0];function i(e){e.addEventListener("submit",function(t){t.preventDefault(),e.appendChild(s);let r=new FormData(e);new Promise(function(e,t){let n=new XMLHttpRequest;n.open("POST","server.php"),n.setRequestHeader("Content-Type","application/json; charset=utf-8");let o={};r.forEach(function(e,t){o[t]=e});let s=JSON.stringify(o);n.send(s),n.addEventListener("readystatechange",function(){n.readyState<4?e():4===n.readyState&&200==n.status?e():t()})}).then(()=>s.innerHTML=n.loading).then(()=>s.innerHTML=n.success).catch(()=>s.innerHTML=n.failure).then(function(){for(let e=0;e<c.length;e++)c[e].value=""})})}l.getElementsByTagName("input")[1].addEventListener("keypress",function(e){let t=e.keyCode;(43!=t&&t<47||t>57)&&e.preventDefault()}),i(r),i(l),e.exports=r},"./src/parts/modal.js":
/*!****************************!*\
  !*** ./src/parts/modal.js ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=function(){let e=document.getElementsByClassName("more"),t=document.querySelector(".overlay"),n=document.querySelector(".popup-close"),r=document.getElementsByClassName("description-btn");for(let e=0;e<r.length;e++)r[e].classList.add("more");for(let r=0;r<e.length;r++)e[r].addEventListener("click",function(){t.style.display="block",this.classList.add("more-splash")}),n.addEventListener("click",function(){t.style.display="none",e[r].classList.remove("more-splash")})}},"./src/parts/slider.js":
/*!*****************************!*\
  !*** ./src/parts/slider.js ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=function(){let e=1,t=document.querySelectorAll(".slider-item"),n=document.querySelector(".prev"),r=document.querySelector(".next"),o=document.querySelector(".slider-dots"),s=document.querySelectorAll(".dot");function c(n){n>t.length&&(e=1),n<1&&(e=t.length),t.forEach(e=>e.style.display="none"),s.forEach(e=>e.classList.remove("dot-active")),t[e-1].style.display="block",s[e-1].classList.add("dot-active")}function l(t){c(e+=t)}function i(t){c(e=t)}c(e),n.addEventListener("click",function(){l(-1)}),r.addEventListener("click",function(){l(1)}),o.addEventListener("click",function(e){for(let t=0;t<s.length+1;t++)e.target.classList.contains("dot")&&e.target==s[t-1]&&i(t)})}},"./src/parts/tabs.js":
/*!***************************!*\
  !*** ./src/parts/tabs.js ***!
  \***************************/
/*! no static exports found */function(e,t){e.exports=function(){let e=document.querySelectorAll(".info-header-tab"),t=document.querySelector(".info-header"),n=document.querySelectorAll(".info-tabcontent"),r=e=>{for(let t=e;t<n.length;t++)n[t].classList.remove("show"),n[t].classList.add("hide")};r(1);let o=e=>{n[e].classList.contains("hide")&&(n[e].classList.remove("hide"),n[e].classList.add("show"))};t.addEventListener("click",function(t){let n=t.target;if(n&&n.classList.contains("info-header-tab"))for(let t=0;t<e.length;t++)if(n==e[t]){r(0),o(t);break}})}},"./src/parts/timer.js":
/*!****************************!*\
  !*** ./src/parts/timer.js ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=function(){let e=e=>{let t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60);return{total:t,hours:Math.floor(t/36e5),minutes:r,seconds:n}};((t,n)=>{let r=document.getElementById(t),o=r.querySelector(".hours"),s=r.querySelector(".minutes"),c=r.querySelector(".seconds"),l=setInterval(function(){function t(e){return e<10?"0"+e:e}let r=e(n);o.textContent=t(r.hours),s.textContent=t(r.minutes),c.textContent=t(r.seconds),r.total<=0&&(clearInterval(l),o.textContent=t(0),s.textContent=t(0),c.textContent=t(0))},1e3)})("timer","2018-10-21")}}});