var button = document.getElementById("addbutton");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


button.addEventListener("click", function() {
  var li = document.createElement("li");
  if (input.value.length > 0) {
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
}
})

input.addEventListener("keypress", function(event) {
  var li = document.createElement("li");
  if (input.value.length > 0 && event.keyCode === 13) {
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  }
})
