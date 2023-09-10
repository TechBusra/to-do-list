
const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTask");


function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
    
        const taskItem = document.createElement("li");
        taskItem.className = "py-2 flex justify-between";
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="text-red-500 hover:text-red-600" onclick="removeTask(this)">Delete</button>
        `;

        
        taskList.appendChild(taskItem);

    
        taskInput.value = "";
    }
}


function removeTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}


addTaskButton.addEventListener("click", addTask);


taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});