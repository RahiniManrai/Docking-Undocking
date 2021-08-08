var iss
var hasDocked=false
var spacecraft

function preload(){

issImg=loadImage("Docking-undocking/iss.png")
spacebgImg=loadImage("Docking-undocking/spacebg.jpg")
spacecraft1Img=loadImage("Docking-undocking/spacecraft1.png")
spacecraft2Img=loadImage("Docking-undocking/spacecraft2.png")
spacecraft3Img=loadImage("Docking-undocking/spacecraft3.png")
spacecraft4Img=loadImage("Docking-undocking/spacecraft4.png")

}

function setup() {
  createCanvas(800,400);
  
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issImg)
  

  spacecraft=createSprite(400, 200, 50, 50);
  spacecraft.x=Math.round(random(100,700));
  spacecraft.addImage(spacecraft1Img)
  spacecraft.scale=0.4
}

function draw() {
  background(spacebgImg);  

   if(!hasDocked){

   
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraft3Img)
      spacecraft.x=spacecraft.x-5
    }
    else if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraft4Img)
      spacecraft.x=spacecraft.x+5
    }
    else if(keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraft2Img)
      spacecraft.y=spacecraft.y-5
    }
    else if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraft2Img)
      spacecraft.y=spacecraft.y+5
    }
  }

   if(spacecraft.x===335&&spacecraft.y===360){

     hasDocked=true
     text("Docking Successful", 400, 100)

   }
  drawSprites();
}