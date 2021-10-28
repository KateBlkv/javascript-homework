"use strict";

// Задача 1

function word(count) {
    let endA = [2, 3, 4];
    let n = count % 10;
    if (n == 1 && count != 11) return `${count} товар`;
    else if (endA.includes(n)) return `${count} товара`;
    return `${count} товаров`;
}

console.log(word(38));

// Задача 2

function range(start, end, step = 1) {
    let answer = [];
    for (let i = start; i <= end; i += step) {
        answer.push(i);
    }
    return answer;
}

console.log(range(1,10, 2));

// Задача 3

let a ;

function getType(a) {
    return typeof a;
}

console.log(getType(a));

function ifUndefined(a) {
    return getType(a) === "undefined";
}

console.log(ifUndefined(a));

function ifNum(a) {
    return getType(a) === "number";
}

console.log(ifNum(a));
