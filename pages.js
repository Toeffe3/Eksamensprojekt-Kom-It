function startpage() {
  background(bColor)
  noStroke()
  fill(fColor)
  ellipse(area.C.w,area.C.h,50+atomSize)
  textSize(40)
  textAlign(CENTER)
  text(title, area.C.w,area.C.h-100)
  textSize(20)
  text("[Hold højre eller venstre museknap nede]", area.C.w,area.h-50)
  if(dir) {
    bColor++
    fColor--
  } else if (!dir) {
    bColor--
    fColor++
  }
  if(bColor >= bright || bColor <= dark) {
    dir = !dir
  }
  if(bColor == fColor+1) {
    if(title == "MATTER") {
      title = "ANTI-MATTER"
    } else {
      title = "MATTER"
    }
  }
}

function atom() {        //x is used to modify behavior for som part of the function
  if (frame > 1 && frame < 200) {               //If x is not defined or false do:
    atomSize=frame*2      //Increase atom
  }

  var eX = cos(frameCount*0.04)*(150+atomSize/1.55) //Create or re-define the electron's x position (Using cos to make it orbit)
  var eY = sin(frameCount*0.04)*(150+atomSize/1.55) //Create or re-define the electron's y position (Using sin to make it orbit)

  background(bright)
  stroke(dark)
  fill(bright)
  ellipse(area.C.w,area.C.h,300+atomSize*1.3)
  fill(dark)
  ellipse(area.C.w,area.C.h,50+atomSize)
  ellipse(area.C.w+eX,area.C.h+eY,20+atomSize/10)

  if (!betw(200, 400)) {                //If x is true do:
    fill(dark)          //Set fill-color
    textSize(18)        //Set font/text size
    noStroke()
    text("Elektron",area.C.w+eX+frame/10+50,area.C.h+eY+7) //Create a text at the electron's position
    text("Proton", area.C.w+55+atomSize/2, area.C.h)
    stroke(dark)
  }
}

function quark() {
  fill(bright)
  ellipse(area.C.w,area.C.h+90,100)
  ellipse(area.C.w-75,area.C.h-65,100)
  ellipse(area.C.w+75,area.C.h-65,100)

  textAlign(CENTER)
  fill(dark)
  noStroke()
  text("DOWN",area.C.w,area.C.h+90+10)
  text("UP",area.C.w-75,area.C.h-65+5)
  text("UP",area.C.w+75,area.C.h-65+5)
  stroke(dark)
}
