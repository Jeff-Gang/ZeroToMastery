/* -- this was for 1st part of exercise, having console log the action --
var button = document.getElementsByTagName ("Button") [0];

button.addEventListener("click", function() {
    console.log("CLICK!!!");
})
*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liclick = document.getElementsByTagName('li');

function inputLength () {
    return input.value.length;
}

function createListElement () {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}

function addListAfterClick () {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13 ) {
      createListElement();
        }
}

ul.onclick=function(event){
 var target=event.target;
 target.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// liclick.addEventListener("click", toggleDoneClass);

// More about DOM elements ( Nodes )
// https://www.w3schools.com/js/js_htmldom_nodes.asp
