const divDays = document.getElementById("days");
const todoHeadline = document.getElementById("todoHeadline");


function getWeekDay(date) {
    const weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    number = parseInt(date);
    return weekDays[(date - 1) % 7];
}

divDays.addEventListener("click", (e) => {
    const date = e.target.firstChild.textContent;
    const weekDay = getWeekDay(date);
    const month = document.getElementById("month-name").textContent;
    todoHeadline.textContent = weekDay + " - " + month + " " + date;
});
