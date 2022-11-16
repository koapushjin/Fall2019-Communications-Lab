var i = 0;
var txt = 'Publishers will soon no longer be able to detect when you’re in Chrome’s incognito mode, weakening paywalls everywhere.';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    window.location.href="page3noalert.html"
  } else {
    text.style.display = "none";
  }
}





function cssFunction() {
   var content = document.getElementById("content");
   content.classList.add("mystyle");
}
// function cssFunction2(){
//   var extra = document.getElementById("extra");
//   extra.classList.add("nostyle");
// }


var div = document.getElementById("alert");
function hidden(){
  div.style.display = "none";
}
hidden();



setTimeout(function(){
  div.style.display = "block";
  cssFunction();
},9000);

// setTimeout(function(){
//   cssFunction2();
// },3000);
