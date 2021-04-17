
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var crp, ground;

function setup() {
	createCanvas(600, 500);

	engine = Engine.create();
	world = engine.world;

	crp = new Paper(200, 50)
	ground = new Floor(10)
	

	rect1 = createSprite(500, 200, 20, 50);
	rect1.shapeColor = "red";
	rect2 = createSprite(500, 200, 50, 20);
	rect2.shapeColor = "red";
	rect3 = createSprite(580, 200, 20, 50);
	rect3.shapeColor = "red";

	var Options = {
		isStatic : true
	}

	rectbody1 = Bodies.rectangle(rect1.x, rect1.y, rect1.width, rect1.height , Options );
 	World.add(world, rectbody1);

	rectbody2 = Bodies.rectangle(rect2.x , rect2.y , rect2.width , rect2.height , Options );
 	World.add(world, rectbody2);
	
	rectbody3 = Bodies.rectangle(rect3.x , rect3.y , rect3.width , rect3.height , Options );
 	World.add(world, rectbody3);
}


function draw() {
  background(0);

  Engine.update(engine);

  crp.displayPaper();
  ground.displayFloor();
 
}




