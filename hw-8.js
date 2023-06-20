 // задание 1 

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];

// console.log(people.sort((elementOne, elementTwo) => (elementOne.age > elementTwo.age  ? 1 : - 1 )))

// Задание 2

// function isPositive(arr) {
//    return arr > 0;
// }
//     function isMale(item) {
//       return item.gender == 'male';
//     }
//     function filter(arr, callback) {
//       massTwo = [];
//       for( let i = 0; i < arr.length; i++) {
//          if (callback(arr[i]))
//          massTwo.push(arr[i])
//       }
//       return massTwo;
//     }
    
//     console.log(filter([3, -4, 1, 9], isPositive));
    
//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];
    
//     console.log(filter(people, isMale)); 


// Задание 3 
  
// let currentDate = new Date();

// let timerId = setInterval(() => console.log(currentDate), 3000);
 
// setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 1000 * 30);


// Задание 4


// function delayForSecond(callback) {
//       setTimeout(callback, 1000);
//    }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })



// Задание 5


// function delayForSecond(cb) {
//      setTimeout(() => {
//        console.log("Прошла одна секунда");
//        if (cb) {
//          cb();
//        }
//      }, 1000);
//    }
   
//    function sayHi(name) {
//      console.log(Привет, ${name}!);
//    }
   
//    sayHi("Глеб", delayForSecond());