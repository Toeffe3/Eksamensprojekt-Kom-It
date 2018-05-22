function startpage() {
  if(dir && frame <= 1) {
    bColor++
    fColor--
  } else if (!dir && frame <= 1) {
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
  if(!betw(2,100)) {
    text("[Hold højre eller venstre museknap nede]", area.C.w,area.h-50)
  } else if (betw(2,100)) {
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

function atom() {
  if (betw(50,75)) { //If x is not defined or false do:
    atomSize=(frame-50)*12        //Increase atom
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

  if (!betw(75, 150)) { //If x is true do:
    fill(dark)          //Set fill-color
    textSize(18)        //Set font/text size
    noStroke()
    text("Elektron",area.C.w+eX+atomSize/10+50,area.C.h+eY+7) //Create a text at the electron's position
    text("Proton", area.C.w+55+atomSize/2, area.C.h)
    stroke(dark)
  }
}

function quark() {

  var eX = cos(frameCount*0.04)*(175) //Create or re-define the electron's x position (Using cos to make it orbit)
  var eY = sin(frameCount*0.04)*(175) //Create or re-define the electron's y position (Using sin to make it orbit)

  background(bright)
  stroke(dark)
  fill(bright)
  ellipse(area.C.w,200,350)
  ellipse(area.C.w,area.h-200,350)
  fill(dark)
  ellipse(area.C.w,200,50+160)
  ellipse(area.C.w+eX,200+eY,20+160/10)
  ellipse(area.C.w,area.h-200,50+160)
  ellipse(area.C.w+eX,area.h-200+eY,20+160/10)


  fill(bright)
  noStroke()
  textSize(28)
  textStyle(BOLD)
  textAlign(CENTER)
  ellipse(area.C.w,200+50,65)
  ellipse(area.C.w-45,200-25,65)
  ellipse(area.C.w+45,200-25,65)
  ellipse(area.C.w,area.h-200+50,65)
  ellipse(area.C.w-45,area.h-200-25,65)
  ellipse(area.C.w+45,area.h-200-25,65)
  fill(dark)
  if (betw(75,100)) {
    text("↓",area.C.w,200+50+1)
    text("↑",area.C.w-45,200-25)
    text("↑",area.C.w+45,200-25)
    text("↑",area.C.w,area.h-200+50+1)
    text("↓",area.C.w-45,area.h-200-25)
    text("↓",area.C.w+45,area.h-200-25)
    textSize(10)
    text("down",area.C.w,200+50+16)
    text("up",area.C.w-45,200-25+14)
    text("up",area.C.w+45,200-25+14)
    text("up",area.C.w,area.h-200+50+16)
    text("down",area.C.w-45,area.h-200-25+14)
    text("down",area.C.w+45,area.h-200-25+14)
  } else {
    text("↓",area.C.w,200+50+1)
    text("↑",area.C.w-45,200-25)
    text("↑",area.C.w+45,200-25)
    text("↑",area.C.w,area.h-200+50+1)
    text("↓",area.C.w-45,area.h-200-25)
    text("↓",area.C.w+45,area.h-200-25)
    textSize(10)
    text("anti-down",area.C.w,200+50+16)
    text("anti-up",area.C.w-45,200-25+14)
    text("anti-up",area.C.w+45,200-25+14)
    text("anti-up",area.C.w,area.h-200+50+16)
    text("anti-down",area.C.w-45,area.h-200-25+14)
    text("anti-down",area.C.w+45,area.h-200-25+14)

  }
  stroke(dark)
  textStyle(NORMAL)
}

function forcet() {

  fill(bright)
  rect(0,0,area.C.w,area.h)
  fill(dark)
  ellipse(area.C.w-100, -20+grav, 75)

  rect(area.C.w, 0, area.w,area.h)
  fill(bright)
  ellipse(area.C.w+100, -20+grav, 75)
  grav = sqrt(sq(grav)) * 1.5
  if (grav > area.h*10) {
    grav = 1
  }
}

function collide() {
  var dis = 200-(frame-350)*(frame-350)
  fill(bright)
  rect(0,0,area.C.w,area.h)
  fill(dark)
  ellipse(area.C.w-dis, area.C.h, 75)

  rect(area.C.w, 0, area.w,area.h)
  fill(bright)
  ellipse(area.C.w+dis, area.C.h, 75)

  if(dis <= 75) {
    ellipse(area.C.w, area.C.h, (frame-350)*(frame-350)*2)

    if (frame > 368) {
      fill(dark)
      ellipse(area.C.w, area.C.h, ((frame-350)*(frame-350)*2)-900)

      if (frame > 373) {
        fill(bright)
        ellipse(area.C.w, area.C.h, ((frame-350)*(frame-350)*2)-1100)
      }
    }
  }
}
var ran_x = [0,0,0,0,0,0,0,0,0,0]
function eequalmcsquared() {
  var emc_speed = 299792458

  background(dark)
  speed = slider("speed", 30, 200, 350, 2, 17)
  var emc_speed = round(speed.val/100*299792458)

  mass = slider("need", 30, 250, 350, 2, 17)
  var emc_mass = mass.val/100
  var atoms = (emc_mass*5.97538413242604*pow(10,17))

  var emc_energy = (emc_mass*pow(10,-9))*pow(emc_speed,2)

  textSize(10)
  strokeWeight(0)

  fill(bright)
  textSize(24)
  textAlign(LEFT)
  text("Fart: "+numberWithCommas(emc_speed)+" m/s ("+round(emc_speed/2997924.58)+"% af lysets hastighed)", 20, 30)
  text("Vægt: "+numberWithCommas(emc_mass)+" µg ("+numberWithCommas(round(atoms/pow(10,15)))+" billiarder helium atomer)", 20, 70)
  text("Energi: "+round(emc_energy/pow(10, 6)*100000)/100000+" Penta Joule ("+round(emc_energy/pow(10, 6)/4.184/pow(10, -3))*pow(10,-3)+" kg TNT)", 20, 110)

  var t = 20
  var u = area.C.h
  var v = area.w-40
  var w = area.h
  var j = 0
  var e = (w-u)/10
  fill(bright)
  //rect(t, u, v, w/2-50)

  for (var i = 0; i < 10; i++) {
    if(ran_x[i] <= random()*50+20) {
      ran_x[i] = random()*v+v
    }
    var j = ran_x[i] - speed.val*2
    // noStroke()
    // fill(bright)
    // rect(t, u+e*i, v, 10)
    stroke(bright)
    strokeWeight(2)
    line(j, u+e*(i), j+20+(speed.val), u+e*(i))
    ellipse((v+t)/2, (w+u)/2-25, emc_mass*100)
    ran_x[i] = j
  }
  noStroke()
}
