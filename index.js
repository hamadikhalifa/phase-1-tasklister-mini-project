ocument.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from refreshing

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim(); // Get task text

    if (taskText === "") return; // Stop if empty

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.innerHTML = ${taskText} <button class="delete-btn">Delete</button>;

    // Append task to task list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = "";
  });

  // Add event listener for delete buttons (Event Delegation)
  taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove(); // Remove task item
    }
  });
});