//  start of code 
// vars
var gameOver = false;
// lets
let score = 0;
let timer = 0;

function setup() {

  // creats canvas and ball
  cnv = new Canvas(windowWidth, windowHeight - 10);
  ball = new Sprite(width / 2, height / 2, 50, "d");
  ball.color = color("white");
  ball.vel.x = -5;
  ball.vel.y = 9;
  ball.bounciness = 1;
  ball.friction = 0;
  ball.drag = 0;
  wallGroup = new Group();
  // makes the paddle
  paddle = new Sprite(200, 500, 10, 90, 'k');
  paddle.color = color("white");
  paddle.vel.y = 0;


  walls();
  ball.collide(paddle, increaseScore);
  setInterval(gameTimer, 1000);
  // paddle movementa
  document.addEventListener("keydown", function(event) {

    if (event.code == 'ArrowUp' || event.code == "KeyW") {
      paddle.vel.y = -8;
    }
    else if (event.code == 'ArrowDown' || event.code == "KeyS") {
      paddle.vel.y = 8;

    }
  })

  document.addEventListener("keyup", function(event) {
    if (event.code === 'ArrowUp' || event.code == "KeyS" || event.code == "KeyW" || event.code == 'ArrowDown') {
      paddle.vel.y = 0;
    }
  })
}

function walls() {
  // Function creates walls and colours them
  wallRH = new Sprite(width, height / 2, 8, height, 'k');
  wallRH.color = color('white');
  wallRH.bounciness = 1;
  wallLH = new Sprite(0, height / 2, 8, height, 'k');
  wallLH.color = color('red');
  wallTop = new Sprite(width / 2, 0, width, 8, 'k');
  wallTop.color = color('white');
  wallBot = new Sprite(width / 2, height + 4, width * 2, 8, 'k');
  wallBot.color = color('white');
  wallGroup.add(wallRH);
  wallGroup.add(wallLH);
  wallGroup.add(wallTop);
  wallGroup.add(wallBot);
}



function draw() {
  // background color
  background("black");

  // checks if ball collies with left wall and stops game
  if (ball.collide(wallGroup)) {
    if (ball.collide(wallLH)) {
      //game over text
      console.log("game over");
      textSize(30);
      fill("red");
      text("Game over! you got a score of: " + score + "!\nThe game lasted " + timer + " secconds!", width / 4, 200);
      gameOver = true;
      noLoop();
      return;
    }
  }

  //displays score text
  textSize(40);
  fill('white');
  text("Score: " + score, 20, 42);

  //timer text
  textSize(50);
  fill('white');
  text(timer, width - 65, 60);
}

//players score
function increaseScore() {
  score++;
  console.log("players score is " + score);
  if (score == 3){
    wallRH.bounciness = 1.5;
  }
  if (score == 8){
    wallRH.bounciness = 2;
  }
}

// game timer
function gameTimer() {
  if (gameOver == false) {
    timer += 1;
  }
}

