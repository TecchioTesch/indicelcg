
// button 
// roll the dice 
// 1 + 2


let button;
let elem;
let dice = 1;
let numbers = [1, 2, 3, 4, 5, 6]; 
// Array, collezione ordinata di valori, racchiusi tra parentesi quadre e separati da virgole, 
// possono anche essere STRINGHE 
// x accedere usare un index
// si parte da 0 a contare 
// 
let colors = ["red", "yellow", "pink", "orange", "blue", "green"]
// #elem=6, 0-->
// colors.lenght == 6

// sono tutti VALORI SALVATI DENTRO L'ARRAY

function setup() {
  elem = createElement("p", "Keep rolling");
  elem.position(100,100);
  createCanvas(400, 400);
  button = createButton("roll the dice");
  button.position(200, 200);
  button.mousePressed(rollDice);
}

function draw() {
  background(220);
  stroke("white");
  strokeWeight(1);

  /* 
  posso fare if ealse a raffica oppure ... usare ARRAY |<>|
  let color;
  if(dice == 1){

  }
  */


  let color = colors[dice-1];
  fill(color);
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
