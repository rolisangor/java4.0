 function timer () {
   let deadline = '2019-07-04';
    
        let getTimeRemaining = (endtime) => {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/1000/60/60 % 24)),
                days = Math.floor((t/(1000*60*60*24)));
                
            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds,
                'days' : days
            };
                
            
        };
    
        let setClock = (endtime) => {
            let timer = document.querySelector('.eTimer'),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                days = timer.querySelector('.days'),
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
                    days.textContent = addZero(t.days);
    
                    if(t.total <= 0) {
                        clearInterval(timeInterval);
    
                        hours.textContent = addZero(0);
                        minutes.textContent = addZero(0);
                        seconds.textContent = addZero(0);
                        days.textContent = addZero(0);
                    }
            }
        };
    
        setClock(deadline);
}

module.exports = timer; 