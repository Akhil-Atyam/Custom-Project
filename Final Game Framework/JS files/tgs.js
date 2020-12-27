class TGS {
    constructor(x,y,skinType){
      this.Pc = Bodies.circle(x,y,50,{density:0.00001,restitution:1,friction:0});
    World.add(world,this.Pc);
    this.plrbounds = createSprite(0,0,200,200);
  this.plrbounds.visible = false;
      
    }
    display(){
        ellipseMode(RADIUS);
        fill(0);
        ellipse(this.Pc.position.x,this.Pc.position.y,50,50);
        fill("red");
        ellipse(this.Pc.position.x+20,this.Pc.position.y-20,10,5);
        ellipse(this.Pc.position.x-20,this.Pc.position.y-20,10,5);
      text("TGS",this.Pc.position.x-30,this.Pc.position.y+20);
      this.plrbounds.x = this.Pc.position.x;
      this.plrbounds.y = this.Pc.position.y;
  
    }
  }