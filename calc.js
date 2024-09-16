var canvas = document.getElementById("calc");
var ctx3 = canvas.getContext("2d");

  ctx3.canvas.width  = window.innerWidth/3;
  ctx3.canvas.height = window.innerHeight;

  var op;

  function func() {
    var result;

    var num1 = document.getElementById("num1").value;
    var num2 = Number(document.getElementById("num2").value);

    switch (op) {
      case '+':
        result = Number(num1) + num2;
        break;
      case '-':
        result = Number(num1) - num2;
        break;
      case '*':
        result = Number(num1) * num2;
        break;
      case '/':
        if (num2 != 0) {
          result = Number(num1) / num2;
        } else
          result = "Ошибка, деление на 0"
        break;
      case 'sqrt':
        if (num1 >= 0) {
          result = Math.sqrt(Number(num1));
          document.getElementById("otvet").innerHTML = result;
        } else
            result = "Ошибка, корень из отриц."
        break;
      case 'powy':
        result = Math.pow(Number(num1), num2);
        break;
      case 'cng':
        var sub = num1.split(/[;\b]/);
        result = "-" + parseInt(sub[0]).toString(2) + " -" + parseInt(sub[1]).toString(8) + " -" + parseInt(sub[2]).toString(16);
        break;
    }
    document.getElementById("otvet").innerHTML = result;
  }


