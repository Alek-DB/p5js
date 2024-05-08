let scale = 2
let xoff =0
let yoff =0
let zoff =0
let increment = 0.04

function setup() {
  createCanvas(200, 200);

  noiseDetail(15,0.25)
}

function draw() {

  yoff = 0
  for(let y = 0; y < height / scale; y++){
    xoff = 0
    for(let x = 0; x < width / scale; x++){
      noStroke()
      fill(noise(xoff,yoff, zoff) * 255 )
      rect(x * scale, y * scale, scale)

      xoff+=increment
    }
    yoff += increment
  }

  zoff+=increment
}
