var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(800, 200, 50, 5);
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background(0); 

  bullet.velocityX = speed;
  
  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = "white";

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness* thickness);
  
    if (damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if (damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftLeftEdge = wall.x;

  if (bulletRightEdge>=wall.LeftEdge){
    return true;
  }

  {
    return false;
  }

}