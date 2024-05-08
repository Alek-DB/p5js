class Balle{
    constructor(pos, radius){
        this.pos = pos.copy()
        this.radius = radius

        this.randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

        this.speed = createVector(6,0)
        this.gravity = createVector(0,0.5)
        this.bounciness = 0.8
        this.friction = 0.98



    }

    move(){
        this.speed.add(this.gravity)
        this.pos.add(this.speed)


        balles.forEach(balle => {
            if(balle != this){
                if(circleCircle(this, balle)){
                    //this.speed.mult(createVector(-1,-1))


                    let balle1 = this.pos
                    let balle2 = balle.pos
                
                    let dx = balle1.x - balle2.x
                    let dy = balle1.y - balle2.y
                    let angle = atan2(dy,dx)
                  
                    if ( angle < 0 )
                          angle += PI * 2;
                  
                    let distX,distY 
                    distX = cos(angle) * this.radius //balle1.rayon
                    distY = tan(angle) * distX
                    
                    let distX2,distY2
                    distX2 = cos(angle) * balle.radius //balle2.rayon
                    distY2 = tan(angle) * distX2
                
                
                    this.pos.x = balle2.x + distX + distX2
                    this.pos.y = balle2.y + distY + distY2
                    this.speed.mult(createVector(-1,-1))
                    balle.addForce(this.speed.div(2))
                }
            }
        });


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

    jump(){
        this.speed = createVector(random(0,10),-20)
    }

    addForce(force){
        this.speed.add(force)
    }

    show(){
        fill(this.randomColor)
        ellipse(this.pos.x, this.pos.y, this.radius * 2, this.radius * 2)
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
