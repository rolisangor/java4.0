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