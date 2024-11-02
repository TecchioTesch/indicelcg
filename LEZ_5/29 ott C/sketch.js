let riversData;
// MATRICE --> array di array
// Array indicizzabile da 0 a N-1
// RIGHE: 0 -> 101-1
// COLONNE 0 -> 12-1
// colonna di NOMI è la 1 
// array dei nomi
// [Rainbow csv per colorare il CSV]

let arrayOfNames = [];

function preload(){
  riversData = loadTable("assets/rivers-data-reduced.csv")
}

function setup() {
  createCanvas(400, 400);
  // fissare indice di colonna a 1 
  // scorrere le righe 
  for(let r=0; r < riversData.getRowCount(); r++){
    // vogliamo accedere all'elemento in colonna 1 
    arrayOfNames[r] = riversData.get(r,1);
    lunghezze[r]= riversData.get(r,3);
  }

  noLoop();

}

function draw() {
  background(220);
  textSize(50);
  text("Rows " + riversData.getRowCount(), 20, 300); 
  // modo in cui recuperiamo il numero di righe
  // la prima riga però è heder, dà info sulla tabella

  text("Cols " + riversData.getColumnCount(), 20, 230);
  // per calcolare numero di colonne 
  // ESSENDO UNA MATRICE è un ARRAY di ARRAY 

  // vorrei mostrare tutta la colonna 
  
  /*for(let i=0; i<arrayOfNames[i]; i++){
    text(arrayOfNames[i], 100, yPos)
  }*/


  // asse x e y 
  stroke(150);
  strokeWeight(2);

  line(390,200,40,20)


  /*
  QUESTO SERVE  per mostrare tutta la colonna 
  textSize(10); 
    let yPos = 30;
  for(let i=1; i < arrayOfNames.length; i++){
    // con i=1 parto dal primo numero, prima riga, non conto name 
    text(arrayOfNames[i], 100, yPos);
    yPos += 20;
  }
  */

  // per scorrere nell'interezza della tabella 
  //for(let r=0; riversData.getRowCount(); r++){
  //}



}
