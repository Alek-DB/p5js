let scl = 4
let xoff =0
let yoff =0
let zoff =0
let increment = 0.01
let z_increment = 0.0001
let cols
let rows

let particles = []
let flowfield = []
let show_arrow = true


let state = 0;
let a = 255;
let r = 255;
let g = 0;
let b = 0;

function setup() {
  createCanvas(400, 400);
  cols = floor(width / scl)
  rows = floor(height / scl)
  flowfield = new Array(cols * rows);

  for(let i = 0; i < 200; i++){
    particles[i] = new Particle()
  }
  background(200)
}

function mouseDragged(){

  particles.push(new Particle(mouseX, mouseY))
  
}

function draw() {
  yoff = 0
  for(let y = 0; y < rows; y++){
    xoff = 0
    for(let x = 0; x < cols; x++){
      


      let angle = noise(xoff,yoff,zoff) * TWO_PI * 4
      let v = p5.Vector.fromAngle(angle)
      v.setMag(1)
      flowfield[x + y * cols] = v
      xoff+=increment

      //FLECHES!!
      noStroke()
      fill(noise(xoff,yoff,zoff) * 100 )
      rect(x * scl, y * scl, scl)

      stroke(0,50)
      push()
      translate(x * scl, y * scl)
      rotate(v.heading())
      line(0, 0, scl, 0)
      pop()



    }
    yoff += increment
    zoff+= z_increment
  }


  for(let i = 0; i < particles.length; i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  console.log(frameRate())

}
