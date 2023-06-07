//Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var sound_tom1 = new Audio("sounds/tom-1.mp3");
      sound_tom1.play();
      break;
    case "a":
      var sound_tom2 = new Audio("sounds/tom-2.mp3");
      sound_tom2.play();
      break;
    case "s":
      var sound_tom3 = new Audio("sounds/tom-3.mp3");
      sound_tom3.play();
      break;
    case "d":
      var sound_tom4 = new Audio("sounds/tom-4.mp3");
      sound_tom4.play();
      break;
    case "j":
      var sound_crash = new Audio("sounds/crash.mp3");
      sound_crash.play();
      break;
    case "k":
      var sound_kick = new Audio("sounds/kick-bass.mp3");
      sound_kick.play();
      break;
    case "l":
      var sound_snare = new Audio("sounds/snare.mp3");
      sound_snare.play();
      break;
    default:
      console.log(innerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
