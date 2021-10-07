function setup() { 
    createCanvas(1000, 600); 
    background(220);
}

function draw() {  
    ellipse(mouseX, mouseY, mouseY / 3)  
    let c = color(mouseX, mouseY, Math.floor(Math.random() * 1000)) 
    fill(c)
}