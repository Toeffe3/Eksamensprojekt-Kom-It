var e; //For interval
var tran = 0
var tranTimes = 0
var tranWidth = 0

function trans(tw, dark, page) {
  if(tranTimes%2) {
    fill(50)
    stroke(50)
  } else {
    fill(205)
    stroke(205)
  }
  if(tw == "RESET") {tranWidth = 0}
  else if(tw == "LEFT") {
    if(tranWidth > maxWidth) {
      tran=page
      return true
    } else {left()}
  } else if(tw == "RIGHT") {
    if(tranWidth > maxWidth) {
      tran=page
      return true
    } else {right()}
  }
}

function left() {
  tranWidth=0
  e = setInterval(function() {
    strokeWeight(5)
    line(tranWidth, 0, tranWidth, innerHeight)
    tranWidth+=5
    if (tranWidth>=innerWidth) {
      tranWidth=innerWidth
      clearInterval(e)
      tranTimes++
      page--
      e=false
    }
  },5)
}

function right() {
  tranWidth=maxWidth
  e = setInterval(function() {
    strokeWeight(5)
    line(tranWidth, 0, tranWidth, innerHeight)
    tranWidth-=5
    if (tranWidth<=0) {
      tranWidth=0
      clearInterval(e)
      tranTimes++
      page++
      e=false
    }
  },5)
}
