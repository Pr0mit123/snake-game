var fruit;
var snake;
var previousLocation={}
var highScore = 0
var score = 0

var gap = 15; // the distance between the lines

function setup(){
createCanvas(400, 400);

fruit = new Fruit();
snake = new Head();

frameRate(5);
textSize(12);
textStyle(BOLD);
}

function draw(){
    background(128, 128, 128);

    noFill();
    noStroke();

    for(var i = 0; i < height; i += gap) { // creates grid
        for (let j = 0; j < width; j += gap) {
            rect(j, i, gap, gap)
        }
    }

    //if(snake.x && snake.y === fruit.x && fruit.y) {
        //eat();
    //}

    for(var i = snake.length - 1; i >= 0; i--) {
    if(i==0) {
        snake.bodies[i].x = snake.x;
        snake.bodies[i].y = snake.y;
    } else {
        snake.bodies[i].x = snake.bodies[i - 1].x;
        snake.bodies[i].y = snake.bodies[i - 1].y;
    }
        snake.bodies[i].display();
    }

    previousLocation.x = snake.x
    previousLocation.y = snake.y

    snake.update();//movement
    
    if(snake.collision(fruit)) { // adding body after fruit has been eaten.
        snake.score++;
        fruit.eat();
        snake.body.push(new Tail(previousLocation.x, 
        previousLocation.y))
    }

    if(snake.score > highScore) { //making a new highscore
        highScore = snake.score
    }

    //if(snake.collision(fruit)) {
        //snake.respawn();
        //fruit.eat();
    //}

    fruit.display();

    text("Score : "+score, 10, height - 25)
    text("Highest : " + int(highScore), 10, height - 10);
    
    snake.display();

    noFill();
    strokeWeight(4);
    stroke(0);
    rect(1, 1, width - 2, height - 2);
}   

function keyPressed() { //gives movement to the snake along the grid
if(keyCode == LEFT_ARROW && snake.direction != 'right') {
snake.direction = 'left';
    } else if(keyCode == RIGHT_ARROW && snake.direction != 'left') {
        snake.direction = 'right';
    } else if(keyCode == UP_ARROW && snake.direction != 'down') {
        snake.direction = 'up';
    } else if(keyCode == DOWN_ARROW && snake.direction != 'up') {
        snake.direction = 'down';
    }
}