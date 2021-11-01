"use strict";
// Задача 1

let numbers = [3, 90, 5, -100, 50, 0, 560, 1];


function compareNums(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

numbers.sort(compareNums);
console.log(numbers);

// Задача 2

let isSpam = (text, ...spamWords) => {
    let counter =0;
    let splitText = text.toLowerCase().split(" ");
    let spam = spamWords.map(item => item.toLowerCase())
    for (let word of splitText) {
        if (!spam.includes(word)) continue
        counter++;
    }
    return Math.ceil(counter / splitText.length * 5);
};

let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit Dolores ipsum dolor ";
console.log(isSpam(text, "ipsum", "amet", "elit"));

// Задача 3

let someArr = [
    [4, 5,89,0],
    [14, 170, -330],
    [2, 45, 53,345, -876, 0, -5],
];
let newArr = someArr.map(item => {
    return item.map(item => item + 10).filter(item => item > 0)
});
console.log(newArr);
