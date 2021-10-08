let shapeSwitch = 0;

function setup() { 
    createCanvas(windowWidth, windowHeight); 
    background(51); //TODO@lavalord changed the background color

}

function draw() {
  if(shapeSwitch === 0)
    {
    ellipse(mouseX, mouseY, mouseY / 3)
    }
  if(shapeSwitch === 1)
    {
      triangle(mouseX, mouseX*2, mouseY*2, mouseX,0,0)
    }
  if(shapeSwitch === 2)
    {
      square(mouseX, mouseX * -1, mouseY);
    }
    
  let c = color(mouseX*2, mouseY/6, Math.floor(Math.random() * 777)) 
  fill(c)
}

function mousePressed() {
  shapeSwitch++;
  
  if(shapeSwitch === 3)
    {
      shapeSwitch = 0;
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
  }
