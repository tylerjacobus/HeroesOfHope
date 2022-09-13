
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

function reveal(id){
  for(let i in answers){
    console.log("making hidden " + answers[i])
    document.getElementById(answers[i]).style.display="none";
  }
  var answer = document.getElementById(id);
  answer.style.display="block";
  var top = answer.getBoundingClientRect().top;
  window.scroll({
  top: top,
  behavior: 'smooth'
});
}