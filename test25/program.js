var ship;  
var siren;
var score;
var highScore1 = 420000;
var highScore2 = 1000000;
var highScore1Image;
var highScore2Image;
var newLife;
var sbLogo;
var numSmokeFrames = 2;
var currentSmokeFrame = 0;
var smokeImages = [numSmokeFrames];
var numPotFrames = 2;
var currentPotFrame = 0;
var potImages = [numPotFrames];
var countdown = 3;
var numYellowFrames = 2;
var currentYellowFrame = 0;
var yellowImages = [numYellowFrames];
var numGreenFrames = 2;
var currentGreenFrame = 0;
var greenImages = [numGreenFrames];
var numBlueFrames = 2;
var currentBlueFrame = 0;
var blueImages = [numBlueFrames];
var numPinkFrames = 2;
var currentPinkFrame = 0;
var pinkImages = [numPinkFrames];
var numCopFrames = 2;
var currentCopFrame = 0;
var copImages = [numCopFrames];
var fireImage;
var greenAliens = []; 
var pinkAliens = [];
var blueAliens = [];
var yellowAliens = [];
var lasers = []; 
var enemyLasers = [];
var bonusShooterLasers = [];
var bonusShooterLaser;
var bases = [];
var basePic;
var font;
var chaser; 
var levelUp;
var explosionShip;
var pop;
var introVid;
var levelUp;
var greenPop;
var gameOverBack;
var bluePop;
var yellowPop;
var pinkPop;
var smoke;
var laserSound;
var alienLaser;
var gameOverSound;
var lifeIcon;
var cop1;
var cop2;
var bonusShooter;
var counter = 0;
var level = 0;
var score = 0;
var xdir = 0.6;
var xdirCop = 1;
var difficulty = 0.03;
var highScore1reached = 0;
var highScore2reached = 0;
var playing = false;
var playing1 = false;
var playing2 = false;
var laserLength = 1;
var copLaserLength = 1;
var gameState = 0;
var nameInput;
var nameValue;
var emailInput;
var emailValue;
var highScore1nameInput;
var highScore2nameInput;
var highScore1emailInput;
var highScore2emailInput;
var highScore1nameValue;
var highScore2nameValue;
var highScore1emailValue;
var highScore2emailValue;
var gameState;
var database;
var ref;
var highScore1Ref;
var highScore2Ref;
var canvas;
var data; 
var highScore1Data;
var highScore2Data;
var volume = 1.0;
var speakerOn;
var speakerOff;
var pauseButton;
var fireButton;
var leftButton;
var rightButton;
var rightyButton;
var leftyButton;
var leftyMode = false;
var targetScore0;
var targetScore1;
var targetScore2;
var targetScore3;
var targetScore4;
var targetScore5;
var targetScore6;
var targetScore7;
var targetScore8;
var targetScore9;
var missionStatus;
var yesButton;
var noButton;
var goldBadge;
var silverBadge;
var highScoreSilver;
var highScoreGold;
var highScoreSound;
var sbLogo2;


function preload(){

  ship = loadImage('ship.png');
  targetScore0 = loadImage("targetScore0.png");
  targetScore1 = loadImage("targetScore1.png");
  targetScore2 = loadImage("targetScore2.png");
  targetScore3 = loadImage("targetScore3.png");
  targetScore4 = loadImage("targetScore4.png");
  targetScore5 = loadImage("targetScore5.png");
  targetScore6 = loadImage("targetScore6.png");
  targetScore7 = loadImage("targetScore7.png");
  targetScore8 = loadImage("targetScore8.png");
  targetScore9 = loadImage("targetScore9.png");
  smokeImages[0] = loadImage("smoke1.png");
  smokeImages[1] = loadImage("smoke2.png");
  yellowImages[0]  = loadImage("yellow1.png");
  yellowImages[1]  = loadImage("yellow2.png");
  greenImages[0]  = loadImage("green1.png");
  greenImages[1]  = loadImage("green2.png");
  pinkImages[0]  = loadImage("pink1.png");
  pinkImages[1]  = loadImage("pink2.png");
  blueImages[0]  = loadImage("blue1.png");
  blueImages[1]  = loadImage("blue2.png");
  copImages[0]  = loadImage("newCop1.png");
  copImages[1]  = loadImage("newCop2.png");
  fireImage  = loadImage("fire4.png");
  sbLogo = loadImage("sbLogo.png");
  potImages[0] = loadImage("potFrame1.png");
  potImages[1] = loadImage("potFrame2.png");
  font = loadFont("Peepo.ttf");
  levelUp = loadSound("levelUp.wav");
  explosionShip = loadSound("explosionShip.wav");
  pop = loadSound("pop.wav");
  greenPop = loadImage("greenPop.png");
  siren = loadSound("siren.wav");
  bluePop = loadImage("bluePop.png");
  yellowPop = loadImage("yellowPop.png");
  pinkPop = loadImage("pinkPop.png");
  smoke = loadSound("smoke.wav");
  laserSound = loadSound("laserSound.wav"); 
  alienLaser = loadSound("alienLaser.mp3");
  lifeIcon = loadImage("lifeIcon.png");
  levelUp = loadSound("levelUp.wav");
  gameOverSound = loadSound("gameOver.wav");
  emailInput = createInput('');
  nameInput = createInput('AAA');
  highScore1EmailInput = createInput('Enter email to receive reward');
  highScore1NameInput = createInput('AAA');
  highScore2EmailInput = createInput('Enter email to receive reward');
  highScore2NameInput = createInput('AAA');
  highScore1Image = loadImage("highScore1.png");
  highScore2Image = loadImage("highScore2.png");
  gameOverBack = loadImage("gameOverBack2.png");
  speakerOn = loadImage("speakerOn.png");
  speakerOff = loadImage("speakerOff.png");
  pauseButton = loadImage("pauseButton.png");
  fireButton = loadImage("fireButton.png");
  leftButton = loadImage("leftButton.png");
  rightButton = loadImage("rightButton.png");
  rightyButton = loadImage("rightyButtonn.png");
  leftyButton = loadImage("leftMode.png");
  yesButton = loadImage("yesButton.png");
  noButton = loadImage("noButton.png");
  goldBadge = loadImage("goldBadge.png");
  silverBadge = loadImage("silverBadge.png");
  highScoreGold = loadImage("highScoreGold.png");
  highScoreSilver = loadImage("highScoreSilver.png");
  highScoreSound = loadSound("highScoreSound.wav");
  sbLogo2 = loadImage("sbLogo2.png");

}



function setup() { 
  canvas = createCanvas(1100, 623);  
  background(0);

  frameRate(20);
  imageMode(CENTER);

  missionStatus = targetScore0; 
  //ship = new Ship(); 
  //newLife = new NewLife();
  counter = 0;
  level = 0;
  score = 0;
  xdir = 0.6;
  xdirCop = 1;
  highScore1Reached = 0;
  highScore2Reached = 0;
  highScore1 = 420000;
  highScore2 = 1000000;
  difficulty = 0.03;
  playing = false;
  laserLength = 1;
  copLaserLength = 1;
  playing1 = false;
  leftyMode = false;
  textFont(font);
  //basePic = new Base();
  volume = 1.0;
  emailInput.hide();
  nameInput.hide();
  highScore1EmailInput.hide();
  highScore1NameInput.hide();
  highScore2EmailInput.hide();
  highScore2NameInput.hide();
  //resetSketch();
  gameState = 1;
  
} 

 function draw() { 

        if (gameState === 1){
		   introPage();
		  }
		  /*else if (gameState === 2){
		   startGame();
		  }
		  else if (gameState === 3){
		   pause(); 
		  }
		  else if (gameState === 4){
		   levelIncrease();
		  }
		  else if (gameState === 5){
		   resetSketch();
		  }
		  else if (gameState === 6){
		   gameOver();
		  }
		  else if (gameState === 7){
		   winGame();
		  }
		  else if (gameState === 9){
		   shipHit();
		  }
		  else if (gameState === 10){
		   submitPage();
		  }
		  else if (gameState === 11){
		   highScore1page();
		  }
		  else if (gameState === 12){
		   highScore2page();
		  }*/

      }

      function introPage(){
		  background(0);

		  fill(255);
		  rect(20,20,3,3); rect(323,67,3,3); rect(1100,658,3,3); rect(1168,28,3,3); rect(934,323,3,3); rect(942,158,3,3); rect(1124,570,3,3); rect(809,107,3,3); rect(634,323,3,3); rect(932,567,3,3);
		  rect(1054,640,3,3); rect(69,425,3,3); rect(440,220,3,3); rect(250,180,3,3); rect(800,200,3,3); rect(1048,89,3,3); rect(756,340,3,3); rect(400,323,3,3); rect(452,17,3,3); rect(854,600,3,3);
		  rect(800,30,3,3); rect(454,89,3,3); rect(200,107,3,3); rect(567,454,3,3); rect(239,300,3,3); rect(690,600,3,3); rect(1130,203,3,3); rect(756,340,3,3); rect(1036,322,3,3); rect(634,154,3,3); 
		  rect(452,523,3,3); rect(630,257,3,3); rect(700,24,3,3); rect(1124,353,3,3); rect(152,67,3,3); rect(54,600,3,3); rect(100,300,3,3); rect(54,120,3,3); rect(143,180,3,3); rect(567,454,3,3);
		  rect(50,523,3,3); rect(130,400,3,3); rect(245,524,3,3); rect(324,529,3,3); rect(452,567,3,3); rect(594,400,3,3); rect(700,500,3,3); rect(804,420,3,3); rect(943,580,3,3); rect(1067,404,3,3);
		  textSize(20);

		  imageMode(CENTER);
		  
		  if (frameCount % 8 == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
		    currentPotFrame = (currentPotFrame+1) % numPotFrames;
		  }

		  image(sbLogo, 550, 200, 375, 100);
		  text("Click to Begin", 480, 320);
		  image(potImages[(currentPotFrame) % numPotFrames], 540, 400, 75, 75);

}

