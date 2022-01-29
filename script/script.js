let totalHours = 0;
let mon = 0;

function addHours(clicked_id) {
  alert("Button Works ");
  prompt("what did you do ?");
  theID = clicked_id;

  if (theID == "mon9") {
    this.mon = mon;
    mon++;
    document.getElementById("TotalMonday").innerHTML = mon;
  }
  alert(mon);
}
