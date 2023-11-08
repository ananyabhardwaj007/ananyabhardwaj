// var d = (255,0);
// var f1,f2

var lastx=0;
var lasty=0
var clicked = false;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  noStroke(
  )
    background('lightgrey');
  fill(lastx,lasty,100);
  ellipse(mouseX,mouseY,40);

 if (clicked==true){
   fill(mouseX,mouseY,100)
   ellipse(lastx,lasty,40);
   }
}
function mouseClicked(){
  lastx=mouseX
  lasty=mouseY
  
  clicked=true;
}
