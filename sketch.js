var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rectangle1,rectangle2,rectangle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
Boxposition = width/2-100;
BoxY = 610;
leftRect = createSprite(Boxposition,BoxY,20,100);
leftRect.shapeColor = "red";
bottomRect =  createSprite(Boxposition+100,BoxY+40,200,20)
bottomRect.shapeColor = "red";
RightRect =  createSprite(Boxposition+200,BoxY,20,100)
RightRect.shapeColor = "red";
	 rectangle1 = Bodies.rectangle(Boxposition+20,BoxY,20,100,{isStatic:true});
	 World.add(world,rectangle1);
	 rectangle2 = Bodies.rectangle(Boxposition+100,BoxY+45-20,200,20,{isStatic:true});
	 World.add(world,rectangle2);
	 rectangle3 = Bodies.rectangle(Boxposition+200-20,BoxY,20,100,{isStatic:true});
	 World.add(world,rectangle3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
helicopterSprite.x = helicopterSprite.x - 20 ;
translation={x:-20,y:0};
Matter.Body.translate(packageBody,translation);

// Look at the hints in the document and understand how to make the package body fall only on
  }
else if (keyCode === RIGHT_ARROW) {
	helicopterSprite.x = helicopterSprite.x + 20 ;
	translation={x:20,y:0};
	Matter.Body.translate(packageBody,translation);
}
else if (keyCode === DOWN_ARROW){
Matter.Body.setStatic(packageBody,false);
}

}
