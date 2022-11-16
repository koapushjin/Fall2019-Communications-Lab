let timer;
let index1 = 0;
let index2 = 4;
let num1;
let num2;
let rps1 = document.getElementById("rps1");
let rps2 = document.getElementById("rps2");
let button = document.getElementById("button");
let stopButton=document.getElementById("buttonStop");

button.addEventListener("click",step1);
button.addEventListener("click",start);
buttonStop.addEventListener("click",step1stop);
buttonStop.addEventListener("click",step2stop);
buttonStop.addEventListener("click",comparison);
buttonStop.addEventListener("click",check);

function step1(){
  if(index1 >= 3){
  index1 = 0;
  index1 = index1 + 1;
  }else{
  index1 = index1 + 1;
  }
  rps1.src = "images/rps/" + index1 +".png";

  if(index2 <= 1){
  index2 = 4;
  index2 = index2 - 1;
  }else{
  index2 = index2 - 1;
  }
  rps2.src = "images/rps/" + index2 +".png";


}

function start(){
  timer=setInterval(step1,130);
}
//

function step1stop() {
  clearInterval(timer);
}

function step2stop() {
  num1 = parseInt(Math.random() * 3 )+ 1;
  num2 = parseInt(Math.random() * 3 )+ 1;
  rps1.src = "images/rps/" + num1 +".png";
  rps2.src = "images/rps/" + num2 +".png";
  console.log(num1);
  console.log(num2);
  // console.log(num2);
  console.log("stop");
}

counter=0;
function comparison(){
  setTimeout( function() {
    // if(num1 > num2){
    //   alert("YOU WIN!!");
    // }else if(num1<num2){
    //   alert("YOU LOSE:((")
    // }else if(num1=num2){
    //   alert("AGAIN PLZ")
    // }
    if(num1 == num2){
      alert("AGAIN PLZ");
    }
    if(num1 == 1){
      if(num2 == 2){
      alert("YOU LOSE:( TRY AGAIN");
      }
      if(num2 == 3){
      alert("YOU WIN!")
      counter = counter +1;
      }
    }
    if(num1 == 2){
      if(num2 == 3){
        alert("YOU LOSE:( TRY AGAIN");
      }
      if(num2 == 1){
        alert("YOU WIN!");
        counter = counter +1;
      }
    }
    if(num1 == 3){
      if(num2 == 1){
        alert("YOU LOSE:( TRY AGAIN");
      }
      if(num2 == 2){
        alert("YOU WIN!");
        counter = counter +1;
      }
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
