window.addEventListener('DOMContentLoaded', function () {

"use strict";
 
    let tab = document.querySelectorAll('.info-header-tab'),  //  <==  Название класса табов
        info = document.querySelector('.info-header'),   //  <==  Название класса родителя  для табов  или ID
        tabContent = document.querySelectorAll('.info-tabcontent'); //  <==  Название классов для блока информации


    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');   
            tabContent[i].classList.add('hide');
        }
    }


    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }


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
});