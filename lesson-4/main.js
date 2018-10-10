'use strict';

let money, time;

//  Спрашиваем у пользователя какой у него бюджет на месяц 
function start() {
   money = +prompt('Ваш бюджет на месяц?', "");
   time = prompt('Введите дату в формате YYYY-MM-DD', "");

   while (isNaN(money) || money == "" || money == null) {
      money = +prompt('Ваш бюджет на месяц?', "");
   }
}
start(); //Вызов функции


let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   timeData: time,
   savings: true,
   choseExspenses: function() {
      for (let i = 0; i < 2; i++) { // Цикл где задается по 2 раза вопрос пользователю
         let a = prompt('Введите обязательную статью расходов в этом месяце', ""),
            b = prompt('Во сколько обойдется?', "");
         // проверяем пользователя если ввел верно данные  
         if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            a != "" && b != "" && (typeof (b)) != null && a.length < 50) {
            console.log('done');

            appData.expenses[a] = b; // Добавляем в объект ответы пользователю

         } else {
            i--;
         }
      }
   },
   detectDayBudget: function() {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert('Ежедневный бюджет ' + appData.moneyPerDay);
   },
   detectLevel: function() {
      if (appData.money < 100) {
         console.log('Минимальный уровень достатка');
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         console.log('Средний уровень достатка');
      } else if (appData.moneyPerDay > 2000) {
         console.log('Высокий уровень достатка');
      } else {
         console.log('Произошла ошибка');
      }
   },
   checkSavings: function() {
      if (appData.savings == true) {
         let save = +prompt("Какова сумма накопления?", ""),
            percent = +prompt("Под какой процент?", "");
         // Заносим данные в наш объект
         appData.monthIncome = save / 100 / 12 * percent;
         //Выносим на экран процент от накопления
         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
      }
   },
   chooseOptExpenses: function() {
      for (let i = 1; i < 4; i++) {
         let question = prompt("Статья необязательных расходов?", "");

         appData.optionalExpenses[i] = question;

         if ((typeof (question)) === 'string' && (typeof (question)) != null && question != "") {

         } else {
            i--;
         }
      }
   },
   
   chooseIncome: function() {
      let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
       
      while( (typeof(items)) !== "string" || (typeof(items)) == null || items == "" ) {
         items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");  
      }
      
        appData.income = items.split(", ");
        appData.income.push(prompt("Кое-что еще", ""));
        appData.income.sort();

         appData.income.forEach(function(index, number) {
         document.write("Способы доп. заработка: " + " " + (++number) +  " " + index + "<br>");
      });
   } 
  
  
};

for(let key in appData) {
  console.log("Наша программа включает в себя данные: " + " " + key + " - " + appData[key]);
}



