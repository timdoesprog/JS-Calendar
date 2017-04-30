function Month(name, year) {
    const weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    this.name = name;
    this.date = new Date(name + " " + year);
    this.days = [];
    for (let i = 0; i < 31; i++) {
        this.days[i] = new Day(weekDays[i % 7], i + 1);
    }
    this.currentDay = this.days[0];
}
