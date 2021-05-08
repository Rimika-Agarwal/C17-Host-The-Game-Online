
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var survivalTime = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(900, 400)
  
  monkey = createSprite(70,300,20,20 )
  monkey.addAnimation("m", monkey_running)
  monkey.scale = 0.25
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("skyblue")
  stroke("blue");
  textSize(20);
  fill("blue");
  text("Score: "+ score, 500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(gameState === PLAY){
    
    spawnBanana();
    spawnObstacles();
    if(keyDown("space")){
      monkey.velocityY = -10;
    }
    monkey.velocityY = monkey.velocityY+0.5;
    
    if(ground.x < 0){
      ground.x = ground.width/2;
    }
  }
  else if(gameState === END){
    
  }
  monkey.collide(ground)
  drawSprites()
}


function spawnBanana(){
  if(frameCount%80===0){
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.1;
    fruit.addImage(bananaImage);
    
    fruit.y = Math.round(random(120,200));
    
    fruit.velocityX = -7;
    fruit.setLifetime = 100;
    
    bananaGroup.add(fruit);
  }
}

function spawnObstacles(){
  if(frameCount%300===0){
    monster = createSprite(600,300,20,20);
    monster.scale = 0.2;
    monster.addImage("moving", obstacleImage);
  
    
    monster.velocityX = -8;
    monster.setLifetime = 50;
    
    obstacleGroup.add(monster);
  }
}







