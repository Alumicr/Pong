//  start of code 




function setup() {

  // creats canvas and ball
  cnv = new Canvas(windowWidth, windowHeight);
  ball = new Sprite(800, 200, 80, "d");
  ball.shapeColor = color("white");
  ball.vel.x = -5;
  ball.vel.y = 0;
  ball.bounciness = 0;

  // makes the paddle
  paddle = new Sprite(200, 500, 10, 90, 'k');
  paddle.shapeColor = color("white");
  paddle.vel.y = 0;
  walls();


  document.addEventListener("keydown", function(event) {

    if (event.code == 'ArrowUp') {
      paddle.vel.y = -5;
    }
    else if (event.code == 'ArrowDown') {
      paddle.vel.y = 5;

    }
  })


  document.addEventListener("keyup", function(event) {

    if (event.code === 'ArrowUp') {
      paddle.vel.y = 0;
    }

    else if (event.code == 'ArrowDown') {
      paddle.vel.y = 0;

    }
  })

}



function walls() {
  // Function creates walls and colours them
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
  // background color
  background("black");
}