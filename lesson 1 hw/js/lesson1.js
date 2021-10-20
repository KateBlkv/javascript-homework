"use strict"

let aParal = 2;
let bParal = 3;
let cParal = 4;
let sqrParal = (aParal * bParal + aParal * cParal + bParal * cParal) * 2;
console.log(sqrParal);

let n = 56;
let n2 = n % 10;
let n1 = Math.floor(n / 10);
let nSum = n1 + n2;
let text = `Значение n равно ${n}, сумма его цифр равна ${nSum}.`
console.log(text);

let firstNum = 5;
let secondNum = 7;
let sum = firstNum + secondNum;
firstNum = sum - firstNum;
secondNum = sum - firstNum;
console.log(firstNum, secondNum);
