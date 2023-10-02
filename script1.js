
// Add a new to-do item to the list
document.getElementById("add-button").addEventListener("click", function () {

    // Get the to-do title and description
    var todoDescription = document.getElementById("todo-description").value;

    // Create a new to-do item element
    var todoItemElement = document.createElement("li");
    todoItemElement.textContent = todoDescription;

    // Add the to-do item element to the list
    document.getElementById("todo-list").appendChild(todoItemElement);

    // Clear the to-do title and description input fields
    document.getElementById("todo-description").value = "";
});
