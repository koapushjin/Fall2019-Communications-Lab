



// WITH Plugin
$(function() {


     $("#whale").bind("mousewheel", function(event, delta) {
        if (this.value == "Blue") {
            this.value = "Sperm";
        }
        else if (this.value == "Sperm") {
            this.value = "Orca";
        }
        else if (this.value == "Orca") {
            this.value = "Humpback";
        }
        else if (this.value == "Humpback") {
            this.value = "Blue";
        }
        return false;
     });
});




// WITHOUT Plugin
var EventUtil = {

    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },

	removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },

	getEvent: function(event) {
        return event ? event : window.event;
    },

	getTarget: function(event) {
		return event.target || event.srcElement;
	},

	getWheelDelta: function(event) {
        if (event.wheelDelta){
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    },

	preventDefault: function(event) {
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

};

function onWheel(event) {

	event = EventUtil.getEvent(event);
	var curElem = EventUtil.getTarget(event);
	var curVal = parseInt(curElem.value);
	var delta = EventUtil.getWheelDelta(event);

	if (delta > 0) {
		curElem.value = curVal + 1;
	} else{
		curElem.value = curVal + 1;
	}


  let value = document.getElementById('how-many-1');
  console.log(value.value);

  function appear(){
    if(value.value == 1945){
      document.getElementById("container2").style.visibility = "visible";}
    if(value.value == 2019){

      document.getElementById("container3").style.visibility = "visible";}
    if(value.value == 2222){

      document.getElementById("container4").style.visibility = "visible";}

  }

  appear();

	EventUtil.preventDefault(event);

}

$(function() {

	$(".wheelable").hover(function(){
		EventUtil.addHandler(document,'mousewheel',onWheel);
		EventUtil.addHandler(document,'DOMMouseScroll',onWheel);
	},
	function(){
		EventUtil.removeHandler(document,'mousewheel',onWheel);
		EventUtil.removeHandler(document,'DOMMouseScroll',onWheel);
	});

});
