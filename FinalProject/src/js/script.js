window.addEventListener('DOMContentLoaded', function() {
   "use strict";

   let modal = require('./parts/modal.js'),
       sendForm = require('./parts/form.js');

   modal();
   sendForm();
});