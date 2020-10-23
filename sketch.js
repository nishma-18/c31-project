const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;


function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(width/2, height, width,20);

  for(var k=0; k<=width; k=k+80 ){
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  /*for (var j=40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }*/

  for (var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }

}

function draw() {
  background("black");
  textSize(20) 
  drawSprites();
  Engine.update(engine);
  ground.display();

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(100, 700), 10,10));
   
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

  /*for (var j=0; j<=particles.length; j++){
    particles[j].display();
  }

  for (var k=0; k<=particles.length; k++){
    particles[k].display();
  }

  for (var l=0; l<=particles.length; l++){
    particles[l].display();
  }

  for (var m=0; m<=particles.length; m++){
    particles[m].display();
  }*/

}


  
