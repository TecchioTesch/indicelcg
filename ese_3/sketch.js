let data;
let dataObj;

function preload() {
  data = loadTable("assets/data.csv", "csv", "header");
}

// colori
let pageColor = "#EDEDED";
let circleColor = "darkblue";
let textColor = "black";
let dotColor = "white";

// altre variabili
let circleSize = 130;
let padding = 20;

function setup() {
  let totalWhidth = circleSize * data.getRowCount() + padding * (1 + data.getRowCount());
  createCanvas(totalWhidth, windowHeight);
  background(pageColor);

  dataObj = data.getObject();

  let xPos = padding + circleSize / 2;
  let yPos = windowHeight / 2;

  //ciclo for per disegnare un  glifo per ogni riga
  for (let i = 0; i < data.getRowCount(); i++) {
    //carico i dati della riga
    let item = dataObj[i];

    console.log(item);

    drawGlyph(xPos, yPos, circleSize, item);
    xPos = xPos + padding + circleSize;
  }
}

function draw() {}

function drawGlyph(x, y, size, rowData) {

  // disegno cerchio per la popolazione 
  let popSize = map(rowData.population, 0, 1439, 0, size);
  //ill("red");

  fillGradient("conic",{from:[x+48, y+48, 0], steps:["red", "orange", "yellow", "orange", "red"]});

  noStroke();
  ellipse(x+48, y+48, popSize, popSize);


  //disegno sfondo
  fill(circleColor);
  stroke("darkgray");
  strokeWeight(3);
  ellipse(x, y, size, size);
  //scrivo il nome
  fill(textColor);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(14);
  text(rowData.country, x, y + size / 2 + 20);

  for(let j = 0; j< rowData.density; j++) {
    // disegna pallini 
    fill(dotColor);
    noStroke();
    
    // creo angolo casuale e raggio dentro cui devo scegliere un punto casuale 
    let angle = random(TWO_PI);
    let radius = random(size/2 -3);

    push();
    // ora devo usare le trasformazioni 
    // traslo al centro del glifo 
    translate(x, y);
    // ruoto a seconda dell'angolo
    rotate(angle); 
    // mi sposto in funzione del raggio
    translate(radius, 0);
    // disegno il pallino
    ellipse(0, 0, 2, 2)
    // ripristino origine assi 
    pop();
  }
}
