function Calendar(year, month) {
    this.year = year;
    this.months = [];
    while (month < 12) {
        this.months.push(new Month(year, month));
        month++;
    }
    this.currentMonth = this.months[0];
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
        return false;
    }
    this.currentMonth = this.months[index - 1];
    this.renderTemplate();
    return true;
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
