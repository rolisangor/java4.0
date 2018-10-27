$(document).ready(function() {

   let tourSchedule = $('a[href="#sheldure"]'),
       chooseTour = $('.main_btna'),
       getConsultation = ('.main_btn');

   function showModal (selector) {
      
      $(selector).on('click', function() {
         $('.overlay').fadeIn(2000);
         $('.modal').show(1000);
         $('.close').on('click', function() {
            $('.modal').hide('slideDown');
            $('.overlay').fadeOut(2000);
         });
      });
   }

   showModal(tourSchedule);
   showModal(chooseTour);
   showModal(getConsultation);
});