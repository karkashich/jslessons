var canvas = document.getElementById('time');
var ctx2 = canvas.getContext("2d");

ctx2.canvas.width  = window.innerWidth/3;
ctx2.canvas.height = window.innerHeight;

setInterval(startTime,1000);

function startTime() {
  const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  const dayNames = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const date = new Date();
  var year = date.getFullYear();
  var day = date.getDate();
  var current_date = day + " " + monthNames[date.getMonth()] + ", " + year + " года, " + dayNames[date.getDay()];
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
    document.getElementById("day").innerHTML = current_date;
}








