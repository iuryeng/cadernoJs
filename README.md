
## Caderno de Estudos de Internet das Coisas

> Este documento reúne algorítimos e aplicações de internet das coisas


### Conteúdo

<details>
<summary>Processing e Arduino</summary>
 
* [`introdução`](#introdução)



</details>
 
<details>
<summary>p5.js e Arduino</summary>
 
* [`introdução`](#introdução)
* [`serialEvents`](#serialEvents)
* [`aplicações`](#aplicações)


</details>

 
<details>
<summary>ESP8266 e MySql</summary>
 
* [`introdução`](#introdução)
* [`exemplos`](#exemplos)


</details>

# introdução
> antes de tudo...

- baixe : https://github.com/p5-serial/p5.serialcontrol/releases
- esse app concede a comunicação com as portas seriais disponíveis.
- baixe a biblioteca p5.js: https://github.com/iuryeng/IoT/blob/master/p5js_app/p5.serialport.js
- escreva no header no arquivo index.html: <script src="p5.serialport.js"></script>
- você pode rodar seu scketch aqui : https://editor.p5js.org/


# aplicações
 
> propósito: ler a porta serial   
> link da app: https://github.com/iuryeng/IoT/tree/master/exemplos_p5.js/conexao_serial_arduino


![](gif_sensor.gif)

>algorítimo JavaScript
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
> algorítimo Arduino
```c

int  sensor=1;

void setup() {

 Serial.begin(9600); // initialize serial communications
}
 
void loop() {

 Serial.print(sensor); 
 sensor=sensor+1;
 delay(1000);                                            
}
```
</details>

<br>[⬆ volte para o topo](#conteúdo)
