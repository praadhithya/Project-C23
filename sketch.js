function setup() {
  createCanvas(1000,1000);
  //createSprite(400, 200, 50, 50);
}
function preload() {
  img = loadImage('images/brick.jpg');
}
function draw() {
  background('#222222');
  //texture(img)
  fill(color(0, 0, 255));
  rect(275,700,450,300);
  fill(255, 204, 0);
  rect(350,500,300,200);
  fill('rgb(0,255,0)');
  rect(425,350,150,150);
  fill('rgba(0,255,0, 0.25)');
  rect(460,250,80,100);
  fill('#fae');
  rect(175,500,100,500);
  rect(725,500,100,500);
  fill('red');
  triangle(430,250,500,150,570,250);
  triangle(125,500,225,400,325,500);
  triangle(675,500,775,400,875,500);
  //drawSprites();
}