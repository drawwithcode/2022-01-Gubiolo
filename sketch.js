
// Concpet: Use of Sin and Cos Function to create a ring loop animation. Taking inspiration from the kinetic graphic works of Franco Grignani

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  let mycolor = 'black';
  background(mycolor);
  let variable = mouseX/1000; // moving mouse for set velocity
  let diameter = mouseY/5; // moving mouse for set circle dimension
  
 // FOR cycle where i is the number of shapes.
  for(let i = 0; i < 50; i++){
  
  const angle = (variable*frameCount) + i*10; // angolo where framecount is using to set the velocity of movement and the number ("10") set the distance between shapes.
  const k = 10; // const for rotation regolation
  const k2 = 20; // const for rotation regolation

  // for Rectangle
  const rotationsin = sin(angle) * k; // first function for pendolum movement.
  const rotationcos = cos(angle) * k; // Second function for pendolum movement alternating with the first one.
  
  // for Cirlce
  const circlerotationsin = sin(angle) * k2; // first function for pendolum movement.
  const circlerotationcos = cos(angle) * k2; // Second function for pendolum movement alternating with the first one.


  //Alternating use of cos and sin to create a closed loop
  // Rectangle animation block
  push();
  fill(mycolor);
  stroke('white');
  strokeWeight(2);
  rotate(rotationsin);
  translate(rotationcos*10, 0,);
  rect(width/2, height/2, 100, 100);
  pop();

  
  // Circle animation block
  push();
  fill('white');
  stroke(mycolor);
  strokeWeight(2);
  rotate(circlerotationsin*(-1)); 
  translate(circlerotationcos*15, 0,);
  circle(width/2, height/2-15, diameter); // "-15" for Adjustment of the centrality of the ring shape
  pop();
 
  }
}
