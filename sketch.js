  var Engine = Matter.Engine;
  var World = Matter.World;
  var Events = Matter.Events;
  var Bodies = Matter.Bodies;

  var backgroundimg;
  var snow1,snow2;
  var boy,boyimg;

  
  function preload() {
    backgroundimg = loadImage("snow1.jpg");
    boyimg = loadImage("boy.png");
    snow1 = loadImage("snow5.png");
    snow2 = loadImage("snow4.png");

 }

  function setup() {
    createCanvas(1536, 752);

   

    engine = Engine.create();
    world = engine.world;
     
    boy = createSprite(480,480);
    boy.addImage('boyimg',boyimg);
    boy.scale = 0.7

  }

  function draw() {
    background(backgroundimg);
    Engine.update(engine);

    if(frameCount % 10 == 0){
      createRedLeaf();
   }
      
    if(frameCount % 30 == 0){
      createsnow();
    }
 
    drawSprites();
  }

  function createRedLeaf(){
    leaf = createSprite(random(2000,100),40,10,10);
    leaf.addImage('snow1',snow1);
    leaf.scale = 0.1;
    leaf.velocityY = 2;
    leaf.lifetime = 500;
  }

  function createsnow(){
    leaf = createSprite(random(2000,100),40,10,10);
    leaf.addImage('snow2',snow2);
    leaf.scale = 0.1;
    leaf.velocityY = 2;
    leaf.lifetime = 500;
  }