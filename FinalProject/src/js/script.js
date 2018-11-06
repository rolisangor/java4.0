window.addEventListener('DOMContentLoaded', function() {
   "use strict";

   let modal = require('./parts/modal.js'),
    //    sendForm = require('./parts/form.js'),
       popupCalc = require('./parts/popup_calc.js'),
       tabsGlass = require('./parts/tabs.js'),
       decorationTabs = require('./parts/decoration_tabs.js'),
       timer = require('./parts/timer.js'),
       popup = require('./parts/popup.js'),
       showImage = require('./parts/images.js');

   modal();
//    sendForm();
   popupCalc();
   tabsGlass();
   decorationTabs();
   timer();
   popup();
   showImage();
});