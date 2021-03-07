var player,plrRunning;
var backGround,BGground1;
var obstacle,obsImg;
var invisibleGround;

function preload(){
 
  plrRunning=loadAnimation("first.png","second.png","third.png","fourth.png","fifth.png","sixth.png");
   BGground1=loadImage("road3.webp");
   obsImg=loadImage("robo.png")
}

function setup() {
	createCanvas(600, 600);
   player=createSprite(150,490,20,20);
   player.addAnimation("plr",plrRunning);
   player.scale=0.5;
  
    bGround=createSprite(300,300,600,600);
    bGround.addImage("hi",BGground1);
    
    bGround.x=bGround.width/2;
    bGround.scale=2;

    invisibleGround=createSprite(300,550,800,10);
    invisibleGround.visible=false;
}
     

function draw() {
  background("red");
  
   bGround.velocityX=-2;

    if(bGround.x<=0){
      bGround.x=bGround.width/2;
    }
  //player.visible=true;
  //bGround.visible=false;
  player.depth=bGround.depth;
  player.depth=player.depth+1;
  CHILD();
  
    obstacles();

  console.log(player.depth);

    player.collide(invisibleGround);


  drawSprites();
}

function obstacles(){
   if(frameCount%160===0){
    obstacle=createSprite(590,Math.round(random(350,450)),10,10);
    obstacle.addImage("slow",obsImg);
    obstacle.scale=0.2;
    obstacle.velocityX=-2;
   }
}

function CHILD(){
  if(keyDown("SPACE")){
    player.velocityY=-3;
  }
  player.velocityY=player.velocityY+0.3;
}