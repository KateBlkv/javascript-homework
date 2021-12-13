"use strict";

let getTask = JSON.parse(localStorage.getItem("tasks"));
console.log(getTask)
function getHTML(getTask) {

    let titleSection = document.querySelector(".title");
    let title = document.createElement("div");
    if (!getTask.length) {
        title.innerHTML = `
            <h2>Список задач пуст</h2>
        `;
    } else {
        title.innerHTML = `
            <h2>Список задач</h2>
        `;
    }
    titleSection.append(title);

    let mainSection = document.querySelector(".main");
    /*let list = document.createElement("div");*/
    for (let task of getTask) {
        /*list.classList.add("card");*/
        /*let date = new Date(task.day);*/
        let card = document.createElement("div");
        card.innerHTML = `
        <div id="${task.id}" class="card">
        <h4>${task.name.toUpperCase()}</h4>
        <p>${task.description}</p>
        <p>Выполнить к: ${new Intl.DateTimeFormat().format(task.day)}</p>
        </div>
    `;
        mainSection.append(card);
    }

    let button = document.createElement("div");
    button.classList.add("btnDiv");
    button.innerHTML = `
            <button class="button">Удалить задачу</button>
        `;
    if (getTask.length) {
        mainSection.append(button);
    }

}

getHTML(getTask);

let selectedCards = [];

function chooseCards() {
    let selectedCards = [];
    let allCards = document.querySelectorAll(".card");
    console.log(allCards);
    /*debugger*/
    for (let card of allCards) {
        card.addEventListener("click", handleCardClick);
    }
}


function handleCardClick(event) {
    let element = event.target;
    if (!element.classList.contains("card")) {
        element = element.parentElement;
    }
    element.classList.toggle("active");
    if (element.classList.contains("active")) selectedCards.push(Number(element.id))
    else selectedCards = selectedCards.filter(item => item !== Number(element.id))
    console.log(selectedCards)
}

chooseCards();

function deleting() {
    let clickBtn = document.querySelector(".button");
    clickBtn.addEventListener("click", deleteCard);
}

deleting();

function cleanHTML() {
    let titleSection = document.querySelector(".title");
    titleSection.innerHTML="";
    let mainSection = document.querySelector(".main");
    mainSection.innerHTML="";
}


function deleteCard(event) {
    let nowTasks = JSON.parse(localStorage.getItem("tasks"));
    let filteredCards = nowTasks.filter(item => !selectedCards.includes(item.id));
    console.log(filteredCards);
    localStorage.setItem("tasks", JSON.stringify(filteredCards));
    cleanHTML();
    getHTML(JSON.parse(localStorage.getItem("tasks")));
    chooseCards();
    deleting();
}


