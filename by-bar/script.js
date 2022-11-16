// let shaker = document.getElementById("shaker");
// 上面这行干嘛用的？？
let playerMusic = document.getElementById("playerMusic");
let playerA = document.getElementById("playerA");
let playerB = document.getElementById("playerB");
let playerC = document.getElementById("playerC");
let playerD = document.getElementById("playerD");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");
let player5 = document.getElementById("player5");
let player6 = document.getElementById("player6");
let player10 = document.getElementById("player10");
let player7 = document.getElementById("player7");
let player8 = document.getElementById("player8");
let player9 = document.getElementById("player9");
let player11 = document.getElementById("player11");

// 下面这些是button+背景音
function playA(){
  playerA.play()
  playerMusic.play();
}
function playB(){
  playerA.pause()
  playerB.play()
}
function playC(){
  playerB.pause()
  playerC.play()
}
function playD(){
  playerC.pause()
  playerD.play()
}

// 下面的都是小东西的声音
function play1(){player1.play();}
function play2(){player2.play()}
function play3(){player3.play()}
function play4(){player4.play()}
function play5(){player5.play()}
function play6(){player6.play()}
function play10(){player10.play()}
function play7(){player7.play()}
function play8(){player8.play()}
function play9(){player9.play()}
function play11(){
  player11.play()

  setTimeout( function() {
    document.write("<img src='images/allblack.jpeg'>");
  },2200);
  setTimeout( function() {
    playerMusic.volume = 0;
  },2700);
}

// start.addEventListener("click",playA)
// shaker.addEventListener("click", play1)
// cocktail.addEventListener("click", play2)
// juicer.addEventListener("click", play3)
// dice.addEventListener("click", play4)
// cheers.addEventListener("click", play5)
// beer.addEventListener("click", play6)
// chair.addEventListener("click", play10)
// drum.addEventListener("click", play7)
// sax.addEventListener("click", play8)
// piano.addEventListener("click", play9)
// light.addEventListener("click",play11)
// ？？怎么好像这个也没啥用


document.body.addEventListener("mousemove", weAreMoving);
window.addEventListener("scroll",weAreMoving)
let previousMouseX;
let mouseX;

function weAreMoving(){
  console.log("we seem to be moving.");

  let pixelsSrolledFromLeft = document.documentElement.scrollLeft;
  let browseWindowWidth = document.documentElement.clientWidth;
  let currentMouseX = event.clientX;
  let mouseY = event.clientY;

  if (currentMouseX == undefined) {
    mouseX = previousMouseX;
  } else{
    mouseX = currentMouseX;
    previousMouseX = currentMouseX;
  }
  if (mouseX+pixelsSrolledFromLeft <= 4684){
    let header = document.getElementById('hole');
    header.style.left = (pixelsSrolledFromLeft + mouseX - 2500)+'px';
    header.style.top = (mouseY - 2500)+'px';
  }

}
