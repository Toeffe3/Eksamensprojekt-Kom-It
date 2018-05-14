//Keyboard and mouse control
var scroll = 0
var lastc = "PAUSE"

function keyPressed(e) {
  if(e>0){return}
  if(keyCode == LEFT_ARROW) {
    animation_control("PREV")
    lastc = "PREV"
  } else if(keyCode == RIGHT_ARROW) {
    animation_control("NEXT")
    lastc = "NEXT"
  } else if(keyCode == 32) {  //Space
    if (lastc == "PREV" || lastc == "NEXT" || lastc == "START") {
      animation_control("PAUSE")
      lastc = "PAUSE"
    } else {
      animation_control("START")
      lastc = "START"
    }
  } else if(keyCode == 9) {   //tab

  } else if(keyCode == 112) { //F1

  } else if(keyCode == 123) { //F12

  } else if(keyCode == 36) {  //Home
<<<<<<< HEAD
    frame = 0
    atomSize = 1
=======

>>>>>>> db00d03fa3fd323df651d08bd7fb76d193a46d98
  } else {
    return false
  }
}

function mouseReleased() {
  mouseRel = true
  setTimeout(function(){mouseRel=false},10)
}

function mouseWheel(event) {
  scroll += event.delta
  return false
}
