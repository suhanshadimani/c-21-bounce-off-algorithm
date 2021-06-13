var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 10, 50, 80);
  //fixedRect.velocityX = 2;
  fixedRect.velocityY = 2;
  fixedRect.shapeColor = "green";
  movingRect = createSprite(200,390,80,30);
  movingRect.velocityY = -2;
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(50,250,50,50);
  gameObject1.shapeColor = "blue";
  gameObject1.velocityX = 3;

  gameObject2 = createSprite(750,250,50,50);
  gameObject2.shapeColor = "blue";
  gameObject2.velocityX = -3;
}

function draw() {
  background(0);
  
bounceOff(gameObject1,gameObject2);
bounceOff(movingRect,fixedRect);
  
  
  drawSprites();
}

