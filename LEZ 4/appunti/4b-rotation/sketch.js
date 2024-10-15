let angle=0;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  angleMode(DEGREES)
  // tutti angoli in gradi
}

function draw() {
  background(220);


  push();
  strokeWeight(1);
  fill("orange");
  //degree, radians --> posso definire angleMOde
  rotate(angle*0.1);
  rect(50, 50, 100, 50);
  pop();
  // creare multipli anchor point che ci permettono di avere + anchor point per avere 
  // + trasformazioni isolate 


  //--> 50+100, 50+100;
  fill("purple");
  rect(0,0,200,30);
  // per ruotare anche il rettangolo cosa devo fare?


  strokeWeight(5);
  point(0,0);
  point(50,50);


  push()
  // cambiare anchor point 
  // traslare prima
  translate(200,200)
  rotate(angle);
  fill("orange");
  //rect(50, 50, 100, 50);
  circle(0,0,100);
  line(0,-50,0,50);
  // sono somme additive, se sposto il centro lo devo seguire poi 

  // ci servono + anchor point
  pop() 

  angle = angle+2; 

}
