
//player var
var charx = 50;
var chary = 50;
var diameter = 30;

// keys
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// first set
var rectangleAObject;
var rectangleBObject;
var rectangleCObject;

var rectangleDObject;
var rectangleEObject;
var rectangleFObject;

var rectangleGObject;
var rectangleHObject;
var rectangleIObject;

var rectangleJObject;
var rectangleKObject;
var rectangleLObject;

var rectangleMObject;
var rectangleNObject;
var rectangleOObject;

var rectanglePObject;
var rectangleQObject;
var rectangleRObject;

var rectangleSObject;
var rectangleTObject;
var rectangleUObject;

var rectangleVObject;
var rectangleWObject;
var rectangleXObject;

var rectangleYObject;
var rectangleZObject;

// second set

var rectangleABObject;
var rectangleBBObject;
var rectangleCBObject;

var rectangleDBObject;
var rectangleEBObject;
var rectangleFBObject;

var rectangleGBObject;
var rectangleHBObject;
var rectangleIBObject;

var rectangleJBObject;
var rectangleKBObject;
var rectangleLBObject;

var rectangleMBObject;
var rectangleNBObject;
var rectangleOBObject;

var rectanglePBObject;
var rectangleQBObject;
var rectangleRBObject;

var rectangleSBObject;
var rectangleTBObject;
var rectangleUBObject;

var rectangleVBObject;
var rectangleWBObject;
var rectangleXBObject;

var rectangleYBObject;
var rectangleZBObject;

// third set

var rectangleACObject;
var rectangleBCObject;
var rectangleCCObject;
var rectangleDCObject;

function setup() {
  createCanvas(1000, 1000);

  // create shapes A
  rectangleAObject = new Rectangle(0, 100, 200, 5, 33, 33, 222);
  rectangleBObject = new Rectangle(100, 100, 5, 100, 33, 33, 222);
  rectangleCObject = new Rectangle(300, 0, 5, 200, 33, 33, 222);

  rectangleDObject = new Rectangle(200, 200, 400, 5, 33, 33, 222);
  rectangleEObject = new Rectangle(200, 200, 5, 100, 33, 33, 222);
  rectangleFObject = new Rectangle(100, 295, 100, 5, 33, 33, 222); 

  rectangleGObject = new Rectangle(400, 200, 5, 100, 33, 33, 222);
  rectangleHObject = new Rectangle(595, 100, 5, 100, 33, 33, 222);
  rectangleIObject = new Rectangle(0, 400, 200, 5, 33, 33, 222);

  rectangleJObject = new Rectangle(200, 400, 5, 100, 33, 33, 222);
  rectangleKObject = new Rectangle(200, 500, 200, 5, 33, 33, 222);
  rectangleLObject = new Rectangle(395, 400, 5, 100, 33, 33, 222);

  rectangleMObject = new Rectangle(300, 400, 200, 5, 33, 33, 222);
  rectangleNObject = new Rectangle(300, 300, 5, 100, 33, 33, 222);
  rectangleOObject = new Rectangle(495, 300, 5, 100, 33, 33, 222);

  rectanglePObject = new Rectangle(600, 300, 5, 200, 33, 33, 222);
  rectangleQObject = new Rectangle(600, 300, 200, 5, 33, 33, 222);
  rectangleRObject = new Rectangle(700, 100, 5, 200, 33, 33, 222);

  rectangleSObject = new Rectangle(700, 100, 100, 5, 33, 33, 222);
  rectangleTObject = new Rectangle(795, 0, 5, 100, 33, 33, 222);
  rectangleUObject = new Rectangle(900, 100, 100, 5, 33, 33, 222);

  rectangleVObject = new Rectangle(900, 100, 5, 100, 33, 33, 222);
  rectangleWObject = new Rectangle(800, 195, 100, 5, 33, 33, 222);
  rectangleXObject = new Rectangle(900, 300, 100, 5, 33, 33, 222);

  rectangleYObject = new Rectangle(495, 0, 5, 100, 33, 33, 222);
  rectangleZObject = new Rectangle(400, 100, 100, 5, 33, 33, 222);

  // create shapes B

  rectangleABObject = new Rectangle(500, 500, 300, 5, 33, 33, 222);
  rectangleBBObject = new Rectangle(900, 500, 100, 5, 33, 33, 222);
  rectangleCBObject = new Rectangle(900, 400, 5, 100, 33, 33, 222);

  rectangleDBObject = new Rectangle(700, 400, 200, 5, 33, 33, 222);
  rectangleEBObject = new Rectangle(500, 500, 5, 100, 33, 33, 222);
  rectangleFBObject = new Rectangle(700, 500, 5, 100, 33, 33, 222);

  rectangleGBObject = new Rectangle(700, 600, 200, 5, 33, 33, 222);
  rectangleHBObject = new Rectangle(900, 600, 5, 100, 33, 33, 222);
  rectangleIBObject = new Rectangle(300, 600, 300, 5, 33, 33, 222);

  rectangleJBObject = new Rectangle(400, 600, 5, 100, 33, 33, 222);
  rectangleKBObject = new Rectangle(600, 600, 5, 300, 33, 33, 222);
  rectangleLBObject = new Rectangle(600, 800, 100, 5, 33, 33, 222);

  rectangleMBObject = new Rectangle(500, 895, 100, 5, 33, 33, 222);
  rectangleNBObject = new Rectangle(400, 800, 5, 200, 33, 33, 222);
  rectangleOBObject = new Rectangle(300, 800, 200, 5, 33, 33, 222);

  rectanglePBObject = new Rectangle(300, 700, 5, 200, 33, 33, 222);
  rectangleQBObject = new Rectangle(495, 700, 5, 100, 33, 33, 222);
  rectangleRBObject = new Rectangle(200, 700, 100, 5, 33, 33, 222);

  rectangleSBObject = new Rectangle(200, 600, 5, 200, 33, 33, 222);
  rectangleTBObject = new Rectangle(0, 700, 100, 5, 33, 33, 222);
  rectangleUBObject = new Rectangle(100, 600, 100, 5, 33, 33, 222);

  rectangleVBObject = new Rectangle(100, 795, 100, 5, 33, 33, 222);
  rectangleWBObject = new Rectangle(100, 795, 5, 100, 33, 33, 222);
  rectangleXBObject = new Rectangle(100, 500, 5, 100, 33, 33, 222);//done

  rectangleYBObject = new Rectangle(200, 900, 5, 100, 33, 33, 222);
  rectangleZBObject = new Rectangle(700, 900, 5, 100, 33, 33, 222);

  // create shapes C

  rectangleACObject = new Rectangle(700, 900, 200, 5, 33, 33, 222);
  rectangleBCObject = new Rectangle(800, 800, 200, 5, 33, 33, 222);
  rectangleCCObject = new Rectangle(800, 700, 5, 100, 33, 33, 222);

  rectangleDCObject = new Rectangle(700, 700, 100, 5, 33, 33, 222);

  createCharacter(50, 50);
}

function draw() {
  background(0);
  stroke(0);

  // checking for exit
  wincheck();

  //box
  RectanglesA();
  RectanglesB();
  RectanglesC();
  structure(5);

  
  //character
  drawCharacter();
  characterMovement();  
  
  // EXITT
  exit();
}

function RectanglesA() {
  rectangleAObject.display();
  rectangleBObject.display();
  rectangleCObject.display();

  rectangleDObject.display();
  rectangleEObject.display();
  rectangleFObject.display();

  rectangleGObject.display();
  rectangleHObject.display();
  rectangleIObject.display();

  rectangleJObject.display();
  rectangleKObject.display();
  rectangleLObject.display();

  rectangleMObject.display();
  rectangleNObject.display();
  rectangleOObject.display();

  rectanglePObject.display();
  rectangleQObject.display();
  rectangleRObject.display();

  rectangleSObject.display();
  rectangleTObject.display();
  rectangleUObject.display();

  rectangleVObject.display();
  rectangleWObject.display();
  rectangleXObject.display();

  rectangleYObject.display();
  rectangleZObject.display();


}

function RectanglesB() {
  rectangleABObject.display();
  rectangleBBObject.display();
  rectangleCBObject.display();

  rectangleDBObject.display();
  rectangleEBObject.display();
  rectangleFBObject.display();

  rectangleGBObject.display();
  rectangleHBObject.display();
  rectangleIBObject.display();

  rectangleJBObject.display();
  rectangleKBObject.display();
  rectangleLBObject.display();

  rectangleMBObject.display();
  rectangleNBObject.display();
  rectangleOBObject.display();

  rectanglePBObject.display();
  rectangleQBObject.display();
  rectangleRBObject.display();

  rectangleSBObject.display();
  rectangleTBObject.display();
  rectangleUBObject.display();

  rectangleVBObject.display();
  rectangleWBObject.display();
  rectangleXBObject.display();

  rectangleYBObject.display();
  rectangleZBObject.display();
}

function RectanglesC() {
  rectangleACObject.display();
  rectangleBCObject.display();
  rectangleCCObject.display();
  rectangleDCObject.display();

}

function exit() {
  fill(255, 0, 0);
  textSize(16);
  text("EXIT", width - 85, 25);
}

function wincheck() {
  if (charx > width - 50 && chary < 0) {
    fill(255, 0, 0);
    stroke(5);
    textSize(26);
    text("YOU WIN", width / 2 - 50, height / 2 - 50);
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
  rect(0, 0, width - 50, thickness);
  // bottom
  rect(0, height - thickness, width, thickness);
  // left
  rect(0, 0, thickness, height);
  // right 
  rect(width - thickness, 0, thickness, height);
}



