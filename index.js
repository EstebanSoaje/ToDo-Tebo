import { saveTask } from './firebase.js';

window.addEventListener('DOMContentLoaded', () => {

});

const taskForm = document.getElementById('taskForm')

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = taskForm['title'];
    const date = taskForm['date'];
    const time = taskForm['time'];
    const description = taskForm['description'];

    saveTask(title.value, date.value, time.value, description.value);
    
    taskForm.reset();
    console.log('submit');
});