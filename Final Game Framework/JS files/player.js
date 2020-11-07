class Player {
  constructor(x,y,skinType){
    this.Pc = Bodies.circle(x,y,50,{density:0.001});
	World.add(world,this.Pc);
	
  }
  display(){
      ellipseMode(RADIUS);
      fill(255);
      ellipse(this.Pc.position.x,this.Pc.position.y,50,50);
      fill(0);
      ellipse(this.Pc.position.x+20,this.Pc.position.y-20,10,5);
      ellipse(this.Pc.position.x-20,this.Pc.position.y-20,10,5);
      if(keyIsDown(LEFT_ARROW)){
        Body.applyForce(this.Pc,this.Pc.position,{x:-0.02,y:0});
    }
    if(keyIsDown(RIGHT_ARROW)){
        Body.applyForce(this.Pc,this.Pc.position,{x:0.02,y:0});
    }
    if(keyIsDown(UP_ARROW)){
        Body.applyForce(this.Pc,this.Pc.position,{x:0,y:-0.05});
    }

    camera.position.x = this.Pc.position.x;
    camera.position.y = this.Pc.position.y;
    textSize(20);
    text("Player",this.Pc.position.x-30,this.Pc.position.y+20);

  }
}