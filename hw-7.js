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

// const giveMeRandom = function(n) {
//     let arrWithNums = [];
//     for (i = 0; i < Math.floor(n / 2);  i++) {
//      arrWithNums.push(Math.floor(Math.random() * n));
//     }
//     return arrWithNums;
//   }
//   console.log(giveMeRandom(12));


// задание 7


// function randomNumbers(a, b) {
//     return Math.floor(Math.random(a) * b)
// }
// console.log(randomNumbers(1, 100));


// Задание 8

// let currentDate = new Date();
// console.log(currentDate);


// задание 9

// let currentDate = new Date();
// currentDate.setDate(73);

// console.log(currentDate);


// Задание 10

// function formatDateAndTime(date) {
    //   let days = [
    //     "Воскресенье",
    //     "Понедельник",
    //     "Вторник",
    //     "Среда",
    //     "Четверг",
    //     "Пятница",
    //     "Суббота",
    //   ];
    //   let months = [
    //     "Января",
    //     "Февраля",
    //     "Марта",
    //     "Апреля",
    //     "Мая",
    //     "Июня",
    //     "Июля",
    //     "Августа",
    //     "Сентября",
    //     "Октября",
    //     "Ноября",
    //     "Декабря",
    //   ];
    //   let day = days[date.getDay()];
    //   let month = months[date.getMonth()];
    //   let year = date.getFullYear();
    //   let dateStr = date.getDate();
    //   let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    //   let minutes =
    //     date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    //   let seconds =
    //     date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    //   let timeStr = ${hours}:${minutes}:${seconds};
    //   console.log(`Дата: ${dateStr} ${month} ${year} - это ${day}.`);
    //   console.log(`Время: ${timeStr}`);
    // }
    // formatDateAndTime(new Date());

    
    
    // задание 11

    // function gameFunction() {
    //     let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
    //     fruits = fruits.sort(() => Math.random() - 0.5);
    //     alert(` Запомните первый и последний фрукт! ${fruits}`)
    //     let userAnswerOne = prompt('Введите первое слово')
    //     let userAnswerTwo = prompt('Введите второе слово')
    //     if (userAnswerOne.toLowerCase() == fruits[0].toLowerCase() && userAnswerTwo.toLowerCase() == fruits[fruits.length - 1].toLowerCase()) {
    //         alert('Поздравляем, вы угадали оба элемента')
    //     } else if (userAnswerOne.toLowerCase()  !== fruits[0].toLowerCase() && userAnswerTwo.toLowerCase() == fruits[fruits.length - 1].toLowerCase()) {
    //         alert('Вы были близки к победе !')
    //     }  else if (userAnswerOne.toLowerCase()  == fruits[0].toLowerCase() && userAnswerTwo.toLowerCase() !== fruits[fruits.length - 1].toLowerCase()){
    //         alert('Вы были близки к поебеде')
    //     }
    //     else {
    //         alert(' Вы ответили неверно')
    //     }
    // }