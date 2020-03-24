var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradientbg");
var btn = document.querySelector("button");
var RGB1 = getRandomRgb1();
var RGB2 = getRandomRgb2();

// body.style.background = "blue";
function setgradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ";";
}

function setrandomgradient() {
    for (var i = 0; i < 1; i++) {
        
      
    body.style.background = 
    "linear-gradient(to right, "
    + RGB1.value
    + ", " 
    + RGB2.value 
    + ")";
    css.textContent = body.style.background + ";";
}
}

function defaultColor(){
    body.style.background="linear-gradient(to right," +
        color1.value +", " +color2.value + ")";
    
    
}

// IDK how to incorporate the random function into setting a background gradient
function getRandomRgb1() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  function getRandomRgb2() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

btn.addEventListener('click', setrandomgradient); 

// btn.addEventListener("onload", setgradient);

color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);

// body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";