
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crp, ground, container_part_1, container_part_2, container_part_3;

function setup() {
	createCanvas(600, 500);

	engine = Engine.create();
	world = engine.world;

	crp = new Paper(100,50,10)
	ground = new Floor(10)
	container_part_1 = new Dustbin(360,400,20,170)
	container_part_2 = new Dustbin(470,475,200,20)
	container_part_3 = new Dustbin(580,400,20,170)
	
}


function draw() {
  background(0);

  Engine.update(engine);

  crp.display();
  ground.display();
  container_part_1.display();
  container_part_2.display();
  container_part_3.display();

  keyPressed();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crp.body, crp.body.position, {x:0.2,y:-0.6})
	}
}

