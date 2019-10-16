
//===============================================
//Interface teclado numerico
//Autor: Iury Anderson Fernandes Coelho
//Revisado em: 13/10/2019
//===============================================
var tamanhoFonte =30;

var numbotao1;
function setup() { 
  
  local= createCanvas(600, 600);

  textSize(tamanhoFonte);
  textStyle(BOLD);  
}

function draw() { 
   
  background(50);
  colorMode(HSB);
  strokeWeight(10); 
  translate(50,150);
  
  // linhas horizontais
   line(50, 30,  450, 30);
   line(50, 100, 450, 100);
   line(50, 170, 450, 170);
   line(50, 240, 450, 240);
   line(50, 310, 450, 310);
  
  //linhas verticais
   line(50, 310, 50, 30); 
   line(150, 30, 150, 310);
   line(250, 30, 250, 310);  
   line(350, 310, 350, 30); 
   line(450, 30, 450, 310);   
  
  //posicao dos botoes   
   fill(220);  
   text('1',  90, 70); 
   text('2',  190,70); 
   text('3',  290,70);
   text('4',  390,70);
   text('5',  90, 150);
   text('6',  190,150);
   text('7',  290,150);
   text('8',  390,150);
   text('9',  90, 220);
   text('10', 180, 220);
   text('11', 280, 220);
   text('12', 380, 220);
   text('13', 80, 290);
   text('14', 180, 290);
   text('15', 280, 290);
   text('16', 380, 290);    
  
}
