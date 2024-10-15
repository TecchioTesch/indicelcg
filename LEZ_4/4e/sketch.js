
// button 
// roll the dice 
// 1 + 2


let button;
let elem;
let dice = 1;

function setup() {
  elem = createElement("h2", "Keep rolling");
  elem.position(0,0);
  createCanvas(400, 400);
  button = createButton("roll the dice");
  button.position(200, 200);
  button.mousePressed(rollDice);
}

function draw() {
  background(220);
  stroke("white");
  strokeWeight(1);
  fill("white");
  textSize(30);
  text("Dice value " + dice, 5, 300)
}

function rollDice(){
  dice = random(1, 6); 
  // variabile locale, devo estrarla per farla usare ovunque nel documento 
  // solo n um interi 

  // DICE - intero INFERIORE 1.1 --> 1
  dice = floor(dice);
  // cambia come viene approssimato
  // FLOOR - intero SUPERIORE 1.1 --> 2
 
  // dice = ceil(dice);


}
