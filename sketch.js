var PLAY = 1;
var END  = 0;

var gameState = 1;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  b_i = loadImage("banana.png");
  o_i = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas(400,355) 

  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  

  foodGroup = new Group();
  enemyGroup = new Group ();
  
  
  score = 0;
  
}


function draw() {
  
  background("aqua");
  
  stroke("black")
  textSize(20)
  fill("black")
  text("score: "+score,100,60)
  
  
 stroke("green");
 textSize(20);
 fill("green"); 
 SurvivalTime = Math.ceil(frameCount/frameRate());
 text("SurvivalTime: "+SurvivalTime,100,40); 

 
 if (ground.x < 0){
   ground.x = ground.width/2;
  }

  
  
 Fruits();
 stones();
  
 
   if(keyDown("space") && monkey.y>=100){
     monkey.velocityY = -12;
   }
  
   monkey.velocityY = monkey.velocityY+0.9 ;
   
   if(foodGroup.isTouching(monkey)){
     
     foodGroup.destroyEach();
     score++
   }
   
   if(enemyGroup.isTouching(monkey)){
     
     
  
     foodGroup.destroyEach();
     enemyGroup.destroyEach();
    
     
     foodGroup.velocityX = 0;
     enemyGroup.velocityX = 0;
    
     
  
     
      
   }
   
   
   
     


 
 monkey.collide(ground);
    
  
  
  

 drawSprites();
}



 function Fruits(){
   
   if(frameCount%80 === 0){
     
     var banana = createSprite(400,200,20,20);
         banana.addImage(b_i);
         banana.y = Math.round(random(120,200));
         banana.velocityX = -(4+score/4);
         banana.lifetime = 80
         banana.scale = 0.2;
     
         foodGroup.add(banana);  
   }
      
 }

  function stones(){
    
    if(frameCount%300 === 0){
      
      var obstacle = createSprite(400,330,20,20);
          obstacle.addImage(o_i);
          obstacle.velocityX = -(5+score/4);
          obstacle.lifetime = 80;      
          obstacle.scale = 0.2;
      
      
          enemyGroup.add(obstacle);
      
      
      
    }
    
  }
 



