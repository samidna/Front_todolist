"use strict";


let list = [];

function toDo() {
    let inp = document.getElementById('inp');
    let listUl = document.getElementById('listUl');
    let inpClass = document.getElementsByClassName('form-control')[0];
    if (inp.value.trim() === '') {
        inpClass.classList.add('is-invalid');
        alert('Empty field!');
    } else {
        list.push(inp.value);
        inp.value = ' ';
        inpClass.classList.remove('is-invalid');
    }
    view();
}

function Delete(index) {
    list.splice(index, 1);
    view();
}

function view() {
    let data = '';
    for (let i = 0; i < list.length; i++) {
        data += `<li class="list-group-item d-flex justify-content-between">${list[i]} <button onclick="Delete(${i})" class="btn btn-danger btn-sm">Delete</button> </li>  `;
    }
    listUl.innerHTML = data;
}