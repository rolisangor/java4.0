"use strict";

 let menu = document.querySelector('.menu'),
     menuItem = document.querySelectorAll('.menu-item'),
     li = document.createElement('li'),
     title = document.querySelector('.title'),
     adv = document.querySelector('.adv'),
     answerBlock = document.getElementById('prompt'); 

   
    // Добавление пятый пункт в меню
  li.classList.add('menu-item'); 
  menu.appendChild(li); 
  li.innerHTML = 'Пятый пункт';

   // Восстановим порядок в меню
   menu.replaceChild(menuItem[2], menuItem[1]);
   menu.insertBefore(menuItem[1], menuItem[3]);

   // Заменить картинку заднего фона
   document.body.style.background = "url(./img/apple_true.jpg) center no-repeat";
   
   // Поменять заголовок, добавить слово "подлинную"
   title.textContent = "Мы продаем только подлинную технику Apple";
   
   // Удалить рекламу со страницы
   adv.remove(adv);

   // Спросить у пользователя отношение к технике apple и записать ответ
   let userQuestion = prompt('Ваше отношение к технике apple ?', '');

   answerBlock.innerHTML = "Ваш ответ:" + "<br><br>" + userQuestion;


 