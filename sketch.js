function preload(){
  
}
function setup() {
  createCanvas(1000, 600);
 verticalWalls()
horizantalWalls()
ball =createSprite(0,0,20,20)
ball.shapeColor = "green"
vWallGroup = new Group()
hWallGroup = new Group()
}

function draw() {
  background("white");
  drawSprites()

  if(keyDown(UP_ARROW)){
    ball.velocityY = -3
  }
  if(keyDown(DOWN_ARROW)){
    ball.velocityY = 3
  }
  if(keyDown(RIGHT_ARROW)){
    ball.velocityX = 3
  }
  if(keyDown(LEFT_ARROW)){
    ball.velocityX = -3
  }
}

function verticalWalls(){
var distance = 0
for(var a = 0; a<15;a++){
 var x = random(20,1000)
 var y = random(0,600)
 var h = random(80,250)
 distance = x
  wall2 = createSprite(distance+100,y,20,h)
  wall2.shapeColor = rgb(random(0,255),random(0,255),random(0,255))

}


}

function horizantalWalls(){
  var distance =0
for(var a = 0; a<15;a++){

  var x = random(20,1000)
  var y = random(0,600)
  var w = random(80,250)
  distance = y
   wall2 = createSprite(x,distance+50,w,20)
   wall2.shapeColor =  rgb(random(0,255),random(0,255),random(0,255)) 
}
}

if(vWallGroup.isTouching(ball)){
  ball.position.x = 0
  ball.position.y = 0

}
if(hWallGroup.isTouching(ball)){
  ball.position.x = 0
  ball.position.y = 0

}

