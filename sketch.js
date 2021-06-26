//datatype
var num=4;
var name="Taran";
var b=true;
var e;
var f=null;

var arr=[34,"Hi","hello",67,true];

//Global declaring
var trex;
var trexrunning, edges;

function preload(){
    trexrunning = loadAnimation("trex1.png", "trex3.png", "trex4.png")
    ground_image = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  console.log(arr);
  console.log(arr[2]);
  console.log(arr.length)
  
  trex = createSprite(50, 160, 20, 50)
  trex.addAnimation("running", trexrunning)
  trex.scale = 0.5
  
  edges=createEdgeSprites();

  ground = createSprite(200, 180, 400, 20)
  ground.addImage("groundA", ground_image)
  
 
}

function draw(){
  background("black")

  //Move your trex
  if (keyDown("Space")){
    trex.velocityY = -10
  }

  //adding gravity
  trex.velocityY=trex.velocityY+0.8;
  
  trex.collide(ground);

  ground.velocityX = -2;
  
  //infinite scrolling effect
  if(ground.x<0){
    ground.x=ground.width/2;
  }


  drawSprites()

}
