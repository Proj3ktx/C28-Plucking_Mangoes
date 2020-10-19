
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeleft, treeright, treebottom, treeImage;
var ground;
var stoneObj;
var girl, girlImage;
var launcherOb;

var gameState = "onSling";

function preload()
{
	girlImage = loadImage("Images/girl.png");
	treeImage = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1200, 700);
	console.log('here')

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 680, 1200, 20);

	stoneObj = new Stone(230, 530, 30);

	mango1 = new Mango(730, 130, 30);
	mango2 = new Mango(800, 80, 30 );
	mango3 = new Mango(900, 40, 30);
	mango4 = new Mango(700, 220, 30);
	mango5 = new Mango(820, 190, 30);
	mango6 = new Mango(920, 120, 30);
	mango7 = new Mango(1020, 120, 30);
	mango8 = new Mango(960, 220, 30);
	mango9 = new Mango(1050, 250, 30);

	launcherOb = new Launcher(stoneObj.body, {x:230, y:530}); 

	Engine.run(engine);
}


function draw() {
  background(255);
  drawSprites();

  ground.display();

  image(girlImage, 200, 450, 200, 300);
  image(treeImage, 600, 0, 600, 700);
  stoneObj.display();

  launcherOb.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);
  detectCollision(stoneObj, mango7);
  detectCollision(stoneObj, mango8);
  detectCollision(stoneObj, mango9);
  
}

function mouseDragged()
{
	if(gameState !== "launched")
	{
		Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY});
	}
}

function mouseReleased()
{
	launcherOb.fly();
	gameState = "launched";
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stoneObj.body, {x:230, y:530}) 
		gameState = "onSling";
		launcherOb.attach(stoneObj.body);
	}
}

function detectCollision(stoneOb, mangoOb)
{
	var distance = dist(mangoOb.body.position.x, mangoOb.body.position.y, stoneOb.body.position.x, stoneObj.body.position.y)

	//the heart of this annoying time consuming game
	if(distance <= stoneObj.r+mangoOb.r)
	{
		Matter.Body.setStatic(mangoOb.body, false);
	}
}