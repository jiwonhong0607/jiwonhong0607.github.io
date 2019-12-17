var eggs = 0;

var eggButton = document.getElementById("eggButton");

var eggDisplay = document.getElementById("eggDisplay");

var cake = 0;


var cakeButton = document.getElementById("cakeButton");

var cakeDisplay = document.getElementById("cakeDisplay");



eggButton.onclick = function() {
  eggs = eggs+ 1;
  eggDisplay.innerHTML = Math.round(eggs) + " egg(s)";
}


cakeButton.onclick = function() {
  if (eggs>=20){
    eggs-=20;
    cake++;
    eggDisplay.innerHTML= Math.round(eggs) + " egg(s)";
    cakeDisplay.innerHTML = Math.round(cake) + " cake(s)";
  }
}
 setInterval(function(){
   eggs+=cake/20;
  eggDisplay.innerHTML = Math.round(eggs) + " egg(s)";
}
