
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var player;
function preload()
{
	
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;
	ground = Bodies.rectangle(600,500,100000,400,{isStatic:true});
	World.add(world,ground);
	player = new Player(200,200,null);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,200,255);
  drawSprites();
  fill("green");
rect(600,500,100000,400);
player.display();


}




