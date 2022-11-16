document.getElementById("container").style.visibility = "hidden";
document.getElementById("container2").style.visibility = "hidden";
document.getElementById("container3").style.visibility = "hidden";
document.getElementById("notice").style.visibility = "hidden";
document.getElementById("notice2").style.visibility = "hidden";
function open() {
    setTimeout(function() {document.getElementById("container").style.visibility="visible"},2000);
    setTimeout(function() {document.getElementById("container").style.visibility="hidden"},7000);

    setTimeout(function() {document.getElementById("notice").style.visibility="visible"},7000);
    setTimeout(function() {document.getElementById("notice").style.visibility="hidden"},14000);

    setTimeout(function() {document.getElementById("container2").style.visibility="visible"},14500);
    setTimeout(function() {document.getElementById("container2").style.visibility="hidden"},19000);

    setTimeout(function() {document.getElementById("container3").style.visibility="visible"},19000);
    setTimeout(function() {document.getElementById("container3").style.visibility="hidden"},24000);

    setTimeout(function() {document.getElementById("notice2").style.visibility="visible"},25000);

  }

open();
