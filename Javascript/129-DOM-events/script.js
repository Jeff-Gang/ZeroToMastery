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


// I used document.querySelectorAll to select all li tags.
//Then iterated over the collection of DOM objects and attached event to every single one of them. 
//As you will notice I am using the event inside the click event listener to toggle the class done on.


var list = document.querySelectorAll("li");
for(var i = 0; i < list.length; i++) {
   list[i].addEventListener("click", function(e){
    e.currentTarget.classList.toggle("done");
   })
 }

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

<<<<<<< HEAD
ul.onclick=function(event){
 var target=event.target;
 target.classList.toggle("done");
}

=======
// function toggleOnAndOff() {
//     var toggleDone = document.getElementsByClassName("li");
//     element.classList.toggle("done");
// }
>>>>>>> 1f138855f5863f12dca83e62925f9aa1090b8977

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

<<<<<<< HEAD
// liclick.addEventListener("click", toggleDoneClass);

// More about DOM elements ( Nodes )
// https://www.w3schools.com/js/js_htmldom_nodes.asp
=======
//input.addEventListener("click", toggleOnAndOff);



//      Another way:  //
// function toggleClassDoneOnAndOff(event) {
//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle("done");
//     }
// }
// ul.addEventListener("click", toggleClassDoneOnAndOff);

//       Yet another way:     //
// function toggleClassDoneOnAndOff(event) {
//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle("done");
//     }
// }
// ul.addEventListener("click", toggleClassDoneOnAndOff);
>>>>>>> 1f138855f5863f12dca83e62925f9aa1090b8977
