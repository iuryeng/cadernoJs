
## Caderno de Estudos de Internet das Coisas

> Este documento reúne algorítimos e aplicações de internet das coisas


### Conteúdo

<details>
<summary>Conexão javascript com P5.js e o Arduino</summary>
 
* [`introdução:`](#introdução)
* [`serialEvents:`](#serialEvents)
* [`exemplos:`](#exemplos)


</details>

# exemplos

- Leia um valor da porta serial COM7
```js
let serial;
let sensor;

function setup() {  
 createCanvas(400, 400);
 serial = new p5.SerialPort(); // cria uma nova instancia serial
 serial.open('COM7');
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
