"use strict";

let btnStart = document.getElementById('start'), // Начать расчет   
    budgetValue = document.getElementsByClassName('budget-value')[0], // Доход: Ответ
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0], // Бюджет на 1 день: Ответ 
    levelValue = document.getElementsByClassName('level-value')[0], // Уровень дохода Ответ
    expensesValue = document.getElementsByClassName('expenses-value')[0],// Обязательные расходы Ответ
    optionalExpValue = document.getElementsByClassName('optionalexpenses-value')[0], // Возможные траты Ответ
    incomeValue = document.getElementsByClassName('income-value')[0], // Дополнительный доход Ответ
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0], // Накопления за 1 месяц Ответ
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0], // Накопления за 1 год Ответ
	 
	 exspensesItem = document.getElementsByClassName('expenses-item'),//  Обязательные расходы поля [0, 1, 2, 3]
    expensesItemBtn = document.getElementsByTagName('button')[0],  // Обязательные расходы кнопка 
    optionalExpBtn = document.getElementsByTagName('button')[1], // Необязательные расходы кнопка 
    countBudgetBtn = document.getElementsByTagName('button')[2], // Расчет дневного бюджета кнопка 
    otionalExpItem = document.querySelectorAll('.optionalexpenses-item'), // Необязательные расходы поля [0, 1, 2]
    choseIncome = document.querySelector('.choose-income'),  // Статьи возможного дохода через запятую
    checkSavings = document.querySelector('#savings'),  // Накопления checkBox
    choseSum = document.querySelector('.choose-sum'),  // Накопления Сумма 
    chosePercent = document.querySelector('.choose-percent'), // Накопления Процент
    yearValue = document.querySelector('.year-value'), // Год
    monthValue = document.querySelector('.month-value'), // Месяц
    dayValue = document.querySelector('.day-value'); // День

let money, time;

btnStart.addEventListener("click", function() {
   time = prompt('Введите дату в формате YYYY-MM-DD', "");
   money = +prompt('Ваш бюджет на месяц?', "");

   while (isNaN(money) || money == "" || money == null) {
      money = +prompt('Ваш бюджет на месяц?', "");
   }
   appData.budget = money;
   appData.timeData = time;

   budgetValue.textContent = money.toFixed();

   yearValue.value = new Date(Date.parse(time)).getFullYear();
   monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
   dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener("click", function() {
   let sum = 0;
   
   for (let i = 0; i < exspensesItem.length; i++) { // Цикл где задается по 2 раза вопрос пользователю
         let a = exspensesItem[i].value,
             b = exspensesItem[++i].value;
         // проверяем пользователя если ввел верно данные  
         if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            a != "" && b != "" && (typeof (b)) != null && a.length < 50) {
            console.log('done');

            appData.expenses[a] = b; // Добавляем в объект ответы пользователю
            sum += +b;
         } else {
            i--;
         }
      }
      expensesValue.textContent = sum;
});

optionalExpBtn.addEventListener("click", function() {
   for (let i = 0; i < otionalExpItem.length; i++) {
      let question = otionalExpItem[i].value;
      appData.optionalExpenses[i] = question;
      optionalExpValue.textContent += appData.optionalExpenses[i] + " ";
   }
});

countBudgetBtn.addEventListener("click", function() {

   if(appData.budget != undefined) {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      dayBudgetValue.textContent = appData.moneyPerDay;
   
      if (appData.money < 100) {
         levelValue.textContent = 'Минимальный уровень достатка';
      } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
         levelValue.textContent = 'Средний уровень достатка';
      } else if (appData.moneyPerDay > 2000) {
         levelValue.textContent = 'Высокий уровень достатка';
      } else {
         levelValue.textContent = 'Произошла ошибка';
      }
   } else {
      dayBudgetValue.textContent = "Произошла ошибка";
   }
});

choseIncome.addEventListener("input", function() {
   let items = choseIncome.value;
       appData.income = items.split(", ");
       incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function() {
   if(appData.savings == true) {
      appData.savings == false;
   } else {
      appData.savings == true;
   }
});

choseSum.addEventListener("input", function() {
   if (appData.savings == true) {
      let sum = +choseSum.value,
          percent = +chosePercent.value;

      appData.monthIncome = sum / 100 / 12 * percent;
      appData.yearIncome = sum / 100 * percent;

      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
   }
});

chosePercent.addEventListener("input", function() {
   if (appData.savings == true) {
      let sum = +choseSum.value,
          percent = +chosePercent.value;

      appData.monthIncome = sum / 100 / 12 * percent;
      appData.yearIncome = sum / 100 * percent;

      monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
      yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
   }
});


let appData = {
   budget: money,
   expenses: {},
   optionalExpenses: {},
   income: [],
   timeData: time,
   savings: false
};
