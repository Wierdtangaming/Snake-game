

var snake;
var resolution = 10;
var food;
var w;
var h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / resolution);
  h = floor(height / resolution);
  frameRate(15);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  var foodx = floor(random(w));
  var foody = floor(random(h));
  food = createVector(foodx, foody);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}

function draw() {
  scale(resolution);
  background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.snake();
  snake.show();

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}