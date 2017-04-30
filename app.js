const may = new Month("May", "2017");
const todoHeadline = document.getElementById("todoHeadline");
todoHeadline.textContent = may.currentDay.weekday + " - " + may.name + " " + may.currentDay.date;
may.currentDay.getHTML();

const divDays = document.getElementById("days");
const addTaskButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");


divDays.addEventListener("click", (e) => {
    const index = parseInt(e.target.firstChild.textContent) - 1;
    may.currentDay = may.days[index];
    const weekday = may.currentDay.weekday;
    todoHeadline.textContent = weekday + " - " + may.name + " " + (index + 1);
    may.currentDay.getHTML();
});


addTaskButton.addEventListener("click", () => {
    const inputField = document.getElementById("task-input");
    const task = inputField.value;
    inputField.value = "";
    may.currentDay.addTask(task);
    may.currentDay.getHTML();
});


todoList.addEventListener("click", (e) => {
    if(e.target.className === "remove") {
        may.currentDay.removeTask(e.target.parentNode);
        todoList.removeChild(e.target.parentNode);
    }
});
