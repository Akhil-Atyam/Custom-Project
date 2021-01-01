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
var lbutton,rbutton,ubutton,abutton
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth-4,windowHeight-4);
	

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
	ground = Bodies.rectangle(3500,100,500,450000,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(5000,100,500,450000,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(4500,50,500,50,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(4000,-100,500,50,{isStatic:true});
	World.add(world,ground);
	 ground = Bodies.rectangle(4000,-400,500,50,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(4500,-550,500,50,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(4000,-700,500,50,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(4500,-850,500,50,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(4000,-1000,500,50,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(4500,-1200,200,50,{isStatic:true});
	World.add(world,ground);
	ground = Bodies.rectangle(4000,-1200,200,50,{isStatic:true});
	World.add(world,ground);
	ubutton = createButton("Up")
	ubutton.position(100,height-100)
	ubutton.style("width","50px")
	ubutton.style("height","50px")
	lbutton = createButton("Left")
	lbutton.position(40,height-100)
	lbutton.style("width","50px")
	lbutton.style("height","50px")
	rbutton = createButton("Right")
	rbutton.position(160,height-100)
	rbutton.style("width","50px")
	rbutton.style("height","50px")
	abutton = createButton("Attack")
	abutton.position(width-150,height-150)
	abutton.style("width","100px")
	abutton.style("height","100px")


	
	

	player = new Player(200,200,null);
	Engine.run(engine);
	tramp = new Trampoline(200,280);
	spike = new Spike(800,-175);
	spike1 = new Spike(850,-175);
	spike2 = new Spike(900,-175);
	spike3 = new Spike(950,-175);
	orPortal = createSprite(1600,247.5,100,110);
	blPortal = createSprite(4000,0,100,110);
	
tgs = new TGS(8500,-100)
packs = new pack(2000,-145)

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
rect(4500,50,500,50);
rect(4000,-100,500,50);
rect(4000,-1200,200,50);
rect(4500,-1200,200,50);

fill("orange")
rect(orPortal.x,orPortal.y,100,105);
fill("blue")
rect(blPortal.x,blPortal.y,100,105);
fill("black")
textSize(30)
text("HP "+Math.round(hp),camera.x-45,camera.y-100);
text("HP "+Math.round(tgshp),tgs.Pc.position.x-45,tgs.Pc.position.y-100);
text("Use Up,Left, and Right arrow keys to move",-800,0);
text("Use the Down arrow key to attack",-800,50)
text("WARNING:Invisible Maze Ahead!!!",4000,-300)

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
	location.reload()

}
if(tgshp < 0||tgshp === 0){
	textSize(100);
	fill("gold")
	text("You Win",0,0)
	Body.setPosition(player.Pc, {x:200,y:00});
	hp = 100;

}

   // Body.applyForce(player.Pc,player.Pc.position,{x:random(-0.01,0.01),y:random(-0.050,0.02)});

   Body.setVelocity(tgs.Pc,{x:random(-0.2,0.2),y:random(-0.5,0.1)})
text("Come here my boy.",8500,0);
}
function Spiked(){
	Body.setPosition(player.Pc, {x:200,y:200});
Body.setVelocity(player.Pc,{x:0,y:0})
location.reload()
hp = 100		
}
function teleport(){
	Body.setPosition(player.Pc, {x:blPortal.x,y:blPortal.y});
	Body.setVelocity(player.Pc,{x:0,y:0})
	blPortal.x = 8000;
	blPortal.y = 0;
	orPortal.x = 4500;
	orPortal.y = -1300
	
}
function harm(){
	hp = hp-0.25
	if(keyIsDown(DOWN_ARROW)){
	Body.setVelocity(player.Pc,{x:random(-2,2),y:-5})
		tgshp = tgshp - 0.3
	}
	abutton.mousePressed(()=>{
		tgshp = tgshp - 0.4

	})

}


function usemeds(){
	hp += 50;
	packs.pack.remove();
	show1pac = false;
}
