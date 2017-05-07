function Calendar(year, month) {
    this.year = year;
    this.months = [];
    while (month < 12) {
        this.months.push(new Month(year, month));
        month++;
    }
    const currentDate = new Date();
    this.currentMonth = this.months[currentDate.getMonth()];
}

Calendar.prototype.nextMonth = function() {
    let index = this.months.indexOf(this.currentMonth);
    if (index >=this.months.length - 1) {
        return false;
    }
    this.currentMonth = this.months[index + 1];
    this.renderTemplate();
    return true;
}

Calendar.prototype.previousMonth = function() {
    let index = this.months.indexOf(this.currentMonth);
    if (index <= 0) {
        this.months = this.createYear(this.year - 1);
    }
    this.currentMonth = this.months[index - 1];
    this.renderTemplate();
    return true;
}

Calendar.prototype.createYear = function(year) {
    let newMonths = [];
    let month = 0;
    while (month < 12) {
        newMonths.push(new Month(year, month));
        month++;
    }
    if (year < this.year) {
        return newMonths.concat(this.months);
    } else {
        return this.months.concat(newMonths);
    }
}

Calendar.prototype.renderTemplate = function() {
    const todoHeadline = document.getElementById("todoHeadline");
    todoHeadline.textContent = this.currentMonth.currentDay.weekday + " - " +
                                this.currentMonth.name + " " +
                                this.currentMonth.currentDay.date;
    const monthName = document.getElementById("month-name");
    monthName.textContent = this.currentMonth.name;
    this.currentMonth.renderCalendar();
    this.currentMonth.currentDay.getHTML();
}
