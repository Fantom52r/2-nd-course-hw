// Задание 1

// Напишите функцию, которая возвращает меньшее из 2 чисел. 
// Например, из двух чисел — 8 и 4 — функция должна вернуть 4. 
// Если передадим 6 и 6, то функция должна вернуть 6.

// const min = (a, b) => {
//     if (a >= b) {
//         return b;
//     } else {
//         return a;
//     }
// }
// console.log(min(8, 4));
// console.log(min(6, 6))


// Задание 2

// Напишите функцию, которая принимает число, а возвращает строку 
// 'Число четное', если число четное, 'Число нечетное' — если нечетное.

// let num = prompt('Введите число')
// function evenOrodd(a) {
//     if (a %  2 == 0 ) {
//         alert('Число четное');
//     } else {
//         alert('Число нечетное');
//     }
// }
// evenOrodd(num);


// Задание 3
// 3.1
// let a = prompt('введите число')

// const square = (num) => console.log(num ** 2);

// square(a);


// 3.2

// let num = prompt('Введите число')

// const square = (a) => {
//     return a;
// }
// console.log(num ** 2);

// Задание 4

// let num  = prompt('Введите ваш возраст')

// function userAge(a) {
//  if (a < null ) {
//     alert('Вы ввели неправильное значение');
//  } else if (a <= 12) {
//     alert('Привет, друг');
//  } else {
//     (a >= 13);
//     alert('Добро пожаловать!');
//  }    
// }
// userAge(num)

// Задание 5 

// let numberCheckOne = prompt('Введите число')
// let numberCheckTwo = prompt('Введите число')
// function check (a, b) {
//     if (isNaN(a) || isNaN(b)) {
//         return console.log('Одно или оба значения не являются числом'); 
//     } else {
//         return console.log(a * b);
//     }
// }

// check(numberCheckOne, numberCheckTwo);

// Задание 6 Задать вопрос

// let userQuestion = prompt('Введите число')
// function check(a) {
//     if (a == Number(a)) {
//         return console.log(`${a} в кубе равняется ${a ** 3}`);
//     } else {
//         return console.log('Переданный параметр не является числом');
//     }
// }
// check(userQuestion);

// задание 7

// const circle1 = {
//     radius: 5,
//     getArea() {
//         return (`Площадь круга через радиус равна ${ 3.14 * circle1.radius ** 2}`)
//     }
// }
// console.log(circle1.getArea());

// const circle2 = {
//     radius: 5,
//     getPerimeter() {
//         return (`периметр окружности ${ 2 * 3.14 * circle2.radius}`)
//     }
// }
// console.log(circle2.getPerimeter());