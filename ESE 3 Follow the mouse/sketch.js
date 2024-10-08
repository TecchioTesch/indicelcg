let canvasXMax=400;
let canvasYMax=400;
function setup() {
  createCanvas(canvasXMax, canvasYMax);
  background(220);

}

function draw() {
  textSize(15);
  let string_toprint="Contenuto Mouse X = "+mouseX+" /ny="+mouseY;
  //", y="+mouseY;
  //text(string_toprint, 20, 20);
  strokeWeight(5);
  line(0,mouseY, canvasXMax, mouseY);
  //feedback taso mouse sx
  //disegnare linea gialla se schiaccio mouse
  //p5 --> true, se mouse schiacciato, altrimenti è false
  if(mouseIsPressed == true) {
    if(mouseButton == RIGHT){
      background(220);
    }
    //coloro giallo
    stroke("yellow")
  }else{
    stroke("black")
  }
  mouseIsPressed
}
