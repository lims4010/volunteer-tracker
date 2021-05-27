import { getNameDB } from "../db/functions";

const getSundays = () => {
  var d = new Date();
  var d_end = new Date();
  var sundays = [];

  d_end.setMonth(d_end.getMonth() + 4);
  var endMonth = d_end.getMonth();

  while (d.getDay() !== 0) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other Mondays in the month
  while (d.getMonth() < endMonth) {
    var pushDate = new Date(d.getTime());
    sundays.push(pushDate.getMonth() + 1 + "/" + pushDate.getDate());
    d.setDate(d.getDate() + 7);
  }

  return sundays;
};

const buildData = async () => {
  var sundays = getSundays();
  var data = {};
  var count = 0;

  sundays.forEach((day) => {
    data[day] = {
      key: count++,
      date: day,
    };
  });

  await Promise.all(
    sundays.map(async (day) => {
      var names = await getNameDB(day);
      data[day]["volunteers"] = names === undefined ? [] : names;
    })
  );

  return Object.values(data);
};

export default buildData;
