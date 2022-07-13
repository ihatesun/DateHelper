import DateHelper from "./DateHelper.js";

let currentDate = new Date(2022, 7, 5);

let startDate = DateHelper.getFirstDayOfTheWeek(DateHelper.getFirstDayOfTheMonth(currentDate));
let endDate = DateHelper.getLastDayOfTheWeek(DateHelper.getLastDayOfTheMonth(currentDate));

const dates = DateHelper.getDatesFromRange(startDate, endDate);

console.log(dates);
