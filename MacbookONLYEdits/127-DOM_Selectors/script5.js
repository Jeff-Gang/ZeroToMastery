var input = document.getElementById('userinput');
var button = document.getElementById('addbutton');
var ul = document.querySelector('ul');

button.addEventListener("click", function() {
  var li = document.createElement('li');
  var deletebutton = document.querySelector('button');
  if (input.value.length > 0) {
    ul.appendChild(li);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(document.createElement('button'));
    input.value = "";

        var btn = document.createElement("button");
        btn.appendChild(document.createTextNode("Delete!"));
        li.appendChild(btn);
        btn.onclick = removeParent;
  }
})

function deleteButton(){
	var btn=document.createElement("button");
btn.appendChild(document.createTextNode("Delete!"));
listItems[i].appendChild(btn);
btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){

deleteButton();
}

function removeParent(evt){
	evt.target.parentNode.remove();
} 
