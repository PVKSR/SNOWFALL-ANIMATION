const Engine = Matter.Engine,
   World = Matter.World,
   Events = Matter.Events,
   Bodies = Matter.Bodies;
 
var snows = [];
var backgroundimg

function preload(){

backgroundimg = loadImage("snow1.jpg")

}
function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
 

  


   if(frameCount%50 === 0){

    snows.push(new snow(random(10,400),10,30))

   }

 }

function draw() {
  background(backgroundimg);
  
 
  Engine.update(engine);
 
  
 

   
  for (var s = 0; s < snows.length; s=s+50) {
    snows[s].display();
  }

}