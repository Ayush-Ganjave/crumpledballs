const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

function preload() {
	
	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	rightb = new Dustbin(750, 463, 30, 200);
	leftb = new Dustbin(560, 463, 30, 200);
	bottomb = new Dustbin(665.5, 583, 240, 50);
	ground = new Ground(200, 580, 3000, 30);
	paper = new Paper(65, 540, 30);
	
	

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background("white");
	
	
	rightb.display();
	leftb.display()
	bottomb.display()
	ground.display();
	paper.display();
	image(dustbinImg,665,445,200,223);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 150, y: -150 });
	}
}

