class Head {
constructor() {
    this.x = floor (width / (2 * gap)) * gap;
    this.y = floor (height / (2 * gap)) * gap;
    this.direction = 'up';
    this.score = 0;
    this.bodies=[];
    }

    update() {
        if(this.direction == 'left') { // direction along the grid.
            this.x -= gap;
        } else if(this.direction == 'right') {
            this.x += gap;
        } else if(this.direction == 'up') {
            this.y -= gap;
        } else if(this.direction == 'down') {
            this.y += gap;
    }
}

    respawn() {
        this.x = floor(width / (2 * gap)) * gap;
        this.y = floor(height / (2 * gap)) * gap;
        this.direction = 'up';
        this.score = 0;
    }

    tailCollided() {
        for(var i = 0; i < this.tails.length; i++) {
            if(this.x == this.tails[i].x  && this.y == this.tails[i].y){
                return true;
            }
        }
    }
    collision(obj) {
        if(this.x == obj.x && this.y == obj.y) {
            return true;
        }
        if(this.x >= width || this.x < 0 || this.y >= height) {
            return false;
        }
    }

    display() {
        fill(255);
        rect(this.x, this.y, gap, gap);
    }
}
