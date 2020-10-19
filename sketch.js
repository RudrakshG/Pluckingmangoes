const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var stoneobj;
var launcherobj;
var treeobj;
var boy;
var Boy;
var mango1,mango2,mango3;
var mango4,mango5,mango6;
var mango7,mango8,mango9;
function preload()
{
	boy=loadImage("Plucking mangoes/boy.png");
	
	
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	mango1= new Mango(990,450,30);
	mango2= new Mango(1150,450,30);
	mango3= new Mango(1100,450,30);
	mango4= new Mango(1000,450,30);
	mango5= new Mango(2200,300,30);
	mango6= new Mango(3000,350,30);
	mango7= new Mango(3500,400,30);
	mango8= new Mango(4000,500,300);
	mango9= new Mango(4500,550,300);
	

stoneobj=new Stone(860,690,30,40);

launcherobj=new launcher(stoneobj.body,{x:235,y:420})

treeobj=new Tree(1020,550,400,400);
treeobj.scale=0.03
Boy=createSprite(330,510,200,300);
Boy.addImage(boy);
Boy.scale=0.13;





	Engine.run(engine);
  
}


function draw() {
	 Engine.update(engine)

  rectMode(CENTER);
  //imageMode(CENTER);
  background(0);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  detectCollision(stoneobj,mango1);
  detectCollision(stoneobj,mango2);
  detectCollision(stoneobj,mango3);
  detectCollision(stoneobj,mango4);
  detectCollision(stoneobj,mango5);
//launcherobj.display();
stoneobj.display();
treeobj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango9.display();
  mango8.display();
Boy.display();
  drawSprites();
 
}
function mouseDragged(){
	
	Matter.Body.setPosition(stoneobj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcherobj.fly();
}

function detectCollision(lstoneobj,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstoneobj.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if(distance<=lmango.r+lstoneobj.r){
		  Matter.Body.setStatic(lmango.body,false);
	  }
   }
   
   function keyPressed(){
	   if(keyCode===32){
		   Matter.Body.setPosition(stoneobj.body,{x:235,y:420})
		   launcherobj.attach(stoneobj.body);
	   }
   }

