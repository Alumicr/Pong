//  start of code 




function setup() {
  cnv = new Canvas(windowWidth, windowHeight);
  ball = new Sprite(700, 200, 80, "d");
  ball.shapeColor = color("white");
  ball.vel.x = -5;
  ball.vel.y = 0;
  ball.bounciness = 0;

  paddle = new Sprite (200, 200, 10, 90, 'k');
  paddle.shapeColor = color("white");


  walls();


}



function walls(){
  wallLH = new Sprite(0, height / 2, 8, height, 'k');
  wallRH = new Sprite(width, height / 2, 8, height, 'k');
  wallTop = new Sprite(0, 8, width * 2, 8, 'k');
  wallBot = new Sprite(width, height + 8, width * 2, 8, 'k');
  wallLH.shapeColor = color("red");
  wallRH.shapeColor = color("white");
  wallTop.shapeColor = color("white");
  wallBot.shapeColor = color("white");
}



function draw() {
  background("black");
}