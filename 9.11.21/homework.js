"use strict";

//задача 1

let yourNumber = 2;

function getDay(num) {
    if (num > 7 || num < 1) {
        return "Некорректный ввод";
    } else if (num === 1) return "Понедельник";
    else if (num === 2) return "Вторник";
    else if (num === 3) return "Среда";
    else if (num === 4) return "Четверг";
    else if (num === 5) return "Пятница";
    else if (num === 6) return "Суббота";
    else return "Воскресенье";
}

console.log(getDay(yourNumber));

//Задача 2
// Написать функцию, котора добавляет в массив значение, только, если его не существует

let myArr = ["Понедельник", "Среда", 12, "Суббота"];
let myWord = 12;
let pushArr = (arr, word) => {
  if (!arr.includes(word)) arr.push(word);
};
pushArr(myArr, myWord);
console.log(myArr);

// Задача 3
// Написать функцию, которая возвращает не более 3 случайных элементов из переданного в нее массива.

let returnArr = arr => {
    if (arr.length < 4) return arr;
    else {
        let newArr = [];
        for (let i = 1; i < 4; i++) {
            let index =Math.floor(arr.length * Math.random());
            if (!newArr.includes(arr[index])) newArr.push(arr[index]);
        }
        return newArr;
    }
};

console.log(returnArr(myArr));


// Задача 4
// Написать функцию, которая вернет самое длинное слово в предложении

let text = "самое длинное слово в предложении";

let getLong = text => {
    let arrFromText = text.split(" ");
    let maxIndex = 0;
    for (let i = 1; i < arrFromText.length; i++) {
        if (arrFromText[i].length > arrFromText[maxIndex].length) maxIndex = i;
    }
    return `Самое длинное слово "${arrFromText[maxIndex]}"!`;
};

console.log(getLong(text));

// Задача 5
// Создать массив из пересечений использовать методы filter + includes

let first = ["Апрель", "Июль", "Октябрь", "Май"],
second = ["Май", "Январь", "Декабрь", "Октябрь"];

let getIntersect = (arr1, arr2) => {
  return arr1.filter(item => arr2.includes(item));
};

console.log(getIntersect(first, second));

// Задача 6
// Проверить, есть ли в* массиве temps температура больше 500, вывести
// информацию об этом в консоль. Использовать метод из файла functions3.js

let temps = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];
let min = 500;

function ifTemp(arr, min) {
    for (let arrElement of arr) {
        for (const element of arrElement) {
            if (element >= min) return `есть температура выше ${min}!`
        }
    }
}

console.log(ifTemp(temps, min));

// Задача 7
// Написать функцию, которая принимает на вход строку и возвращает новую,
// в которой все буквы строчные, а первая буква заглавная.

function getUpLetter(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

let text2 = "sDJFNV KHndhf kfkfhg";
console.log(getUpLetter(text2));