import { saveTask, getTasks, onSnapshot, collection, db } from './firebase.js';

const taskForm = document.getElementById('taskForm');
const tasksContainer = document.getElementById('task-container');

//se ejecuta al iniciar la pagina
window.addEventListener('DOMContentLoaded', async () => {
    
    onSnapshot(collection(db, "tasks"), (querySnapshot) => {

        let html = ''
        querySnapshot.forEach(doc => {
            const task = doc.data()
            html += `
            <div class="task">
                <h3>${task.title} </h3>
                <p>${task.description} </p>
            </div>
            `
        })
        tasksContainer.innerHTML = html;
    } )
});


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