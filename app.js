const calendar = new Calendar(2017, 4);
calendar.renderTemplate();

const divDays = document.getElementById("days");
const addTaskButton = document.getElementById("add-task");
const todoList = document.getElementById("todo-list");
const nextMonthButton = document.getElementById("next-month");
const previousMonthButton = document.getElementById("previous-month");


divDays.addEventListener("click", (e) => {
    if (e.target.firstChild.textContent) {
        const index = parseInt(e.target.firstChild.textContent) - 1;
        calendar.currentMonth.currentDay = calendar.currentMonth.days[index];
        const weekday = calendar.currentMonth.currentDay.weekday;
        todoHeadline.textContent = weekday + " - " +
                calendar.currentMonth.name +
                " " + (index + 1);
        calendar.currentMonth.currentDay.getHTML();
    }
});


addTaskButton.addEventListener("click", () => {
    const inputField = document.getElementById("task-input");
    const task = inputField.value;
    inputField.value = "";
    calendar.currentMonth.currentDay.addTask(task);
    calendar.currentMonth.currentDay.getHTML();
});


todoList.addEventListener("click", (e) => {
    if(e.target.className === "remove") {
        calendar.currentMonth.currentDay.removeTask(e.target.parentNode);
        todoList.removeChild(e.target.parentNode);
    }
});


nextMonthButton.addEventListener("click", function() {
    calendar.nextMonth();
});

previousMonthButton.addEventListener("click", function() {
    calendar.previousMonth();
});