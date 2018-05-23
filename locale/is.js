import { defineLocale } from 'fullcalendar';

defineLocale("is", {
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: "Fyrri",
    next: "Næsti",
    today: "Í dag",
    month: "Mánuður",
    week: "Vika",
    day: "Dagur",
    list: "Dagskrá"
  },
  weekHeader: "Vika",
  allDayHtml: "Allan<br/>daginn",
  eventLimitText: "meira",
  noEventsMessage: "Engir viðburðir til að sýna"
});
