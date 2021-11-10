"use strict";

// Задача 1
//Написать функцию, которая принимает на вход объект obj (например, goods),
// число from и число to. Если значение from и to не числа, а obj не объект,
// функция прерывает свою работу и возвращает false. Если данные валидны,
// функция формирует и возвращает новый ОБЪЕКТ с объектами, значения свойств
// price которых лежат в диапазоне от значения from до значения to, не включая to

let getPrice = (obj, from, to) => {
    if (typeof obj !== 'object' || typeof from !== "number" || typeof to !== "number")/* || obj === null)*/ return false;
    let newObj = obj;
    for (let item in newObj) {
        newObj[item]['price'] = Math.round((to - from) * Math.random()) + from;
        }
    return newObj
};

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50 },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

console.log(getPrice(goods, 500, 700));

// Задача 2
// Написать функцию, которая принимает на вход объект obj (например, goods),
// название (title) и количество (countToCart). Если значение title не строка,
// obj не объект, а count не число, функция прерывает свою работу и возвращает
// false. Функция должна найти товар с указанным названием (title): если количество
// позволяет, то уменьшить значение свойства count в переданном объекте на countToCart
// вернуть true, если не позволяет, то вывести информацию об этом в консоль и
// вернуть false.

let getCount = (obj, title, countToCart) => {
    if (typeof obj !== 'object' || typeof title !== "string" || typeof countToCart !== "number") return false;
    if (obj[title]['count'] - countToCart < 0) {
        console.log("Ошибка");
        return false;
    }
    obj[title]['count'] -= countToCart;
    return true;
};

console.log(getCount(goods, "piano", 10));
console.log(goods);

// Задача 2
// Написать функцию, которая принимает на вход объект obj (например, books) и
// автора (author). Создает и возвращает новый массив, в который войдут все книги
// указанного автора, если такого автора нет, возвращает пустой массив.

let getBooks = (obj, author) =>{
    let userBooks = [];
    for (let book of obj) {
        if (book.author.toLowerCase() === author.toLowerCase()) userBooks.push(book.title);
    }
    return userBooks;
};

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы'},
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Лермонтов', title: 'Тамань'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'},
    { author: 'Пушкин', title: 'Руслан и Людмила'},
    { author: 'Лермонтов', title: 'И скучно, и грустно'},
];

console.log(getBooks(books, "фет"));


