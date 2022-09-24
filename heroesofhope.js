
const progress = document.getElementById("progress");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;

//NOTE CHANGE HERE TO 1-4
//1=25%
//2=50%
//3=75%
//4=100%
//update(2);

function update(currentActive) {
  stepCircles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";

  
}

const answers = ["answer1", "answer2", "answer3"];

const arrowsup = ["up1", "up2", "up3"];
const arrowsdown = ["down1", "down2", "down3"];
const arrows = arrowsup.concat(arrowsdown);

function addClass(id, cls){
  document.getElementById(id).classList.add(cls);
}

function removeClass(id, cls){
  document.getElementById(id).classList.remove(cls);
}

function hide(id){
  addClass(id, "hidden");
}

function show(id){
  removeClass(id, "hidden");
}

function scrollToBottom(id){
  var answer = document.getElementById(id);
  var bottom = answer.getBoundingClientRect().bottom;
  window.scroll({
  top: bottom,
  behavior: 'smooth'
  });
}

function reveal(index){
  for(let i in answers){
    hide(answers[i]);
  }
  for(let i in arrows){
    hide(arrows[i]);
  }
  for(let i in arrowsup){
    show(arrowsup[i]);
  }
  show("answer" + index);
  hide("up" + index);
  show("down" + index);
  scrollToBottom("answer" + index);
}