#define potenciometro A0
int valorPot;
int mapPot;

void setup() {
  Serial.begin(9600);
  pinMode(potenciometro,INPUT);
}

void loop() {
  valorPot = analogRead(potenciometro);
  mapPot = map(valorPot, 0, 255, 0, 255);
  Serial.println(mapPot);
  delay(50); 
}
