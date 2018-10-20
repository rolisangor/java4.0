window.addEventListener('DOMContentLoaded', function(){

    "use strict";

    function getTime() {
        let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds();

        let boxHours = document.querySelector('.h'),
            boxMinutes = document.querySelector('.m'),
            boxSeconds = document.querySelector('.s');



        function addZero(n) {
            if(n < 10) {
                return '0' + n;
            }else {
                return n;
            }
        }
        boxHours.textContent = addZero(h);
        boxMinutes.textContent = addZero(m);
        boxSeconds.textContent = addZero(s);
    }
    
    setInterval(getTime, 1000);
   
});
