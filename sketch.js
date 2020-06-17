const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;

var ground;

var slingshot;

var hexagon;

var gameState = "Start";



function setup() {
  createCanvas(800,400);

  //Base 
block1 = new Block(300,235,30,40);
block2 = new Block(330,235,30,40);
block3 = new Block(360,235,30,40);
block4 = new Block(390,235,30,40);
block5 = new Block(420,235,30,40);
block6 = new Block(450,235,30,40);
block7 = new Block(480,235,30,40);

//Second Layer
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

//Third Layer
block13 = new Block(360,235,30,40);
block14 = new Block(390,235,30,40);
block15 = new Block(420,235,30,40);

//Top
block16 = new Block(390,235,30,40);

//Ground
ground = new Ground();

//Shooter
hexagon = new Hexagon(100,250,30,30);

}

function draw() {
  background(255,255,255);  
  drawSprites();
Engine.update(Engine)
 push();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 pop();

 ground.display();

 slingShot.display();

 hexagon.display();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32 && hexagon.body.speed < 1){
     slingshot.attach(hexagon.body);
     hexagon.trajectory = [];
     Matter.Body.setPosition(hexagon.body, {x:200, y:50});
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }
}
