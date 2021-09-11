var data = 0;
document.getElementById("inputnum").innerHTML = data + "$";
function minus() {
  data = data - 10;
  document.getElementById("output").innerHTML = data + "$";
}
function plus() {
  data = data + 10;
  document.getElementById("output").innerHTML = data + "$";
}
var a = document.getElementById("box");
function blue() {
  document.getElementById("box").style.backgroundColor = "blue";
}

function red() {
  document.getElementById("box").style.backgroundColor = "red";
}
function yellow() {
  document.getElementById("box").style.backgroundColor = "yellow";
}
