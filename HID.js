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
  } else {
    return false
  }
}

function mouseWheel(event) {
  return false
}
