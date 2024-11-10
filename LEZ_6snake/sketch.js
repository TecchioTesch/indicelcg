let s;
let scl = 20;
let input_utente = "Nulla";
let food_x;
let food_y;

function setup() {
  createCanvas(400, 400);
  s = new Snake(0, 0);
  frameRate(10);
  pickFoodLocation();
}

function draw() {
  if (game_status === 'Playing') {
    background(220);

    fill(255, 0, 100);
    rect(food_x, food_y, scl, scl);
  
    s.show();
    s.update();
  
    if (s.eat(food_x, food_y)) {
      pickFoodLocation();
    }
  
    score = s.death();
  } else {

  }
  
}

function pickFoodLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  food_x = floor(random(cols)) * scl;
  food_y = floor(random(rows)) * scl;
}

class Snake {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.xspeed = 1;
    this.yspeed = 0;
    this.len = 0;
    this.tail = [];
  }

  dir(x, y) {
    if (this.xspeed + x === 0 || this.yspeed + y === 0) {
      console.log("Invalid direction");
    } else {
      this.xspeed = x;
      this.yspeed = y;
    }
  }

  death() {
    score = this.len;
    for (var i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.len = 0;
        this.tail = [];
        return score;
      }
    }
    return 0;
  }

  eat(food_x, food_y) {
    if(this.x === food_x && this.y === food_y){
      this.len++;
      return true;
    }

    return false;
  }

  update() {
    if(this.len === this.tail.length) {
      for (var i=0; i < this.tail.length - 1; i++){
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.len - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    if (this.x > width - scl) {
      this.x = 0;
    } else if(this.x < 0) {
      this.x = width - scl; 
    }

    if (this.y > height - scl){
      this.y = 0;
    } else if (this.y < 0) {
      this.y = height - scl;
    }

  }



  show() {
    fill(255);
    for(var i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  }
}