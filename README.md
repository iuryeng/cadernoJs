
## Caderno de Estudos de Internet das Coisas

> Este documento reúne algorítimos e aplicações de internet das coisas


### Conteúdo

 
<details>
<summary>P5.js e o Arduino</summary>
 
* [`introdução`](#introdução)
* [`serialEvents`](#serialEvents)
* [`exemplos`](#exemplos)

<summary>Conexão ESP8266 e Msql </summary>

<summary>Conexão PHP e Mysql </summary>



</details>

# exemplos

- Leia um valor qualquer da porta serial COM7
```js
let serial;
let sensor;

function setup() {  
 createCanvas(400, 400);
 serial = new p5.SerialPort(); // cria uma nova instancia serial
 serial.open('COM7'); // mude o valor da porta conforme a conexão do porta serial e o arduino
 serial.on('connected', serverConnected);
 serial.on('data', serialArduino);   
}

function serialArduino() {
 sensor = Number(serial.read());
}

function serverConnected() {
 print("Connected to Server");
}

function draw() {
  background(0);
  textSize(30);
  fill(300);
  text("Valor do sensor:" + sensor, 30, 40);
}
```
</details>

<br>[⬆ volte para o topo](#contents)
