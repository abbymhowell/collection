//Move the catcher with the left and right arrow keys to catch the falling objects. 


/* VARIABLES */
let catcher, fallingObject;
let score = 0;
let backgroundImage;

/* PRELOAD LOADS FILES */
function preload() {
  backgroundImage = loadImage('assets/unnamed.png'); 
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);
  background(backgroundImage);

  //Create catcher 
  catcher = new Sprite(200,380,100,20);
  catcher.color = color(255, 165, 0);
  catcher.collider = "k";

  //Create falling object
  fallingObject = new Sprite(100,0,10);
  fallingObject.color = color(255, 165, 0);
  fallingObject.vel.y = 4;
}
/* DRAW LOOP REPEATS */
function draw() {
  background(backgroundImage);
  // Draw directions to screen
  fill(0);
  textSize(12);
  text("Move the \ncatcher with the\narrow keys to \ncatch the falling \nobjects.", width-100, 20);

  text("Score: " + score, width - width + 10, 20);

  fallingObject.vel.x = sin(frameCount * 6) * 2;

  if(fallingObject.y >= 415){
    fallingObject.y = -15;
    fallingObject.x = random(10,391);
    fallingObject.vel.y = random(4,9);
    score = score - 3;
  }
  if(fallingObject.collides(catcher)){
    fallingObject.y = -15;
    fallingObject.x = random(10,391);
    fallingObject.vel.y = random(4,9);
    score = score + 1;
  }
  if(kb.pressing("left")){
    catcher.vel.x = -4;
  } else if(kb.pressing("right")){
    catcher.vel.x = 4;
  } else {
    catcher.vel.x = 0;
  }
  if(catcher.x >= 350){
    catcher.x = 350;
  }
  if(catcher.x <= 50){
    catcher.x = 50;
  }
  if(kb.pressing("down")){
    catcher.vel.y = 3;
  } else if(kb.pressing("up")){
    catcher.vel.y = -3;
  } else {
    catcher.vel.y = 0;
  }
  if(score < 0){
    fallingObject.vel.y = 0;
    catcher.vel.x = 0;
    catcher.vel.y = 0;
    background(156, 81, 182);
    fill("black");
    textSize(20);
    text("You lose.\n Try again.", width/2, height/2);
  }
}
