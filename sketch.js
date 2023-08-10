function setup() {
  createCanvas(800, 800);
  background ("pink")
}

function draw() {
  
  
  stroke('white');
  fill('black');
  
  // console.log(mouseIsPressed);
  
  if(mouseIsPressed) {
    rect(mouseX, mouseY, 30, 35);
  }
}