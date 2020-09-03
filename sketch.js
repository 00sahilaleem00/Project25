
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin;
var paper;

function setup() {
	createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground();
	paper = new Paper();
  dustbin = new Dustbin(650,620,120,120);
}

function draw() {
  background(255);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin.display();

  if(keyWentDown(RIGHT_ARROW)){
	  Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
  }
  if(keyWentDown(LEFT_ARROW)){
	  Body.applyForce(paper.body,paper.body.position,{x:-90,y:-90});
  }

  textSize(30);
  textAlign(CENTER);

  fill("black");
  if(paper.body.position.x>width||paper.body.position.x<0||paper.body.position.y>height||paper.body.position.y<0){
	  text("GAME OVER",400,300);
	  text("REFRESH PAGE TO RESTART",400,350);
	  Body.setStatic(paper.body,true);
  } else if(paper.body.position.x - 650 < 100/2 + paper.body.circleRadius&&
    650 - paper.body.position.x < 100/2 + paper.body.circleRadius&&
    paper.body.position.y - (620+55) < 20/2 + paper.body.circleRadius&&
    (620+55) - paper.body.position.y < 20/2 + paper.body.circleRadius){
	  text("YOU WIN!!!",400,250);
	  text("REFRESH PAGE TO RESTART",400,300);
	  Body.setStatic(paper.body,true);
  }
  else{
	  text("USE LEFT AND RIGHT ARROWS TO",400,200);
	  text("LAND THE PAPER BALL IN THE DUSTBIN",400,250);
  }
}



