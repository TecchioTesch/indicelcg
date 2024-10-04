let xsize = 400;
let ysize = 400;

function setup() {
  createCanvas(xsize, ysize);
}

function draw() {
  background(220);
   // fare cielo scuro
   background("darkblue");
   //luna
   fill("yellow");
   stroke("white");
   strokeWeight("10");
   circle(300, 75, 100);
   //prato, prima della forma desiderata devo cambiare fill
   //e stroke 
   fill("green");
   stroke("darkgreen");
   strokeWeight(5);
   rect(0, 200, 400, 200);
   stroke("yellow");
   strokeWeight(30);
   let xStars_primo= 10;
   let yStars_primo= 20;
   point(xStars_primo,yStars_primo);
  let passo=1;
   for(let i=0; i<50; i = i+passo) {
    strokeWeight(i*3)
     if(i%2==0){
        //corpo ramo vero
        stroke("yellow")
        }else{
          //altrimenti questo
          stroke("red")
     }
    point(xStars_primo*i, yStars_primo+i);
   }
   //stella polare
   //point(xStars_primo+60,30);
   //aggiungiamo un'altra stella
   //point(xStars_primo,100)
   //point(75,100)
   //
  fill("blue")
  stroke("white")
  rect(100, 125, 1, 1)
  rect(300, 125, 1, 1)
   fill("white");
   stroke(0);
   strokeWeight(0);
   textSize(20);
   text("C'era una volta...",200,350);
}
