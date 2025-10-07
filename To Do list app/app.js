let todoId = 0;
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');

    addTodoBtn.addEventListener('click', addTodo);

    function addTodo() {
      let todoText = todoInput.value.trim();
      if (todoText) {
        let todoHtml = `
          <li class="todo-item" data-id="${todoId}">
            <input type="checkbox" onchange="toggleCompleted(${todoId})">
            <span>${todoText}</span>
            <button class="editButton" onclick="editTodo(${todoId})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="deleteButton" onclick="deleteTodo(${todoId})"><i class="fa-solid fa-trash"></i></button>
          </li>
        `;
        todoList.insertAdjacentHTML('beforeend', todoHtml);
        todoId++;
        todoInput.value = '';
      }
    }

    function toggleCompleted(id) {
      let todoElement = document.querySelector(`li[data-id="${id}"]`);
      let checkbox = todoElement.querySelector('input');
      let span = todoElement.querySelector('span');
      if (checkbox.checked) {
        span.style.textDecoration = 'line-through';
      } else {
        span.style.textDecoration = 'none';
      }
    }

    function editTodo(id) {
  let todoElement = document.querySelector(`li[data-id="${id}"]`);
  let todoText = todoElement.querySelector('span').textContent;
  todoElement.innerHTML = `
    <input class="savetext" type="text" value="${todoText}" id="edit-input-${id}">
    <button class="save-btn" onclick="saveEdit(${id})">Save</button>
    <button class="cancel-btn" onclick="cancelEdit(${id}, '${todoText}')">Cancel</button>
  `;
}

function saveEdit(id) {
  let todoElement = document.querySelector(`li[data-id="${id}"]`);
  let newTodoText = todoElement.querySelector('input').value.trim();
  if (newTodoText !== '') {
    todoElement.innerHTML = `
      <input type="checkbox" onchange="toggleCompleted(${id})">
            <span>${newTodoText}</span>
            <button class="editButton" onclick="editTodo(${id})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="deleteButton" onclick="deleteTodo(${id})"><i class="fa-solid fa-trash"></i></button>
    `;
  } else {
    alert('Task cannot be empty!');
  }
}

function cancelEdit(id, newTodoText) {
  let todoElement = document.querySelector(`li[data-id="${id}"]`);
  todoElement.innerHTML = `
        <input type="checkbox" onchange="toggleCompleted(${id})">
            <span>${newTodoText}</span>
            <button class="editButton" onclick="editTodo(${id})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="deleteButton" onclick="deleteTodo(${id})"><i class="fa-solid fa-trash"></i></button>
  `;
}

    function deleteTodo(id) {
      let todoElement = document.querySelector(`li[data-id="${id}"]`);
      todoElement.remove();
    }