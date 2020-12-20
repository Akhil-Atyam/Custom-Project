class Player {
  constructor(x,y,skinType){
    this.Pc = Bodies.circle(x,y,50,{dendity:0.001,restitution:0.5,friction:0});
  World.add(world,this.Pc);
  this.plrbounds = createSprite(0,0,100,100);
	
  }
  display(){
      ellipseMode(RADIUS);
      fill(255);
      ellipse(this.Pc.position.x,this.Pc.position.y,50,50);
      fill(0);
      ellipse(this.Pc.position.x+20,this.Pc.position.y-20,10,5);
      ellipse(this.Pc.position.x-20,this.Pc.position.y-20,10,5);
      if(keyIsDown(LEFT_ARROW)){
        Body.applyForce(this.Pc,this.Pc.position,{x:-0.01,y:0});
    }
    if(keyIsDown(RIGHT_ARROW)){
        Body.applyForce(this.Pc,this.Pc.position,{x:0.01,y:0});
    }
    if(keyIsDown(UP_ARROW)){
      Body.applyForce(this.Pc,this.Pc.position,{x:0,y:-0.05});
  }
  this.plrbounds.overlap(spike.collider,Spiked);
  this.plrbounds.overlap(spike1.collider,Spiked);
  this.plrbounds.overlap(spike2.collider,Spiked);
  this.plrbounds.overlap(spike3.collider,Spiked);
  this.plrbounds.overlap(orPortal,teleport);
  this.plrbounds.overlap(tgs.plrbounds,harm);
  this.plrbounds.overlap(packs.pack,usemeds);

    camera.position.x = this.Pc.position.x;
    camera.position.y = this.Pc.position.y;
    textSize(20);
    text("Player",this.Pc.position.x-30,this.Pc.position.y+20);
    if(this.Pc.position.y>200&&this.Pc.position.x>175&this.Pc.position.x<225){
      Body.applyForce(this.Pc,this.Pc.position,{x:0,y:-0});
    
    }
    text("X : "+Math.round(this.Pc.position.x),camera.x + 750,camera.y-300)
    text("Y : "+Math.round(this.Pc.position.y),camera.x + 750,camera.y-280)
    this.plrbounds.x = this.Pc.position.x;
    this.plrbounds.y = this.Pc.position.y;

  }
}