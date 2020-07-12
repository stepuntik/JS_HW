'use strict';


//=====================TASK 1========================

// const name = 'Генератор защитного поля';
// let price = 1000;
// price += 1000;

// const message = `Выбран «${name}», цена за штуку ${price} кредитов.`;

// console.log(message);


//=====================TASK 2========================

// const total = 25;
// const ordered = 20;

// if (ordered > total) {
//     console.log("На складе недостаточно товаров!");
// } else if (ordered <= total) {
//     console.log("Заказ оформлен, с вами свяжется менеджер");
// }


//=====================TASK 3========================

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const input = prompt('Введите пароль!');

// METHOD 1:

// if (input === null) {
//     message = 'Отменено пользователем!';
// } else if (input === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message = 'Доступ запрещен, неверный пароль!';
// }

// METHOD 2:

// switch (input) {
//     case ADMIN_PASSWORD:
//         message = 'Добро пожаловать!';
//         break;
//     case null:
//         message = 'Отменено пользователем!';
//         break;
//     default:
//         message = 'Доступ запрещен, неверный пароль!';
// }

// alert(message);

//=====================TASK 4========================

// let credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// let result;

// const count = prompt('Сколько дроидов Вы хотите приобрести?');

// if (count === null) {
//     result = 'Отменено пользователем!';
// } else {
//     totalPrice = pricePerDroid * count;
// }

// if (!result) {
//     if ((credits - totalPrice) <= 0) {
//         console.log('Недостаточно средств на счету!');
//     } else {
//         credits = credits - totalPrice;
//         console.log(`Вы купили ${count} дроидов, на счету осталось ${credits} кредитов.`);
//     }
// } else {
//     console.log(result);
// }

// solved only thanks to "https://www.cyberforum.ru/javascript-beginners/thread2527054.html"

// Please explain why we did it this way? Why did we use !result ?


//=====================TASK 5========================

// const chinaCost = 100;
// const chileCost = 250;
// const australiaCost = 170;
// const indiaCost = 80;
// const jamaicaCost = 120;

// let message;

// let countryChoice = prompt('Укажите страну доставки:');

// if (countryChoice === null) {
//     message = 'Страна не выбрана';
// } 

// if (countryChoice !== null) {
//     countryChoice = countryChoice.toLowerCase();
// }

// switch (countryChoice) {
//     case 'китай':
//         message = `Доставка в Китай будет стоить ${chinaCost} кредитов`;
//         break;
//     case 'чили':
//         message = `Доставка в Чили будет стоить ${chileCost} кредитов`;
//         break;
//     case 'австралия':
//         message = `Доставка в Австралию будет стоить ${australiaCost} кредитов`;
//         break;
//     case 'индия':
//         message = `Доставка в Индию будет стоить ${indiaCost} кредитов`;
//         break;
//     case 'ямайка':
//         message = `Доставка на Ямайку будет стоить ${jamaicaCost} кредитов`;
//         break;
//     default:
//         alert('В вашей стране доставка не доступна');
// }

// console.log(message);

//=====================TASK 6========================

// let input;
// let total = 0;

// do {
//     input = prompt('Введите число');
// } while (input = Number)

// if (input === null) {
//     alert('Общая сумма чисел равна [сумма]');
// } else (input) {
//     total += 1;
// }


let input;
let total = 0;

while (input !== null) {
    input = prompt("Введите число:");

    if (input !== null) {
        let num = (Number(input));

        if (Number.isNaN(num)) {
            alert("Было введено не число, попробуйте еще раз");
        } else {
            total += num;
        }
    }
}

alert(`Общая сумма чисел равна ${total}`);

/* Полностью взял с:
https://github.com/goitacademy/javascript-homework/tree/master/homework-01 */




//---------------КОНСПЕКТ---------------------

// const a = false;
// const b = 'JavaScript is awesome'.toLowerCase();
// console.log(typeof a, typeof b);


// let name = "Bublik!";
// prompt(name); // undefined


// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

// const a = 5;
// const b = 10;

// console.log(a + b);

// console.log(Number.parseFloat('5.456xdfasdfpx'));


// const invalidNumber = Number('51asd'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// console.log(Math.pow(5, 4));
// console.log(Math.random() * (10 - 1) + 1); // случайное число от 1 до 10

// const message = 'Welcome to Bahamas!';

// console.log(message.includes('Bahamas'));

// const name = 'Mango';
// const age = 2;
// const mood = 'happy';

// const newMessage = `Hello! My name is ${name}, and I am ${age} years old. I am very ${mood} today!!!`

// console.log(newMessage);

// const num = 31;

// const result = num > 32 || num < 30;

// console.log(result);


// const min = 10;
// const max = 30;
// const value = 15;

// const isInRange = value > 10 && value < 30;

// let message;

// if(isInRange) {
//     message = "Correct";
// } else {
//     message = "Incorrect";
// }

// console.log(message);


/////

// const min = 10;
// const max = 30;
// const value = 21;
// let message;

// if(value < 10) {
//     message = 'Less than 10';
// } else if(value > 20) {
//     message = 'Greater than 20';
// } else {
//     message = 'Something else';
// }

// console.log(message);

// console.log('qwerty'.includes('b'))


// const isActive = 9 > 10;
// const message = isActive ? 'Active' : 'Inactive';

// console.log(message);

// const TAKEOUT = 0;
// const COURIER = 1;
// const POST = 2;

// const promptLabel = `Выбери опцию доставки! ${TAKEOUT} - самовывоз, ${COURIER} - курьер, ${POST} - почта`;

// let userChoice = prompt(promptLabel);
// let message;

// if (userChoice === null) {
//     message = 'Пробуй ще';
// } else {
//     userChoice = Number(userChoice);
//     switch(userChoice) {
//         case TAKEOUT:
//             message = 'Вывози сам';
//             break;
//         case COURIER:
//             message = 'Привезу тебе';
//             break;
//         case POST:
//             message = 'Ожидайте доставки';
//             break;
//         default:
//             message = 'Ничего не выбрано';
//     }
// }

// console.log(message);


// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }


// let password = '';

// do {
//     password = prompt('Enter password longer than 4 symbols', '');
// } while (password.length < 5);

// console.log('Enter password', password);






