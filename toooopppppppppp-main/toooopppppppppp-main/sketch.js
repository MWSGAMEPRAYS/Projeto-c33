
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var bola;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new Cesta_Basquete(1200,650);
	bola= new Bola(200,450,70);
	Engine.run(engine);
	var render = Render.create({ element: document.body, engine: engine, options: { width: 1600, height: 700, wireframes: false } }); Engine.run(engine); Render.run(render);

}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  bola.display();
}

function keyPressed(){
if (keyCode === UP_ARROW){


Matter.Body.applyForce(bola.body,bola.body.position,{x:127,y:-162});



}
}