var canvas = document.getElementById("date");
var ctx = canvas.getContext("2d");
const img = new Image();

  ctx.canvas.width  = window.innerWidth/3;
  ctx.canvas.height = window.innerHeight;
img.onload = function() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
function dateChange(str) {
  var year = Number(str.substring(0, 4));
  var mon = Number(str.substring(5, 7));
  var day = Number(str.substring(8, 10));
  let day1 = new Set([1, 3, 5, 7, 8, 10, 12]);
  let day2 = new Set([4, 6, 9, 11]);
  console.log(year);
  console.log(mon);
  console.log(day);
  var ost = 0;
  if (day1.has(mon)){
      ost += (31-day);
    } else if (day2.has(mon)) {
    ost += (30 - day);
    } else if (year % 4 == 0) {
        ost += (29 - day);
    } else { ost += (28 - day);}
    mon += 1;
  while (mon != 13) {
    if (day1.has(mon)) {
      ost += 31;
    } else if (day2.has(mon)) {
      ost += 30;
    } else if (year % 4 == 0) {
      ost += 29;
    } else {
      ost += 28;
    }
    mon += 1;
  }
  console.log(ost);
  if (ost < 30) {
    img.src = "img/winter.jpg";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  } else if ((ost < 60) && (ost > 29)) {
    img.src = "img/fall.jpg";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  } else if ((ost < 90) && (ost > 60)){
    img.src = "img/summer.jpg";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  } else {
    img.src = "img/spring.jpg";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  return ost;
}

document.getElementById("dateinp").addEventListener("change", function() {
  var input = this.value;
  console.log(input);
  document.getElementById("result").innerHTML = "До Нового года осталось "+ dateChange(input) + " дней!";
});

canvas.addEventListener('dblclick', function () {
  ctx.scale(2, 2);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});


