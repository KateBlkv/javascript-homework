"use strict"

// Задача 1

let nums;
nums = [[23, 56, 75, -90, 123], [17, 0, -6429, -122],
    [19, 86, 55, -3, 900, 0, 0], [4, 9, -2]];


let sum = 0;
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
        nums[i][j] += 10;
        sum += nums[i][j];
    }
}

console.log(nums);
console.log(sum);

//Задача 2

let array1 = [8, 51, 32, 5, 237, 97, 75];
let maxElem = array1[0];
let minElem = array1[0];
let indexMax = 0;
let indexMin = 0;
for (let i = 0; i < array1.length; i++) {
    if ( maxElem < array1[i+1]) {
        maxElem = array1[i+1];
        indexMax = i + 1;
    }
    if ( minElem > array1[i+1]) {
        minElem = array1[i+1];
        indexMin = i + 1;
    }
}
array1[indexMax] = minElem;
array1[indexMin] = maxElem;

console.log(array1);

// Задача 3

let array2 = [124, -3, 64, -38, -56, -7, 0, 159];
let newArray2 = [];

for (let i = array2.length - 1; i >= 0; i--) {
    if (array2[i] < 0){
        newArray2.push(array2[i]);
        array2.splice(i, 1)
    }
}

console.log(array2);
console.log(newArray2);

// Задача 4

let logins = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];

let userLogin = prompt("Введите логин");

while (!logins.includes(userLogin)) {
    userLogin = prompt("Этот не подходит. Введите другой логин");
}

// Задача 4

let logins2 = ["Xodahe", "Gixath", "Qexeme", "Bolyky", "Fifiwu"];
let userLogin2 = prompt("Введите логин");

while (logins2.includes(userLogin2)) {
    userLogin2 = prompt("Такой уже есть. Введите другой логин");
}

logins2.push(userLogin2);
console.log(logins2);






