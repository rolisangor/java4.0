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