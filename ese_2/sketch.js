//let xsize = 400;
//let ysize = 400;

//function setup() {
//  createCanvas(xsize, ysize);
//}

//function draw() {
//  background(220);
//   // fare cielo scuro
//   background("black");
//   //stelle
//   stroke ("white");
//   strokeWeight (2);
//   circle (150,150,2);   
//}

//function setup() {
//  createCanvas(400, 400); // Crea una tela di 400x400 pixel
//  background(0); // Imposta uno sfondo nero per il "cielo"

  // Disegna delle "stelle" (cerchi bianchi) di dimensioni e posizioni casuali
//  for (let i = 0; i < 50; i++) {  // Disegna 50 stelle
//      let x = random(width);      // Posizione casuale sull'asse X
//      let y = random(height);     // Posizione casuale sull'asse Y
//      let size = random(2, 8);    // Dimensioni casuali delle stelle, tra 2 e 8 pixel
//      fill(255);                  // Colore bianco per le stelle
//      noStroke();                 // Nessun contorno
//      ellipse(x, y, size, size);  // Disegna ogni stella
//  }
//}

//function draw() {
  // Il disegno delle stelle avviene solo una volta nel setup, quindi il draw rimane vuoto
//}

let shootingStarX = -50;  // Posizione iniziale della stella cadente fuori dallo schermo
let shootingStarY;
let staticStars = []; // Array per memorizzare le stelle statiche

function setup() {
    createCanvas(400, 400); // Crea una tela di 400x400 pixel
    background(0); // Imposta uno sfondo nero per il "cielo"

    // Genera le posizioni e dimensioni delle stelle statiche
    for (let i = 0; i < 50; i++) {
        let x = random(width);      // Posizione casuale sull'asse X
        let y = random(height);     // Posizione casuale sull'asse Y
        let size = random(2, 8);    // Dimensioni casuali delle stelle, tra 2 e 8 pixel
        staticStars.push({x: x, y: y, size: size});  // Salva ogni stella in un array
    }

    // Disegna le stelle statiche una volta sola
    for (let star of staticStars) {
        fill(255);  // Colore bianco per le stelle
        noStroke(); // Nessun contorno
        ellipse(star.x, star.y, star.size, star.size);  // Disegna ogni stella
    }

    shootingStarY = random(height / 2); // Posizione iniziale della stella cadente
}

function draw() {
    // Non ridisegna il background per mantenere le stelle statiche sullo sfondo
    fill(0, 0, 0, 15); // Trasparenza per cancellare parzialmente la scia della stella
    noStroke();
    rect(0, 0, width, height);  // Cancella lentamente la scia della stella cadente

    // Disegna la stella cadente
    fill(255);
    noStroke();
    ellipse(shootingStarX, shootingStarY, 10, 10); // Stella cadente

    // Aggiunge un effetto di scia alla stella cadente
    stroke(255);
    line(shootingStarX - 20, shootingStarY - 10, shootingStarX, shootingStarY);

    // Movimento della stella cadente
    shootingStarX += 10;   // La stella si muove verso destra
    shootingStarY += 5;    // Si muove leggermente verso il basso

    // Riporta la stella cadente fuori dallo schermo quando esce a destra
    if (shootingStarX > width + 30) {
        shootingStarX = -50;  // Torna a sinistra fuori dalla tela
        shootingStarY = random(height / 2); // Nuova posizione Y casuale
    }
textSize (20)
textFont ('Helvetica Neue')
text ("Stella cadente", 125, 210)  
}


