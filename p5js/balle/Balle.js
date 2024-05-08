class Balle{
    constructor(pos){
        this.pos = pos.copy()
        this.radius = 10


        this.speed = createVector(6,0)
        this.gravity = createVector(0,0.5)
        this.bounciness = 0.8
        this.friction = 0.98



    }

    move(){
        balles.forEach(balle => {
            if(balle != this){
                //line(this.pos.x, this.pos.y, balle.pos.x, balle.pos.y)
                
                let dx = balle.pos.x - this.pos.x
                let dy = balle.pos.y - this.pos.y
                let angle =  atan2(dy,dx)

                if ( angle < 0 )
                     angle += PI * 2;

                
                
                if(circleCircle(this, balle)){
                    this.speed.mult(createVector(-1,-1))
                }
            }
        });

        this.speed.add(this.gravity)
        this.pos.add(this.speed)

        if(this.pos.y + this.radius > height){
            this.pos.y = height - this.radius
            this.speed.y *= -this.bounciness
            this.speed.x *= this.friction
        } 
        if(this.pos.x + this.radius > width ){
            this.pos.x = width - this.radius
            this.speed.x *= -this.bounciness
        } 
        else if(this.pos.x - this.radius < 0 ){
            this.pos.x = 0 + this.radius
            this.speed.x *= -this.bounciness
        } 

        this.show()
    }

    show(){
        ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2)
    }

    change_color(color){
        fill(color)
    }
}



function circleCircle( balle1,  balle2  ) {

    // get distance between the circle's centers
    // use the Pythagorean Theorem to compute the distance
    let distX = balle1.pos.x - balle2.pos.x;
    let distY = balle1.pos.y - balle2.pos.y;
    let distance = sqrt( (distX*distX) + (distY*distY) );
  
    // if the distance is less than the sum of the circle's
    // radii, the circles are touching!
    if (distance <= balle1.radius + balle2.radius) {
      return true;
    }
    return false;
  }
