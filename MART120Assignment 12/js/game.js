
   //player var
    var x = 50;
    var y = 50;
    var diameter = 30;

    //mouse click shape var 
    var mousex = -100;
    var mousey = -100;

    // random vars
    var rxa = 420;
    var rya = 50;
    
    var rxb = 50;
    var ryb = 520;

    var rxc = 320;
    var ryc = 50;
    
    var rxd = 50;
    var ryd = 420;
    
    var rxSpeeda;
    var rxSpeeda;

    var rxSpeedb;
    var rxSpeedb;

    // keys
    var w = 87; 
    var s = 83;
    var a = 65;
    var d = 68;

    function setup()
    {
        createCanvas(500,700);
        // 1
        rxSpeeda = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) - 2);
        rySpeeda = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) + 2);
        // 2
        rxSpeedb = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
        rySpeedb = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 2);
        // 3
        rxSpeedc = Math.floor(Math.random() * (Math.floor(Math.random() / 4)) - 3);
        rySpeedc = Math.floor(Math.random() * (Math.floor(Math.random() / 4)) + 3);
        // 4
        rxSpeedd = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 3);
        rySpeedd = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) - 3);
}

    function draw()
{
      
    //box
        structure();

    //character
        drawCharacter();
        characterMovement();  

    // check 4 win
        checkforW();

    // mouse ob 
        mouseOB();

    // random obstical basics
        randOBbasics();

    //keep rand in box
        keeprandIN();

}

function characterMovement()
{  
  if(keyIsDown(d))
  {
  x+=5;
  }
  if(keyIsDown(a))
  {
  x-=5;
  }        
  if(keyIsDown(s))
  {
  y+=5;
  }
  if(keyIsDown(w))
  {
  y-=5;
  }  
  if(keyIsDown(d) && keyIsDown(32))
  {
  x+=7;
  }
  if(keyIsDown(a) && keyIsDown(32))
  {
  x-=7;
  }
  if(keyIsDown(s) && keyIsDown(32))
  {
  y+=7;
  }
  if(keyIsDown(w) && keyIsDown(32))
  {
  y-=7;
  }
}

function drawCharacter()
{
    fill(255, 255, 0);
    circle(x,y,diameter);
}

function structure()
{
background(0);
stroke(0);
fill(33, 33, 222);
// top
rect(0,0,width,5);
// left
rect(0,0,5,height);
// bottom
rect(0, height-5,width-50, 5);
// right 
rect(width-5,0,5,height);
// EXITT
fill(253, 0, 0)
textSize(16);
text("EXIT", width-85,height-10)
} 

function checkforW()
{
// checking for exit
    if( x > width-50 && y > height )
    { 
    fill(253, 0, 0);
    stroke(5);
    textSize(26);
    text("YOU WIN", width/2-50, height/2-50);
    }
}

function mouseOB()
{
    fill(25, 25, 166);
    circle(mousex, mousey, 50);  
}

function randOBbasics()
{
        // random ob 1
        fill(255, 0, 0);
        circle(rxa, rya, 15);

    // random ob 2
        fill(255, 184, 255);
        circle(rxb, ryb, 15);

    // random ob 3
        fill(0, 255, 255);
        circle(rxc, ryc, 15);

    // random ob 4
        fill(255, 184, 82);
        circle(rxd, ryd, 15);
        //1
        rxSpeeda = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) - 2);
        rySpeeda = Math.floor(Math.random() * (Math.floor(Math.random() / 5)) + 2);
        //2
        rxSpeedb = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 2);
        rySpeedb = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) - 2);
        // 3
        rxSpeedc = Math.floor(Math.random() * (Math.floor(Math.random() / 4)) - 3);
        rySpeedc = Math.floor(Math.random() * (Math.floor(Math.random() / 4)) + 3);
        // 4
        rxSpeedd = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 3);
        rySpeedd = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) - 3);
        

        rxa += rxSpeeda;
        rya += rySpeeda;

        rxb += rxSpeedb;
        ryb += rySpeedb;

        rxc += rxSpeedc;
        ryc += rySpeedc;

        rxd += rxSpeedd;
        ryd += rySpeedd;
}

function keeprandIN()
{
        //1
        if(rxa > width)
        {
            rxa = 0;
        }
        if(rxa < 0)
        {
            rxa = width;
        }
        if(rya > height)
        {
            rya = 0;
        }
        if(rya < 0)
        {
            rya = height;
        }
    
        //2
        if(rxb > width)
        {
            rxb = 0;
        }
        if(rxb < 0)
        {
            rxb = width;
        }
        if(ryb > height)
        {
            ryb = 0;
        }
        if(ryb < 0)
        {
            ryb = height;
        }
        //3
        if(rxc > width)
        {
            rxa = 0;
        }
        if(rxc < 0)
        {
            rxc = width;
        }
        if(ryc > height)
        {
            ryc = 0;
        }
        if(ryc < 0)
        {
            ryc = height;
        }
        
        //4
        if(rxd > width)
        {
            rxd = 0;
        }
        if(rxd < 0)
        {
            rxd = width;
        }
        if(ryd > height)
        {
            ryd = 0;
        }
        if(ryd < 0)
        {
            ryd = height;
        }
}
    
//make mouse guy
function mouseClicked()
{
mousex = mouseX;
mousey = mouseY;
}

        

        