class Fruit {
    constructor() {
        this.x = floor(random(0, width/gap * gap)); // gives random position on the grid
        this.y = floor(random(0, height/gap * gap));
    }
    
    display() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, gap, gap);
    }

    eat() {
        this.x = floor(random(0, width/gap * gap)); //when the fruit has been eaten it gives new position 
        this.y = floor(random(0, height/gap * gap)); 
        
        //if (this.x == snake.x || this.y == snake.y) {
            //this.eat();
        //}
    }
}