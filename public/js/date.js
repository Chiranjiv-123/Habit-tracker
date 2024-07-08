const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function todays_date() {
  let d = new Date();
  let date =
    String(d.getDate()).length == 1
      ? String(d.getDate()).padStart("2", "0")
      : String(d.getDate());
  let month =
    String(d.getMonth() + 1).length == 1
      ? String(d.getMonth() + 1).padStart("2", "0")
      : String(d.getMonth() + 1);
  let fyear = d.getFullYear();
  return `${fyear}-${month}-${date}`;
}

function make_date_arr() {
  let first_date = todays_date();
  let d = new Date(first_date);
  let date_arr = [];
  date_arr.push(first_date);
  for (let i = 1; i < 7; i++) {
    // date_arr.push(date)
    // Adding one date to the present date
    d.setDate(d.getDate() + 1);

    let yyyy = d.getFullYear();
    let mm = String(d.getMonth() + 1);
    let dd = String(d.getDate());

    // Adding leading 0 if the day or month
    // is one digit value
    mm = mm.length == 1 ? mm.padStart("2", "0") : mm;
    dd = dd.length == 1 ? dd.padStart("2", "0") : dd;

    // Printing the present date
    date_arr.push(`${yyyy}-${mm}-${dd}`);
  }
  return date_arr;
}
function getdate(date) {
  //'yyyy-mm-dd'
  let d = new Date(date);
  return d.getDate();
}
function getday(date) {
  //'yyyy-mm-dd'
  let d = new Date(date);
  return days[d.getDay()];
}

export { todays_date, make_date_arr, getdate, getday };
