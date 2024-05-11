// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

class Particle {
  constructor(x,y) {
    if(x == undefined && y == undefined)
      this.pos = createVector(random(width), random(height));
    else
      this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 4;
    this.prevPos = this.pos.copy();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  follow(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  show() {
    switch(state){
      case 0: 
        g ++;
        if(g == 255)
            state = 1;
      break;
      case 1: 
        r--;
        if(r == 0)
            state = 2;
      break;
      case 2: 
        b++;
        if(b == 255)
            state = 3;
      break;
      case 3: 
        g--;
        if(g == 0)
            state = 4;
      break;
      case 4: 
        r++;
        if(r == 255)
            state = 5;
      break;
      case 5: 
        b--;
        if(b == 0)
            state = 0;
      break;
    }

    stroke(0,20);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }

  }

}