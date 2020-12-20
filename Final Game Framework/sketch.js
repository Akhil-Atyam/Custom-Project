
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var orPortal;
var blPortal;
var packs;
var ground;
var player;
var tramp;
var lol;
var spike,spike1,spike2,spike3;
var plrCollider;
var hp = 100;
var tgs;
var tgshp = 100
var show1pac = true;
function preload()
{
	
}

function setup() {
	createCanvas(1200,500);
	

	engine = Engine.create();
    
	world = engine.world;
	ground = Bodies.rectangle(600,500,100000,400,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(800,100,500,450,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(1300,100,500,450,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(1800,35,500,320,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(3000,100,500,450000,{isStatic:true});
	World.add(world,ground);
	
	

	player = new Player(200,200,null);
	Engine.run(engine);
	tramp = new Trampoline(200,280);
	spike = new Spike(800,-175);
	spike1 = new Spike(850,-175);
	spike2 = new Spike(900,-175);
	spike3 = new Spike(950,-175);
	orPortal = createSprite(1600,247.5,100,110);
	blPortal = createSprite(4000,0,100,110);
	
tgs = new TGS(0,0)
packs = new pack(2000,-145	)

}


function draw() {

rectMode(CENTER);
background(0,200,255);
drawSprites();
//Matter.Render.run(lol)
tramp.display();
camera.zoom = 0.7;
fill("green");
  noStroke();	
rect(600,500,100000,400);
rect(800,100,500,450);
rect(1300,100,500,450);
rect(1800,35,500,320);
fill("orange")
rect(1600,248,100,105);
fill("blue")
rect(4000,0,100,105);
fill("black")
textSize(30)
text("HP "+Math.round(hp),camera.x-45,camera.y-100);
text("HP "+Math.round(tgshp),tgs.Pc.position.x-45,tgs.Pc.position.y-100);

tgs.display();
if(show1pac === true){
	packs.display();

}
player.display();
spike.display();
spike1.display();
spike2.display();
spike3.display();
if(hp < 0||hp === 0){
	textSize(100);
	Body.setPosition(player.Pc, {x:200,y:00});
	hp = 100;

}
   // Body.applyForce(player.Pc,player.Pc.position,{x:random(-0.01,0.01),y:random(-0.050,0.02)});

   Body.setVelocity(tgs.Pc,{x:random(-0.2,0.2),y:random(-0.5,0.1)})

}
function Spiked(){
	Body.setPosition(player.Pc, {x:200,y:200});
Body.setVelocity(player.Pc,{x:0,y:0})
hp = 100		
}
function teleport(){
	Body.setPosition(player.Pc, {x:4000,y:0});
	Body.setVelocity(player.Pc,{x:0,y:0})
	
}
function harm(){
	hp = hp-0.25
	if(keyIsDown(DOWN_ARROW)){
	Body.setVelocity(player.Pc,{x:random(-2,2),y:-5})
		tgshp = tgshp - 0.3
	}

}


function usemeds(){
	hp += 20;
	packs.pack.remove();
	show1pac = false;
}