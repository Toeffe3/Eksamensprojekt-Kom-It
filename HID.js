//Keyboard and mouse control
var scroll = 0

function keyPressed() {
  if(e>0){return}
  if(keyCode == LEFT_ARROW) {
    page--
    trans("LEFT", true, 0)
  } else if(keyCode == RIGHT_ARROW) {
    page++
    trans("RIGHT", false, 0)
  } else if(keyCode == 32) {  //Space
    info = !info
  } else if(keyCode == 9) {   //tab

  } else if(keyCode == 112) { //F1

  } else if(keyCode == 123) { //F12

  } else if(keyCode == 36) {  //Home
    page=1
    trans("LEFT", true, 0)
  } else {
    return false
  }
}

function mouseWheel(event) {
  scroll += event.delta
  return false
}
