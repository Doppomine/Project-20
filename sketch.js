var bg
var sleep
var eat
var drink
var astronaut
function preload(){
 
  bg = loadImage("Images/iss.png");
  sleep = loadAnimation("Images/sleep.png");
  eat = loadAnimation("Images/eat1.png","Images/eat2.png");
  drink = loadAnimation("Images/drink1.png","Images/drink2.png");
}

function setup() {

  createCanvas(800,400);
  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.addAnimation("eating",eat);
  astronaut.addAnimation("drinking",drink);
  astronaut.scale = 0.1
  //astronaut.visible = false;
}

function draw() {
  background(bg);

  if (keyDown("UP_ARROW")) {
    astronaut.changeAnimation("sleeping",sleep);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  else if (keyDown("LEFT_ARROW")) {
    astronaut.changeAnimation("eating",eat);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
 else if (keyDown("RIGHT_ARROW")) {
    astronaut.changeAnimation("drinking",drink);
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0;
  }
  drawSprites();
}