//===============================================
//Conexão serial com arduino e javascript
//Autor: Iury Anderson Fernandes Coelho
//Revisado em: 12/10/2019
//===============================================

let serial;
let sensor;

function setup() {  
 createCanvas(500, 500);
 serial = new p5.SerialPort(); // cria uma nova instancia serial
 serial.open('COM7');
 serial.on('connected', conexaoServidor);
 serial.on('data', serialArduino);   
}

function serialArduino() {
 sensor = Number(serial.read());
}

function conexaoServidor() {
 print("Servidor conectado");
}

function draw() {
  background(0);
  textSize(30);
  fill(300);
  text("Valor do sensor:" + sensor, 30, 40);
}
