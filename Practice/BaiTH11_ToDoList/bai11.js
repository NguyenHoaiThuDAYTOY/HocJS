let addBtn = document.getElementById('add')
let todoList = document.getElementById('todo-list')
let input = document.getElementById('input')
const addToDo = () => {
    let div = document.createElement('div');
    div.classList.add('todo')
    let checkbox = document.createElement('input');
    let todo = document.createElement('p');
    let del = document.createElement('ion-icon');
    checkbox.setAttribute('type', 'checkbox')
    del.setAttribute('onclick', 'del(this)')
    del.setAttribute('name', 'trash-outline')
    todo.innerHTML = input.value;
    del.innerHTML = 'x';
    todoList.appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(todo);
    div.appendChild(del);
    input.value = ''
}

const del = (elements) => {
    let delElement = elements.parentNode
    console.log(delElement)
    delElement.classList.add('remove')
}