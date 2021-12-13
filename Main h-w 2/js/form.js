"use strict";

/*function setSuccess(elem) {
    elem.nextElementSibling.innerText = `Все заполнено верно`;
    elem.nextElementSibling.className = 'message success active';
}*/

function setError(elem, key) {
    let messages = {
        valueMissing: 'Поле должно быть заполнено',
        tooShort: `Минимальное количество символов ${elem.minLength}`,
        tooLong: `Максимальное количество символов ${elem.maxLength}`,
        rangeUnderflow: `Минимальное количество символов ${elem.minLength}`,
        rangeOverflow: `Максимальное количество символов ${elem.maxLength}`

    };
    document.getElementById("msg1").innerText = messages[key];
    /*elem.nextElementSibling.className = 'message error active';*/
}
const registrationForm = document.forms.taskForm;
registrationForm.elements.task.addEventListener('input'/*можно keyup*/, function (){
    /*document.getElementById("added").innerText='';*/
    if (this.validity.valueMissing) setError(this, 'valueMissing');
    else if (this.validity.tooShort) setError(this, 'tooShort');
    else if (this.validity.tooLong) setError(this, 'tooLong');
    else  document.getElementById("msg1").innerText='';
})
registrationForm.addEventListener('click'/*можно keyup*/, function (){
    document.getElementById("added").innerText='';
})
/*registrationForm.elements.date.addEventListener('click', function (){
    document.getElementById("added").innerText='';})*/

registrationForm.elements.date.addEventListener('blur', event => {

    const value = new Date(event.target.value)
    value.setMinutes(value.getMinutes() + value.getTimezoneOffset())
    console.log(value.getTime());
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    console.log(today.getTime())
    if (value.getTime() < today.getTime()) {
        document.getElementById("msg3").innerText='Дата не может быть в прошлом';
    } else if (!value.getTime()) {
        document.getElementById("msg3").innerText='Введите дату корректно';
    } else document.getElementById("msg3").innerText='';
});

let tasks=[];
localStorage.setItem("tasks", JSON.stringify(tasks));
let counter = 0;

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // this ссылка на document.forms.lesson
    let task={};
    let success = 0;
    let inTask = registrationForm.elements.task;
    if (inTask.validity.valueMissing || inTask.validity.tooShort || inTask.validity.tooLong) {
        document.getElementById("msg1").innerText ="Поле заполнено некорректно";

    } else {
        document.getElementById("msg1").innerText=''
        success+=1;
        task.name = inTask.value;
    }

    let description = registrationForm.elements.description;
    if (description.validity.valueMissing) {
        document.getElementById("msg2").innerText ="Поле заполнено некорректно";

    } else {
        document.getElementById("msg2").innerText=''
        success+=1;
        task.description = description.value;
    }

    const value = new Date(registrationForm.elements.date.value)
    value.setMinutes(value.getMinutes() + value.getTimezoneOffset())
    console.log(value.getTime());
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    /*console.log(today.getTime())*/
    if ((value.getTime() < today.getTime()) || !value.getTime()) {
        document.getElementById("msg3").innerText='Введите дату корректно';
    } else {
        success+=1;
        task.day = value.getTime();
        document.getElementById("msg3").innerText='';
    }
console.log(task);
    if (success===3) {
        task.id = counter;
        counter+=1;
        document.getElementById("added").innerText='Задание добавлено';

        /*console.log(taskWCount);
        console.log(localStorage.getItem("tasks"))
        console.log(JSON.parse(localStorage.getItem("tasks")));*/
        let getTask = JSON.parse(localStorage.getItem("tasks"));
        getTask.push(task)
        console.log(getTask);

        localStorage.setItem("tasks", JSON.stringify(getTask));
        document.taskForm.reset();
      /*  console.log(JSON.parse(localStorage.getItem("tasks")));*/

    }


});

/*registrationForm.elements.button.addEventListener('blur', function(){
    document.getElementById("added").innerText="";});*/


