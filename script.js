let tasks = [];

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");


// Add Task
addButton.addEventListener("click", addTask);


// Add task when pressing Enter
taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});


function addTask() {

    let taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }

    let task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}


function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let taskDiv = document.createElement("div");

        taskDiv.className = "task";


        // Checkbox
        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.className = "task-checkbox";

        checkbox.checked = task.completed;


        checkbox.addEventListener("change", function() {

            task.completed = checkbox.checked;

            displayTasks();

        });


        // Task text
        let taskText = document.createElement("span");

        taskText.className = "task-text";

        taskText.textContent = task.text;


        if (task.completed) {

            taskText.classList.add("completed");

        }


        // Delete button
        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.className = "delete-button";


        deleteButton.addEventListener("click", function() {

            deleteTask(index);

        });


        taskDiv.appendChild(checkbox);

        taskDiv.appendChild(taskText);

        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);

    });


    updateTaskCount();
}


function deleteTask(index) {

    tasks.splice(index, 1);

    displayTasks();
}


function updateTaskCount() {

    let count = tasks.length;

    taskCount.textContent = count + " Tasks";

}
