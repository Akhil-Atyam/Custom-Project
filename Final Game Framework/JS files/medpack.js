class pack{
    constructor(x,y){
        this.pack = createSprite(x,y,80,40)
    }
    display(){
        rectMode(CENTER);
        fill("white")
        rect(this.pack.x,this.pack.y,80,40)
        rect(this.pack.x,this.pack.y-32.5,40,5)
        rect(this.pack.x-20,this.pack.y-27.5,5,15)
        rect(this.pack.x+20,this.pack.y-27.5,5,15)
        

        fill("red")
        rect(this.pack.x,this.pack.y,5,20)
        rect(this.pack.x,this.pack.y,5,20)
        rect(this.pack.x,this.pack.y,20,5)

    }
}