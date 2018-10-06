'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   timeData: time,
   savings: false
};

// Цикл где задается по 2 раза вопрос пользователю
for (let i = 0; i < 2; i++) {
   let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
       b = prompt('Во сколько обойдется?', '');

// проверяем пользователя если ввел верно данные  
   if ( (typeof(a)) === 'string' && (typeof(a)) != null
       && a != "" && b != "" && a.length < 50 ) {
         console.log('done');

// Добавляем в объект вопросы пользователю
      appData.expenses[a] = b;

   } else {
      console.log('error'); 
   }
}



// Example nr.1
/* 
let i = 0;

while (i < 2) {
   let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
       b = prompt('Во сколько обойдется?', '');

   // проверяем пользователя если ввел верно данные  
   if ( (typeof(a)) === 'string' && (typeof(a)) != null
       && a != "" && b != "" && a.length < 50 ) {
         console.log('done');

// Добавляем в объект вопросы пользователю
      appData.expenses[a] = b;

   } else {
      console.log('error'); 
   }
   i++;
}     
*/



// Example nr.2
/* 
let i = 0;

do {
   let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
       b = prompt('Во сколько обойдется?', '');

       // проверяем пользователя если ввел верно данные  
   if ( (typeof(a)) === 'string' && (typeof(a)) != null
       && a != "" && b != "" && a.length < 50 ) {
         console.log('done');

// Добавляем в объект вопросы пользователю
      appData.expenses[a] = b;

   } else {
      console.log('error'); 
   }
       i++;
} 
while (i < 2);
*/

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет ' + appData.moneyPerDay);

if(appData.money < 100) {
   console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
   console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
   console.log('Высокий уровень достатка');
} else {
   console.log('Произошла ошибка');
}

console.log(appData);