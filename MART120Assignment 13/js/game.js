
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

function setup() {
        createCanvas(500,700);
        // 1
        for (var i = 0; i < 50; i++) {
        rxSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) + 2);
        rySpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) + 2);
        arandx[i] = getRandomNumber(500);
        arandy[i] = getRandomNumber(700);
        randiameter[i] = getRandomNumber(15);
       }

    createCharacter(50, 50);
}

function draw() {
    background(0);
    stroke(0);
    fill(33, 33, 222);
      
    //box
    structure(5);

    // EXITT
    exit();

    //character
    drawCharacter();
    characterMovement();  

    // random obsticals
    randomops();
  
    // checking for exit
    wincheck();

    //MOUSE OB
    mouseob();
}

function exit() {
    fill(255, 184, 255);
    textSize(16);
    text("EXIT", width-85,height-10);
}

function wincheck() {
    if (charx > width-50 && chary > height) { 
        fill(255, 184, 255);
        stroke(5);
        textSize(26);
        text("YOU WIN", width/2-50, height/2-50);
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
      for (var i = 0; i < arandx.length; i++){
      circle(arandx[i], arandy[i], randiameter[i]);
      rxSpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) + 2);
      rySpeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) + 2);
      
    //move op
      arandx[i] += rxSpeed[i];
      arandy[i] += rySpeed[i];
    // keep in
      if(arandx[i] > width) {
         arandx[i] = 0;
      }
      if(arandx[i] < 0) {
         arandx[i] = width;
      }
      if(arandy[i] > height) {
         arandy[i] = 0;
      }
      if(arandy[i] < 0) {
         arandy[i] = height;
      } 
  }
}

function characterMovement() {  
  if(keyIsDown(d)) {
    charx+=5;
  }
  if(keyIsDown(a)) {
    charx-=5;
    console.log("movement: " + charx);
  }        
  if(keyIsDown(s)) {
    chary+=5;
  }
  if(keyIsDown(w)) {
    chary-=5;
  }
    
}

function createCharacter(x,y) {
    charx = x;
    chary = y;
}

function drawCharacter() {
    fill(255, 255, 0);
    circle(charx, chary, diameter);
}

function structure(thickness) {
// top
rect(0,0,width,thickness);
// left
rect(0,0,thickness,height);
// bottom
rect(0, height-thickness,width-50, thickness);
// right 
rect(width-thickness,0,thickness,height);
} 
  
function mouseClicked() {
mousexshape = mouseX;
mouseyshape = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

        