var scene = document.getElementById("scene");
var box = document.querySelectorAll(".box");

var anim = 0;

//start-stop animation
const toggleAnimation = () => {
  for (var i = 0; i < box.length; i++) {
    box[i].classList.toggle("box-animation");

    if (anim !== 0) {
      box[i].classList.toggle("box-anim-end");
    } else {
      box[i].classList.remove("box-anim-end");
    }
  }
  if (anim === 0) {
    anim = 1;
  } else {
    anim = 0;
  }
};

toggleAnimation();
