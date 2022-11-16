function functionBack(){
  window.location.href="../newpage5/index.html"
}


function disabled() {
  document.getElementById("myCheck").disabled = true;
}

disabled();


var i = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var txt1 = 'Interview with Coca Cola former CEO Iamalso Genius';
var txt2 = 'Interviewer:Thank you so much for joining us today. Today happen to be the 150th birthday of your grandpa Iam Genius. Though he is not with us any more. Do you have something of him to share with us? Maybe some stories between you two. '
var txt3 ='Genius: Sure. My grandpa is a very interesting man. Or I should say magical. He once told me a story. He said that when he was at 20, One day he got a letter，within the letter there is some mysterious code on the paper that he cannot read.'
var txt4 ='Interviewer: That is very intersting. What happened then? '
var txt5 ='Genius: Actually he was not the only one who had received this code. Lots of people get it. It turns out to be a pretty big and mysterious news. The code is hard to decode. I guess nobody even tried to understand it. But my grandpa did and he succeeded.'
var txt5 ='Interviewer: What did it say? Do you know that there is also some codes spreading around the world these days?'
var txt6 ='Genius:Yes I heard about the latest new. I also want to know the answer of code my grandpa got, but he never told me. He said that this was his secret. (Hhhh) But he told me that the code gave him a lot of inspiration of what he should do. You know what happened later? He won the lottery, bet on the right horse and bought the Coca Cola Company.'
var txt7 ='Interviewer: He is indeed a legend. Thank you very much for sharing this to us Iamalso, looking forward to seeing you again.'



var speed = 50;

function typeWriter1() {
  if (i < txt1.length) {
    document.getElementById("demo1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, speed);
  }

}



function typeWriter2() {
  if (a < txt2.length) {
    document.getElementById("demo2").innerHTML += txt2.charAt(a);
    a++;
    setTimeout(typeWriter2, speed);
  }

}

function typeWriter3() {
  if (b < txt3.length) {
    document.getElementById("demo3").innerHTML += txt3.charAt(b);
    b++;
    setTimeout(typeWriter3, speed);
  }

}

function typeWriter4() {
  if (c < txt4.length) {
    document.getElementById("demo4").innerHTML += txt4.charAt(c);
    c++;
    setTimeout(typeWriter4, speed);
  }

}
function typeWriter5() {
  if (d < txt5.length) {
    document.getElementById("demo5").innerHTML += txt5.charAt(d);
    d++;
    setTimeout(typeWriter5, speed);
  }

}

function typeWriter6() {
  if (e < txt6.length) {
    document.getElementById("demo6").innerHTML += txt6.charAt(e);
    e++;
    setTimeout(typeWriter6, speed);
  }

}

function typeWriter7() {
  if (f < txt7.length) {
    document.getElementById("demo7").innerHTML += txt7.charAt(f);
    f++;
    setTimeout(typeWriter7, speed);
  }

}
typeWriter1();
typeWriter2();
typeWriter3();
typeWriter4();
typeWriter5();
typeWriter6();
typeWriter7();
