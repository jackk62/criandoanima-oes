let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(1000, 1000);
   background("black");
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
 
  fill("white");
  circle(posicaoHorizontal,posicaoVertical,20);
 
 
 
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;
  }
 
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;
  }
 
  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
 
  if (mouseIsPressed){
    color = "black"(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}