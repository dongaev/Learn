/* function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
  }
 */
//   Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:
// Используя оператор '?'
// Используя оператор ||


function checkAge(age){
    return (age > 18) ? true : confirm ('Родители разрешили?');
}

checkAge(13);

function checkAge(age){
    return (age > 18) == true || confirm ('Родители разрешили?'); // (age < 18) == confirm ('Родители разрешили?'); в решение короче, || - возвратило false;
}

checkAge(13);

/* Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

*/

function call(a, b){

   if (a < b){
        return a;
   } else  {
    return b;
   }
  }

call(2, 5);

/* Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n). */

var x = prompt('Введите значение x:','');
var n = prompt('введите значение n:', '');

function pow (x,n){
        var result = x ** n;
        return result;

}

pow(3,2);

/* Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b. */

var a = 10; 
var b = 3;

function ostatok (){
    var result = a % b;
    return result;
    }

ostatok();

/* Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления. */

var a = 10; 
var b = 2;

function proverka(){
    if (a % b == 0){
        return alert ('Да, делится!')
    }
    alert ('Делится с остатком!')

}
proverka();

/* Возведите 2 в 10 степень. Результат запишите в переменную st */

/* Math.pow(число, степень); - функция возводит число в степень */


var a = prompt('a ?','');
var n = prompt('n ?','');

var st;

function powpow (){
 return Math.pow(a,n);
}

st = powpow;

st();

/* Найдите квадратный корень из 245. */

/* Math.sqrt(положительное число); - возвращает квадратный корень числа */

var a = prompt('введите число, мы извлечем его квадратный корень','');

function qq (){
    return Math.sqrt(a);
}

qq();