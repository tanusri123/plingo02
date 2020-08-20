var particle=[];
var plinko=[];
var division=[];
var particle;
  
var divisionHeight=300;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  function mousePressed(){
    if (gameState==="end"){
      count++;
      particle=new particle(mouseX,10,10,10);
    }
  }
  
  
  if (particle=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
        score=score+500;
        particle=null;
        if (count >=5)gamestate="end";
      }
    }
  } 
  drawSprites();
}