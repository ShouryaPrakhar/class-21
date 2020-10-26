var fixedRect,movingRect
var ob1,ob2,ob3,ob4,ob5,ob6

function setup() {
  createCanvas(1200,800);
   fixedRect=createSprite(200, 200, 50, 80);
   movingRect=createSprite(400,200,80,30)
   fixedRect.shapeColor="green"
   movingRect.shapeColor="green"
   fixedRect.debug=false;
   movingRect.debug=false;
   ob3= createSprite(100,100,50,50)
   ob3.shapeColor="green"

   ob4= createSprite(200,100,50,50)
   ob4.shapeColor="green"

   ob5= createSprite(300,100,50,50)
   ob5.shapeColor="green"

   ob6= createSprite(400,100,50,50)
   ob6.shapeColor="green"

   movingRect.velocityY = -5;
   fixedRect.velocityY = +5;
}

function draw() {
  background(0); 
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  
  if(isTouching(movingRect,ob4)){
    movingRect.shapeColor="blue"
    ob4.shapeColor="blue"
    
  }else{
    movingRect.shapeColor="green"
    ob4.shapeColor="green"
  }
  bounceOff(fixedRect,movingRect);
  
  drawSprites();
}

