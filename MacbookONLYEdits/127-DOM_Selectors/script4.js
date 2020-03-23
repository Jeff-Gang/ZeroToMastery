var input = document.getElementById("userinput");
var button = document.getElementById("addbutton");
var ul = document.querySelector('ul');

button.addEventListener("click", function() {
	var li = document.createElement("li");
	if (input.value.length > 0) {
	ul.appendChild(li);
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	}
})