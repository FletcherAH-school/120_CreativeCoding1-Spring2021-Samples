function setup()
{
    createCanvas(600, 700);
}

function draw()
{
    background(255,0,200);
    fill(200, 255, 0);
    textSize(22)
    text("Epic self portrait", 10,500);
    
    fill(200, 255, 0);
    textSize(40);
    text("Fletcher Henderson",10,550 );
   
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
      rect(380,195,10,60);
   
      // left arm 2
      rect(190,195,10,60);
  
    // left leg
    rect(240,335,10,100);
  
    // right leg
    rect(330,335,10,100);

      // left foot
      rect(240,425,40,10);
    
      // right foot
      rect(330,425,40,10);
    
    // hair
    line(170,215,215,50);
    line(365,50,400,215);
    
    line(190,215,215,50);
    line(365,50,420,215);
    

}