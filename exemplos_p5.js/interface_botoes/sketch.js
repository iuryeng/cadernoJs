tamanhoFonte = 15;
// interface de dois botões 
function setup() {
  createCanvas(600, 600);
  quadrado = createGraphics(400,400);
  textSize(tamanhoFonte);  
 }

function draw() {
   background(200);
   quadrado.background(300);
   quadrado.line(50, 350, 50, 20);
   quadrado.line(50, 350, 350, 350);
   quadrado.line(350, 20, 50, 20);
   quadrado.line(350, 350, 350, 20); 
   quadrado.fill(75, 75, 80, 80);
   quadrado.ellipse(200,250,100,100);
   quadrado.ellipse(200,120,100,100);
   image(quadrado, 100,100);     
   fill(color='blue');   
   text('INTERFACE BOTÕES', 190, 90);
   fill(color='red');   
   text('ON', 290, 230);
   text('OFF', 285, 360);
}