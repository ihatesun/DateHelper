function getFirstDayOfTheWeek(date) {
  let dayOfTheWeek = date.getDay() || 7;

  let firstDayOfTheWeek = date.getDate() + 1 - dayOfTheWeek;

  return new Date(date.setDate(firstDayOfTheWeek));
}

function getLastDayOfTheWeek(date) {
  let dayOfTheWeek = date.getDay() || 7;

  let lastDayOfTheWeek = date.getDate() + 7 - dayOfTheWeek;

  return new Date(date.setDate(lastDayOfTheWeek));
}

function getFirstDayOfTheMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getLastDayOfTheMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}

function getDatesFromRange(
  startDate,
  endDate,
  options = {
    offsetMonth: 0,
  }
) {
  const dates = [];

  for (let i = new Date(startDate); i <= endDate; i.setDate(i.getDate() + 1)) {
    i.setMonth(i.getMonth() + options.offsetMonth);

    dates.push(new Date(i));
  }

  return dates;
}

function getMonthName(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return months[date.getMonth()];
}

function getNextMonth(date) {
  return new Date(date.setMonth(date.getMonth() + 1));
}

function getPreviousMonth(date) {
  return new Date(date.setMonth(date.getMonth() - 1));
}

function getMappedDatesFromRange(
  startDate,
  endDate,
  options = {
    offsetMonth: 0,
  }
) {
  const dates = {};

  console.log(startDate);

  console.log(endDate);

  for (let i = new Date(startDate); i <= endDate; i.setDate(i.getDate() + 1)) {
    let year = i.getFullYear();
    let month = i.getMonth() + options.offsetMonth;
    let day = i.getDate();

    dates[`${year}-${month}-${day}`] = null;
  }

  return dates;
}

export default {
  getFirstDayOfTheMonth,
  getLastDayOfTheMonth,
  getFirstDayOfTheWeek,
  getLastDayOfTheWeek,
  getDatesFromRange,
  getMonthName,
  getNextMonth,
  getPreviousMonth,
  getMappedDatesFromRange,
};
