let serial;
let sensor;

function setup() {  
 createCanvas(700, 400);
 serial = new p5.SerialPort(); 
 serial.open('COM7');
 serial.on('connected', serverConnected);
 serial.on('data', serialArduino);   
}

function serialArduino() {
  var palavra = serial.readLine();
  if (palavra.length > 0) {
    palavra = palavra.trim();
    sensor = Number(palavra); 
  }
}

function serverConnected() {
 print("Connected to Server");
}

function draw() {
  background(0);
  textSize(20);
  fill(300);
  text("Valor do potenciomentro:" + sensor, 30, 40);
  let c = color('red');
  fill(c); // Use 'c' as fill color
  stroke(300)
  rect( 10, 100, sensor, 60);
}