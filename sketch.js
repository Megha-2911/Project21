const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  b1 = createImg("push.png")
  b1.position(380,420)
  b1.size(30,30)
  b1.mouseClicked (force)
  
  ground = new Ground(200,390,400,20)
  leftwall = new Ground(10,200,20,400)
  topwall = new Ground(200,10,400,20)
  rightwall = new Ground(390,200,20,400)

  ball = Bodies.circle(200,200,30)
  World.add(world,ball)
}

function force(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.05,y:-0.05})
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
  leftwall.display()
  topwall.display()
  rightwall.display()

  ellipse(ball.position.x,ball.position.y,30,30)
}

