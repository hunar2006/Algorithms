var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 100, 50);
 fixedRect.shapeColor="green";
 fixedRect.debug=true;

 movingRect = createSprite(100,100,50,100);
 movingRect.shapeColor="green";
 movingRect.debug=true;
}

function draw() {
  background(0,0,0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  console.log(movingRect.x-fixedRect.x);
  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 && fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
   fixedRect.shapeColor="red";
   movingRect.shapeColor="yellow" 
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  drawSprites();
}