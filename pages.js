function startpage() {


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
      ladning = "-"
      ladningopp = "+"
      l_offset = 9
    } else {
      title = "MATTER"
      ladning = "+"
      ladningopp = "-"
      l_offset = 11
    }
  }
  background(bColor)
  noStroke()
  fill(fColor)
  ellipse(area.C.w,area.C.h,50)
  textAlign(CENTER)
  textSize(20)
  if(!betw(1,100)) {
    text("[Hold højre eller venstre museknap nede]", area.C.w,area.h-50)
  } else if (betw(1,100)) {
    noFill()
    stroke(fColor)
    ellipse(area.C.w,area.C.h,150)
    noStroke()
    fill(fColor)
    ellipse(area.C.w+75,area.C.h+0,25)
  }
  noStroke()
  fill(fColor)
  textSize(40)
  text(title, area.C.w,area.C.h-100)
  fill(bColor)
  textSize(30)
  text(ladning,area.C.w,area.C.h+l_offset)
  textSize(15)
  text(ladningopp,area.C.w+75,area.C.h+l_offset*25/30-3)

}

function atom() {        //x is used to modify behavior for som part of the function
  if (frame > 100 && frame < 300) {               //If x is not defined or false do:
    atomSize=(frame-100)*2      //Increase atom
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
    text("Elektron",area.C.w+eX+atomSize/10+50,area.C.h+eY+7) //Create a text at the electron's position
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

function collide() {
  var dis = 200-(frame-500)*(frame-500)
  fill(bright)
  rect(0,0,area.C.w,area.h)
  fill(dark)
  ellipse(area.C.w-dis, area.C.h, 75)

  rect(area.C.w, 0, area.w,area.h)
  fill(bright)
  ellipse(area.C.w+dis, area.C.h, 75)

  if(dis <= 75) {
    ellipse(area.C.w, area.C.h, (frame-500)*(frame-500)*2)

    if (frame > 518) {
      fill(dark)
      ellipse(area.C.w, area.C.h, ((frame-500)*(frame-500)*2)-900)

      if (frame > 523) {
        fill(bright)
        ellipse(area.C.w, area.C.h, ((frame-500)*(frame-500)*2)-1100)
      }
    }
  }
}
