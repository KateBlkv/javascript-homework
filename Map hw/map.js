"use strict";

//Задача №1
//
// Создать Map
// Добавить в Map несколько пар, где ключ - логин пользователя,
// значение - название города, в котором живет пользователь
// Написать функцию, которая принимает на вход Map и название
// города. Функция должна создать и вернуть массив логинов, которые
// соответствуют переданному городу

let userMap = new Map();

userMap.set('Anton', 'New-York').set('Andrey', 'Mexico').set('Katya', 'Helsinki')
    .set('Anton1', 'New-York').set('Andrey1', 'Mexico').set('Kate', 'Helsinki');
console.log(userMap);


function getLogins(map, city) {
    let logins = [];
    for (let pair of map.entries()) {
        if (pair[1].toLowerCase() === city.toLowerCase()) logins.push(pair[0]);
    }
    return logins;
}

console.log(getLogins(userMap, "helsinki"));

//Написать функцию, которая принимает на вход массив слов и возвращает
// количество одинаковых слов с массиве в виде Map (ключ - слово, значение
// - количество повторений слова)

let arr = ['asd', 'asd', 44, 56, 'sdf','z','sfd','sdf','sdf'];
function getMap(arr) {
    let newMap = new Map();
    for (let item of arr) {
        if (newMap.has(item)) {
            newMap.set(item, newMap.get(item) + 1);
           } else {
            newMap.set(item, 1);
        }
    }
    return newMap;
}

console.log(getMap(arr));

let customerMap = new Map();
customerMap.set(45, {name: "Павел", id: 45, age: 23});
customerMap.set(87, {name: "Олег", id: 87, age: 45});
customerMap.set(91, {name: "Максим", id: 91, age: 18});
customerMap.set(99, {name: "Евгения", id: 99, age: 66});
customerMap.set(101, {name: "Алексей", id: 101, age: 34});
customerMap.set(112, {name: "Клара", id: 112, age: 39});

// Написать функцию, которая принимает на вход Map, ageFrom и ageTo.
// Функция должна создать и вернуть новую Map, в которую войдут все покупатели,
// возраст которых находится в диапазоне от from до to (не включая to)

function getSorted(map, from, to) {
    let newMap = new Map();
    for (let pair of map.entries()) {
        if (pair[1].age >= from && pair[1].age < to) newMap.set(pair[0], pair[1]);
    }
    return newMap;
}

console.log(getSorted(customerMap,18,35));