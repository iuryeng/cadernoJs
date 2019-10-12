
int  sensor=1;
void setup() {
 Serial.begin(9600); // initialize serial communications
}
 
void loop() {

 Serial.print(sensor); 
 sensor=sensor+1;
 delay(1000);                                            
}
