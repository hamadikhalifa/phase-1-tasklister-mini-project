document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("task-priority").value; // Get priority value

    if (taskDescription.trim() === "") return; // Prevent empty tasks

    // Create task element
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;
    
    // Set priority colors
    if (priority === "High") {
      taskItem.style.color = "red";
    } else if (priority === "Medium") {
      taskItem.style.color = "orange";
    } else {
      taskItem.style.color = "green";
    }

    // Add delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => taskItem.remove());
    
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Sort tasks after adding
    sortTasks();

    form.reset(); // Clear form fields
  });

  function sortTasks() {
    const tasks = Array.from(taskList.children);
    
    tasks.sort((a, b) => {
      const priorityOrder = { "High": 1, "Medium": 2, "Low": 3 };

      // Get priority based on text color
      const priorityA = priorityOrder[getPriorityFromColor(a.style.color)];
      const priorityB = priorityOrder[getPriorityFromColor(b.style.color)];
      
      return priorityA - priorityB; // Sort by priority (ascending)
    });

    // Append sorted tasks
    tasks.forEach(task => taskList.appendChild(task));
  }

  function getPriorityFromColor(color) {
    if (color === "red") return "High";
    if (color === "orange") return "Medium";
    return "Low";
  }
});

function addTask(taskText) {
  const taskList = document.getElementById("tasks");
  const taskItem = document.createElement("li");

  // Create task text element
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.value = taskText;
  taskInput.disabled = true; // Initially disabled

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", function() {
      if (taskInput.disabled) {
          taskInput.disabled = false; // Enable editing
          editBtn.innerText = "Save"; // Change button text
      } else {
          taskInput.disabled = true; // Disable editing
          editBtn.innerText = "Edit"; // Restore button text
      }
  });

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", function() {
      taskList.removeChild(taskItem);
  });

  // Append everything to task item
  taskItem.appendChild(taskInput);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}

function addTask(taskText, category) {
  const taskList = document.getElementById("tasks");
  const taskItem = document.createElement("li");

  // Create task text
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.value = taskText;
  taskInput.disabled = true;

  // Create category label
  const categoryLabel = document.createElement("span");
  categoryLabel.innerText = ` [${category}] `;
  categoryLabel.style.fontWeight = "bold";

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", function() {
      if (taskInput.disabled) {
          taskInput.disabled = false;
          editBtn.innerText = "Save";
      } else {
          taskInput.disabled = true;
          editBtn.innerText = "Edit";
      }
  });

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", function() {
      taskList.removeChild(taskItem);
  });

  // Append everything
  taskItem.appendChild(categoryLabel);
  taskItem.appendChild(taskInput);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}

// Modify event listener to include category selection
document.getElementById("create-task-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const taskInput = document.getElementById("new-task-description");
  const categorySelect = document.getElementById("category");
  
  if (taskInput.value.trim() !== "") {
      addTask(taskInput.value, categorySelect.value);
      taskInput.value = ""; // Clear input after adding
  }
});

function addTask(taskText, category, dueDate) {
  const taskList = document.getElementById("tasks");
  const taskItem = document.createElement("li");

  // Create task text
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.value = taskText;
  taskInput.disabled = true;

  // Create category label
  const categoryLabel = document.createElement("span");
  categoryLabel.innerText = ` [${category}] `;
  categoryLabel.style.fontWeight = "bold";

  // Create due date label
  const dueDateLabel = document.createElement("span");
  dueDateLabel.innerText = ` (Due: ${dueDate}) `;
  dueDateLabel.style.color = "blue";
  dueDateLabel.style.marginLeft = "10px";

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", function() {
      if (taskInput.disabled) {
          taskInput.disabled = false;
          editBtn.innerText = "Save";
      } else {
          taskInput.disabled = true;
          editBtn.innerText = "Edit";
      }
  });

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", function() {
      taskList.removeChild(taskItem);
  });

  // Append everything
  taskItem.appendChild(categoryLabel);
  taskItem.appendChild(taskInput);
  taskItem.appendChild(dueDateLabel);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}

// Modify event listener to include due date selection
document.getElementById("create-task-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const taskInput = document.getElementById("new-task-description");
  const categorySelect = document.getElementById("category");
  const dueDateInput = document.getElementById("due-date");

  if (taskInput.value.trim() !== "") {
      addTask(taskInput.value, categorySelect.value, dueDateInput.value);
      taskInput.value = ""; // Clear input after adding
      dueDateInput.value = ""; // Clear date input
  }
});


function addTask(taskText, category, user, duration, dueDate) {
  const taskList = document.getElementById("tasks");
  const taskItem = document.createElement("li");

  // Create task text
  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.value = taskText;
  taskInput.disabled = true;

  // Create category label
  const categoryLabel = document.createElement("span");
  categoryLabel.innerText = ` [${category}] `;
  categoryLabel.style.fontWeight = "bold";

  // Create user label
  const userLabel = document.createElement("span");
  userLabel.innerText = ` (User: ${user}) `;
  userLabel.style.marginLeft = "10px";

  // Create duration label
  const durationLabel = document.createElement("span");
  durationLabel.innerText = ` (Duration: ${duration} hrs) `;
  durationLabel.style.marginLeft = "10px";

  // Create due date label
  const dueDateLabel = document.createElement("span");
  dueDateLabel.innerText = ` (Due: ${dueDate}) `;
  dueDateLabel.style.color = "blue";
  dueDateLabel.style.marginLeft = "10px";

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", function() {
      if (taskInput.disabled) {
          taskInput.disabled = false;
          editBtn.innerText = "Save";
      } else {
          taskInput.disabled = true;
          editBtn.innerText = "Edit";
      }
  });

  // Create Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", function() {
      taskList.removeChild(taskItem);
  });

  // Append everything
  taskItem.appendChild(categoryLabel);
  taskItem.appendChild(taskInput);
  taskItem.appendChild(userLabel);
  taskItem.appendChild(durationLabel);
  taskItem.appendChild(dueDateLabel);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);
}

// Modify event listener to include new fields
document.getElementById("create-task-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const taskInput = document.getElementById("new-task-description");
  const categorySelect = document.getElementById("category");
  const userInput = document.getElementById("task-user");
  const durationInput = document.getElementById("task-duration");
  const dueDateInput = document.getElementById("due-date");

  if (taskInput.value.trim() !== "") {
      addTask(taskInput.value, categorySelect.value, userInput.value, durationInput.value, dueDateInput.value);
      taskInput.value = ""; // Clear input after adding
      userInput.value = ""; 
      durationInput.value = ""; 
      dueDateInput.value = ""; 
  }
});