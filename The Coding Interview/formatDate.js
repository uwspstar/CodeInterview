function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
 
  let arr = userDate.split("/");
  let year = arr[2];
  let month = arr[0];
  let day = arr[1];
 
  if (month.length < 2) {
    month = "0" + month;
  }
 
  if (day.length < 2) {
    day = "0" + day;
  }
 
 
  return year + month + day;
}

console.log(formatDate("12/31/2014"));
