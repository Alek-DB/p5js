class colonne{
    constructor(){
        this.trou = random(radius*3,250)
        this.x = width
        this.y1 = random(30, height-200)
        this.y2 = 0 + this.y1 + this.trou
        this.size = 20
    }

    show(){
        fill(255)
        rect(this.x, 0, this.size, this.y1)
        rect(this.x, this.y2, this.size, height)
        this.x -= speedCol

        if(this.x < 0){
            this.x = width
            this.y1 = random(30, 250)
            this.y2 = 0 + this.y1 + this.trou
        }
    }
}