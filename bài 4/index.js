function generateDiv() {
  var tag = document.getElementById("container");
  tag.innerHTML = "";
  for (var i = 1; i <= 10; i++) {
    var div = document.createElement("div");
    if (i % 2 == 0) {
      div.classList.add("red");
    } else {
      div.classList.add("blue");
    }
    tag.appendChild(div);
  }
}
