// 1ST Mistake:::: var button = getElementsByClassName("addbutton") [0];
// ReferenceError: getElementsByClassName is not defined, you need to add the DOCUMENT reference to define the variable...
var button = document.getElementById("addbutton"); // <-- you need to add an index number to the array to select it from the list, in this case, [0]
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var returnkey = document.getAttribute

button.addEventListener("click", function() {
  if (input.value.length > 0) {
  var li = document.createElement("li");
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  input.value = "";
  }
})
