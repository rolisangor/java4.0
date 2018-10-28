function modal() {
   let more = document.getElementsByClassName('more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            tabBtn = document.getElementsByClassName('description-btn');
        
    
            for (let i = 0; i < tabBtn.length; i++) {
                tabBtn[i].classList.add('more');
            }
    
            for(let i = 0; i < more.length; i++) {
                more[i].addEventListener('click', function() {
                    overlay.style.display = 'block';
                    this.classList.add('more-splash');
                });
            
                close.addEventListener('click', function() {
                    overlay.style.display = 'none';
                    more[i].classList.remove('more-splash');
                });
            }
}

module.exports = modal;