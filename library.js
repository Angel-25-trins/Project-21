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