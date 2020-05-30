var fixedRect, movingRect;

var o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  o1 = createSprite(900,400,100,100);
  o1.shapeColor = "blue"
  o1.debug = true;

  o2 = createSprite(500,200,100,100);
  o2.shapeColor = "blue"
  o2.debug = true;
}

function draw() {
  background(0,0,0);  

  bounceOff(fixedRect,movingRect);

  o2.x=mouseX;
  o2.y=mouseY;

  if (isTouching(o1,o2)) {
    o1.shapeColor = "green";
    o2.shapeColor = "green";
  }
  else {
    o1.shapeColor = "blue";
    o2.shapeColor = "blue";
  }

  drawSprites();
}

