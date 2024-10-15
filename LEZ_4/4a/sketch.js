function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
}

function draw() {
  background(220);
  strokeWeight(1);
  fill("orange");
  // una trasformazione su P5 sposta tutto il sistema di coordinate
  translate(mouseX,mouseY);
  // ora sposto tutto con il mouse
  rect(50, 50, 100, 50);
  // --> 50+100, 50+100
  fill("purple")
  rect(0, 0, 200, 30)
  strokeWeight(5);
  // abbiamo spostato il centro, l'origine del sistema di riferimento
  point(0, 0)
  point(50, 50);

}
