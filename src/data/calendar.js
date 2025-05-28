const Calendar = [
  {
    day: "Mon",
    date: "25",
    time: [{ value: "10:00" }, { value: "11:00" }, { value: "12:00" }],
  },
  {
    day: "Tues",
    date: "26",
    time: [
      { value: "08:00" },
      { value: "09:00", highlighted: true },
      { value: "10:00" },
    ],
    active: true,
  },
  {
    day: "Wed",
    date: "27",
    time: [{ value: "12:00" }, { value: "—" }, { value: "13:00" }],
  },
  {
    day: "Thurs",
    date: "28",
    time: [
      { value: "10:00" },
      { value: "11:00", highlighted: true, dotted: true },
      { value: "—" },
    ],
  },
  {
    day: "Fri",
    date: "29",
    time: [{ value: "—" }, { value: "14:00" }, { value: "16:00" }],
  },
  {
    day: "Sat",
    date: "30",
    time: [
      { value: "12:00", highlighted: true, dotted: true },
      { value: "14:00" },
      { value: "15:00" },
    ],
  },
  {
    day: "Sun",
    date: "31",
    time: [
      { value: "09:00", highlighted: true, dotted: true },
      { value: "10:00" },
      { value: "11:00" },
    ],
    dimmed: true,
  },
];

export default Calendar;
