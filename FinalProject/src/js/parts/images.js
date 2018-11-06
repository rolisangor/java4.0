function showImage () {

   let imagesParent = document.querySelector('.works'),
       images = imagesParent.querySelectorAll('a'),
       body = document.querySelector('body'),
       overlay = document.createElement('DIV'),
       overleyContent = document.createElement('IMG');

    let hideScroll = () => {
        document.querySelector('html').style.overflow = 'hidden'
    };
    
    let showScroll = () => {
        document.querySelector('html').style.overflow = 'scroll'
    };  

    let showModalImage = () => {
        for(let i = 0; i < images.length; i++) {
            images[i].setAttribute('data-fancybox', 'gallery');
            let BigImage = images[i].getAttribute('href');

            images[i].addEventListener('click', (event) => {
                event.preventDefault();
                overlay.classList.add('animated');
                overlay.classList.add('fadeIn');
                body.appendChild(overlay);
                overlay.appendChild(overleyContent);
                overleyContent.src = BigImage;
                hideScroll();
                overlay.style.cssText = "position: fixed;\
                                         width: 100%;\
                                         height: 100%;\
                                         background-color:rgba(0,0,0,0.7);\
                                         top: 0;\
                                         left: 0;\
                                         display: flex;";

                overleyContent.style.cssText = "position: absolute;\
                                                top: 50%;\
                                                left: 50%;\
                                                transform: translate(-50%,-50%);";                         

            });
        }
    };

    let hideModalImage = () => {
            overlay.addEventListener('click', (event) => {
                let target = event.target;
                if (target == overlay) {
                    overlay.style.display = 'none';
                    showScroll();
                }
            });
    };

    showModalImage();
    hideModalImage();
}

module.exports = showImage