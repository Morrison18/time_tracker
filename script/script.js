let totalHours = 0;
let mon = 0;

function AddHours(day, hour) {
  this.day = document.getElementById(day).innerHTML;
  this.hour = hour;
  newli = document.createElement("li");
  let activity = prompt("what did you do ?");

  if (day == "mon") {
    mon = +hour;
    document.getElementById("TotalMonday").innerHTML = mon;
    newli.innerHTML = activity;
  }
  alert(mon);
  alert(activity);
}
