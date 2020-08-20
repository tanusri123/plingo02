ellipse(0, 50, 33, 33); 

push(); 
strokeWeight(10);
fill(204, 153, 0);
ellipse(33, 50, 33, 33); 

push(); 
stroke(0, 102, 153);
ellipse(66, 50, 33, 33); 
pop(); 

pop(); 

ellipse(100, 50, 33, 33); 
let coswave = [];

function setup() {
  createCanvas(720, 360);
  for (let i = 0; i < width; i++) {
    let amount = map(i, 0, width, 0, PI);
    coswave[i] = abs(cos(amount));
  }
  background(255);
  noLoop();
}

function draw() {
  let y1 = 0;
  let y2 = height / 3;
  for (let i = 0; i < width; i += 3) {
    stroke(coswave[i] * 255);
    line(i, y1, i, y2);
  }

  y1 = y2;
  y2 = y1 + y1;
  for (let i = 0; i < width; i += 3) {
    stroke((coswave[i] * 255) / 4);
    line(i, y1, i, y2);}
  y1 = y2;
  y2 = height;
  for (let i = 0; i < width; i += 3) {
    stroke(255 - coswave[i] * 255);
    line(i, y1, i, y2);
  for (var j =40;j <=width;j=j+50)  {
    plinkos.push(new Plinko(j,75));
  }
  for (varj = 15;j<=width+10;j=j+50){
    plinkos.push(new plinko(j,175));
  }
  }}
