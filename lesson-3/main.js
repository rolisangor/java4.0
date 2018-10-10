'use strict';

let money, time;

//  Спрашиваем у пользователя какой у него бюджет на месяц 
function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start(); //Вызов функции


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};


// Узнаем у пользователя какие у него расходы и правильно  ввёл данные
function choseExspenses() {
    for (let i = 0; i < 2; i++) { // Цикл где задается по 2 раза вопрос пользователю
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        // проверяем пользователя если ввел верно данные  
        if ((typeof (a)) === 'string' && (typeof (a)) != null &&
            a != "" && b != "" && (typeof (b)) != null && a.length < 50) {
            console.log('done');

            appData.expenses[a] = b; // Добавляем в объект ответы пользователю

        } else {
            i--;
        }
    }
}
choseExspenses(); // Вызов функции

/*
 //  Узнаём какой бюджет на 1 день   ПЕРВЫЙ ВАРИАНТ !!!
function detectDayBudget(a, b) {

    return a / b;  
}
appData.moneyPerDay = detectDayBudget(appData.budget, 30).toFixed();
alert('Ежедневный бюджет ' + appData.moneyPerDay); 
*/



//  Узнаём какой бюджет на 1 день    ВТОРОЙ ВАРИАНТ !!!

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет ' + appData.moneyPerDay);
}
detectDayBudget(); 



//  Определяем какой уровень дохода пользователя
function detectLevel() {
    if (appData.money < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel(); // Вызов функции


//Узнаём о пользователе если есть у него накопительный счет
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накопления?"),
            percent = +prompt("Под какой процент?");
        // Заносим данные в наш объект
        appData.monthIncome = save / 100 / 12 * percent;
        //Выносим на экран процент от накопления
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings(); //Вызов функции


let question;

function chooseOptExpenses() {
    
        for (let i = 1; i < 4; i++) {
            let question = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = question;
        
        if ((typeof (question)) === 'string' && (typeof (question)) != null &&
            question != "") {

        } else {
            i--;
        }
    }
}
chooseOptExpenses();

console.log(appData);
