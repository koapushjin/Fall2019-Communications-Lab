var words = ["Hi stranger!!", "I've been thinking about you a lot lately!!", "I see you trying to do so many things at oncee", "Worrying about a decision you madee", "Or worried that you said the wrong thing to someonee", "I know it's so hard to make things sometimess", "It just takes so much mental energyy", "Don’t worryy", "I am here trying to bring you some calm.."];
var currWord = "";
var currText = "";
var wordIndex = 0;
var letterIndex = 0;
var direction = 0;
var playOnce;
var once = true;

function animateValue(id){
		var obj = document.getElementById(id);
    var current = parseInt(obj.innerHTML);

    setInterval(function(){
        obj.innerHTML = current++;
    },30);
		if(current>2019){
			var current=2019
		};
}

animateValue('counter');
function scene1(){
	if (once == true) {
		setTimeout(animateText, 1000);
		// document.getElementById("scene0").style.display = "none";
		// document.getElementById("scene1").style.display = "block";
		window.location.href="1.html"
		once = false;
	}

}

playOnce = true;

function animateText(){
	currWord = words[wordIndex];
	if (direction == 0) {
		currText += currWord[letterIndex];
		if ( letterIndex < currWord.length - 1) {
			letterIndex++;
			setTimeout(animateText,100);
		} else if (wordIndex < words.length - 1) {
			letterIndex = 0;
			currText = "";
			wordIndex++;
			setTimeout(animateText,100);
		} else {
			currText = "";
		}
//remove letter
	}


}
