let canvasXMax=400, canvasYMax=400;
let moonXpos=255;
let moonYpos=50;
let slider;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  //parametri minimo, massimo, default value, step
  slider = creaeteSlider(0,255,0,1); 
  slider.position(0,canvasYMax-60)
}
function draw() {
  background("navy");
  frameRate(5)
  //moon
  colorMode(RGB);
  fill(255, 255, 0, 200);
  stroke(255, 255, 255, 100)
  strokeWeight(10); //large outline
  circle(moonXpos, 50, 100)
  //overlappin circle
  stroke("navy");
  fill("navy");
  circle(moonXpos+50, 50,100);

  //metodo aggiornamento 1
  /*
  moonXpos= moonXpos+1;
  //se la luna esce dai bordi dovrebbe tronare a sx e ripartire
  if(moonXpos>canvasXMax){//usciamo dal foglio
    //moonXpos= moonXpos-200;
    moonXpos=0;
  }*/

  //metodo 2 FRAME COUNT
  //aggiunge 1 per ogni frame disegnato 
  moonXpos=(frameCount*5 +700) % canvasXMax;
  //operatore di modulo 
  //1 % 400 --> 1 / 400 = 0, resto=1
  //2 % 400 --> 2 / 400 = 0, resto=2

  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  fill("green");
  let y = 300;
  rect(0, y, canvasXMax, y);
  stroke(0);//black outline
  strokeWeight(1);//outline thickness
  let x_casa =0;
  let house_height = 100, house_width=100;
  for(let numero_case=0; numero_case<3; numero_case++){
    fill("white");
    rect(x_casa, y-house_height , house_width, house_height);
    fill("red");
    let roof_height=80;
    triangle(x_casa, y-house_height , x_casa+house_width, y-house_height, x_casa+(house_width/2), y-house_height-roof_height);
    x_casa += house_width+30;
  }

  //rollover --> agiamo se passiamo sopra

  //if passiamo sopra --> facciamo cose 
  //--------------
  //|             |
  //|             |
  //--------------
  //siamo dentro le x della casa?
  //mouseX > x_casa
  //mouseX > x_casa+house_witdth  
  //mouseY > left_corner
  //mouseY > left_corner_height
  // sommare operatori &&, || and e or
  // c1 && c2 --> entrambe le condizioni sonon vere 
  // c1 || c2 --> almeno una delle due condizioni deve essere vera

  // vogliamo che entrambe siano verificate 

  //rollover corretto 
  x_casa=0

  let left_corner = y-house_height;
  let slidervalue = slider.value();

  if((mouseX > x_casa) && 
    (mouseX > x_casa) && 
  (mouseY > left_corner) && 
  (mouseY > left_corner_height)){
    fill(slidervalue)
    rect(x_casa, y-house_height , house_width, house_height);
  }else{
    fill("white")
    rect(x_casa, y-house_height , house_width, house_height);
  }




  //stelle random
  //numero = numero+1
  //numero =+ 1
  //numero ++
  let xstars=0;
  let ystars=0;
  for(let nS=0; nS < 5; nS++){
    //dare colori diversi dentro RGB
    stroke(random(0,255),random(0,255),random(0,255));
    //dare stroke diverso in modo randomico
    strokeWeight(random(0,50));
    point(xstars,ystars);
    //genera casualmente random
    xstars=random(0, canvasXMax);
    ystars=random(0, canvasYMax/2);
  }

  /*
  if(frameCount == 50){
    noLoop();
  }*/



  //displays the x and y position of the mouse on the canvas
  stroke("white");
  strokeWeight(1);
  fill(255);//white text
  textSize(50)
  text(frameCount, 5,50)
  //text(`X=${mouseX}, Y=${mouseY}`, 5, 50);
}
