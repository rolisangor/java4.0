 'use strict';

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    questionOne = prompt("Введите обязательную статью расходов в этом месяце", ""),
    questionTwo = prompt("Во сколько обойдется?", ""),
    repQuestionOne = prompt("Введите обязательную статью расходов в этом месяце", ""),
    repQuestionTwo = prompt("Во сколько обойдется?", ""), 

    appData = {               
      moneyData: money,
      timeData: time,
      expenses: {
         [questionOne]: questionTwo,
         [repQuestionOne]: repQuestionTwo 
      }
    };

    // Вводим в консоль наш объект  и проверяем ошибки
    console.log(appData);

    // Вводим бюджет на экран пользователя
    alert( "Ваш бюджет на 1 день без расходов составляет: " + money/30 );