"use strict";

let btnStart = document.getElementById('start'), // Начать расчет   
    budgetValue = document.getElementsByClassName('budget-value'), // Доход: Ответ
    dayBudgetValue = document.getElementsByClassName('daybudget-value'), // Бюджет на 1 день: Ответ 
    levelValue = document.getElementsByClassName('level-value'), // Уровень дохода Ответ
    expensesValue = document.getElementsByClassName('expenses-value'),// Обязательные расходы Ответ
    optionalExpValue = document.getElementsByClassName('optionalexpenses-value'), // Возможные траты Ответ
    incomeValue = document.getElementsByClassName('income-value'), // Дополнительный доход Ответ
    monthSavingsValue = document.getElementsByClassName('montsavings-value'), // Накопления за 1 месяц Ответ
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'), // Накопления за 1 год Ответ
    exspensesItem = document.getElementsByClassName('expenses-item'),//  Обязательные расходы поля [0, 1, 2, 3]
    expensesItemBtn = document.getElementsByTagName('button'),  // Обязательные расходы кнопка [0]
    optionalExpBtn = document.getElementsByTagName('button'), // Необязательные расходы кнопка [1]
    countBudgetBtn = document.getElementsByTagName('button'), // Расчет дневного бюджета кнопка [2]
    otionalExpItem = document.querySelectorAll('.optionalexpenses-item'), // Необязательные расходы поля [0, 1, 2]
    choseIncome = document.querySelector('#income'),  // Статьи возможного дохода через запятую
    checkSavings = document.querySelector('#savings'),  // Накопления checkBox
    choseSum = document.querySelector('#sum'),  // Накопления Сумма 
    chosePercent = document.querySelector('#percent'), // Накопления Процент
    yearValue = document.querySelector('.year-value'), // Год
    monthValue = document.querySelector('.month-value'), // Месяц
    dayValue = document.querySelector('.day-value'); // День
