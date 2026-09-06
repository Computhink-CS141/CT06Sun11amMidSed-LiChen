let xpos=50;
let ypos=50;
let colourMe=0;

function setup(){
    createCanvas(600, 600);
    background("grey");
    for (let num = 1; num <= 11; num = num + 1) {
        fill(colourMe);
        circle(xpos, ypos, 50);
        xpos = xpos + 55
        ypos = ypos + 50
        colourMe = colourMe + 30
    }
}

function draw() {
    
}