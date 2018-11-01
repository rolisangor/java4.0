function modal() {

   let headerBtn = document.querySelector('.header_btn'),
       modalEngineer = document.querySelector('.popup_engineer');
       popupClose = document.querySelectorAll('.popup_close')[1];

   headerBtn.addEventListener('click', () => {
      modalEngineer.style.display = 'flex';
   });

   modalEngineer.addEventListener('click', (event) => {
    let target = event.target || event.srcElement;
        if(target != modalEngineer && target != popupClose && target.className != 'closed') {
            modalEngineer.style.display = 'flex';
        }else {
            modalEngineer.style.display = 'none';
        }
   });
}

module.exports = modal