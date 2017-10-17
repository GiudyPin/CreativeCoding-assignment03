function setup() {
  createCanvas (400, 400)
  angleMode(DEGREES)
  
}


function draw() {
  
  
  translate(200, -400) 
  rotate (45)
  
  //for statement
  for(var x = 50; x < 800; x+=50)
  {
    for(var y = 50; y < 800; y+=50)
    {
  
    strokeWeight(1)
      rect(x-20, y-20, 50, 50)
  
  //list and random statement    
  var colorList = ['255',
                 '#3c5979',
                 '#018cb7',
                 '#fae093'];
                 
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];
  stroke(color(colorHex));
  
  //if and else statement
   if(random()<0.5) {
fill(200,120,50);
     
   } 

  else {
fill(200); 
    
  }
      
    strokeWeight(2)
      rect(x-15, y-15, 40, 40)
      rect(x-10, y-10, 30, 30)
      rect(x-5, y-5, 20, 20)
      rect(x, y, 10, 10)
    }
  }
  
  
  
}