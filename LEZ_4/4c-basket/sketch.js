let angle=5;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  //palla da basket

  /*
  fill(255,165,0);
  stroke(0);
  strokeWeight(3);
  */

  //drawBasketBall(200, 200, 100)
  drawRotateBasketBall(200, 200, 100, angle);
  drawBasketBall(100, 100, 50)

  // questa funzione non esiste, devo definirla
  angle += 0.7;

  // sono additive come funzioni 
}

function drawRotateBasketBall(xCenter, yCenter,
  dBall, angle){
    push();
    // codice delle trasformazioi
    // ORDINE è IMPORTANTE
    translate(xCenter, yCenter)
    rotate(angle);
    drawBasketBall(0, 0, dBall);
    pop();

}

// POSSIAMO USARE IL NOSTRO CODIOCE OVUNQUE, DEVO SOLO RICHIAMARLO 
// function idFunzioen(<lista dei paramteri) { corpo della funzione}
function drawBasketBall(xCenter, yCenter, dBall) {
  fill(255,165,0);
  stroke(0);
  strokeWeight(3);
  circle(xCenter, yCenter, dBall)
  line(-50+xCenter, yCenter, 
    50+xCenter, 0+yCenter)
  line(-35+xCenter, -35+yCenter,
    35+xCenter, 35+yCenter);
  line(-35+xCenter, 35+yCenter,
    35+xCenter, -35 + yCenter);
  


}
