//===============================================
//Quadrado interativo com slider
//Autor: Iury Anderson Fernandes Coelho
//Revisado em: 13/10/2019
//===============================================

var slider;
var fontSize = 15;
var sliderFront;
var sliderBack ;
var sliderGround;


function setup() {
  createCanvas(400, 400);
  sliderFront = createSlider(0,250,333);
  sliderBack = createSlider(0,200,250);
  sliderGround = createSlider(0,200,250);
  backSquare = createGraphics(400,400);
  frontSquare = createGraphics(400,400);
  textSize(fontSize);
  
}

function draw() {
  background(sliderGround.value(), 255,140);
  
  backSquare.fill(sliderBack.value(), 150,240);
  backSquare.rect(50,70,275,250, 20);  
  image(backSquare, 10,10);// rect back
  
  frontSquare.fill(120,110,sliderFront.value());
  frontSquare.rect(50,90,275,250, 20); // rect front
  image(frontSquare, 1,20);// rect back

  
  sliderFront.position(185,170);
  sliderBack.position(185,195);
  sliderGround.position(185,220);
  
  text("color frontSquare:", 60,185);
  text("color backSquare:", 60, 210);
  text("color ground:", 60, 235);
  text("backgroud value:" + sliderGround.value(), 60, 330);
 
}
