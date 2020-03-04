/*pounds to kilograms
pounds to ounces
pounds to grams
kilograms to ounces
kilograms to grams
ounces to grams */
function lb_kg(x) {
  var fnum = x / 2.2046226218;
  return fnum;
}

function lb_g(x) {
  var fnum = lb_kg(x) * 1000;
  return fnum;
}

function lb_oz(x) {
  var fnum = x * 16;
  return fnum;
}

function oz_kg(x) {
  var fnum = lb_kg(x) / 16;
  return fnum;
}

function oz_g(x) {
  var fnum = (lb_kg(x) / 16) * 1000;
  return fnum;
}

function oz_lb(x) {
  var fnum = x / 16;
  return fnum;
}

function kg_lb(x) {
  var fnum = x * 2.2046226218;
  return fnum;
}

function kg_oz(x) {
  var fnum = kg_lb(x) * 16;
  return fnum;
}

function kg_g(x) {
  var fnum = x * 1000;
  return fnum;
}

function g_lb(x) {
  var fnum = kg_lb(x) / 1000;
  return fnum;
}

function g_oz(x) {
  var fnum = (kg_lb(x) / 1000) * 16;
  return fnum;
}

function g_kg(x) {
  var fnum = x / 1000;
  return fnum;
}

let convertB = document.getElementById("convert");
convertB.addEventListener("click", () => {
  convert();
});

var number = document.createElement("p");
var div = document.getElementById("output");

function convert(x) {
  x = document.getElementById("input").value;
  var i = document.getElementById("unit-select1").value;
  var o = document.getElementById("unit-select2").value;

  if (i == "lb" && o == "kg") {
    var c = lb_kg(x);
  }
  if (i == "lb" && o == "g") {
    var c = lb_g(x);
  }
  if (i == "lb" && o == "oz") {
    var c = lb_oz(x);
  }
  if (i == "oz" && o == "kg") {
    var c = oz_kg(x);
  }
  if (i == "oz" && o == "g") {
    var c = oz_g(x);
  }
  if (i == "oz" && o == "lb") {
    var c = oz_lb(x);
  }
  if (i == "kg" && o == "lb") {
    var c = kg_lb(x);
  }
  if (i == "kg" && o == "oz") {
    var c = kg_oz(x);
  }
  if (i == "kg" && o == "g") {
    var c = kg_g(x);
  }
  if (i == "g" && o == "lb") {
    var c = g_lb(x);
  }
  if (i == "g" && o == "oz") {
    var c = g_oz(x);
  }
  if (i == "g" && o == "kg") {
    var c = g_kg(x);
  }
if (i == o) {
    var c = x;
  }

  number.textContent = c + " " + o + ".";
  div.appendChild(number);
}
