//Keyboard and mouse control
var scroll = 0

function keyPressed() {
  if(e>0){return}
  if(keyCode == LEFT_ARROW) {

  } else if(keyCode == RIGHT_ARROW) {

  } else if(keyCode == 32) {  //Space

  } else if(keyCode == 9) {   //tab

  } else if(keyCode == 112) { //F1

  } else if(keyCode == 123) { //F12

  } else if(keyCode == 36) {  //Home
    
  } else {
    return false
  }
}

function mouseWheel(event) {
  scroll += event.delta
  return false
}
