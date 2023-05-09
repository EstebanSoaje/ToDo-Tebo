const todoForm = document.getElementById('todo_form');

todoForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = todoForm['todo_name'].value;
    const url = todoForm['todo_url'].value;
    const description = todoForm['todo_description'].value;
    console.log(name, url, description);
});