const ul = document.querySelector('ul');
const li = document.getElementsByTagName('li');
const addBtn = document.querySelector('.add-btn');
const inputToDo = document.querySelector('.todo-input');
const inputPopup = document.querySelector('.popup-input');
const popup = document.querySelector('.popup');
const addPopup = document.querySelector('.accept');
const close = document.querySelector('.cancel');
const alertInfo = document.querySelector('.alert-info');
const popupInfo = document.querySelector('.popup-info');

let newTask;
let numId = 0;
let editToDO;

const addTask = () => {
    if(inputToDo.value !== '') {
        numId++;
        newTask = document.createElement('li');
        newTask.textContent = inputToDo.value;
        newTask.setAttribute('id', `${numId}`);
        ul.appendChild(newTask);
        inputToDo.value = '';
        alertInfo.innerText = '';
        createToolArea()   
    }else {
        alertInfo.innerText = 'Musisz wpisac treść..'
    }
}

const enterCheck = (e) => {
    if(e.key === 'Enter') {
        addTask();
    }
}

const createToolArea = () => {
    const toolArea = document.createElement('div');
    toolArea.classList.add('tools');
    newTask.appendChild(toolArea);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolArea.appendChild(completeBtn)
    toolArea.appendChild(editBtn)
    toolArea.appendChild(deleteBtn)
    

}

const checkClick = (e) => {
    if(e.target.classList.value !== '') {
        if(e.target.closest('button').classList.contains('complete')) {
            e.target.closest('li').classList.toggle('completed');
            e.target.closest('button').classList.toggle('completed');
        }else if(e.target.closest('button').classList.contains('edit')){
            showPopup(e);
        }else if(e.target.closest('button').classList.contains('delete')) {
            deleteTask(e);
        }
    }   
}

const showPopup = (e) => {
    const idToDo = e.target.closest('li').id;
    editToDO = document.getElementById(idToDo);
    inputPopup.value = editToDO.firstChild.textContent;
    popup.style.display = 'flex';
}

const closePopup = () => {
    popup.style.display = 'none';
    inputPopup.value = '';
    popupInfo.value = '';
}

const changePopup = () => {
    popup.style.display = 'none';
    editToDO.firstChild.textContent = inputPopup.value;
}

const deleteTask = (e) => {
    const taskToRemove = e.target.closest('li');
    taskToRemove.remove();
    if(li.length === 0) {
        alertInfo.innerText = 'Brak zadań na liście';
    }
}

addBtn.addEventListener('click', addTask);
inputToDo.addEventListener('keyup', enterCheck);
ul.addEventListener('click', checkClick);
close.addEventListener('click', closePopup);
addPopup.addEventListener('click', changePopup)
