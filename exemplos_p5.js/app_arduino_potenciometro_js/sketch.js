//===============================================
//Interação com potenciometro e web browser
//Autor: Iury Anderson Fernandes Coelho
//Revisado em: 12/10/2019
//===============================================

let serial;
let sensor;

function setup() {  
 createCanvas(700, 400);
 serial = new p5.SerialPort(); 
 serial.open('COM7');
 serial.on('connected', conexaoServidor);
 serial.on('data', serialArduino);   
}

function serialArduino() {
  var palavra = serial.readLine();
  if (palavra.length > 0) {
    palavra = palavra.trim();
    sensor = Number(palavra); 
  }
}

function conexaoServidor() {
 print("Servidor conectado");
}

function draw() {
  background(0);
  textSize(20);
  fill(300);
  text("Valor do potenciômentro:" + sensor, 30, 40);
  let c = color('red');
  fill(c); 
  stroke(300)
  rect( 10, 100, sensor, 60);
}
