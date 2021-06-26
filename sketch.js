var form,player,game;
var gameState=0;
var playerCount;
var car1,car2,car3,car4,cars;
var allPlayers;
var score=0;

function preload(){
pipe=loadImage("pipe2images.png")
robot1=loadImage("3.png")
zombie1=loadImage("pipe1.png")
ball1=loadImage("ball2.png")
bk1=loadImage("download (1).jpg")

}

function setup(){
    createCanvas(800,500);
   
robot=createSprite(420,280,5,5)
robot.addImage(robot1)
robot.scale=0.09

ground=createSprite(400,490,800,10)
ground1=createSprite(400,10,800,10)
ground2=createSprite(10,250,10,800)
ground3=createSprite(790,250,10,500)
ground.visible=false
ground1.visible=false
ground2.visible=false
ground3.visible=false

zombie=createSprite(150,150,10,10)
zombie.addImage(zombie1)
zombie.scale=0.03

zombie2=createSprite(245,50,10,10)
zombie2.addImage(zombie1)
zombie2.scale=0.03

image1=createSprite(440,250,80,10)
image1.visible=false


image2=createSprite(290,255,80,10)
image2.visible=false

image3=createSprite(290,405,80,10)
image3.visible=false

image4=createSprite(290,105,80,10)
image4.visible=false

image5=createSprite(140,255,80,10)
image5.visible=false

image7=createSprite(255,290,10,80)
image7.visible=false

image8=createSprite(155,300,10,80)
image8.visible=false


image9=createSprite(325,290,10,80)
image9.visible=false

image10=createSprite(255,370,10,80)
image10.visible=false

image11=createSprite(325,210,10,80)
image11.visible=false

image12=createSprite(255,430,10,80)
image12.visible=false

image13=createSprite(395,370,10,80)
image13.visible=false

image14=createSprite(155,380,10,80)
image14.visible=false

image15=createSprite(255,340,10,80)
image15.visible=false

image16=createSprite(105,220,10,80)
image16.visible=false

image17=createSprite(420,335,80,10)
image17.visible=false

image18=createSprite(430,405,80,10)
image18.visible=false

image19=createSprite(160,465,80,10)
image19.visible=false

image20=createSprite(440,155,80,10)
image20.visible=false

image21=createSprite(440,475,80,10)
image21.visible=false

image22=createSprite(540,335,80,10)
image22.visible=false

image23=createSprite(620,105,80,10)
image23.visible=false

image24=createSprite(640,395,80,10)
image24.visible=false

image25=createSprite(640,505,80,10)
image25.visible=false

image26=createSprite(640,255,80,10)
image26.visible=false

image27=createSprite(625,360,10,80)
image27.visible=false

image28=createSprite(605,190,10,80)
image28.visible=false

image29=createSprite(65,370,10,80)
image29.visible=false

image30=createSprite(105,140,10,80)
image30.visible=false

image31=createSprite(140,105,80,10)
image31.visible=false

image32=createSprite(50,205,80,10)
image32.visible=false


image33=createSprite(490,335,80,10)
image33.visible=false


image34=createSprite(490,155,80,10)
image34.visible=false


image35=createSprite(455,190,10,80)
image35.visible=false


image36=createSprite(155,50,10,80)
image36.visible=false


image37=createSprite(305,50,10,80)
image37.visible=false


image38=createSprite(305,70,10,80)
image38.visible=false


image39=createSprite(405,70,10,80)
image39.visible=false


image40=createSprite(605,70,10,80)
image40.visible=false





characters=createGroup()
characters.add(robot)
characters.add(zombie)
characters.add(zombie2)

bal=createGroup()
//bal.add()


images=createGroup()
images.add(image1)
images.add(image2)
images.add(image3)
images.add(image4)
images.add(image5)
//images.add(image6)
images.add(image7)
images.add(image8)
images.add(image9)
images.add(image10)
images.add(image11)
images.add(image12)
images.add(image13)
images.add(image14)
images.add(image15)
images.add(image16)
images.add(image17)
images.add(image18)
images.add(image19)
images.add(image20)
images.add(image21)
images.add(image22)
images.add(image23)
images.add(image24)
images.add(image25)
images.add(image26)
images.add(image27)
images.add(image28)
images.add(image29)
images.add(image30)
images.add(image31)
images.add(image32)
images.add(image33)
images.add(image34)
images.add(image35)
images.add(image36)
images.add(image37)
images.add(image38)
images.add(image39)
images.add(image40)


enemy=createGroup()
enemy.add(zombie)
enemy.add(zombie2)


zombie.velocityX=-1
zombie2.velocityY=-1

zombie.debug=false
zombie.setCollider("rectangle",0,0,1000,1500)

zombie2.debug=false
zombie2.setCollider("rectangle",0,0,1000,1500)
}



function draw(){
    background(bk1);
    image(pipe,400,250,80,10)
    image(pipe,250,250,80,10)
    image(pipe,250,400,80,10)
    image(pipe,250,100,80,10)
    image(pipe,100,250,80,10)
    image(pipe,100,350,80,10)
    image(pipe,250,250,10,80)
    image(pipe,150,260,10,80)
    image(pipe,320,250,10,80)
    image(pipe,250,330,10,80)
    image(pipe,320,170,10,80)
    image(pipe,250,390,10,80)
    image(pipe,390,330,10,80)
    image(pipe,150,340,10,80)
    image(pipe,250,300,10,80)
    image(pipe,100,180,10,80)
    image(pipe,380,330,80,10)
    image(pipe,390,400,80,10)
    image(pipe,120,460,80,10)
    image(pipe,400,150,80,10)
    image(pipe,400,470,80,10)
    image(pipe,500,330,80,10)
    image(pipe,580,100,80,10)
    image(pipe,600,390,80,10)
    image(pipe,600,500,80,10)
    image(pipe,600,250,80,10)
    image(pipe,620,320,10,80)
    image(pipe,600,150,10,80)
    image(pipe,60,330,10,80)
    image(pipe,100,100,10,80)
    image(pipe,100,100,80,10)
    image(pipe,10,200,80,10)
    image(pipe,450,330,80,10)
    image(pipe,450,150,80,10)
    image(pipe,450,150,10,80)
    image(pipe,150,10,10,80)
    image(pipe,300,10,10,80)
    image(pipe,300,30,10,80)
    image(pipe,400,30,10,80)
    image(pipe,600,30,10,80)

if(keyDown("right")){

    robot.x=robot.x+5
}

if(keyDown("left")){

    robot.x=robot.x-5
}

if(keyDown("space")){
robot.velocityY=-5
}
    robot.velocityY=robot.velocityY+1

    robot.collide(ground)


    

    if (keyDown("enter")){
ball=createSprite(robot.x,robot.y,10,10)
ball.addImage(ball1)
ball.velocityX=5
ball.scale=0.005
bal.add(ball)

    }
    robot.collide(ground1)
   robot.collide(ground2)
    robot.collide(ground3)

robot.collide(images)
zombie.bounceOff(ground)
zombie.bounceOff(ground1)
zombie.bounceOff(ground2)
zombie.bounceOff(ground3)

zombie2.bounceOff(ground)
zombie2.bounceOff(ground1)
zombie2.bounceOff(ground2)
zombie2.bounceOff(ground3)

if (zombie.isTouching(images)){
    zombie.bounceOff(images)
var rand = Math.round(random(1,4));
switch(rand){
    case 1: zombie.velocityX=1
    zombie.velocityY=0
    break;
case 2:zombie.velocityX=-1
zombie.velocityY=0
    break;
case 3: zombie.velocityY=1
zombie.velocityX=0
    break;
case 4: zombie.velocityY=-1
zombie.velocityX=0

    break;

    default: break;

    

}

}

if (zombie2.isTouching(images)){
    zombie2.bounceOff(images)
    var rand = Math.round(random(1,4));
    switch(rand){
        case 1: zombie2.velocityX=1
        zombie2.velocityY=0
        break;
    case 2:zombie2.velocityX=-1
    zombie2.velocityY=0
        break;
    case 3: zombie2.velocityY=1
    zombie2.velocityX=0
        break;
    case 4: zombie2.velocityY=-1
    zombie2.velocityX=0
    
        break;
    
        default: break;
    }
}

if (bal.isTouching(images)){
bal.destroyEach()



}

if(bal.isTouching(zombie)){
    zombie.destroy()
    score=score+10
}
if(bal.isTouching(zombie2)){
    
    zombie2.destroy()
    score=score+10
}




    drawSprites()
    if(score===20){
        textSize(50)
    text("YOU WON",400,250)

    }
    text(score,10,10)

    if(enemy.isTouching(robot)){
        text("GAMEOVER",400,250)
        enemy.setVelocityXEach(0)
        enemy.setVelocityYEach(0)
    }
}