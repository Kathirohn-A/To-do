const todoList = document.getElementById('todo-list');
const addForm = document.getElementById('add-item-form');
const newTaskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-button');

// Function to add a new task to the list
function addTask(task) {
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  });
  const label = document.createElement('label');
  label.innerText = task;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  todoList.appendChild(listItem);

  newTaskInput.value = ''; // Clear the input field
}

// Add event listener to the add button
addButton.addEventListener('click', function() {
  const task = newTaskInput.value;
  if (task) {
    addTask(task);
  } else {
    alert('Please enter a task');
  }
});