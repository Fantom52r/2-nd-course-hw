
//  Задание 1

// const numbs = [1, 5, 4, 10, 0, 3]

// for ( let i = 0; i < numbs.length; i++) {
//     if ( numbs[i] == 10) break;
//     console.log(numbs[i]);
// }


// Задание 2

// const numbs = [1, 5, 4, 10, 0, 3];
// console.log(numbs.indexOf(4));

// Задание 3 

// const numbs = [1, 3, 5, 10, 20];
// console.log(numbs.join(' '));

// Задание 4

// let a = [];
// for ( let index = 0; index < 3; index++) {
//     a[index] = [];
//     for (let indexOne = 0; indexOne < 3; indexOne++) {
//         a[index].push(1);
//     }
// }
// console.log(a);


// Задание 5

// let numbs = [1, 1, 1];
// numbs.push(2, 2, 2)

// console.log(numbs);


// Задание 6

// let array = [9, 8, 7, 'a', 6, 5];

// array.sort().pop();

// console.log(array);


// Задание 7 


// const check = () => {
//     let numbs = [9, 8, 7, 6, 5]
//     let userInput = Number(prompt('Введите число от 1 до 10'))
//     if (numbs.includes(userInput)) {
//         console.log(`число ${userInput} есть в массиве`);
//     } else {
//         console.log('такого числа нет');
//     }
// }
// check();

// Задание 8

// let string = 'abcdef'

// string = string.split('');
// console.log(string);

// string = string.reverse();
// console.log(string);

// string = string.join('')
// console.log(string);

// Задание 9 

// let arr = [[1, 2, 3,],[4, 5, 6]];
//  arr = arr.flat();
// console.log(arr);


// задание 10

// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i < arr.length - 1; i++) {
// console.log(arr[i - 1] + arr[i] + arr[i + 1]);
// }


// Задание 11

// const arr = [2, 4, 6, 8, 10];

// let result = arr.map(item => (item ** 2));
 
// console.log(result);


// Задание  12

// let word = ["слово", " ", " длиное предолжение", "буква"];
// let lenths = word.map(function (words) {
//   return words.length;
// });
// console.log(lenths.join([","]));


// Задание 13


// let arrayOne = [-1, 0, 5, -10, 56];

// const filterPositive = array => arrayOne.filter(i => i < 0);

// console.log(filterPositive(arrayOne));


// let arrayTwo = [-25, 25, 0, -1000, -2];

// const filterPositive = array => arrayTwo.filter(i => i < 0);

// console.log(filterPositive(arrayTwo));



