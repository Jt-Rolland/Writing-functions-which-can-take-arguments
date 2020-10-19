var b, a;

function setup() {
  createCanvas(1200,800);
  a = createSprite(400, 100, 50, 80);
  a.shapeColor = "green";
 a.debug = true;
  b = createSprite(400, 800,80,30);
  b.shapeColor = "green";
  b.debug = true;

  a.velocityY = 5;
  b.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  bounceOff(a,b);
  drawSprites();
}

