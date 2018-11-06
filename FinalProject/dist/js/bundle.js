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

/***/ "./src/js/parts/decoration_tabs.js":
/*!*****************************************!*\
  !*** ./src/js/parts/decoration_tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function decorationTabs () {

   let decorationTabsBox = document.querySelector('.decoration_slider'),
       decorationTabContent = document.querySelectorAll('.tab-content'),
       decorationItem = document.querySelectorAll('.decoration_item'),
       tabActive = document.querySelectorAll('.no_click'),
       tabLink = decorationTabsBox.getElementsByTagName('a');

       function hideTabContent(a) {
         for(let i = a; i < decorationTabContent.length; i++) {
            decorationTabContent[i].style.display = 'none';
            tabActive[i].classList.remove('after_click');          
         }
      }
      hideTabContent(1);

      function showTabContent(b) {
         if(decorationTabContent[b].style.display == 'none') {
            decorationTabContent[b].style.display = 'flex';
            tabActive[b].classList.add('after_click');        
         }
       }

       decorationTabsBox.addEventListener('click', (event) => {
         let target = event.target;
         
            for(let i = 0; i < tabActive.length; i++) {
               showTabContent(i);
               if (target == tabActive[i] || target == tabLink[i] || target == decorationItem[i]) {
                  hideTabContent(0);
                  showTabContent(i);
                  break;
               } else {
                  hideTabContent(0);
                  showTabContent(i);
               }
            }
      });  
}

module.exports = decorationTabs

/***/ }),

/***/ "./src/js/parts/images.js":
/*!********************************!*\
  !*** ./src/js/parts/images.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showImage () {

   let imagesParent = document.querySelector('.works'),
       images = imagesParent.querySelectorAll('a'),
       body = document.querySelector('body'),
       overlay = document.createElement('DIV'),
       overleyContent = document.createElement('IMG');

    let hideScroll = () => {
        document.querySelector('html').style.overflow = 'hidden'
    };
    
    let showScroll = () => {
        document.querySelector('html').style.overflow = 'scroll'
    };  

    let showModalImage = () => {
        for(let i = 0; i < images.length; i++) {
            images[i].setAttribute('data-fancybox', 'gallery');
            let BigImage = images[i].getAttribute('href');

            images[i].addEventListener('click', (event) => {
                event.preventDefault();
                body.appendChild(overlay);
                overlay.appendChild(overleyContent);
                overleyContent.src = BigImage;
                hideScroll();
                overlay.style.cssText = "position: fixed;\
                                         width: 100%;\
                                         height: 100%;\
                                         background-color:rgba(0,0,0,0.7);\
                                         top: 0;\
                                         left: 0;\
                                         display: flex;";

                overleyContent.style.cssText = "position: absolute;\
                                                top: 50%;\
                                                left: 50%;\
                                                transform: translate(-50%,-50%);";                         

            });
        }
    };

    let hideModalImage = () => {
            overlay.addEventListener('click', (event) => {
                let target = event.target;
                if (target == overlay) {
                    overlay.style.display = 'none';
                    showScroll();
                }
            });
    };

    showModalImage();
    hideModalImage();
}

module.exports = showImage

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {

   let headerBtn = document.querySelector('.header_btn'),
       modalEngineer = document.querySelector('.popup_engineer'),
       popupClose = document.querySelectorAll('.popup_close')[1],
       scrollHide = document.querySelector('html');

   headerBtn.addEventListener('click', () => {
      scrollHide.style.overflow = 'hidden';
      modalEngineer.style.display = 'flex';
   });

   modalEngineer.addEventListener('click', (event) => {
    let target = event.target || event.srcElement;
        if(target != modalEngineer && target != popupClose && target.className != 'closed') {
            modalEngineer.style.display = 'flex';
        }else {
            modalEngineer.style.display = 'none';
            scrollHide.style.overflow = 'scroll';
        }
   });
}

module.exports = modal

/***/ }),

/***/ "./src/js/parts/popup.js":
/*!*******************************!*\
  !*** ./src/js/parts/popup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popup () {

   let popup = document.querySelector('.popup'),
       phonePopup = document.querySelectorAll('.phone_link'),
       scrollHide = document.querySelector('html'),
       popupClose = popup.querySelector('.popup_close');

   let showPopup = () => {
      for (let i = 0; i < phonePopup.length; i++) {
         phonePopup[i].addEventListener('click', (event) => {
             event.preventDefault();
            popup.style.display = 'flex';
            scrollHide.style.overflow = 'hidden';
         });
      }
   };

   let hidePopup = () => {
      popup.addEventListener('click', (event) => {
         let target = event.target || event.srcElement;
             if(target != popup && target != popupClose && target.className != 'closed') {
                 popup.style.display = 'flex';
             }else {
                 popup.style.display = 'none';
                 scrollHide.style.overflow = 'scroll';
             }
        });
   };

   let showPopupAfter = () => {
      popup.style.display = 'flex';
      scrollHide.style.overflow = 'hidden';
   }

   setTimeout(showPopupAfter, 60000);
   showPopup();
   hidePopup();
   
}

module.exports = popup

/***/ }),

/***/ "./src/js/parts/popup_calc.js":
/*!************************************!*\
  !*** ./src/js/parts/popup_calc.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popupCalc() {
   let popupCalcShow = document.querySelectorAll('.popup_calc_btn'),
       popupCalc = document.querySelector('.popup_calc'),
       popupCalcProfile = document.querySelector('.popup_calc_profile'),
       popupCalcEnd = document.querySelector('.popup_calc_end'),
       inputWidth = document.querySelector('#width'),
       inputHeight = document.querySelector('#height'),
       inputSelect = document.querySelector('#view_type'),
       checkbox = document.querySelectorAll('input[type="checkbox"]'),
       scrollHide = document.querySelector('html');

  let options = {};

  let checkboxValue = () => {
    for(let i = 0; i < checkbox.length; i++) {
      if(checkbox[i].checked) {
        options.checkbox = checkbox[i].value;
      }
     }
  };


  let selectValue = () => {
    for(let i = 0; i < inputSelect.options.length; i++) {
      if(inputSelect.options[i].selected){
        options.view = inputSelect.options[i].value;
      }
     }
  };


  let checkBoxSelect = () => {
    checkbox[1].addEventListener('change', function () {
      checkbox[0].checked = !checkbox[1].checked;
    });
    checkbox[0].addEventListener('change', function () {
      checkbox[1].checked = !checkbox[0].checked;
    });
  };


  let deleteOptions = () => {
    for (let key in options) {
      delete options[key];
      }
  };

  let previewImage = () => {
    let smallImagesParent = document.querySelectorAll('.balcon_icons img'),
        parent = document.querySelector('.balcon_icons'),
        bigImagesParend = document.querySelectorAll('.big_img img');

    function addClassActive() {
      for (let i = 0; i < smallImagesParent.length; i++) {
        smallImagesParent[i].classList.add('calc-active');
      }
    }
    addClassActive();

    function hide(a) {
      for (let i = a; i < bigImagesParend.length; i++) {
        bigImagesParend[i].style.display = 'none';
        smallImagesParent[i].classList.remove('calc-active');
      }
    }
    hide(1);

    function show(b) {
      if (bigImagesParend[b].style.display == 'none') {
        bigImagesParend[b].style.display = 'inline-block';
        smallImagesParent[b].classList.add('calc-active');
      }
    }

    parent.addEventListener('click', function (event) {
      event.preventDefault();
      let target = event.target;
      for (let i = 0; i < smallImagesParent.length; i++) {
        show(i);
        if (target == smallImagesParent[i]) {
          hide(0);
          show(i);
          break;
        }
      }
    });
  };
   
  let showPopupCalc = () => {
    for (let i = 0; i < popupCalcShow.length; i++) {
      popupCalcShow[i].addEventListener('click', () => {
         popupCalc.style.display = 'flex';
         scrollHide.style.overflow = 'hidden';
      });
    }

    popupCalc.addEventListener('click', (event) => {
      let target = event.target;
            scrollHide.style.overflow = 'hidden';
         if(target.className == 'popup_calc_close' || target.className == 'closed'){
            popupCalc.style.display = 'none';
            scrollHide.style.overflow = 'scroll';
            deleteOptions();
         }
         else if(target.className == 'button popup_calc_button'){
            popupCalc.style.display = 'none';
            popupCalcProfile.style.display = 'flex';
            options.width = inputWidth.value;
            options.height = inputHeight.value;
         }
   });

   popupCalcProfile.addEventListener('click', (event) => {
    let target = event.target;
      if(target.className == 'popup_calc_profile_close' || target.className == 'closed') {
        popupCalc.style.display = 'none';
        popupCalcProfile.style.display = 'none';
        scrollHide.style.overflow = 'scroll';
        deleteOptions();
      }else if (target.className == 'button popup_calc_profile_button') {
        popupCalcEnd.style.display = 'flex';
        popupCalcProfile.style.display = 'none';
        checkboxValue();
        selectValue();
        
      }
   });

   popupCalcEnd.addEventListener('click', (event) => {
    let target = event.target;
       if(target.className == 'popup_calc_end_close' || target.className == 'closed'){
           popupCalcEnd.style.display = 'none';
           scrollHide.style.overflow = 'scroll';
           deleteOptions();
        }
  });
  };

    function clear(){
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
    }
}

   let form = document.querySelectorAll('form'),
       input = document.querySelectorAll('input');
    
      for(let i = 0; i < form.length; i++) {
   
        form[i].addEventListener('submit', (event) => {
            event.preventDefault();
     
            let request = new XMLHttpRequest();
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
            let formData = new FormData(form[i]);
            
            
           formData.forEach(function(value, key) {
            options[key] = value;
           });
     
           let json = JSON.stringify(options);
     
           request.send(json);

            request.addEventListener('readystatechange', () => {
               if(request.readyState < 4) {
                swal('Идет отправка');
               }
               else if (request.readyState === 4 && request.status == 200) {
                  swal(
                    'Отправлено!',
                    '',
                    'success'
                  );
                  clear();
                  deleteOptions();
               }else {
                swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Ошибка!'
                  });
                  clear();
               }
            });

        }); 
    
   }
 
      for(let i = 0; i < input.length; i++) {
         input[i].addEventListener('keypress', function(e) {
            let key = e.keyCode;
            let atributeName = input[i].getAttribute('name'),
                inputId = input[i].id;

            if(atributeName == 'user_phone' || inputId == 'width' || inputId == 'height') {
               if (key < 48 || key > 57) {
                  e.preventDefault();
            }
         }
      });
   }

       showPopupCalc();
       previewImage();
       checkBoxSelect(); 
      
}

module.exports = popupCalc

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabsGlass () {

    let tabItem = document.querySelectorAll('.glazing_block'),
        content = document.querySelector('.glazing'),
        tabParent = document.querySelector('.glazing_slider'),
        tabLink = tabParent.getElementsByTagName('a'),
        tabContent = content.querySelectorAll('.row');
       
   
       function hideTabContent(a) {
          for(let i = a; i < tabContent.length; i++) {
             tabContent[i].style.display = 'none';
             tabLink[i].classList.remove('active');          
          }
       }
       hideTabContent(1);

       function showTabContent(b) {
         if(tabContent[b].style.display == 'none') {
            tabContent[b].style.display = 'flex';
            tabLink[b].classList.add('active');        
         }
       }

       tabParent.addEventListener('click', (event) => {
         let target = event.target,
             tabContentImg = tabParent.getElementsByTagName('img');
         
            for(let i = 0; i < tabItem.length; i++) {
               showTabContent(i);
               if (target == tabItem[i] || target == tabLink[i] || target == tabContentImg[i]) {
                  hideTabContent(0);
                  showTabContent(i);
                  break;
               }else {
                hideTabContent(0);
                showTabContent(i);
               }
            }
      });  
}

module.exports = tabsGlass

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

 function timer () {
   
    function countdown(endDate) {
        let days, hours, minutes, seconds;
        
        endDate = new Date(endDate).getTime();
        
        if (isNaN(endDate)) {
          return;
        }
        
        setInterval(calculate, 1000);
        
        function calculate() {
          let startDate = new Date();
          startDate = startDate.getTime();
          
          let timeRemaining = parseInt((endDate - startDate) / 1000);
          
          if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            
            seconds = parseInt(timeRemaining);
            
            document.querySelector(".days").innerHTML = parseInt(days, 10);
            document.querySelector(".hours").innerHTML = ("0" + hours).slice(-2);
            document.querySelector(".minutes").innerHTML = ("0" + minutes).slice(-2);
            document.querySelector(".seconds").innerHTML = ("0" + seconds).slice(-2);
          } else {
            return;
          }
        }
      }
      
      (function () { 
        countdown('07/04/2019 00:00:00 AM'); 
      }());
}

module.exports = timer; 

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {
   "use strict";

   let modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js"),
    //    sendForm = require('./parts/form.js'),
       popupCalc = __webpack_require__(/*! ./parts/popup_calc.js */ "./src/js/parts/popup_calc.js"),
       tabsGlass = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
       decorationTabs = __webpack_require__(/*! ./parts/decoration_tabs.js */ "./src/js/parts/decoration_tabs.js"),
       timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
       popup = __webpack_require__(/*! ./parts/popup.js */ "./src/js/parts/popup.js"),
       showImage = __webpack_require__(/*! ./parts/images.js */ "./src/js/parts/images.js");

   modal();
//    sendForm();
   popupCalc();
   tabsGlass();
   decorationTabs();
   timer();
   popup();
   showImage();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map