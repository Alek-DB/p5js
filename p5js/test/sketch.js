let rayon1 = 25
let rayon2 = 50



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);

  mousepos = createVector(mouseX, mouseY)

  noStroke()
  ellipse(width/2, height/2, rayon1 * 2,rayon1* 2)

  if(circleCircle(mousepos.x, mousepos.y, width/2, height/2, rayon1, rayon2 )){

    let balle1 = createVector(mouseX, mouseY)
    let balle2 = createVector(width/2, height/2)

    let dx = balle1.x - balle2.x
    let dy = balle1.y - balle2.y
    let angle = atan2(dy,dx)
  
    if ( angle < 0 )
          angle += PI * 2;
  
    let distX,distY 
    distX = cos(angle) * rayon1 //balle1.rayon
    distY = tan(angle) * distX
    
    let distX2,distY2
    distX2 = cos(angle) * rayon2 //balle2.rayon
    distY2 = tan(angle) * distX2
  
    stroke(1)
    line(balle2.x, balle2.y, balle2.x + distX, balle2.y + distY)
    line(balle2.x, balle2.y, balle2.x + distX, balle2.y)
    line(balle2.x + distX, balle2.y, balle2.x + distX, balle2.y + distY)

  
    noStroke()
    ellipse(balle2.x + distX + distX2, balle2.y + distY +distY2,     rayon2 * 2, rayon2 * 2)
  }
  else{

    ellipse(mousepos.x, mousepos.y, rayon2 * 2, rayon2 * 2)
    fill(255)
  }

}




function circleCircle( dx1,dy1,  dx2,dy2, rayon1, rayon2  ) {

  // get distance between the circle's centers
  // use the Pythagorean Theorem to compute the distance
  let distX = dx1 - dx2;
  let distY = dy1 - dy2;
  let distance = sqrt( (distX*distX) + (distY*distY) );

  // if the distance is less than the sum of the circle's
  // radii, the circles are touching!
  console.log(distance, rayon1, rayon2)
  if (distance <= rayon1 + rayon2) {
    return true;
  }
  return false;
}


