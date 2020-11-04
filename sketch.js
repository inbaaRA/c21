//create two rectangles
//f, m
//paint them crimson
//make the m rectangle move
//condition for isTouching- colors change for both rectangles to your fav color
var f,m;
var f1,m1;
var o1, o2, o3;
function setup() {
  createCanvas(800,400);
 
  f = createSprite(60,200,40,70);
  f.shapeColor = "crimson";

  m = createSprite(120,200,70,40);
  m.shapeColor = "crimson";

  f1 = createSprite(400,40,40,40);
  f1.shapeColor = "crimson";
  f1.velocityY= 3;

  m1 = createSprite(400,400,40,40);
  m1.shapeColor = "crimson";
  m1.velocityY=-3;

  o1 = createSprite(200,300,30,30);
  o1.shapeColor = "crimson";

  o2 = createSprite(400,300,30,30);
  o2.shapeColor = "crimson";

  o3 = createSprite(600,300,30,30);
  o3.shapeColor = "crimson";
}

function draw() {
  background(255,255,255);

  m.x = World.mouseX;
  m.y = World.mouseY;

if (isTouching(m,o1)){
  o1.shapeColor = "blue";
  m.shapeColor = "black";
}
else
{
  o1.shapeColor = "crimson";
  m.shapeColor = "crimson";
}

bounceOff(m1,f1)

  drawSprites();
}




