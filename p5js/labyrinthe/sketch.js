

//MARCHE PAS




let col, rows, scale, speed, rotation, xoff, yoff, inc

function setup() {
  createCanvas(400, 400, WEBGL);
  scale = 20
  col = width * 2/scale 
  rows = height/scale
  rotation = 1.3
  xoff = 0
  yoff = 0
  inc = 0.5

}

function draw() {
  background(100);

  translate(-width, 0)
  rotateX(PI/3)

  fill(100)
  for(let y = 0; y < rows; y++){
    beginShape(TRIANGLE_STRIP)
    for(let x = 0; x < col; x++){

      rx = map(noise(xoff, yoff),0,1,-10,20)
      ry = map(noise(xoff + 1000, yoff + 1000),0,1,-10,20)

      vertex(x * scale, y * scale, rx)
      vertex(x * scale, (y+1) * scale, ry)
      //rect(x * scale, y * scale, scale, scale)
      xoff += inc
    }
    yoff += inc
    endShape()
  }

  frameRate(10)

}
