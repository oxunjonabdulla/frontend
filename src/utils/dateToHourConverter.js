export const calculateHour = (
  date1String,
  time1String,
  date2String,
  time2String
) => {
  if (!date1String || !time1String || !date2String || !time2String) {
    return "0";
  }

  const [year1, month1, day1] = date1String.split("-").map(Number);
  const [hour1, minute1] = time1String.split(":").map(Number);
  if (
    isNaN(year1) ||
    isNaN(month1) ||
    isNaN(day1) ||
    isNaN(hour1) ||
    isNaN(minute1)
  ) {
    return "0";
  }
  const date1 = new Date(year1, month1 - 1, day1, hour1, minute1);

  const [year2, month2, day2] = date2String.split("-").map(Number);
  const [hour2, minute2] = time2String.split(":").map(Number);
  if (
    isNaN(year2) ||
    isNaN(month2) ||
    isNaN(day2) ||
    isNaN(hour2) ||
    isNaN(minute2)
  ) {
    return "0";
  }
  const date2 = new Date(year2, month2 - 1, day2, hour2, minute2);

  const diffInMilliseconds = Math.abs(date2 - date1);
  const diffHours = diffInMilliseconds / (1000 * 60 * 60);

  return Math.round(diffHours);
};
