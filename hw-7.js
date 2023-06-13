// Задание 1

// let str = 'Строка' ;
// console.log(str.toUpperCase());


// Задание 2 

// const searchStart = (arr, str) => {
//    const mass = [];
//    for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().includes(str.toLowerCase())) {
//         mass.push(arr[i])
//     }
//    }
//    return mass
// }


// Задание 3 

// вариант  решения 1

// let x = Math.floor(32.58884);
// let y = Math.round(32.58884);
// let z = Math.ceil(32.58884);

// console.log(x, y, z);

// Вариант решения 2

// let num = 32.58884;

// console.log(Math.floor(num), Math.round(num), Math.ceil(num));


// Задание 4

// const numbers = [52, 53, 49, 77, 21, 32];

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));


// Задание 5

// function randomizer() {
//     return Math.round(Math.random() * 10);  
// }
// console.log(randomizer());




// Задание 6

const giveMeRandom = function(n) {
    let arrWithNums = [];
    for (i = 0; i < Math.floor(n / 2);  i++) {
     arrWithNums.push(Math.floor(Math.random() * n));
    }
    return arrWithNums;
  }
  console.log(giveMeRandom(12));