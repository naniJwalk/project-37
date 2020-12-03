//create a trex sprite
var trex;
//trex.setAnimation("trex");

//scale and position the trex

trex.x = 50;

//create a ground sprite
var ground;
//ground.setAnimation("ground2");


//invisible Ground to support Trex
var invisibleGround;
invisibleGround.visible = false;

//generate some randome number here
var rand = randomNumber(1,100);
console.log(rand);

//set text
textSize(18);
textFont("Georgia");

function draw() {
  //set background to white
  background("white");
  
  //move the ground
  
  
  //scoring
  var count = Math.round(World.frameCount/4);
  text("Score: "+ count, 250, 100);
  
  //console.log(trex.y);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //jump when the space key is pressed
  if(keyDown("space") && trex.y >= 359){
    trex.velocityY = -10 ;
  }
  
  //add gravity
  trex.velocityY = trex.velocityY + 0.8;
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  
  //spawn obstacles
  spawnObstacles();
  
  drawSprites();
}

function spawnObstacles() {
 if(camera.position.x%10){
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = randomNumber(1,6);
    obstacle.setAnimation("obstacle" + rand);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
 }
}

function spawnClouds() {
  //write code here to spawn the clouds
  if(camera.position.x%10)
    var cloud = createSprite(400,320,40,10);
    cloud.y = randomNumber(280,320);
    cloud.setAnimation("cloud");
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  
  
}
static async function moveCamera(){
  camera.position.x=camera.position.x+2
  camera.position.y=displayHeight/2;

  if(camera.position.x=camera.position.x+2){
    loop(camera.position.x=camera.position.x+2);
  }
  await camera.position;

  trex.position.x=trex.position.x+2;
  trex.position.y>invisibleGround;
  
  if(trex.position.x=trex.position.x+2){
    loop(trex.position.x=trex.position.x+2);
  }
  await trex.position;

  invisibleGround.position.x=invisibleGround.position.x+2;
  invisibleGround.position.y.isStatic;
  
  if(invisibleGround.position.x=invisibleGround.position.x+2){
    loop(invisibleGround.position.x=invisibleGround.position.x+2);
  }
  await invisibleGround.position;

  ground.position.x=ground.position.x+2
  ground.position.y.isStatic;

  if(ground.position.x=ground.position.x+2){
    loop(ground.position.x=ground.position.x+2);
  }

  await ground.position;
}