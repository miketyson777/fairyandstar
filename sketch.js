var star, fairy, bg;


function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	

}

function setup() {
	createCanvas(800, 750);

	

	fairy = createSprite(150, 525,10,10);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.20;

	star = createSprite(650,30,10,10);
	star.addImage(starImg);
	star.scale = 0.20;

	

}


function draw() {

	star.collide(fairy);
	
  background(bgImg);
  keyPressed();

  star.collide(fairy);

  drawSprites();

  fairy.setCollider("rectangle",470,25,200,10);

}

function keyPressed() {
	
	if(keyDown("left")){
		fairy.x = fairy.x - 5;
	}

	if(keyDown("right")){
		fairy.x = fairy.x + 5;
	}

	if(keyDown("down")){
	star.velocityY = 5;
	
	
	}
}


