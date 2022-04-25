// empty
for (let i = 0; i < 13; i++) {
  let month = new Date().getMonth() + 1 + i;
  let year = new Date().getFullYear();
  if (month > 12) {
    month = month - 12;
    year = year + 1;
  }
  const nameMonth = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  console.log(year + " Year " + nameMonth[month] + " Month ");
}
