
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,rubber,ground,stone,sand,sand2,sand3,sand4;

function preload()
{
	
}

function setup() {

	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100,200,20,20);
	rubber = new Rubber(200,200);
	ground = new Ground(400,600,900,10);
	stone = new Stone(200,300,60,70);
	sand = new Sand(200,350);
	sand2 = new Sand(250,375);
	sand3 = new Sand(300,250);
	sand4 = new Sand(400,300);

	Engine.run(engine);	
  
}

function draw(){	
  background(0);
  
  hammer.display();
  rubber.display();
  ground.display();
  stone.display();
  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();

  drawSprites();
 
}



