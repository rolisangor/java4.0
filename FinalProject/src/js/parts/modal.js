function modal() {

   let headerBtn = document.querySelector('.header_btn'),
       modalEngineer = document.querySelector('.popup_engineer'),
       overlay = document.querySelector('.overlay'),
       popupClose = document.querySelectorAll('.popup_close')[1];

   headerBtn.addEventListener('click', () => {
      modalEngineer.style.display = 'flex';
      overlay.style.display = 'flex';
   });

   overlay.addEventListener('click', () => {
      overlay.style.display = 'none';
      modalEngineer.style.display = 'none';
   });

   popupClose.addEventListener('click', () => {
      overlay.style.display = 'none';
      modalEngineer.style.display = 'none';
   });
}

module.exports = modal