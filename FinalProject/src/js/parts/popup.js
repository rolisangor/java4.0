function popup () {

   let popup = document.querySelector('.popup'),
       phonePopup = document.querySelectorAll('.phone_link'),
       scrollHide = document.querySelector('html'),
       popupClose = popup.querySelector('.popup_close');

   let showPopup = () => {
      for (let i = 0; i < phonePopup.length; i++) {
         phonePopup[i].addEventListener('click', () => {
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