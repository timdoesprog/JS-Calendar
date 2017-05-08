function Day(weekday, date) {
    this.date = date
    this.weekday = weekday;
    this.tasks = [];
}

Day.prototype.getHTML = function() {
    let list = todoContainer.querySelector("ul");
    if (!list) {
        list = document.createElement("ul");
        list.id = "todo-list";
    } else {
        list.innerHTML = "";
    }

    for (let i = 0; i < this.tasks.length; i++) {
        list.appendChild(this.tasks[i]);
    }
    return list;
}


Day.prototype.addTask = function(task){
    taskItem = this.createTask(task);
    this.tasks.push(taskItem);
}

Day.prototype.createTask = function(task) {
    const li = document.createElement("li");
    const taskItem = document.createElement("span");
    taskItem.textContent = task;
    const removeButton = document.createElement("button");
    removeButton.className = "remove";
    removeButton.textContent = "X";
    li.appendChild(taskItem);
    li.appendChild(removeButton);
    return li;
}

Day.prototype.removeTask = function(task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
}
