
let speedCol = 6
let lost = false

let y
let radius = 20
let gravity
let force
let speed
let maxspeed = 10

function setup() {
  createCanvas(600, 600);
  col = new colonne()
  gravity = 0.5
  force = -10
  speed = 4
  y = height/2
}

function keyPressed(){
  if(keyCode === UP_ARROW)
    speed = force
  if(keyCode === ENTER){
    lost = false
    col.x = width
    y = height/2
  }
}

function draw() {
  background(100);

  if(!lost){
    col.show()
    ellipse(width/2, y, radius * 2, radius * 2)
    beginShape()
    vertex(width/2 -5,y)
    vertex(width/2-10,y + 10)
    vertex(width/2 + radius -8,y)
    endShape()
    speed = min(speed+=gravity, maxspeed)
    y+=speed
  }
  if((width/2 + radius >= col.x && width/2 - radius < col.x + col.size) && (y - radius < col.y1 || y + radius > col.y2)) lost = true
}


