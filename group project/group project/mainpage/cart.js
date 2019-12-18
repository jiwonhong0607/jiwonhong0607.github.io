var hoodie = 0;

var hoodieButton = document.getElementById("hoodieButton");

var hoodieDisplay = document.getElementById("hoodieDisplay");

var grayj = 0;

var grayjButton = document.getElementById("grayjButton");

var grayjDisplay = document.getElementById("grayjDisplay");

var whitej = 0;

var whitejButton = document.getElementById("whitejButton");

var whitejDisplay = document.getElementById("whitejDisplay");

var black = 0;

var blackButton = document.getElementById("blackButton");

var blackDisplay = document.getElementById("blackDisplay");

var blue = 0;

var blueButton = document.getElementById("blueButton");

var blueDisplay = document.getElementById("blueDisplay");

var yellow = 0;

var yellowButton = document.getElementById("yellowButton");

var yellowDisplay = document.getElementById("yellowDisplay");

var supreme = 0;

var supremeButton = document.getElementById("supremeButton");

var supremeDisplay = document.getElementById("supremeDisplay");

var nike = 0;

var nikeButton = document.getElementById("nikeButton");

var nikeDisplay = document.getElementById("nikeDisplay");

var adidas = 0;

var adidasButton = document.getElementById("adidasButton");

var adidasDisplay = document.getElementById("adidasDisplay");


hoodieButton.onclick = function() {
  hoodie = hoodie + 1;
  hoodieDisplay.innerHTML = Math.round(hoodie) + " nerdy casual hoodie(s)";

  }


grayjButton.onclick = function() {
    grayj = grayj+ 1;
    grayjDisplay.innerHTML = Math.round(grayj) + " nerdy casual jacket(s)";
}

whitejButton.onclick = function() {
  whitej =whitej+ 1;
  whitejDisplay.innerHTML = Math.round(whitej) + " nerdy furry fleece(s)";
}

blackButton.onclick = function() {
  black = black + 1;
  blackDisplay.innerHTML = Math.round(black) + "  nerdy circle logo hat(s)";

  }

blueButton.onclick = function() {
  blue = blue + 1;
  blueDisplay.innerHTML = Math.round(blue) + "  nerdy simple hat(s)";
  
  }

yellowButton.onclick = function() {
  yellow = yellow + 1;
  yellowDisplay.innerHTML = Math.round(yellow) + " nerdy swaggy hat(s)";
    
  }

supremeButton.onclick = function() {
  supreme = supreme + 1;
  supremeDisplay.innerHTML = Math.round(supreme) + " supreme shoe(s)";
      
  }
  
nikeButton.onclick = function() {
  nike = nike + 1;
  nikeDisplay.innerHTML = Math.round(nike) + " nike air(s)";
        
  }

adidasButton.onclick = function() {
  adidas = adidas + 1;
  adidasDisplay.innerHTML = Math.round(adidas) + " adidas ultraboost(s)";
        
  }
      
      
  


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); 
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); 
  }    
}

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();