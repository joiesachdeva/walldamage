var bullet, wall;
var speed,weight;
var damage, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,20,50);
  bullet.velocityX=speed;
  bullet.shapecolor="white";

  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255);  

  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    damage=0.5*weight*speed*speed/thickness*thickness*thickness;

    if(damage>10){
      wall.shapeColor=color(250,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
 }

 
  drawSprites();
}