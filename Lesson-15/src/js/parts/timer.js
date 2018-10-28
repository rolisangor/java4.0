function timer () {
   let deadline = '2018-10-21';
    
        let getTimeRemaining = (endtime) => {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60))); 
                
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
                
            
        };
    
        let setClock = (id, endtime) => {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);
    
            function updateClock() {
    
                function addZero(n) {
                    if (n < 10) {
                        return '0' + n;
                    } 
                    else {
                        return n;
                    }
                }
    
                let t = getTimeRemaining(endtime);
    
                    hours.textContent = addZero(t.hours);
                    minutes.textContent = addZero(t.minutes);
                    seconds.textContent = addZero(t.seconds);
    
                    if(t.total <= 0) {
                        clearInterval(timeInterval);
    
                        hours.textContent = addZero(0);
                        minutes.textContent = addZero(0);
                        seconds.textContent = addZero(0);
                    }
            }
        };
    
        setClock('timer', deadline);
}

module.exports = timer;