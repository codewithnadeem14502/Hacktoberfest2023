/* To-Do List Application

Description: Create a simple to-do list application where users can add tasks, mark them as complete, and remove them. Use HTML for input and display, CSS for styling, and JavaScript to handle task manipulation and interactions.

*/

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      ${taskText}
      <button onclick="markAsCompleted(this)">Complete</button>
      <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(taskItem);
  
    taskInput.value = "";
  }
  
  function markAsCompleted(button) {
    button.parentElement.classList.toggle("completed");
  }
  
  function removeTask(button) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
  }
  
  function clearCompleted() {
    const completedTasks = document.querySelectorAll(".completed");
    completedTasks.forEach(task => task.parentElement.removeChild(task));
  }
  