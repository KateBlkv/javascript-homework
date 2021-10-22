"use strict"

// Задача 2

let num1 = 1;
let num2 = 5;
let oprtr = "/";

switch (oprtr) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    default:
        console.log("Некорректные данные");
        break;
}

// Задача 3

let pl = 10;
let soap = 50;
while (pl > 0 && soap > 0) {
    pl -= 1;
    soap -= 0.5;
    if (pl === 0 && soap >0) {
        console.log(`Моющего средства осталось ${soap}.`);
    } else if (soap === 0 &&  pl > 0) {
        console.log(`Грязных тарелок осталось ${pl}.`);
    } else if (pl === 0 && soap === 0) {
        console.log("Все чисто, моющее средство кончилось");
    }
}

// Задача 4

let compNum = parseInt(Math.random() * 10);
console.log(compNum);
let userNum = parseInt(prompt("Введите число"));

while (compNum !== userNum || userNum !== 0) {

    if (compNum > userNum) {
        console.log("Загаданное число больше");
        userNum = parseInt(prompt("Введите число"));
    } else if (compNum < userNum) {
        console.log("Загаданное число меньше");
        userNum = parseInt(prompt("Введите другое число"));
    } else if (compNum === userNum) {
        console.log("Вы угадали!");
        break;
    } else if (compNum === 0) {
        console.log("Выход из программы");
        break;
    }
}

