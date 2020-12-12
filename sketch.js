const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground;


function setup() {
  var canvas=createCanvas(400,400)
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,100,50,50,ground_options)
  World.add(world,ground)
  var ball_options={
    restitution:1.0
  }

  ball=Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  console.log(ground)
console.log(object.type)
console.log(object.position.x)
console.log(object.position.y)
}

function draw() {
  background(255,255,255);  
  rect(200,200,50,50);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}