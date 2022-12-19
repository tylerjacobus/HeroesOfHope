
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

function isVisible(id){
  return !document.getElementById(id).classList.contains("hidden")
}

function scrollTo(id){
  document.getElementById(id).scrollIntoView({behavior: "smooth", block: "nearest"});
}

function toggle(index){
  if (isVisible("answer" + index)) {
    hide("answer" + index);
    hide("down" + index);
    show("up" + index);
  } else {
    show("answer" + index);
    show("down" + index);
    hide("up" + index);
    scrollTo("answer" + index);
  }
}
