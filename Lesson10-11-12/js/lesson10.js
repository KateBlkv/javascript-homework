// Написать функцию generateField(n) по генерации поля размером n x n.
// / Значение n не может быть меньше 3. Для 3х ячеек поля (для выбора ячейки
// использовать random) добавить атрибут prise. Значение атрибута prise -
// значение из объекта prises. Пример того, что должно получиться при генерации
// поля 4 Х 4 на изображении field.png.
//
let prises = {
     headphones: "Наушники",
     book: "Книга",
   postcard: "Открытка"
};

let priseFields = [];
while (priseFields.length < 3) {
    let x = Math.floor(Math.random() * (n*n-1));
    if (!priseFields.includes(x)) priseFields.push(x);
}

console.log(priseFields);

function generateField(n) {
    let table = document.createElement('table');
    table.classList.add("priseTable");


    let j = 0;
    for (let i = 0; i < n; i++) {

        let row = table.insertRow();
        for (let i = 0; i < n; i++) {
            let cell = row.insertCell();
            cell.id = j;
            if (priseFields.includes(j)) {
                cell.setAttribute("data-prise", "true");
                cell.innerText = "prise";
            }
            j++;
        }
    }


// Adding the entire table to the body tag
    document.querySelector(".field").append(table);
}

generateField(4);

document.querySelector(".field").addEventListener('click', getPrise);
let n = 3;
function getPrise(event) {
    let answer = n;
    for (let i = 0; i < n; i++) {
        let clickElement = event.target;
        let presentId = clickElement.id
        if (priseFields.includes(presentId)) {
            clickElement.innerText = "prise";clickElement.style.cssText = `
            background-color: yellow;
            color: black;
        `;

        } else {
            document.querySelector('.info').innerText = `У Вас осталось ${answer} попыток`;
            answer--;
        }
            }

}
/*
document.querySelector(".field").removeEventListener('click', getPrise);
document.querySelector('.info').innerText = "Повезет в другой раз";
*/

