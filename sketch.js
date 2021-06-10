var bullet,wall,bulletRightEdge,bulletLeftEdge;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(221,321);
  weight=random(30,52);
  thickness=(random(55,90));
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness,200);
  wall.shapColor=(80,80,80);
  
}

function draw() {
  background("black");
  bullet.velocityX=speed;

  if(hasCollided(bullet,wall)){
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=("red");
    }
    
    if(damage<10){
      wall.shapeColor=("green");
    }
    bullet.velocityX=0;
    
  }
  

  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
   return true;
  }
  return false;
}