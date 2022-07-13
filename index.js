import DateHelper from "./DateHelper.js";

let currentDate = new Date(2022, 6, 5);

let startDate = DateHelper.getFirstDayOfTheWeek(DateHelper.getFirstDayOfTheMonth(currentDate));
let endDate = DateHelper.getLastDayOfTheWeek(DateHelper.getLastDayOfTheMonth(currentDate));

const dates = DateHelper.getDatesFromRange(startDate, endDate);

const datesMap = DateHelper.getMappedDatesFromRange(startDate, endDate, { offsetMonth: 1 });

let dateForFetch = "2022-7-26";

let result = 12;

datesMap[dateForFetch] = result;

console.log(datesMap);
