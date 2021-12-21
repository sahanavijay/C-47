let ground;
let lander;
var lander_img;
var bg_img;
//Declare variable for thrust,rcsleft,rcsright
var thrust;
var rcsleft,rcsright;
var crash, land;

var vx = 0;
var vy = 0;
var g = 0.05;
//Initialize variable for Fuel and assign vlaue as 100
var fuel=100;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  //Load thrust,crash,land,rcs_left,Rcs_right & normal images
  thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png");
  crash = loadAnimation("crash1.png","crash2.png","crash3.png");
  land = loadAnimation("landing1.png","landing2.png","landing_3.png");
  rcsleft=loadAnimation("left_thruster_1.png","left_thruster_2.png");
  normal = loadAnimation("normal.png");
  rcsright=loadAnimation("right_thruster_1.png","right_thruster_2.png");

  //Load of thrust,rcsleft,rcsright
  thrust.playing=true;
  thrust.looping=false;
  rcsleft.looping=false;
  rcsright.looping=false;
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);
  //Assign value to the timer=1500
   timer=1500
  //Assign value to the frame Delay
  thrust.frameDelay=5;
  rcsleft.frameDelay=5;
  rcsright.frameDelay=5;

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  //Add animation of thrusting,rcsleft,rcsright & normal
  lander.addAnimation('thrusting',thrust);
  lander.addAnimation('left',rcsleft);
  lander.addAnimation('right',rcsright);
  lander.addAnimation('normal',normal);
  //Createsprite for ground
  ground=createSprite(500,690,1000,20);
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  //Display Horizontal Velocity
  text("Horizontal Velocity: "+round(vx,2),800,50);
  //Display Fuel on the screen
  text("Fuel: "+fuel,800,25);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  vy +=g;
  lander.position.y+=vy;
  //Give lander's X position
  lander.position.x+=vx;

  drawSprites();
}

function keyPressed()
{
  //write if condition if up arrow pressed than change the thrusting image also to check fuel is there or not
  if(keyCode==UP_ARROW && fuel>0)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
  if(keyCode==RIGHT_ARROW && fuel>0)
  {
    lander.changeAnimation('left');
    right_thrust();
  }
  if(keyCode==LEFT_ARROW && fuel>0)
  {
    lander.changeAnimation('right');
    left_thrust();
  }
  
}

function upward_thrust()
{
  vy = -1;
  fuel-=1;

}
function right_thrust()
{
  vx += 0.2;
  fuel-=1;
  
}
function left_thrust()
{
  vx -= 0.2;
  fuel-=1;
  
}

