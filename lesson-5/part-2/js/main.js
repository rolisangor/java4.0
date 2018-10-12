"use strict";

let btnStart = document.getElementById('start'), // Начать расчет   
    budgetValue = document.getElementsByClassName('budget-value')[0], // Доход: Ответ
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0], // Бюджет на 1 день: Ответ 
    levelValue = document.getElementsByClassName('level-value')[0], // Уровень дохода Ответ
    expensesValue = document.getElementsByClassName('expenses-value')[0],// Обязательные расходы Ответ
    optionalExpValue = document.getElementsByClassName('optionalexpenses-value')[0], // Возможные траты Ответ
    incomeValue = document.getElementsByClassName('income-value')[0], // Дополнительный доход Ответ
    monthSavingsValue = document.getElementsByClassName('montsavings-value')[0], // Накопления за 1 месяц Ответ
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0], // Накопления за 1 год Ответ
    exspensesItem = document.getElementsByClassName('expenses-item'),//  Обязательные расходы поля [0, 1, 2, 3]
    expensesItemBtn = document.getElementsByTagName('button')[0],  // Обязательные расходы кнопка 
    optionalExpBtn = document.getElementsByTagName('button')[1], // Необязательные расходы кнопка 
    countBudgetBtn = document.getElementsByTagName('button')[2], // Расчет дневного бюджета кнопка 
    otionalExpItem = document.querySelectorAll('.optionalexpenses-item'), // Необязательные расходы поля [0, 1, 2]
    choseIncome = document.querySelector('.choose-icome'),  // Статьи возможного дохода через запятую
    checkSavings = document.querySelector('#savings'),  // Накопления checkBox
    choseSum = document.querySelector('.choose-sum'),  // Накопления Сумма 
    chosePercent = document.querySelector('.choose-percent'), // Накопления Процент
    yearValue = document.querySelector('.year-value'), // Год
    monthValue = document.querySelector('.month-value'), // Месяц
    dayValue = document.querySelector('.day-value'); // День

    console.log(expensesItemBtn);
    console.log(optionalExpBtn);
    console.log(countBudgetBtn);
    console.log(checkSavings);
    console.log(btnStart);

    console.log(budgetValue);
    console.log(dayBudgetValue);
    console.log(levelValue);
    console.log(expensesValue);
    console.log(exspensesItem);
   