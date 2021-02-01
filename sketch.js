const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myUniv,myWorld,fairy,fairyImage, starNight,starNightImage,star,starImage;

function preload(){
    fairyImage = loadImage("fairy1.png");
    starNightImage = loadImage("starnight.png");
    starImage = loadImage("star.png");
}

function setup(){
    createCanvas(400,400);
myUniv=Engine.create();
myWorld=myUniv.world;
fairy=Bodies.rectangle(200,200,20,20);
World.add(myWorld,fairy,);
World.add(myWorld,starNight);
World.add(myWorld,star);

fairy = createSprite(200,350,20,20);
fairy.addImage("FAIRY", fairyImage);

starNight = createSprite(200,200,400,400);
starNight.addImage("StarNight", starNightImage);

star = createSprite(200,200,20,20);
star.addImage("STAR", starImage);

}
function draw(){
background("black");

if(keyDown("left")){
    fairy.x = fairy.x - 3;
}
if(keyDown("right")){
    fairy.x = fairy.x + 3;
}
if(keyDown("down")){
    star.y = star.y - 3;
}


drawSprites();
}