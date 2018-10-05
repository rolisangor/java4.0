'use strict';

let num = 33721;
    
// произведение (умножение) цифр
let result = 1;
while (num) {

   result *= num % 10;
   num = Math.floor(num / 10);
}

// Выходим в консоли результат произведение цифр
console.log(result);

// наш результат выводим в степень на 3
let numPower = result ** 3,
    numStr = numPower.toString(),       // преобразование в строку
    twoSymbol = numStr.slice(0, 2);     //оставляем только 2 символа
    
// вводим на экран только первые два символа из  из полученного результата
    alert(twoSymbol);



