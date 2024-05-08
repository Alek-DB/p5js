let v 
let balles = []
let force
let scale = 30

function setup() {
  createCanvas(400, 400);

  velocity = createVector(0,1)
  gravity = createVector(0,9.8)
  speed = createVector(0,1)
}

function mousePressed(){
  v = createVector(mouseX,mouseY)
  balles.push(new Balle(v)) 
}



function draw() {
  background(100);

  mousepos = createVector(mouseX, mouseY)

  balles.forEach(b => {
    b.move()
  }); 


}


