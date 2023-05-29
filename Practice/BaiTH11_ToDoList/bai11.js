let addBtn = document.querySelector('#add')
let todoList = document.querySelector('#todo-list')
let input = document.querySelector('#input')
const addToDo = () => {
    let div = document.createElement('div');
    let checkbox = document.createElement('input');
    let todo = document.createElement('p');
    let del = document.createElement('ion-icon');
    div.classList.add('todo')
    checkbox.setAttribute('type', 'checkbox')
    del.setAttribute('onclick', 'del(this)')
    del.setAttribute('name', 'trash-outline')
    todo.innerHTML = input.value;
    todoList.appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(todo);
    div.appendChild(del);
    input.value = ''
}

const del = (elements) => {
    let delElement = elements.parentNode
    delElement.classList.add('remove')
}