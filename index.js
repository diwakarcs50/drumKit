for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var buttons=this.innerHTML;
     makesound(buttons);
     makeanimation(buttons);







});

}
document.addEventListener("keydown",function(e){
  makesound(e.key);
  makeanimation(e.key);

});


function makesound(keyss){
  switch (keyss){
    case "w":
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case "a":
    var audio=new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    case "s":
    var audio=new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case "d":
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case "j":
    var audio=new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case "k":
    var audio=new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case "l":
    var audio=new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
  }

}

function makeanimation(currentKey){
  var currobj=document.querySelector("." + currentKey);

  currobj.classList.add("pressed");
  setTimeout(function(){
    currobj.classList.remove("pressed");
  },100)
}
