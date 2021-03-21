var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var x1 = 240;
var y1 = 195;

var x2 = 330;
var y2 = 195;

var x3 = 10;
var y3 = 500;

var m1 = -2;
var m2 = -1;
var m3 = -3;
var m4 = -10;
var m5 = -1;
var m6 = -1;

var t1 = 40


function setup()
{
    createCanvas(900, 700);
}

function draw()
{
    background(255,0,200);
    fill(200, 255, 0);
    textSize(22)
    text("Epic self portrait", x3,y3);
    {
      if ((y3 == 520 || y3 == 500) && (x3 == 30 || x3 == 10))  
      {
        m5 *= -1;
        m6 *= -1;
      } 

      y3 += m6;
      x3 += m5
    
   }
    
    fill(200, 255, 0);
    textSize(t1);
    text("Fletcher Henderson",10,600 );
    {
      if (t1 == 90 || t1 == 40)  
      {
        m4 *= -1;
      } 

      t1 += m4;
    
   }
    // head
    fill(0, 200, 200);
    circle(290,100,170);
    
    // eyes
    strokeWeight(10);
    fill(0);
    point(240,75);
    point(325,75);

    // nose
    point(285,100);
    
    // mouth
    ellipse(285, 135, 50, 20)

    
    // body
    fill(0, 200, 120);
    rect(240,185,100,150);
    
    // decoration
    fill(255);
    triangle(260,190,290,320,320,190)
  
    // right arm
    rect(340,195,50,10);
 
    // left arm
    rect(190,195,50,10);
   
      // right arm 2
      rect(380,y1,10,60);
   
      // left arm 2
      rect(190,y1,10,60);
   {
      if (y1 >= 205 || y1 <= 195)  
      {
        m1 *= -1;
      } 

      y1 += m1;
    
   }
     

  
    // left leg
    rect(240,335,10,100);
  
    // right leg
    rect(330,335,10,100);

      // left foot
      rect(x1,425,40,10);
      {
        if (x1 >= 250 || x1 <= 240)  
        {
          m2 *= -1;
        } 
  
        x1 += m2;
      
     }
      // right foot
      rect(x2,425,40,10);
      {
        if (x2 >= 340 || x2 <= 330)  
        {
          m3 *= -1;
        } 
  
        x2 += m3;
      
     }

    // hair
    line(170,215,215,50);
    line(365,50,400,215);
    
    line(190,215,215,50);
    line(365,50,420,215);
    

}