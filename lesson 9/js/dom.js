"use strict";


// items-section: Добавить изображения после h1

let images = [
    "https://picsum.photos/1000/1000?random=1",
    "https://picsum.photos/1000/1000?random=2",
    "https://picsum.photos/1000/1000?random=3"
];

let itemTitles = document.querySelectorAll(".item_title");
//let itemTitles = document.getElementsByClassName("item_title");
console.log(itemTitles);
for (let i = 0; i < itemTitles.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", images[i]);
    img.classList.add("item__img");
    itemTitles[i].after(img);
}
// уменьшить стоимость в 2 раза
let prices = document.querySelectorAll(".item__price");
prices = Array.from(prices);
prices.forEach((span) => span.innerText = +span.innerText / 2);

Array.from(document.querySelectorAll(".item__price")).forEach((span) => span.innerText = +span.innerText / 2);

/*
let fn = function (element, index, arr) {
    element.innerText = +element.innerText / 2
};

for (let i = 0; i < prices.length; i++) {
    fn(prices[i], i, prices);
}
*/

// items-section: уменьшить стоимость в два раза


// cards-section: отобразить информацию о товарах, информацию о каждом товаре отображать в отдельном div:
/*
<div class="card">
    <h2></h2> название
    <img class="card__image" src=""> изображение
    <p></p> стоимость
    <div class="card__count-info">
        <button>-</button>
        <span>0</span> если значение count равно 0, вывести в div - Нет в наличии
        <button>+</button>
    </div>
</div>
*/



let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 0,
        img: "https://picsum.photos/id/345/1000"
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40,
        img: "https://picsum.photos/id/988/1000"
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12,
        img: "https://picsum.photos/id/123/1000"
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 0,
        img: "https://picsum.photos/id/162/1000"
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5,
        img: "https://picsum.photos/id/163/1000"
    }
};
console.log(Object.keys(goods));

let cardSection = document.querySelector(".cards-section");
// values создал массив с объектами
let i = 0;
let idGoods = Object.keys(goods);
Object.values(goods).forEach((obj) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.innerText = obj.title;

    let img = document.createElement("img");
    img.classList.add("card__image");
    img.setAttribute("src", obj.img);

    let price = document.createElement("p");
    price.innerText = `${obj.price} rub.`;

    let count = document.createElement("div");
    count.classList.add("card__count-info");
   /* count.id = idGoods[i];*/
    if (obj.count) { //  если 0, то false, проверки на отр число нет, при отриц будет  true
        //innerHTML - для вставки html определяет теги
        //всегда ПЕРЕЗАПИСЬ

        count.innerHTML = `
        <button id="${idGoods[i]}">-</button>
        <span>0</span>
        <button id="${idGoods[i]}">+</button>
        `;
    } else {
        count.innerHTML = "<span>Нет в наличии</span>";
    }
    card.append(title, img, price, count);
    cardSection.append(card);
    i++;
})

let counter = {};
for (let key of Object.keys(goods)) {
    counter[key] = 0;
}
console.log(counter)
let buttonsMinus = document.querySelectorAll(
    ".card__count-info button:first-child");
let buttonsPlus = document.querySelectorAll(
    ".card__count-info button:last-child");
for (let buttonMinus of buttonsMinus) {
    buttonMinus.addEventListener('click', countMinus);
}
for (let buttonPlus of buttonsPlus) {
    buttonPlus.addEventListener('click', countPlus);
}
function countMinus() {
    if (counter[this.id] > 0) {
        counter[this.id]--;
        this.nextElementSibling.innerText = counter[this.id];
    }
}
function countPlus() {
   if (counter[this.id] < goods[this.id].count) {
        counter[this.id]++;
       this.previousElementSibling.innerText = counter[this.id];
    }
}


// books-section: отобразить информацию о книгах
/*
для каждого жанра отдельный div:
<div>
    <h2></h2> название жанра
    <div class="books"> все книги одного жанра
        <article> книга
            <span></span> название книги
            <img> обложка
            <p></p> описание
            <a>Читать</a>
        </article>
    </div>
</div>
*/



let booksByGenre = [
    {
        genreName: "Crafts",
        books: [
            {
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [
            {
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];

/*<div>
    <h2></h2> название жанра
    <div class="books"> все книги одного жанра
        <article> книга
            <span></span> название книги
            <img> обложка
            <p></p> описание
            <a>Читать</a>
        </article>
    </div>
</div>*/
//function addBooks(booksArr, element){
    // перебор booksArr:
    // создать div
    // создать h2
    // создать div class="books"
    // добавить h2 и div class="books" в div
    // перебор booksArr.books
    // создать article, добавить содержимое через innerHTML
    // добавить article в div

console.log(booksByGenre);

let booksSection = document.querySelector(".books-section");
function addBooks(booksArr, element) {
    for (let obj of booksArr) {
        let genreDiv = document.createElement("div");

        let title = document.createElement("h2");
        title.innerText = obj.genreName;

        let bookDiv = document.createElement("div");
        bookDiv.classList.add("books");

        genreDiv.append(title, bookDiv);

        for (let item of obj.books) {
            let article = document.createElement("article");
            /*let span = document.createElement("span");
            span.innerText = item.title;

            let img = document.createElement("img");
            img.classList.add("card__image");
            img.setAttribute("src", item.img);

            let p = document.createElement("p");
            p.innerText = item.description;

            article.append(span, img, p);*/
            article.innerHTML = `
            <span> ${item.title}</span> название книги
            <img class="card__image" src=${item.img}>
            <p>${item.description}</p> 
            <a href="#">Читать</a>
            `;

            bookDiv.append(article);
        }

        element.append(genreDiv);
    }
    // создать div
    // создать h2
    // создать div class="books"
    // добавить h2 и div class="books" в div
    // перебор booksArr.books
    // создать article, добавить содержимое через innerHTML
    // добавить article в div

}

addBooks(booksByGenre, booksSection);