
function setup() {
  createCanvas(600, 600);
}

function draw() {
background(0,100,200);

if (window.fishX === undefined) {
  window.fishX = width * 0.2;
  window.fishY = height * 0.5;
  window.fishSpeed = 2.5;
  window.fishDir = 1;
  window.finWiggle = 0;
}
window.fishSpeed = mouseIsPressed ? 6 : 2.5;
window.fishX += window.fishSpeed * window.fishDir;
window.finWiggle += 0.12;
if (window.fishX > width - 80) {
  window.fishDir = -1;
  window.fishY = constrain(window.fishY + random(-40, 40), 60, height - 60);
} else if (window.fishX < 80) {
  window.fishDir = 1;
  window.fishY = constrain(window.fishY + random(-40, 40), 60, height - 60);
}
drawClownfish(window.fishX, window.fishY, 1.1, window.fishDir < 0);

function drawClownfish(x, y, s, flipped) {
  push();
  translate(x, y);
  scale(flipped ? -s : s, s);
  noStroke();
  fill(255, 140, 0);
  ellipse(0, 0, 140, 80);
  fill(255);
  ellipse(-20, 0, 34, 74);
  ellipse(20, 0, 34, 74);
  fill(255,255,255);
  ellipse(-20, 0, 38, 78);
  ellipse(20, 0, 38, 78);
  fill(255, 140, 0);
  triangle(-75, 0, -105, -30, -105, 30);
  fill(0);
  triangle(-105, 0, -125, -20, -125, 20);
  push();
  translate(0, -30);
  rotate(sin(window.finWiggle) * 0.4);
  fill(255, 140, 0);
  triangle(-30, 0, 0, -40, 30, 0);
  pop();
  push();
  translate(10, 10);
  rotate(sin(window.finWiggle + 1) * 0.8);
  fill(255, 140, 0);
  ellipse(10, 8, 24, 14);
  pop();
  fill(255);
  ellipse(40, -10, 18, 18);
  fill(0);
  ellipse(44, -10, 8, 8);
  
  if (window.fishSpeed > 4) {
    stroke(255, 200);
    strokeWeight(2);
    line(60, -10, 90, -14);
    line(60, 0, 92, 4);
    noStroke();
  }

  pop();
}
}
