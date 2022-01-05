function setup() {
  createCanvas(400, 400);
  frameRate(8);
}

function draw() {
  background(255);
  fill('#fae')
  beginShape();
    for(var i=0; i<24; i++){
      vertex(i* random(100), random(height));
    }
  endShape(CLOSE);
}
