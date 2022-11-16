let timer;
let index1 = 0;
let index2 = 7;
let num1;
let num2;
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let button = document.getElementById("button");
let stopButton=document.getElementById("buttonStop");

button.addEventListener("click",step1);
button.addEventListener("click",start);
buttonStop.addEventListener("click",step1stop);
buttonStop.addEventListener("click",step2stop);
buttonStop.addEventListener("click",comparison);
buttonStop.addEventListener("click",check);

function step1(){
  if(index1 >= 6){
  index1 = 0;
  index1 = index1 + 1;
  }else{
  index1 = index1 + 1;
  }
  dice1.src = "images/dices/" + index1 +".png";

  if(index2 <= 1){
  index2 = 7;
  index2 = index2 - 1;
  }else{
  index2 = index2 - 1;
  }
  dice2.src = "images/dices/" + index2 +".png";


}

function start(){
  timer=setInterval(step1,130);
}
//

function step1stop() {
  clearInterval(timer);
}

function step2stop() {
  num1 = parseInt(Math.random() * 6 )+ 1;
  num2 = parseInt(Math.random() * 6 )+ 1;
  dice1.src = "images/dices/" + num1 +".png";
  dice2.src = "images/dices/" + num2 +".png";
  console.log(num1);
  console.log(num2);
  // console.log(num2);
  console.log("stop");
}

counter=0;
function comparison(){
  setTimeout( function() {
    if(num1 > num2){
      alert("YOU WIN!!");
      counter = counter +1;
    }else if(num1<num2){
      alert("YOU LOSE:((")
    }else if(num1=num2){
      alert("wow a TIE")
    }
      console.log(num1);
      console.log(num2);
  }, 80);
}

function check(){
  setTimeout( function() {
    if (counter==3){
      alert("You win the whole game!");
      window.location.href="page3boy.html";
    }
  }, 90);
}
