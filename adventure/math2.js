
function $(i){
return document.getElementById(i)
}
function rand(min,max){return Math.round(Math.random()*(max-min)+min)}
var dui=0,cuo=0,time=60,fu1=0,fu2=0,add=0,pd=29;
function dati(){
dui=0;cuo=0;time=60
$("att1").innerHTML="0"
$("att2").innerHTML="0"
$("att3").innerHTML="60"
var art=setInterval(function(){
 time--
 $("att3").innerHTML=time
 if(time<=0){if(dui>=6){alert("Time's up！You win!");window.location.href="page3girl.html";}
if(dui<=5){alert("Time's up！You lose!");$('title').style.display='';clearInterval(art)}}
},1000)
tis()
}

function tis(){
fu1=rand(5,100);fu2=rand(5,100);add=rand(0,1)
if(fu2>fu1){add=0}
if(add==0){pd=fu1+fu2}
if(add==1){pd=fu1-fu2}
$("ti").innerHTML=fu1+""+["+","-"][add]+""+fu2
}
function ok(){
if($("texts").value==pd){dui++;$("att1").innerHTML=dui}else{cuo++;$("att2").innerHTML=cuo}
tis()
}
