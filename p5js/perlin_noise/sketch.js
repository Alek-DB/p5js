let scale = 4
let xoff =0
let yoff =0
let zoff =0
let increment = 0.04

function setup() {
  createCanvas(400, 400);

}

function draw() {

  yoff = 0
  for(let y = 0; y < height / scale; y++){
    xoff = 0
    for(let x = 0; x < width / scale; x++){

      noStroke()
      let color = noise(xoff,yoff, zoff) * 255

      if(color > 150) color = "#d56e5d"
      else if(color <= 150 && color >= 100) color = "#5ea768" 
      else if(color < 100) color = "#5d85a6" 

      fill(color)
      rect(x * scale, y * scale, scale)

      xoff+=increment
    }
    yoff += increment
  }

  zoff+=0.002

}
