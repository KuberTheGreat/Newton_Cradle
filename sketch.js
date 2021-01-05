// creating the constants for the matter.js library
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// variables for creating the world and the engine
var world, engine;

// variables for the bobs/pendulums
var bob1, bob2, bob3, bob4, bob5;

// variables for the ropes/slings
var rope1, rope2, rope3, rope4, rope5;

function setup(){
	// creates the canvas
	createCanvas(850, 600);

	// creates the engine and the world using the matter.js lib and sets it to our world and engine
	engine = Engine.create();
	world = engine.world;

	// creates the bob using the Bob class
	bob1 = new Bob(300, 450);
	bob2 = new Bob(360, 350);
	bob3 = new Bob(420, 350);
	bob4 = new Bob(480, 350);
	bob5 = new Bob(540, 350);

	// creates the rope constraint using the Rope class
	rope1 = new Rope(bob1.body, {x:300, y:30});
	rope2 = new Rope(bob2.body, {x:360, y:30});
	rope3 = new Rope(bob3.body, {x:420, y:30});
	rope4 = new Rope(bob4.body, {x:480, y:30});
	rope5 = new Rope(bob5.body, {x:540, y:30});

}

function draw(){
	// sets the background to greyish color
	background(51);

	// as draw is a looping function, so it updates the engine constantly
	Engine.update(engine);

	// displays the bobs
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	// displays the ropes 
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}

// function for the mouse dragged
function mouseDragged(){
	// if the bob1 is dragged using the function
	Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY});
}