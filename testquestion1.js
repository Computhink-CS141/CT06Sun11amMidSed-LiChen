let xpos=50;
let ypos=50;

function setup () {
    createCanvas(600, 400);
    background("255")
}

function draw(){
    background("black")
    fill("black");
    stroke("red");
    strokeWeight(10);
    circle(xpos, ypos, 50);
    triangle(175, 100, 150, 120, 75, 50);
    // rectangle(400, 300, 100, 100);
}

