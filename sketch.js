var PLAY = 1
var END = 0
var gameState = PLAY
var cat,catwalking,catsitting,catend;
var mouse,mousebegin,mousehands,mouseend;
var garden,gardenImage;
function preload() {
    gardenImage = loadImage("images/garden.png");
    catwalking = loadAnimation("images/tomThree.png","images/tomTwo.png");
    catsitting = loadAnimation("images/tomOne.png");
    catend = loadAnimation("images/tomFour.png");
    mousebegin = loadAnimation("images/jerryOne.png");
    mousehands = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    mouseend = loadAnimation("images/jerryFour.png");
    //load the images here
}

function setup(){
    createCanvas(800,600);

    mouse = createSprite(100,470,50,50);
    mouse.setCollider("rectangle",0,0,50,50);
    mouse.debug = true;
    mouse.scale = 0.1;
    
    cat = createSprite(700,470,50,60);
    cat.setCollider("rectangle",0,0,50,50);
    cat.debug = true;
    cat.scale = 0.1;

    mouse.addAnimation("running",mousebegin);
    cat.addAnimation("running",catsitting);
    mouse.addAnimation("walking",mousehands);
    cat.addAnimation("walking",catwalking);
    mouse.addAnimation("collided",mouseend);
    cat.addAnimation("collided",catend);
    
}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
     if (gameState === PLAY) {
        
        if (keyDown("space")) {
          cat.velocityX = -3;  
          keyPressed();
        }

        if (mouse.isTouching(cat)) {
            gameState = END
        }
     }

     if (gameState === END) {
        endswitch();
        cat.velocityX = 0;
        cat.x = 160;
        cat.y - 470;
     }
    
    
    drawSprites();
    
}


function keyPressed() {
    mouse.changeAnimation("walking",mousehands);
    cat.changeAnimation("walking",catwalking);
    
}

function isTouching() {

    if (cat.x - mouse.x < mouse.width/2 + cat.width/2
      && mouse.x - cat.x < mouse.width/2 + cat.width/2
      && cat.y - mouse.y < mouse.height/2 + cat.height/2
      && mouse.y - cat.y < mouse.height/2 + cat.height/2) {
  
        return true;
      }
  
    else {
      return false;
    }
  }

function endswitch() {
    mouse.changeAnimation("collided",mouseend);
    cat.changeAnimation("collided",catend);
    
}