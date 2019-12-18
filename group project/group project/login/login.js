var valid_id = "iga2019";
var valid_pw = "hi";

var id = document.getElementById("login");
var pw = document.getElementById("pw");
var submit = document.getElementById("submit");

submit.onclick = function(){
  if(valid_id == id.value)
  if(valid_pw == pw.value)
  window.location.href = "file://iga_sky_2012/lab-public/IT%20HS/WebDesign/Ganghee%20Kim/group%20project/group%20project/mainpage/shopping.html";

}

