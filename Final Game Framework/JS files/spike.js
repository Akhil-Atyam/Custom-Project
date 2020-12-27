class Spike{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.collider = createSprite(x,y,30,150);
  this.collider.visible = false;
        
    }
    display(){
        fill("brown");
        rect(this.x,this.y+40,10,20);
        fill("lightGray");
        rect(this.x,this.y-20,20,100);
        this.collider.overlap(player.plrbounds,Spiked);
 
  

    }

}