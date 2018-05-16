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
    frame = 0
    atomSize = 1
  } else {
    return false
  }
}

function HID() {
  if (mouseIsPressed && mouseButton === LEFT && mouseY < area.h) {  //When mouse is pressed down (right) do:
    frame++                                 //Increase frame (continue "sliding")
    //console.log(frame)                    //For Debugging purposes only
  } else if (mouseIsPressed && mouseButton === RIGHT && mouseY < area.h && frame > 0.25) {  //When mouse is pressed down (left) do:
    frame--                                 //Increase frame (continue "sliding")
    //console.log(frame)                    //For Debugging purposes only
  }
  var startC = 0;
  var d = true;
  if(frame == 2 && d) {
    startC = bColor
    d = false
  } else {
    d = true
  }

  if (betw(1,50)) {
    if (!d) {
      return
    }
    if(dir) {
      console.log((205-startC)*frame/50 + (50 + startC));
      bColor = (150-startC)*frame/50 + (50 + startC)
      fColor = 155-(150-startC)*frame/50 + (50 + startC)
    } else if (!dir) {
      bColor-=3
      fColor+=3
    }
  }

  if (mouseIsPressed && !hold) {    //If mouse is pressed, and only the first time if hold down do
    hold = true                     //Preventing if-statement to execute more than once
    if (mouseX >= 0 && mouseX <= area.W/4 && mouseY > area.h) { //Mouse over button 1
      animation_control("START")    //Start autoplay-animation
    } else if (mouseX >= area.W/4 && mouseX <= area.W/2 && mouseY > area.h) { //Mouse over button 2
      animation_control("PAUSE")    //Stop autoplay-animation
    } else if (mouseX >= area.W/2 && mouseX <= area.W/4+area.W/2 && mouseY > area.h) { //Mouse over button 3
      animation_control("PREV")
    } else if (mouseX >= area.W-area.W/4 && mouseX <= area.W && mouseY > area.h) { //Mouse over button 4
      animation_control("NEXT")
    }

    setTimeout(function(){hold=false},1000)
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
