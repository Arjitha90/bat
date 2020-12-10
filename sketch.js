const Engine = Matter.Engine;
const World= Matter.World;
const Event = Matter.Event;
const Bodies = Matter.Bodies;

var maxDrops = 100
var drops,umbrella
function preload(){
    
}

function setup(){
   canvas = createCanvas(800,800)
    
   engine = Engine.create();
    world = engine.world;
umbrella = new Umbrella(200,200)

}

function draw(){
   background(56,44,44); 
   Engine.update(engine);
  
  
   if(this.drops.position.y> height){
   
      Matter.Body.setPosition(this.drops,{x:random(0,400),y:random(0,400)})
   }
   
   umbrella.display()
   drops.display()
   for(var i = 0;i<maxDrops;i++){
      drops.push(new Drop(random(0,400),random(0,400)))
   }
   
   drawSprites();

}   

