const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4;
var ground, platform;
var polygon, slingshot;

function preload() {}

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600, height, 1200, 20);
  platform = new Ground(150, 305, 300, 170);
  box1 = new Box(700, 320, 70, 70);
  box2 = new Box(920, 320, 70, 70);
  box3 = new Box(840, 320, 70, 70);
  box4 = new Box(1100, 320, 70, 70);
  polygon = new world(100, 100);
}

function draw() {
  background(255, 255, 255);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  polygon.display();

  drawSprites();
}

function mouseReleased() {
  slingshot.fly();
}
