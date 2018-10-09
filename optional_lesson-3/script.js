'use strict';
/* 
1) У вас есть str = “урок-3-был слишком легким”
   Сделать так, чтобы строка начиналась с большой буквы 
*/
let str = "урок-3-был слишком легким";

function firstSymbolUpercase (str) {
   return str[0].toUpperCase() + str.slice(1);
}
console.log(firstSymbolUpercase(str));

/*
 2) Теперь замените все “-” на пробелы
    Вывести в консоль то, что получилось 
*/
function space (str) {
   return str = str.slice(0, 4) + " " + str.slice(5, 6) + " " + str.slice(7);
}
console.log(space(str));


/*
 3) Из получившейся строки вырезать слово 
    “легким”, в этом же слове заменить 2 
    последние буквы на букву “о”
    Вывести на экран то, что получилось 
*/
function del (str) {
   let newWord = str.slice(-6),
       newWordAdd = newWord.slice(0, 4) + "оо";
       return newWordAdd;
}
alert(del(str));

/* 
4) У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
   Вывести в консоль квадратный корень из суммы кубов его 
   элементов (Да, человека нужно исключить)
 */


let arr = [20, 33, 1, "Человек", 2, 3];
arr.splice(3, 1);

let sum = 0;

for (let i = 0; i < arr.length; i++) {

   sum += Math.pow(arr[i], 3);
}

let sumSqrt = Math.sqrt(sum);

console.log(sumSqrt);


/*
 5) Создайте функцию, которая принимает 1 аргумент
    Если как аргумент передана не строка - функция
    оповещает об этом пользователя
*/

let question = prompt('видите комментарии');

 function comment (a) {
if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
  
    if(a.length > 50) {

    return a.slice(0, 47) + '. . .';

   }
 } else {
     alert('Неправильные данные');
 }
    
 return a;
}

console.log(comment(question));
