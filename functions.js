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

