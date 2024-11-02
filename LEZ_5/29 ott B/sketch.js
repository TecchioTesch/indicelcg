let myImage;
//dobbiamo usarla in tutti pezzi del codice
let newImage;

//asynchronous
function preload(){
//--> caricare dati, immagini etc.
  myImage = loadImage("assets/opn-bk-pixabay.jpg");
  // stringa = percorso fino all'immagine 
  // percorso relativo 
  // entro in assets e scrivo nome 
  newImage = loadImage("assets/octopus-pixabay.jpg")
}
//once and forever
function setup() {
  createCanvas(400, 400);
}

//loop
function draw() {
  background(220);
  //myImage - ora vogliamo mostrare l'immagine
  image(myImage, 0, 0, width, height)
  image(newImage, mouseX-50, mouseY-50, 100, 100)
}
