/*"use strict";*/

//Написать функцию generateTable, которая принимает на вход
// массив объектов и создает таблицу. Функция не должна быть
// привязана к конкретным названиям свойств. Заголовки ячеек
// - названия свойств в верхнем регистре.
let articles = [
    {
        id: 1,
        title: "JS",
        text: "About JS",
        author: "Max"
    },
    {
        id: 2,
        title: "PHP",
        text: "About PHP",
        author: "Ivan"
    },
    {
        id: 3,
        title: "DataBase",
        text: "About DB",
        author: "Paul"
    },
    {
        id: 4,
        title: "HTML",
        text: "About HTML",
        author: "Paul"
    }
];

let goods = [
    {
        title: "Piano",
        price: 3000,
        count: 25
    },
    {
        title: "Guitar",
        price: 1200,
        count: 40
    },
    {
        title: "Drum",
        price: 2700,
        count: 12
    },
    {
        title: "Flute",
        price: 900,
        count: 50
    },
    {
        title: "Harp",
        price: 3400,
        count: 5
    }
];
console.log(goods);
console.log(Object.values(goods[1]));
//let tableArea = document.getElementsByClassName("userBlock");

function generateTable(arr) {
   let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.append(thead, tbody);

    let theadRow = thead.insertRow();
    console.log(Object.keys(arr[0]))
    for (let key of Object.keys(arr[0])) {
        let cell = theadRow.insertCell();
        cell.innerText = key.toUpperCase();
    }
    for (let elem of arr) {
        let row = tbody.insertRow();
        for (let value of Object.values(elem)) {
            let cell = row.insertCell();
            cell.innerText = value;
        }
    }

// Adding the entire table to the body tag
    document.getElementById('body').append(table);
}
generateTable(goods)
generateTable(articles)

//Вывести в html информацию о животных. В html вместо
// значений true / false выводить: Есть / Нет

let animals = [
    {
        "name": "Люся",
        "age": "1 год",
        "color": "трехцветная",
        "additional_info": {"vaccinations": true, "passport": true}
    },
    {
        "name": "Том",
        "age": "3 месяца",
        "color": "белый",
        "additional_info": {"vaccinations": false, "passport": false}
    },
    {
        "name": "Макс",
        "age": 2,
        "color": "серый",
        "additional_info": {"vaccinations": false, "passport": true}
    },
    {
        "name": "Василий",
        "age": 3,
        "color": "черный",
        "additional_info": {"vaccinations": true, "passport": true}
    }
];

let animalSection = document.querySelector(".animalBlock");
console.log(animals);

for (let animal of animals) {
    let card = document.createElement("div");
    card.classList.add("card1");
    card.innerHTML = `
        <p>Имя: ${animal.name}</p>
        <p>Возраст: ${animal.age}</p>
        <p>Цвет: ${animal.color}</p>
        <p>Дополнительная информация:</p>
    `;
    let vacInfo = document.createElement("p");
    if (animal.additional_info.vaccinations === true) {
        vacInfo.innerText = "Вакцинация: есть";
    } else {
        vacInfo.innerText = "Вакцинация: нет";
    }
    let passportInfo = document.createElement("p");
    if (animal.additional_info.passport === true) {
        passportInfo.innerText = "Паспорт: есть";
    } else {
        passportInfo.innerText = "Паспорт: нет";
    }
    card.append(vacInfo,passportInfo);
    animalSection.append(card);
}













