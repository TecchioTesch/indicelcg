let riversData;
//matrice --> array di array
//array indicizzabili da 0 N-1
//sia per le righe (0--100)
//sia per le colonne (0--11)
//colonna dei nomi è 1
//array di nomi
let arrayOfNames = [];
let lunghezze =[];

function preload(){
  riversData = loadTable("../../assets/rivers-data-reduced.csv");
}
function setup() {
  createCanvas(400, 400);
  //fissare indice di colonna a 1
  //scorrere le righe
  for(let r=0; r < riversData.getRowCount() ; r++){
    //acceder all'elemento r,1
    //salvare il nome nell'aray
    arrayOfNames[r] = riversData.get(r,1);
    lunghezze[r]= riversData.get(r,3);
  }
  noLoop();
  // //per scorrere nell'interezza la tabella
  // for(let r=0; riversData.getRowCount(); r++){
  //   for(let c=0; riversData.getColumnCount(); c++){
  //     //x ogni riga
  //     //scorri ogni colonna
  //     riversData.get(r,c);
  //   }
  // }
  angleMode(DEGREES);

}

function draw() {
  background(220);
  textSize(50);
  text("Rows "+riversData.getRowCount(),20,300);
  text("Cols "+riversData.getColumnCount(),20,260);
  textSize(10);
  //asse x e asse y
  stroke(155);
  strokeWeight(2);

  //asse y, fissata una x variato y
  line(40,200,40,20);
  // asse X
  let xMin = 40;
  let xMax = 390;
  line(40, 200, 390 ,200);
  //aggiungere label asse y
  //label ruotata
  push();
  noStroke();
  textSize(20);
  translate(20,100);
  rotate(-90)
  text("Len", 50, 15);
  pop();

  //aggiungere una label asse x
  noStroke();
  textSize(20);
  text("River", 150,220);


  // scorrere tutte le lunghezze e mostrarle sul grafico
  for(let i=0; i<lunghezze.length; i++){
    //map --> valore, intervallo iniziale,
    // intervallo di destinazione (xMin - xMax)
    let x = map(i,0, lunghezze.length, xMax);
    let y = 

    point(x,i);
  }



  //vorrei mostrare tutta la colonna
  // let yPos = 30;
  // for(let i=1; i < arrayOfNames.length; i++){
  //   text(arrayOfNames[i], 100, yPos);
  //   yPos += 20;
  // }
}
