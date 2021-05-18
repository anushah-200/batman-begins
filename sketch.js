const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lightningimg
var lightning
var maxDrops=100
var drops=[]

function preload(){
  
lightningimg=loadImage("1.png")
}

function setup(){
createCanvas(500,700)
engine = Engine.create();
world = engine.world;
lightning=createSprite(250,50,100,100)
lightning.addImage(lightningimg)
umbrella=new Umbrella(250,600,50)

for(var i=0;i<maxDrops;i++){
    drops.push(new createDrop(random(0,400),random(0,400),5))
}
    
}

function draw(){
background("black")
switch (lightning) {
    case 10: lightning.visible=true
      break;
    case 20: lightning.visible=false
      break;
    case 30: lightning.visible=true
      break;
    case 40: lightning.visible=false
      break;
    default: break;
  }
  if(world.frameCount>50){
    lightning.visible=false
  }
  
  for (var i = 0; i < drops.length; i++) {
     
    drops[i].display();
    
  }
  
  for (var i = 0; i < drops.length; i++) {
     
    drops[i].update();
    
  }


umbrella.display()
drawSprites()
}   

