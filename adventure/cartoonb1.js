console.log("script works")

let counter = 0;

function show(id){
    var img = document.getElementById(id);
        document.getElementById(id).style.display = "block";
    }
function hide(id){
    var img = document.getElementById(id);
        document.getElementById(id).style.display = "none";
    }




function count(){
  counter += 1;
  console.log(counter);

  if(counter ==1){
    show('img0');
    hide('img1');
    hide('img2');
  }

  if(counter ==2){
    show('img1');
    hide('img0');
    hide('img2');
  }

  if(counter ==3){
    show('img2');
    hide('img1');
    hide('img0');
  }


  if(counter ==4){
    alert("You enter a room!");window.location.href="dice.html";
  }
}
