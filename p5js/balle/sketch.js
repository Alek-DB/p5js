let balles = []

function setup() {
  createCanvas(600, 600);

}

function mousePressed(){
  let v = createVector(mouseX,mouseY)
  balles.push(new Balle(v, random(15,30))) 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    console.log("jump")
    balles.forEach(b => {
      b.jump()
    }); 
  }
}



function draw() {
  background(100);

  mousepos = createVector(mouseX, mouseY)

  balles.forEach(b => {
    b.move()
  }); 




}


