var garden, tom, jerry
var gardenImg, tomImg, jerryImg, tomImg2, tomImg3, tomImg4

function preload() {
gardenImg = loadImage ("images/garden.png")
tomImg = loadImage ("images/tomOne.png")
tomImg2 = loadImage ("images/tomTwo.png")
tomImg3 = loadImage ("images/tomThree.png")
tomImg4 = loadImage ("images/tomFour.png")
jerryImg = loadImage ("images/jerryOne.png")


}

function setup(){
    createCanvas(600,200)
    garden=createSprite(300,200)
    garden.addImage("garden",gardenImg)
    tom=createSprite(200,200)
    tom.addImage ("cat", tomImg)
    tom.scale = 0.2
    jerry=createSprite(100,200)
    jerry.addImage ("mouse", jerryImg)
    jerry.scale = 0.2

}

function draw() {
    background(255);
    if(tom.x-jerry.x < (tom.width/2+jerry.width)/2) 
      {
    tom.addAnimation("tomlastimg",tomImg4 )
    tom.changeAnimation("tomlastimg", tomImg4)
    tom.velocityX = 0
      }

    
    drawSprites();
}


function keyPressed(){
 if (keyCode === LEFT_ARROW) {
     tom.velocityX = -2
     tom.addAnimation ("catmoving",tomImg2 )
     tom.changeAnimation ("catmoving", tomImg4)
 }
} 