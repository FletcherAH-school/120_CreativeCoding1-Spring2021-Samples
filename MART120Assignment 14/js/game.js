
//player var
var charx = 50;
var chary = 50;
var diameter = 30;
//mouse click shape var 
var mousexshape;
var mouseyshape;

// random vars
var randx = 30;
var randy = 50;

var arandx = [];
var arandy = [];
var randiameter = [];

var rxSpeed = [];
var rySpeed = [];

// keys
var w = 87;
var s = 83;
var a = 65;
var d = 68;

var rectangleAObject;
var rectangleBObject;
var rectangleBObject;

var circleAObject;
var circleBObject;
var circleCObject;


function setup() {
  createCanvas(500, 800);

  // create shapes
  rectangleAObject = new Rectangle(0, 200, 350, 5, 33, 33, 222);
  rectangleBObject = new Rectangle(150, 400, 350, 5, 33, 33, 222);
  rectangleCObject = new Rectangle(0, 600, 350, 5, 33, 33, 222);

  circleAObject = new Circle(350, 202.5, 15, 33, 33, 222);
  circleBObject = new Circle(150, 402.5, 15, 33, 33, 222);
  circleCObject = new Circle(350, 602.5, 15, 33, 33, 222);


  // rand sped
  for (var i = 0; i < 50; i++) {
    rxSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() / 3)) + 2);
    rySpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) + 2);
    arandx[i] = getRandomNumber(500);
    arandy[i] = getRandomNumber(800);
    randiameter[i] = getRandomNumber(10);
  }

  createCharacter(50, 50);
}

function draw() {
  background(0);
  stroke(0);

  // random obsticals
  randomops();

  // checking for exit
  wincheck();

  //box
  Rectangles();
  structure(5);

  //MOUSE OB
  mouseob();
  
  //character
  drawCharacter();
  characterMovement();  
  
  // EXITT
  exit();
}

function Rectangles() {
  rectangleAObject.display();
  rectangleBObject.display();
  rectangleCObject.display();

  circleAObject.display();
  circleBObject.display();
  circleCObject.display();
}

function exit() {
  fill(255, 184, 255);
  textSize(16);
  text("EXIT", width - 85, height - 10);
}

function wincheck() {
  if (charx > width - 50 && chary > height) {
    fill(255, 184, 255);
    stroke(5);
    textSize(26);
    text("YOU WIN", width / 2 - 50, height / 2 - 50);
  }
}

function mouseob() {
  fill(25, 25, 166);
  circle(mousexshape, mouseyshape, 50);
}

function randomops() {
  // random obsticals
  fill(255, 0, 0);
  //draw op
  for (var i = 0; i < arandx.length; i++) {
    circle(arandx[i], arandy[i], randiameter[i]);
    rxSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() / 3)) + 2);
    rySpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) + 2);

    //move op
    arandx[i] += rxSpeed[i];
    arandy[i] += rySpeed[i];
    // keep in
    if (arandx[i] > width) {
      arandx[i] = 0;
    }
    if (arandx[i] < 0) {
      arandx[i] = width;
    }
    if (arandy[i] > height) {
      arandy[i] = 0;
    }
    if (arandy[i] < 0) {
      arandy[i] = height;
    }
  }
}

function characterMovement() {
  if (keyIsDown(d)) {
    charx += 5;
  }
  if (keyIsDown(a)) {
    charx -= 5;
    console.log("movement: " + charx);
  }
  if (keyIsDown(s)) {
    chary += 5;
  }
  if (keyIsDown(w)) {
    chary -= 5;
  }

}

function createCharacter(x, y) {
  charx = x;
  chary = y;
}

function drawCharacter() {
  fill(255, 255, 0);
  circle(charx, chary, diameter);
}

function structure(thickness) {
  fill(33, 33, 222);
  // top
  rect(0, 0, width, thickness);
  // left
  rect(0, 0, thickness, height);
  // bottom
  rect(0, height - thickness, width - 50, thickness);
  // right 
  rect(width - thickness, 0, thickness, height);
}

function mouseClicked() {
  mousexshape = mouseX;
  mouseyshape = mouseY;
}

function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 10;
}

