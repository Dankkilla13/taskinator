var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

buttonEl.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listItemEl.ClassName = "take-item" ;
    listItemEl.textContent = "this is a new task. ";
    tasksToDoEl.appendChild(listItemEl);
});
var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };
  buttonEl.addEventListener("click", createTaskHandler);
  


