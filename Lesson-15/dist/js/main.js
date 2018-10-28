/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc () {
   let persons = document.querySelectorAll('.counter-block-input')[0],
            restDays =document.querySelectorAll('.counter-block-input')[1],
            place = document.getElementById('place'),
            totalValue = document.getElementById('total'),
            personsSum = 0,
            daysSum = 0,
            total = 0;

            totalValue.innerHTML = 0;

            persons.addEventListener('change', function() {
                personsSum = +this.value;
                total = (daysSum + personsSum) * 4000;

                if(restDays.value == '' || persons.value == '') {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }
            });

            persons.addEventListener('keypress', function (e) {
                let key = e.keyCode;

                if (key < 47 || key > 57) {
                    e.preventDefault();

                }
            });

            restDays.addEventListener('change', function() {

                daysSum = +this.value;
                total = (daysSum + personsSum) * 4000;

                if(restDays.value == '' || persons.value == '') {
                    totalValue.innerHTML = 0;
                } else {
                    totalValue.innerHTML = total;
                }
            });

            restDays.addEventListener('keypress', function (e) {
                let key = e.keyCode;

                if (key < 47 || key > 57) {
                    e.preventDefault();

                }
            });

            place.addEventListener('change', function() {
                if(restDays.value == '' || persons.value == '') {
                    totalValue.innerHTML = 0;
                } else {
                    let a = total;
                    totalValue.innerHTML = a * this.options[this.selectedIndex].value;
                }
            });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form () {
   let message = {
      loading: "Загрузка...",
      success: "Спасибо! Скоро мы с вами свяжемся!",
      failure: "Что-то пошло не так..."
  };

  let form = document.querySelector('.main-form'),
      input = form.getElementsByTagName('input')[0],
      statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

  input.addEventListener('keypress', function (e) {
      let key = e.keyCode;
      if (key != 43 && key < 47 || key > 57) {
          e.preventDefault();

      }
  });

  let formContainer = document.querySelector('.contact-form'),
      contactForm = formContainer.getElementsByTagName('form')[0],
      contactInput = contactForm.getElementsByTagName('input');

  contactInput[1].addEventListener('keypress', function (e) {
      let key = e.keyCode;
      if (key != 43 && key < 47 || key > 57) {
          e.preventDefault();

      }
  });


  function sendForm(item) {

      item.addEventListener('submit', function (event) {
          event.preventDefault();
          item.appendChild(statusMessage);

          let formData = new FormData(item);

          function postData(data) {
              return new Promise(function (resolve, reject) {
                  let request = new XMLHttpRequest();
                  request.open('POST', 'server.php');
                  request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');



                  let obj = {};
                  formData.forEach(function (value, key) {
                      obj[key] = value;
                  });

                  let json = JSON.stringify(obj);
                  request.send(json);

                  request.addEventListener('readystatechange', function () {
                      if (request.readyState < 4) {
                          resolve();
                      } else if (request.readyState === 4 && request.status == 200) {
                          resolve();
                      } else {
                          reject();
                      }
                  });
              });



          }
          function clear() {
              for (let i = 0; i < input.length; i++) {
                  input[i].value = '';
              }
          }

          postData(formData)
              .then(() => (statusMessage.innerHTML = message.loading))
              .then(() => (statusMessage.innerHTML = message.success))
              .catch(() => (statusMessage.innerHTML = message.failure))
              .then(clear);


      });
  }

  sendForm(form);
  sendForm(contactForm);

}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
   let more = document.getElementsByClassName('more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            tabBtn = document.getElementsByClassName('description-btn');
        
    
            for (let i = 0; i < tabBtn.length; i++) {
                tabBtn[i].classList.add('more');
            }
    
            for(let i = 0; i < more.length; i++) {
                more[i].addEventListener('click', function() {
                    overlay.style.display = 'block';
                    this.classList.add('more-splash');
                });
            
                close.addEventListener('click', function() {
                    overlay.style.display = 'none';
                    more[i].classList.remove('more-splash');
                });
            }
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider () {
   let slideIndex = 1,
   slides = document.querySelectorAll('.slider-item'),
   prev = document.querySelector('.prev'),
   next = document.querySelector('.next'),
   dotsWrap = document.querySelector('.slider-dots'),
   dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides (n) {

   if(n > slides.length) {
       slideIndex = 1;
   }
   if(n < 1) {
       slideIndex = slides.length;
   }

   slides.forEach((item) => item.style.display = 'none');
   // for(let i = 0; i < slides.length; i++) {
   //     slides[i].style.display = 'none';
   // }
   dots.forEach((item) => item.classList.remove('dot-active'));
   // for(let i = 0; i < dots.length; i++) {
   //     dots[i].classList.remove('dot-active');
   // }

   slides[slideIndex - 1].style.display = 'block';
   dots[slideIndex - 1].classList.add('dot-active');
}    

function plusSlides(n) {
   showSlides(slideIndex += n);
}
function currentSlide(n) {
   showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
   plusSlides(-1);
});

next.addEventListener('click', function() {
   plusSlides(1);
});

dotsWrap.addEventListener('click', function(event) {
   for(let i = 0; i < dots.length + 1; i++){
       if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
           currentSlide(i);
       }
   }
});
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs () {
   let tab = document.querySelectorAll('.info-header-tab'),  //  <==  Название класса табов
            info = document.querySelector('.info-header'),   //  <==  Название класса родителя  для табов  или ID
            tabContent = document.querySelectorAll('.info-tabcontent'); //  <==  Название классов для блока информации
    
    
        let hideTabContent = (a) => {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');   
                tabContent[i].classList.add('hide');
            }
        };
    
    
        hideTabContent(1);
    
        let showTabContent = (b) => {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        };
    
    
        info.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {  //  <==  Название класса табов
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContent(i);
                        break;
                    }
                }
            }
        });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer () {
   let deadline = '2018-10-21';
    
        let getTimeRemaining = (endtime) => {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60))); 
                
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
                
            
        };
    
        let setClock = (id, endtime) => {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);
    
            function updateClock() {
    
                function addZero(n) {
                    if (n < 10) {
                        return '0' + n;
                    } 
                    else {
                        return n;
                    }
                }
    
                let t = getTimeRemaining(endtime);
    
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
    
                    if(t.total <= 0) {
                        clearInterval(timeInterval);
    
                        hours.textContent = addZero(0);
                        minutes.textContent = addZero(0);
                        seconds.textContent = addZero(0);
                    }
            }
        };
    
        setClock('timer', deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    "use strict";
    
     let tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
         timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
         modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
         form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
         slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js"),
         calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");

         tabs();
         timer();
         modal();
         form();
         slider();
         calc();
    });

/***/ })

/******/ });
//# sourceMappingURL=main.js.map