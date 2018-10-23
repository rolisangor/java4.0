window.addEventListener('DOMContentLoaded', function () {

"use strict";
 
    let tab = document.querySelectorAll('.info-header-tab'),  //  <==  Название класса табов
        info = document.querySelector('.info-header'),   //  <==  Название класса родителя  для табов  или ID
        tabContent = document.querySelectorAll('.info-tabcontent'); //  <==  Название классов для блока информации


    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');   
            tabContent[i].classList.add('hide');
        }
    };


    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };


    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {  //  <==  Название класса табов
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // timer

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

    // Modal

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


    // Отправка Модальные формы

    let message = {
        loading: "Загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input')[0],
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

        input.addEventListener('keypress', function(e){
            let key = e.keyCode;
             
            if(key != 43 && key < 47 || key > 57) {
             e.preventDefault(); 
             
            }
     });
        

    form.addEventListener('submit',function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        

        let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
            formData.forEach(function(value, key) {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);
            request.send(json);

        request.addEventListener('readystatechange', function() {
            if(request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            }else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for(let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });



    //  Отправка контактной формы

    let formContainer = document.querySelector('.contact-form'),
        contactForm = formContainer.getElementsByTagName('form')[0],
        contactInput = contactForm.getElementsByTagName('input');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let myRequest = new XMLHttpRequest();
        myRequest.open('POST', 'server.php');
        myRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(contactForm);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        myRequest.send(json);

        myRequest.addEventListener('readystatechange', function() {
            if(myRequest.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (myRequest.readyState === 4 && myRequest.status == 200) {
                statusMessage.innerHTML = message.success;
            }else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < contactInput.length; i++) {
            contactInput[i].value = '';
        }

    });

});