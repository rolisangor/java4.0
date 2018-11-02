window.addEventListener('DOMContentLoaded', function() {
   "use strict";

   let modal = require('./parts/modal.js'),
       sendForm = require('./parts/form.js'),
       popupCalc = require('./parts/popup_calc.js'),
       tabsGlass = require('./parts/tabs.js');

   modal();
   sendForm();
   popupCalc();
   tabsGlass();
});