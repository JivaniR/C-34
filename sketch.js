
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var player;
var computer; 

function preload(){
bgImg= loadImage("background.jpg")

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  player= new Player(50,50,50,50)
 computer= new Computer(1000,1000,50,50)
  
}


function draw() 
{
  background(51);
  image(bgImg,0,0,width,height);
  Engine.update(engine);
 player.display()
 computer.display()
}

