import { defineLocale } from 'fullcalendar';

defineLocale("fi", {
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: "Edellinen",
    next: "Seuraava",
    today: "Tänään",
    month: "Kuukausi",
    week: "Viikko",
    day: "Päivä",
    list: "Tapahtumat"
  },
  weekHeader: "Vk",
  allDayText: "Koko päivä",
  eventLimitText: "lisää",
  noEventsMessage: "Ei näytettäviä tapahtumia"
});
