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
//var introVid;
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
  canvas = createCanvas(windowWidth-10, windowWidth*0.56);  
  background(0);
  frameRate(20);
  imageMode(CENTER);

  missionStatus = targetScore0;

  ship = new Ship(); 
  newLife = new NewLife();
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
  basePic = new Base();
  volume = 1.0;
  emailInput.hide();
  nameInput.hide();
  highScore1EmailInput.hide();
  highScore1NameInput.hide();
  highScore2EmailInput.hide();
  highScore2NameInput.hide();
  resetSketch();
  gameState = 1;
}


function draw() {

  if (gameState === 1){
   introPage();
  }

  else if (gameState === 2){
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
  }


}

function windowResized() {
  resizeCanvas(windowWidth-10, windowWidth*0.56);
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
  fill(random(0,255))
  imageMode(CENTER);
  

  if (frameCount % 8 == 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    currentPotFrame = (currentPotFrame+1) % numPotFrames;
  }

  image(sbLogo, 550, 200, 375, 100);
  text("Click to Begin", 480, 320);
  image(potImages[(currentPotFrame) % numPotFrames], 540, 400, 75, 75);


}

function mousePressed(){
   
   if (gameState === 1 && mouseIsPressed){
    gameState = 2;
   }


   else if(gameState === 2 && leftyMode === true && mouseIsPressed && mouseX > 645 && mouseX < 715 && mouseY > 545 && mouseY < 605 ){
    ship.setDir(-1);
   }

   else if (gameState === 2 && leftyMode === true && mouseIsPressed && mouseX > 725 && mouseX < 795 && mouseY > 545 && mouseY < 605){
    ship.setDir(1);

  }

  if (gameState === 2 && leftyMode === true && mouseIsPressed && mouseX > 325 && mouseX < 395 && mouseY > 545 && mouseY < 605){
      var laser = new Laser(ship.x, 510); 
      lasers.push(laser); 
      laserSound.play();
   }

  else if (gameState === 2 && leftyMode === false && mouseIsPressed && mouseX > 275 && mouseX < 345 && mouseY > 545 && mouseY < 605){
        ship.setDir(-1);
  }
  
  else if (gameState === 2 && leftyMode === false && mouseIsPressed && mouseX > 355 && mouseX < 425 && mouseY > 545 && mouseY < 605){ //this may need to be an else if
        ship.setDir(1);
  }

  if (gameState === 2 && leftyMode === false && mouseIsPressed && mouseX > 715 && mouseX < 785 && mouseY > 545 && mouseY < 605){
        var laser = new Laser(ship.x, 510); 
        lasers.push(laser); 
        laserSound.play();
      }
  
//pause button

  if (gameState === 2 && mouseX > 795 && mouseX < 825 && mouseY > 15 && mouseY < 45 && mouseIsPressed){
    gameState = 3;
   }

  else if (gameState === 3 && mouseIsPressed){
    gameState = 2;
   }

   if (gameState === 10 && mouseX > 475 && mouseX < 525 && mouseY > 340 && mouseY < 370 && mouseIsPressed){
    preload();
    setup();
   }

   else if (gameState === 10 && mouseX > 545 && mouseX < 595 && mouseY > 340 && mouseY < 370 && mouseIsPressed){
    gameState = 10;
  }

 }


function startGame(){

  background(0);

  fill(255);
  rect(20,20,3,3); rect(323,67,3,3); rect(1100,658,3,3); rect(1168,28,3,3); rect(934,323,3,3); rect(942,158,3,3); rect(1124,570,3,3); rect(809,107,3,3); rect(634,323,3,3); rect(932,567,3,3);
  rect(1054,640,3,3); rect(69,425,3,3); rect(440,220,3,3); rect(250,180,3,3); rect(800,200,3,3); rect(1048,89,3,3); rect(756,340,3,3); rect(400,323,3,3); rect(452,17,3,3); rect(854,600,3,3);
  rect(800,30,3,3); rect(454,89,3,3); rect(200,107,3,3); rect(567,454,3,3); rect(239,300,3,3); rect(690,600,3,3); rect(1130,203,3,3); rect(756,340,3,3); rect(1036,322,3,3); rect(634,154,3,3); 
  rect(452,523,3,3); rect(630,257,3,3); rect(700,24,3,3); rect(1124,353,3,3); rect(152,67,3,3); rect(54,600,3,3); rect(100,300,3,3); rect(54,120,3,3); rect(143,180,3,3); rect(567,454,3,3);
  ship.show(); //calls the show method (function) in the ship object
  ship.move();




  if (ship.x < 0 || ship.x > 1100){
    ship.xdir = 0;
  }

  if (leftyMode === true){ // if its in lefty mode draw and assign functionality to left handed controls
   image(leftButton, 680, 575, 55, 55);
   image(rightButton, 760, 575, 55, 55);
   image(fireButton, 360, 575, 55, 55);
  }

  else if (leftyMode === false){ // if its not in lefty mode draw and assign to right handed
   image(leftButton, 310, 575, 55, 55);
   image(rightButton, 390, 575, 55, 55);
   image(fireButton, 750, 575, 55, 55);
  }

  newLife.show();
  fill(90);
  textSize(20);
  counter = counter + difficulty;
  //text(counter, 900, 535);
  //text(mouseX + "," + mouseY, width/6, height-90);
  fill(100,255,100);
  text("LEVEL: ", 880, 590);
  fill(255);
  text(level, 950, 590);
  text(score, 546, 590);
  fill(100,255,100);
  text("SCORE:", 470, 590);
  fill(255);
  textSize(18);
  text("MOBILE:", 835, 40);
  text("TARGET SCORE:", 120, 40);
   
  
  image(missionStatus, 330, 26, 140, 36);
  image(sbLogo, 550, 30, 150, 36);

  image(speakerOff, 730, 30, 30, 30);
  image(speakerOn, 770, 30, 30, 30);
  image(pauseButton, 810, 30, 30, 30);


  //MOBILE CONTROLLER


  // OPTIONS

  image(leftyButton, 910, 30, 38, 38);
  image(rightyButton, 945, 30, 36, 37);



  levelUp.setVolume(volume);
  pop.setVolume(volume);
  laserSound.setVolume(volume);
  alienLaser.setVolume(volume);
  gameOverSound.setVolume(volume);
  explosionShip.setVolume(volume);
  smoke.setVolume(volume);
  siren.setVolume(volume);

 // BUTTONS

  if (mouseIsPressed && mouseX > 715 && mouseX < 745 && mouseY > 15 && mouseY < 45){
    volume = 0.0;   
    fill(255);
    ellipse(730,30,30,30);
  }

  if (mouseIsPressed && mouseX > 755 && mouseX < 785 && mouseY > 15 && mouseY < 45){
    volume = 1.0;
    fill(255);
    ellipse(770,30,30,30);
  }

 // if (mouseIsPressed && mouseX > 795 && mouseX < 825 && mouseY > 15 && mouseY < 45){
 //   gameState = 3;
 // }

  // mobile controls


  if (mouseIsPressed && mouseX > 890 && mouseX < 920 && mouseY > 15 && mouseY < 45){
     leftyMode = true;
    // 
  }

  if (mouseIsPressed && mouseX > 930 && mouseX < 960 && mouseY > 15 && mouseY < 45){
    // right mode
    leftyMode = false;
  }



  if(frameCount % 8 == 0){
    currentYellowFrame = (currentYellowFrame+1) % numYellowFrames;  // Use % to cycle through frames
    currentGreenFrame = (currentGreenFrame+1) % numGreenFrames;
    currentBlueFrame = (currentBlueFrame+1) % numBlueFrames;
    currentPinkFrame = (currentPinkFrame+1) % numPinkFrames;
    currentCopFrame = (currentCopFrame+1) % numCopFrames;
    currentPotFrame = (currentPotFrame+1) % numPotFrames;
    currentSmokeFrame = (currentSmokeFrame+1) % numSmokeFrames;
  }

if (newLife.lives < 1){ //if lives are less than 1 game over
    gameOverSound.play();
    gameState = 6;
  }

  // MISSION STATUS / TARGET SCORE

if (score > 0 && score < 100000){
    missionStatus = targetScore0;
    if (frameCount % 8 == 0) {
    missionStatus = targetScore1;
  }
  if (frameCount % 16 == 0){
    missionStatus = targetScore0;
    }
}

if (score > 100001 && score < 200000){
    missionStatus = targetScore1;
    if (frameCount % 8 == 0) {
    missionStatus = targetScore2;
    }
    if (frameCount % 16 == 0){
    missionStatus = targetScore1;
    }
  }

if (score > 200001 && score < 300000){
    missionStatus = targetScore2;
    if (frameCount % 8 == 0) {
    missionStatus = targetScore3;
    }
    if (frameCount % 16 == 0){
    missionStatus = targetScore2;
    }
}

if (score > 300001 && score < 420000){
    missionStatus = targetScore3;
    if (frameCount % 8 == 0) {
    missionStatus = targetScore4;
    }
    if (frameCount % 16 == 0){
    missionStatus = targetScore3;
    }
}


if (score > 420001 && score < 600000){
    missionStatus = targetScore4;
    image(silverBadge, 430,30, 30,30);
    if (frameCount % 8 == 0) {
    missionStatus = targetScore5;
    }
    if (frameCount % 16 == 0){
    missionStatus = targetScore4;
    }
}

if (score > 600001 && score < 700000){
    missionStatus = targetScore5;
    image(silverBadge, 430,30, 30,30);
    if (frameCount % 8 == 0) {
    missionStatus = targetScore6;
    }
    if (frameCount % 16 == 0){
    missionStatus = targetScore5;
    }
}

if (score > 700001 && score < 800000){
    missionStatus = targetScore6;
    image(silverBadge, 430,30, 30,30);
    if (frameCount % 8 == 0) {
    missionStatus = targetScore7;
    }
    if (frameCount % 16 == 0){
    missionStatus = targetScore6;
    }
}

if (score > 800001 && score < 900000){
    image(silverBadge, 430,30, 30,30);
    missionStatus = targetScore7;
    if (frameCount % 8 == 0) {
    missionStatus = targetScore8;
    }
    if (frameCount % 16 == 0){
    missionStatus = targetScore7;
    }
}

if (score > 900001 && score < 1000000){
    missionStatus = targetScore8;
    image(silverBadge, 430,30, 30,30);
    if (frameCount % 8 == 0) {
    missionStatus = targetScore9;
    }
    if (frameCount % 16 == 0){
    missionStatus = targetScore8;
    }
}

if (score > 1000001){
    missionStatus = targetScore9;
    image(silverBadge, 430,30, 30,30);
    image(goldBadge, 470, 30, 30,30);
 }


if (score > highScore1 && highScore1Reached < 1){
     highScore1ReachedRec();
    }

if (score > highScore2 && highScore2Reached < 1){
     highScore2ReachedRec();
   }

if (score > highScore1){
  highScoreColor1 = green;
}

if (score > highScore2){
  highScoreColor2 = green;
}

for (var i = 0; i < bases.length; i++){
  bases[i].show();
  if (bases[i].baseRadius < 10){
      bases[i].remove();
      } 
   }

for (var i = 0; i < bonusShooterLasers.length; i++){
  bonusShooterLasers[i].show();
  bonusShooterLasers[i].move();
   if (bonusShooterLasers[i].hitsShip(ship)) {
            explosionShip.play();
            bonusShooterLasers[i].evaporate();
            newLife.minusLife();
            gameState = 9 ;
         }

    if (bonusShooterLasers[i].y > 700) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      bonusShooterLasers[i].hitsEdge();
    }

    for (var b =0; b < bases.length; b++){
        if (bonusShooterLasers[i].hitsBase(bases[b])) {
            bases[b].lasered();
            bonusShooterLasers[i].evaporate();
            smoke.play();
            bases[b].smokeWeed();
          }
       } 
 } // end of bonus shooter array
 

for (var i = 0; i < enemyLasers.length; i++){
  enemyLasers[i].show();
  enemyLasers[i].move();

     if (enemyLasers[i].hitsShip(ship)) {
            explosionShip.play();
            enemyLasers[i].evaporate();
            newLife.minusLife();
            gameState = 9;
                 
        }

     if (enemyLasers[i].y > 700) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      enemyLasers[i].hitsEdge();
    }


    for (var b =0; b < bases.length; b++){
        if (enemyLasers[i].hitsBase(bases[b])) {
            bases[b].lasered();
            enemyLasers[i].evaporate();
            smoke.play();
            bases[b].smokeWeed();
          }
       } 
     } // end of enemy laser array

for (var i = 0; i < lasers.length; i++) { //iterate through the laser array
    lasers[i].show(); //for each laser in array call the show method in the object
    lasers[i].move(); // for each laser in array call the move method in object
    if (lasers.length > 6+level){
          lasers.length = 6+level;
         }
    if (lasers[i].y < 1) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
     lasers[i].hitsEdge();
    }

    if (lasers[i].hitsBonusShooter(bonusShooter)){
              bonusShooter.evaporate();
              lasers[i].evaporate(); //and the laser evaporates ()
              score = score + 20 * level;
              siren.play();
    }

    for (var j = 0; j < greenAliens.length; j++) { //while iterating through laser array iterate through alien array (?) 
             
                if (lasers[i].hits1(greenAliens[j])) { //if an item from the laser array hits (with its built in behavior) and item from the flower (alien)array
                  greenAliens[j].evaporate(); //aliens will evaporate()
                  lasers[i].evaporate(); //and the laser evaporates ()
                  score = score + 10 * level;
                  pop.play();
                  }
                 }
    for (var j = 0; j < pinkAliens.length; j++) { //while iterating through laser array iterate through alien array (?) 
                 
                if (lasers[i].hits2(pinkAliens[j])) { //if an item from the laser array hits (with its built in behavior) and item from the flower (alien)array
                  pinkAliens[j].evaporate(); //aliens will evaporate()
                  lasers[i].evaporate(); //and the laser evaporates ()
                  score = score + 10 * level;
                  pop.play();
                  }
                 }
    for (var j = 0; j < blueAliens.length; j++) { //while iterating through laser array iterate through alien array (?) 
                 
                if (lasers[i].hits3(blueAliens[j])) { //if an item from the laser array hits (with its built in behavior) and item from the flower (alien)array
                  blueAliens[j].evaporate(); //aliens will evaporate()
                  lasers[i].evaporate(); //and the laser evaporates ()
                  score = score + 10 * level;
                  pop.play();
                  }
                 }
    for (var j = 0; j < yellowAliens.length; j++) { //while iterating through laser array iterate through alien array (?) 
                if (lasers[i].hits4(yellowAliens[j])) { //if an item from the laser array hits (with its built in behavior) and item from the flower (alien)array
                  yellowAliens[j].evaporate(); //aliens will evaporate()
                  lasers[i].evaporate(); //and the laser evaporates ()
                  score = score + 10 * level;
                  pop.play();
                  }
                 }
    for (var b =0; b < bases.length; b++){
        if (lasers[i].hitsBase(bases[b])) {
            bases[b].lasered();
            lasers[i].evaporate();
            smoke.play();
            bases[b].smokeWeed();
         }
      } 

  } // end of laser array

 var edge1 = false;
 var edge = false; 


  chaser.display();
  chaser.move();

  // COUNTER INITIATED EVENTS


    if (counter > 6 && counter < 7){
      //alienLaser.play();
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

    if (counter > 10 && counter < 11){
      //alienLaser.play();
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

    if (counter > 12) { 
       bonusShooter.show();
       bonusShooter.move();
      }

    if (counter > 14){
      var bonusShooterLaser = new BonusShooterLaser (bonusShooter.x, bonusShooter.y);
      bonusShooterLasers.push(bonusShooterLaser);
      if (bonusShooterLasers.length > 1){
        bonusShooterLasers.length = 1;
      }
    }

    if (counter > 16 && counter < 19){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

    if (counter > 21 && counter < 23){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }


    if (counter > 35 && counter < 38){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
        if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }


    if (counter > 43 && counter < 44){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

    if (counter > 48 && counter < 49){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }


    if (counter > 53 && counter < 58){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

    if (counter > 58 && counter < 60){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

      if (counter > 64 && counter < 65){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

      if (counter > 68 && counter < 72){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

      if (counter > 75 && counter < 78){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 85 && counter < 87){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 90 && counter < 92){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 97 && counter < 98){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 102 && counter < 106){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 110 && counter < 115){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 125 && counter < 128){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 134 && counter < 137){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 141 && counter < 144){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 148 && counter < 150){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 154 && counter < 157){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 166 && counter < 168){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 175 && counter < 177){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 181 && counter < 182){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 190 && counter < 194){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

      if (counter > 198 && counter < 201){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 203 && counter < 205){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 208 && counter < 210){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,140)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > 1){
          enemyLasers.length = 1;
         }
       }

       if (counter > 212 && counter < 214){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,140)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > 1){
          enemyLasers.length = 1;
         }
       }

        if (counter > 218 && counter < 222){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,140)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > 1){
          enemyLasers.length = 1;
         }
       }

       if (counter > 224 && counter < 225){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 227 && counter < 232){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }


       if (counter > 237 && counter < 239){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 243 && counter < 245){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 250 && counter < 253){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 259 && counter < 261){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

        if (counter > 266 && counter < 269){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 273 && counter < 276){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 280 && counter < 283){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 290 && counter < 293){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 297 && counter < 300){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 305 && counter < 307){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 312 && counter < 314){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 319 && counter < 323){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 327 && counter < 329){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

        if (counter > 333 && counter < 335){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 339 && counter < 341){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,400), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 345 && counter < 347){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

        if (counter > 354 && counter < 355){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       if (counter > 359 && counter < 362){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

        if (counter > 367 && counter < 370){
       var enemyLaser = new EnemyLaser(chaser.x + random(0,540), chaser.y + random(0,150)); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?) 
       enemyLasers.push(enemyLaser);
         if(enemyLasers.length > level){
          enemyLasers.length = level;
         }
       }

       
 // end of chaser conditionals



 if (bonusShooter.x > width + 30 || bonusShooter.x < -30){
   edge1 = true;
 }


if (edge1){
    bonusShooter.reverse();
    copRelocate();
   }


  for (var i = 0; i < greenAliens.length; i++) { //function that actually shows and moves the alien array
    greenAliens[i].show(); //calls aliens show method 
    greenAliens[i].move(); //calls aliens move method
    if (greenAliens[i].x > width - 150 || greenAliens[i].x < +150) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      edge = true; //then edge is there and becomes true
    }
    if (greenAliens[i].y > 250) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      greenAliens[i].stoned(); //then edge is there and becomes true
    }
    if (greenAliens[i].y > 450) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      gameState = 6; //then edge is there and becomes true
    }
  }
  
  for (var i = 0; i < pinkAliens.length; i++) { //function that actually shows and moves the alien array
    pinkAliens[i].show(); //calls aliens show method 
    pinkAliens[i].move(); //calls aliens move method
    if (pinkAliens[i].x > width - 150 || pinkAliens[i].x < +150) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      edge = true; //then edge is there and becomes true
    }
    if (pinkAliens[i].y > 250) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      pinkAliens[i].stoned(); //then edge is there and becomes true
    }
    if (pinkAliens[i].y > 450){
      gameState = 6;
    }
  }

  for (var i = 0; i < blueAliens.length; i++) { //function that actually shows and moves the alien array
    blueAliens[i].show(); //calls aliens show method 
    blueAliens[i].move(); //calls aliens move method
    if (blueAliens[i].x > width - 150 || blueAliens[i].x < +150) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      edge = true; //then edge is there and becomes true
    }
    if (blueAliens[i].y > 250) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      blueAliens[i].stoned(); //then edge is there and becomes true
    }
    if (blueAliens[i].y > 450){
      gameState = 6;
    }
  }

  for (var i = 0; i < yellowAliens.length; i++) { //function that actually shows and moves the alien array
    yellowAliens[i].show(); //calls aliens show method 
    yellowAliens[i].move(); //calls aliens move method
    if (yellowAliens[i].x > width - 150 || yellowAliens[i].x < +150) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      edge = true; //then edge is there and becomes true
    }
    if (yellowAliens[i].y > 250) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      yellowAliens[i].stoned(); //then edge is there and becomes true
    }

    if (yellowAliens[i].y > 450){
      gameState = 6;
    }
  }

  if (chaser.x > width - 150 || chaser.x < + 150) { //if alienarray OBJ x value is greater than width && alienarray x pos is less than 0
      edge = true; //then edge is there and becomes true
    }

  if (edge) { //if edge paramater is true 
    for (var i = 0; i < greenAliens.length; i++) { // Not sure why I will have to call the alien array again
      greenAliens[i].shiftDown(); //call the aliens method to shiftDown ()
    }
  for (var j = 0; j < pinkAliens.length; j++) { // Not sure why I will have to call the alien array again
      pinkAliens[j].shiftDown(); //call the aliens method to shiftDown ()
    }
  for (var k = 0; k < blueAliens.length; k++) { // Not sure why I will have to call the alien array again
      blueAliens[k].shiftDown(); //call the aliens method to shiftDown ()
    }
  for (var l = 0; l < yellowAliens.length; l++) { // Not sure why I will have to call the alien array again
      yellowAliens[l].shiftDown(); //call the aliens method to shiftDown ()
    }
      chaser.shiftDown();
  }

  for (var i = greenAliens.length-1; i >= 0; i--) { //
    if (greenAliens[i].toDelete) { // if the alien[i] 's method toDelete is called then
      greenAliens.splice(i, 1); //remove alien from array
    }
  }
  
  for (var i = pinkAliens.length-1; i >= 0; i--) { //
    if (pinkAliens[i].toDelete) { // if the alien[i] 's method toDelete is called then
      pinkAliens.splice(i, 1); //remove alien from array
    }
  }

  for (var i = blueAliens.length-1; i >= 0; i--) { //
    if (blueAliens[i].toDelete) { // if the alien[i] 's method toDelete is called then
      blueAliens.splice(i, 1); //remove alien from array
    }
  }

  for (var i = yellowAliens.length-1; i >= 0; i--) { //
    if (yellowAliens[i].toDelete) { // if the alien[i] 's method toDelete is called then
      yellowAliens.splice(i, 1); //remove alien from array
    }
  }
  
  for (var i = lasers.length-1; i >= 0; i--) { //?
    if (lasers[i].toDelete) { // if the alien[i] 's method toDelete is called then
      lasers.splice(i, 1); //remove alien from array
    }
  }

  for (var i = enemyLasers.length-1; i >= 0; i--) { //?
    if (enemyLasers[i].toDelete) { // if the alien[i] 's method toDelete is called then
      enemyLasers.splice(i, 1); //remove alien from array
    }
  }

  for (var i = bases.length-1; i >= 0; i--) { //?
    if (bases[i].toDelete) { // if the alien[i] 's method toDelete is called then
      bases.splice(i, 1); //remove alien from array
    }
  }

  for (var i = bonusShooterLasers.length-1; i >= 0; i--) { //?
    if (bonusShooterLasers[i].toDelete) { // if the alien[i] 's method toDelete is called then
      bonusShooterLasers.splice(i, 1); //remove alien from array
    }
  }



  if (bonusShooter.toDelete){
    copClear();
    anotherCop();
  }


 // checking for aliens to be gone to level up

if (greenAliens.length === 0 && pinkAliens.length === 0 && blueAliens.length === 0 && yellowAliens.length === 0){
    levelUp.play();
     gameState = 4;
    }


}//** End of void draw 


function levelIncrease() {

  fill(0);
  rect(0,0,1200,700);
  fill(255);
  rect(20,20,3,3); rect(323,67,3,3); rect(1100,658,3,3); rect(1168,28,3,3); rect(934,323,3,3); rect(942,158,3,3); rect(1124,570,3,3); rect(809,107,3,3); rect(634,323,3,3); rect(932,567,3,3);
  rect(1054,640,3,3); rect(69,425,3,3); rect(440,220,3,3); rect(250,180,3,3); rect(800,200,3,3); rect(1048,89,3,3); rect(756,340,3,3); rect(400,323,3,3); rect(452,17,3,3); rect(854,600,3,3);
  rect(800,30,3,3); rect(454,89,3,3); rect(200,107,3,3); rect(567,454,3,3); rect(239,300,3,3); rect(690,600,3,3); rect(1130,203,3,3); rect(756,340,3,3); rect(1036,322,3,3); rect(634,154,3,3); 
  rect(452,523,3,3); rect(630,257,3,3); rect(700,24,3,3); rect(1124,353,3,3); rect(152,67,3,3); rect(54,600,3,3); rect(100,300,3,3); rect(54,120,3,3);
  
  for (var i = bases.length-1; i >= 0; i--) { //?
      bases.splice(i, 1); 
  }

  playing2 = true;

  image(potImages[(currentPotFrame) % numPotFrames], 540, 300, 150, 150);
  fill(255);
  textSize(40);
  text(countdown, 530, 190);
  textSize(20);
  text("Level Up!", 500, 420);

  if (playing2 == true && frameCount % 30 == 0 && countdown > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    gameState = 4;
    currentPotFrame = (currentPotFrame+1) % numPotFrames;
    countdown --;
  }

  if (countdown == 0) {
     playing2 = false;
     gameState = 5;
  }

}



function highScore1page(){
  stroke(random(255));
  strokeWeight(2);
  fill(0);
  rect(244,75,640,480);
  fill(255);
  rect(270,130,3,3); rect(481,441,3,3); rect(323,209,3,3); rect(464,325,3,3); rect(390,235,3,3); rect(484,146,3,3); rect(725,171,3,3); rect(848,443,3,3); rect(292,350,3,3); rect(700,423,3,3);
  rect(800,371,3,3); rect(826,236,3,3); rect(897,149,3,3); rect(360,390,3,3); rect(643,500,3,3); rect(521,345,3,3); rect(299,476,3,3); 
  rect(396,129,3,3); rect(570,107,3,3); rect(722,96,3,3); rect(466,525,3,3); rect(356,528,3,3); rect(789,528,3,3); rect(852,92,3,3);
  //^^ Background
  image(highScoreSilver, 570, 300, 425, 290);
  fill(255);
  textSize(16);
  strokeWeight(1);
  text("Well Done Spacebuds Cadet!",453, 115);
  text("You have earned a reward for your services.",393, 135);
  textSize(12);
  strokeWeight(0);
  fill(0, 255, 0);
  text("Do you have what it takes to make the Spacebuds Squadron Elite?",385, 520);
  text("Continue your quest to 1 million pts!",460, 535);


  strokeWeight(2); //box stroke
  fill(255);
  rect(745,470,70,25);
  strokeWeight(0); // text strokeweight
  fill(0);
  textSize(16);
  text("SUBMIT",755, 488);
  //
  strokeWeight(2);
  fill(255);
  rect(256,85,70,25);
  strokeWeight(0);
  fill(0);
  textSize(16);
  text("RETURN",265, 104);
  //

  strokeWeight(0);
  fill(255);
  text("EMAIL:", 380, 485);
  fill(255);
  //text(mouseX + "," + mouseY, 510, 395);
  stroke(255);

  //input rollover


    image(potImages[(currentPotFrame) % numPotFrames], 316, 300, 60, 60);
    image(potImages[(currentPotFrame) % numPotFrames], 826, 300, 60, 60);

    highScore1EmailInput.position(450,475);
    highScore1EmailInput.attribute('maxlenght', '35');

    fill(255);
    highScore1EmailInput.show();
    highScore1EmailValue = highScore1EmailInput.value();

  if (mouseX > 430 && mouseX < 710 && mouseY > 460 && mouseY < 495){
    fill(255);
    rect(430,495,290,2);
  }

  if (frameCount % 8 == 0) { 
    currentPotFrame = (currentPotFrame+1) % numPotFrames;
  }


    // Rollover
  if (mouseX > 260 && mouseX < 325 && mouseY > 86 && mouseY < 110){
    stroke(255);
    strokeWeight(2);
    fill(0);
    rect(256,85,70,25);
    strokeWeight(0);
    fill(255);
    textSize(16);
    text("RETURN",265, 104);
  }

  //actual button

  if (mouseIsPressed && mouseX > 260 && mouseX < 325 && mouseY > 86 && mouseY < 110){
    stroke(255);
    strokeWeight(2);
    fill(0);
    rect(256,85,70,25);
    strokeWeight(0);
    fill(255);
    textSize(16);
    text("RETURN",265, 104);
    highScore1NameInput.hide();
    highScore1EmailInput.hide();
    gameState = 2;
  }

  //rollover

  if (mouseX > 745 && mouseX < 815 && mouseY > 470 && mouseY < 495){
    stroke(255);
    strokeWeight(2);
    fill(0);
    rect(745,470,70,25);
    strokeWeight(0);
    fill(255);
    textSize(16);
    text("SUBMIT",755, 488);
  }

  //actual button

  if (mouseIsPressed && mouseX > 745 && mouseX < 815 && mouseY > 470 && mouseY < 495){
    stroke(255);
    strokeWeight(2);
    fill(0);
    rect(745,470,70,25);
    strokeWeight(0);
    fill(255);
    textSize(16);
    text("SUBMIT",755, 488);
    pushHighScore1();
  }

  //input rollover

}

function highScore2page(){

  stroke(random(255));
  strokeWeight(2);
  fill(0);
  rect(244,75,640,480);
  fill(255);
  rect(270,130,3,3); rect(481,441,3,3); rect(323,209,3,3); rect(464,325,3,3); rect(390,235,3,3); rect(484,146,3,3); rect(725,171,3,3); rect(848,443,3,3); rect(292,350,3,3); rect(700,423,3,3);
  rect(800,371,3,3); rect(826,236,3,3); rect(897,149,3,3); rect(360,390,3,3); rect(643,500,3,3); rect(521,345,3,3); rect(299,476,3,3); 
  rect(396,129,3,3); rect(570,107,3,3); rect(722,96,3,3); rect(466,525,3,3); rect(356,528,3,3); rect(789,528,3,3); rect(852,92,3,3);
  //^^ Background
  image(highScoreGold, 570, 310, 425, 290);
  fill(255);
  textSize(14);
  strokeWeight(1);
  text("Congratulations Spacebud Commander!",440, 110);
  text("You have earned a reward for your heroic efforts and are hereby invited",345, 130);
  text("to compete for the Spacebuds Squadron Elite to earn the ultimate badge of honor!",305, 150);
  textSize(16);
  strokeWeight(0);
  fill(0, 255, 0);
  text("Submit and continue your quest for the ultimate high score!",355, 530);


  strokeWeight(2); //box stroke
  fill(255);
  rect(745,470,70,25);
  strokeWeight(0); // text strokeweight
  fill(0);
  textSize(16);
  text("SUBMIT",755, 488);
  //
  strokeWeight(2);
  fill(255);
  rect(256,85,70,25);
  strokeWeight(0);
  fill(0);
  textSize(16);
  text("RETURN",265, 104);
  //

  strokeWeight(0);
  fill(255);
  text("EMAIL:", 380, 485);
  fill(255);
  //text(mouseX + "," + mouseY, 510, 395);
  stroke(255);

  //input rollover


    image(potImages[(currentPotFrame) % numPotFrames], 316, 300, 60, 60);
    image(potImages[(currentPotFrame) % numPotFrames], 826, 300, 60, 60);

    highScore2EmailInput.position(450,475);
    highScore2EmailInput.attribute('maxlenght', '35');

    fill(255);
    highScore2EmailInput.show();
    highScore2EmailValue = highScore2EmailInput.value();

  if (mouseX > 430 && mouseX < 710 && mouseY > 460 && mouseY < 495){
    fill(255);
    rect(430,495,290,2);
  }

  if (frameCount % 8 == 0) { 
    currentPotFrame = (currentPotFrame+1) % numPotFrames;
  }


    // Rollover
  if (mouseX > 260 && mouseX < 325 && mouseY > 86 && mouseY < 110){
    stroke(255);
    strokeWeight(2);
    fill(0);
    rect(256,85,70,25);
    strokeWeight(0);
    fill(255);
    textSize(16);
    text("RETURN",265, 104);
  }

  //actual button

  if (mouseIsPressed && mouseX > 260 && mouseX < 325 && mouseY > 86 && mouseY < 110){
    stroke(255);
    strokeWeight(2);
    fill(0);
    rect(256,85,70,25);
    strokeWeight(0);
    fill(255);
    textSize(16);
    text("RETURN",265, 104);
    highScore2NameInput.hide();
    highScore2EmailInput.hide();
    gameState = 2;
  }

  //rollover

  if (mouseX > 745 && mouseX < 815 && mouseY > 470 && mouseY < 495){
    stroke(255);
    strokeWeight(2);
    fill(0);
    rect(745,470,70,25);
    strokeWeight(0);
    fill(255);
    textSize(16);
    text("SUBMIT",755, 488);
  }

  //actual button

  if (mouseIsPressed && mouseX > 745 && mouseX < 815 && mouseY > 470 && mouseY < 495){
    stroke(255);
    strokeWeight(2);
    fill(0);
    rect(745,470,70,25);
    strokeWeight(0);
    fill(255);
    textSize(16);
    text("SUBMIT",755, 488);
    pushHighScore2();
  }
}


function highScore1ReachedRec(){
  highScore1Reached += 1;
  highScoreSound.play();
  gameState = 11;
}

function highScore2ReachedRec(){
  highScore2Reached += 1;
  highScoreSound.play();
  gameState = 12;
}


function pause() {


  fill(0);
  rect(0,0,1200,700);
  fill(255);
  rect(20,20,3,3); rect(323,67,3,3); rect(1100,658,3,3); rect(1168,28,3,3); rect(934,323,3,3); rect(942,158,3,3); rect(1124,570,3,3); rect(809,107,3,3); rect(634,323,3,3); rect(932,567,3,3);
  rect(1054,640,3,3); rect(69,425,3,3); rect(440,220,3,3); rect(250,180,3,3); rect(800,200,3,3); rect(1048,89,3,3); rect(756,340,3,3); rect(400,323,3,3); rect(452,17,3,3); rect(854,600,3,3);
  rect(800,30,3,3); rect(454,89,3,3); rect(200,107,3,3); rect(567,454,3,3); rect(239,300,3,3); rect(690,600,3,3); rect(1130,203,3,3); rect(756,340,3,3); rect(1036,322,3,3); rect(634,154,3,3); 
  rect(452,523,3,3); rect(630,257,3,3); rect(700,24,3,3); rect(1124,353,3,3); rect(152,67,3,3); rect(54,600,3,3); rect(100,300,3,3); rect(54,120,3,3);
  text("Game Paused", 510, height/2 - 50);
  text("Click to Return", 500, height/2);

  //if (mouseIsPressed){
  //  gameState = 2;
  //}

}


function mouseReleased(){
    ship.setDir(0); 
}

function keyReleased() {
  if (key != ' ') { 
    ship.setDir(0); 
  }
}


function keyPressed() {


  if (keyCode === RIGHT_ARROW) { 
    ship.setDir(1); //if right arrow pass argument value of +1 through the .setDir method (dir) parameter
  } 

  else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1); //if left arrow pass argument value of -1 through the .setDir method (dir) parameter
  }

  else if (keyCode === 80){
    gameState = 3;
  }

  //else if (keyCode === SHIFT){
  //  score = 419999;
 // } 

  else if (key === ' ') { //if keycode equals spacebar 
    var laser = new Laser(ship.x, 510); //create new Laser obj at the current x coord (from the center) of ship and bottom of screen (?)
    lasers.push(laser); //pushes another drop into current lasers array
    laserSound.play();
  }

 // else if (keyCode === CONTROL){
  //  score = 199999;
  
  
  //  newLife.lives = 0;
 //}

  else if (keyCode === TAB){
    score = 999999;
  }

  //else if (keyCode === ALT){
  //  score = 99999;
  //}

}

function copRelocate(){
  bonusShooter.y = random(10,350);
}

function copClear(){
  bonusShooter.y = random(0,350);
  bonusShooter.x = width + 50;
}

function anotherCop(){
 bonusShooter = new BonusShooter(0, random(10,300), xdirCop); 
}


function shipHit(){
  playing = true;

  if (playing === true) { 
    image(fireImage, ship.x, ship.y, 250 , 250);
    gameState = 9;
 }

  if (frameCount % 120 === 0) {
   playing = false;
   gameState = 2;
  }
  
}


function resetSketch(){
  level = level + 1;
  laserLength = laserLength + 1;
  copLaserLength = copLaserLength + 1;
  difficulty = difficulty + 0.005;
  counter = 0;
  countdown = 3;
  xdir = xdir + 0.06;
  xdirCop = xdirCop + 0.3;
  chaser = new Chaser(360,70, xdir);
  bonusShooter = new BonusShooter(0, random(10,300), xdirCop);

    if (level > 5){
    newLife.addLife();
  }
 

  for (var i =0; i < 4; i++){
    var x = 168 * i + 300;
    var y = 430;
    var b = new Base(x,y);
    bases.push(b);
  }


  for (var i = 0; i < 10; i++) {  //while i is less than 10 in alien array iterate through array
    greenAliens[i] = new GreenAlien(i*40+360, 70, xdir); //for each alien in array, create a new alien object at i and 60 starting
  }
  for (var i = 0; i < 10; i++) {  //while i is less than 10 in alien array iterate through array
    pinkAliens[i] = new PinkAlien(i*40+360, 110, xdir); //for each alien in array, create a new alien object at i and 60 starting

  }
  for (var i = 0; i < 10; i++) {  //while i is less than 10 in alien array iterate through array
    blueAliens[i] = new BlueAlien(i*40+360, 150, xdir); //for each alien in array, create a new alien object at i and 60 starting

  }
  for (var i = 0; i < 10; i++) {  //while i is less than 10 in alien array iterate through array
    yellowAliens[i] = new YellowAlien(i*40+360, 190, xdir); //for each alien in array, create a new alien object at i and 60 starting

  }
  //gameState = 2;
  if (gameState === 5){
    gameState = 2;
  } 


}

function gameOver() { //the only reason x,y are the only parameters is because they are the only perameters that will change throughout us
    
    fill(0);
    rect(0,0,1100,623);
    image(gameOverBack, width/2,height/2,1100,623);
    fill(255);
    textSize(24);
    text(score, 280, 296);
    greenAlien = new GreenAlien(450, 150, 0);
    greenAlien.show();
    greenAlien.stoned();
    pinkAlien = new PinkAlien(510, 150, 0);
    pinkAlien.show();
    pinkAlien.stoned();
    yellowAlien = new YellowAlien(570, 150, 0);
    yellowAlien.show();
    yellowAlien.stoned();
    blueAlien = new BlueAlien(630, 150, 0);
    blueAlien.show();
    blueAlien.stoned();
    cop = new BonusShooter(540,215);
    cop.show();
    fill(255);
    textSize(20);
    text("MKG                871220", 630, 330);
    text("MCA                560150", 630, 330);
    text("MCA               558320", 630, 360);
    text("MCA               421560", 630, 390);
    text("AAA               420001", 630, 420);
    text("MKG               318170", 630, 450);
    text("MKG               305480", 630, 480);


  if(frameCount % 8 == 0){
    currentYellowFrame = (currentYellowFrame+1) % numYellowFrames;  // Use % to cycle through frames
    currentGreenFrame = (currentGreenFrame+1) % numGreenFrames;
    currentBlueFrame = (currentBlueFrame+1) % numBlueFrames;
    currentPinkFrame = (currentPinkFrame+1) % numPinkFrames;
    currentCopFrame = (currentCopFrame+1) % numCopFrames;
  }

    nameInput.position(280, 331);
    emailInput.position(280,382);
    fill(255,0,0);
    textSize(12);
    text("*EMAILS RECEIVE GAMEPLAY DEALS & MORE", 183, 440);

    if (mouseX > 335 && mouseX < 420 && mouseY > 480 && mouseY < 515){
    stroke(255);
    strokeWeight(2);
    fill(255);
    rect(335,480,85,35);
    strokeWeight(0);
    fill(0);
    textSize(21);
    text("SUBMIT",347, 506);
  }

  if (mouseIsPressed && mouseX > 335 && mouseX < 420 && mouseY > 480 && mouseY < 515){
    stroke(255);
    strokeWeight(2);
    fill(0);
    rect(335,480,85,35);
    strokeWeight(0);
    fill(0);
    textSize(21);
    text("SUBMIT",347, 506);
    nameInput.hide();
    emailInput.hide();
    pushScore();
  }
    
    fill(255);
    nameInput.show();
    emailInput.show();
    nameValue = nameInput.value();
    emailValue = emailInput.value();
    nameInput.attribute('maxlength', '3');
    emailInput.attribute('maxlenght', '35');
  

  for (var i = greenAliens.length-1; i >= 0; i--) { 
      greenAliens.splice(i, 1); 
  }
  
  for (var i = pinkAliens.length-1; i >= 0; i--) { 
      pinkAliens.splice(i, 1); 
  }

  for (var i = blueAliens.length-1; i >= 0; i--) { 
      blueAliens.splice(i, 1); 
  }

  for (var i = yellowAliens.length-1; i >= 0; i--) { 
      yellowAliens.splice(i, 1); 
  }
  
  for (var i = lasers.length-1; i >= 0; i--) { 
      lasers.splice(i, 1); 
  }

  for (var i = enemyLasers.length-1; i >= 0; i--) { 
      enemyLasers.splice(i, 1); 
  }

  for (var i = bases.length-1; i >= 0; i--) { //?
      bases.splice(i, 1); 
  }

  for (var i = bonusShooterLasers.length-1; i >= 0; i--) { 
      bonusShooterLasers.splice(i, 1); 
  }

}

function pushScore(){

  var database = firebase.database();
  var ref = database.ref('scores');

  var data = {
    name: nameValue,
    score: score,
    email: emailValue
  }

  ref.push(data);
  fill(255);
  textSize(22);
  text("Submitted!",340, 600/2);
  gameState = 10;
  

}

function pushHighScore1(){

  var database = firebase.database();
  var highScore1Ref = database.ref('highScore1');

  var highScore1Data = {
    score: score,
    email: highScore1EmailValue
  }

  highScore1Ref.push(highScore1Data);

  highScore1EmailInput.hide();
  gameState = 2;

}

function pushHighScore2(){

  var database = firebase.database();
  var highScore2Ref = database.ref('highScore2');

  var highScore2Data = {
    score: score,
    email: highScore2EmailValue
  }

  highScore2Ref.push(highScore2Data);

  highScore2EmailInput.hide();
  gameState = 2;

}

function submitPage(){

    fill(0);
    rect(0, 0, 1200, 700);
    textSize(20);
    fill(255);
    rect(20,20,3,3); rect(323,67,3,3); rect(1100,658,3,3); rect(1168,28,3,3); rect(934,323,3,3); rect(942,158,3,3); rect(1124,570,3,3); rect(809,107,3,3); rect(634,323,3,3); rect(932,567,3,3);
    rect(1054,640,3,3); rect(69,425,3,3); rect(440,220,3,3); rect(250,180,3,3); rect(800,200,3,3); rect(1048,89,3,3); rect(756,340,3,3); rect(400,323,3,3); rect(452,17,3,3); rect(854,600,3,3);
    rect(800,30,3,3); rect(454,89,3,3); rect(200,107,3,3); rect(567,454,3,3); rect(239,300,3,3); rect(690,600,3,3); rect(1130,203,3,3); rect(756,340,3,3); rect(1036,322,3,3); rect(634,154,3,3); 
    rect(452,523,3,3); rect(630,257,3,3); rect(700,24,3,3); rect(1124,353,3,3); rect(152,67,3,3); rect(54,600,3,3); rect(100,300,3,3); rect(54,120,3,3); rect(143,180,3,3); rect(567,454,3,3);
    
    fill(255);
    nameInput.hide();
    emailInput.hide();

    text("Submitted! Play Again?", 440, 270);
    image(yesButton, 500, 340, 50, 30);
    image(noButton, 570, 340, 50, 30);

    if (mouseX > 475 && mouseX < 525 && mouseY > 325 && mouseY < 355){
    fill(255);
    rect(477,327,45,25);
    strokeWeight(0);
    fill(0);
    textSize(14);
    text("YES",490, 345);
   }

   else if (mouseX > 545 && mouseX < 595 && mouseY > 325 && mouseY < 355){
    fill(255);
    rect(547,327,45,25);
    strokeWeight(0);
    fill(0);
    textSize(14);
    text("NO",562, 345);
   }



}




function Chaser(x, y, xdir) { //the only reason x,y are the only parameters is because they are the only perameters that will change throughout use
  this.x = x; //intializing x pos of alien obj
  this.y = y; // intializing y pos of alien object
  this.xdir = xdir; //delcaring speed as xdir, just 1 
  this.r = 30; //must leave
  
  this.display = function() { //method to display the aliens
    //stroke(255);
    noFill();
    rect(this.x, this.y, 400, 140);
  }

  this.shiftDown = function() { //method (function) that happens when the edge boolean value becomes true
    this.xdir *= -1; 
    this.y += this.r;
  }

  this.move = function() { //method function to move the aliens
    this.x = this.x + this.xdir; //setting the current x value to equal itself + the xdir speed
  }

  this.speedUp = function(xdir){
    this.xdir = this.xdir + 0.1;
  }

  this.hitsBase = function(base) { //method in the laser that initiates shooting behavior
    var db = dist(this.x + 540, this.y +150, base.x, base.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
  if (db < 45 ) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

}




function EnemyLaser(x, y) {
  this.x = x; //initializes object x coord as x to be changed
  this.y = y; //intializing object y coord as y to be changed
  this.r = 2; //initializing object radius to 
  this.toDelete = false; //initializing the method toDelete to laser object with an intial boolean value of false

  this.show = function() { //function that displays the object which is an ellipse 
    noStroke();
    fill(255, 255, 255);
    rect(this.x, this.y, this.r, this.r + 2);
  }

  this.evaporate = function() { //function that deletes current laser when it hits an alien
    this.toDelete = true;
  }

  this.hitsShip = function(ship) { //method in the laser that initiates shooting behavior
    var d3 = dist(this.x, this.y, ship.x, ship.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
  if (d3 < 30 ) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

  this.hitsBase = function(base) { //method in the laser that initiates shooting behavior
    var d2 = dist(this.x, this.y, base.x, base.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
  if (d2 < base.baseRadius/2) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

  this.hitsEdge = function(){ //intializing variable d to equal distance from current x,y of laser to current x,y of alien  //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
     this.toDelete = true;
  }
  

  this.move = function() {
    this.y = this.y + 5; //move function for the y value of the laser, the y value equals its current value - 5 px 
  }
 
}



function GreenAlien(x, y, xdir) { //the only reason x,y are the only parameters is because they are the only perameters that will change throughout use
  this.x = x; //intializing x pos of alien obj
  this.y = y; // intializing y pos of alien object
  this.r = 25; //declaring the radius of the ellipse object
  this.toDelete = false;
  this.xdir = xdir; //delcaring speed as xdir, just 1
  this.img = greenImages;
  //this.img2 = green2;

  
  this.show = function() { //method to display the aliens
    imageMode(CENTER);
    image(this.img[(currentGreenFrame) % numGreenFrames], this.x, this.y, this.r, this.r);
  }

  this.stoned = function(){
    fill(255,0,0,100);
    rect(this.x - 5, this.y - 10, 11, 14);
  }

  this.evaporate = function() { //function that deletes current laser when it hits an alien
    this.toDelete = true; //toDelete is a built in object method(?), deletes the current drop by setting boolean to true (at false in initial state)
  }

  this.speedUp = function(){
    this.xdir = this.xdir + 0.1;
  }

  this.shiftDown = function() { //method (function) that happens when the edge boolean value becomes true
    this.xdir *= -1; 
    this.y += this.r;
  }

  this.move = function() { //method function to move the aliens
    this.x = this.x + this.xdir; //setting the current x value to equal itself + the xdir speed
  }

}






function PinkAlien(x, y, xdir) { //the only reason x,y are the only parameters is because they are the only perameters that will change throughout use
  this.x = x; //intializing x pos of alien obj
  this.y = y; // intializing y pos of alien object
  this.r = 25; //declaring the radius of the ellipse object
  this.toDelete = false;
  this.xdir = xdir; //delcaring speed as xdir, just 1
  this.img = pinkImages;
  //this.img2 = pink2;
  
  this.show = function() { //method to display the aliens
    imageMode(CENTER);
    image(this.img[(currentPinkFrame) % numPinkFrames], this.x, this.y, this.r , this.r);
  }

  this.stoned = function(){
    fill(255,0,0,100);
    rect(this.x - 5, this.y - 10, 11, 14);
  }

  this.speedUp = function(xdir){
    this.xdir = this.xdir + 0.1;
  }

  
  this.evaporate = function() { //function that deletes current laser when it hits an alien
    this.toDelete = true; //toDelete is a built in object method(?), deletes the current drop by setting boolean to true (at false in initial state)
  }

  this.shiftDown = function() { //method (function) that happens when the edge boolean value becomes true
    this.xdir *= -1; 
    this.y += this.r;
  }

  this.move = function() { //method function to move the aliens
    this.x = this.x + this.xdir; //setting the current x value to equal itself + the xdir speed
  }

}



function BlueAlien(x, y, xdir) { //the only reason x,y are the only parameters is because they are the only perameters that will change throughout use
  this.x = x; //intializing x pos of alien obj
  this.y = y; // intializing y pos of alien object
  this.r = 25; //declaring the radius of the ellipse object
  this.toDelete = false;
  this.xdir = xdir; //delcaring speed as xdir, just 1
  this.img = blueImages;
  //this.img2 = blue2;
  
  this.show = function() { //method to display the aliens
    imageMode(CENTER);
    image(this.img[(currentBlueFrame) % numBlueFrames], this.x, this.y, this.r, this.r);

  }

  this.stoned = function(){
    fill(255,0,0,100);
    noStroke();
    rect(this.x - 5, this.y - 10, 11, 14);
  }
  
  this.evaporate = function() { //function that deletes current laser when it hits an alien
    this.toDelete = true; //toDelete is a built in object method(?), deletes the current drop by setting boolean to true (at false in initial state)
  }

  this.speedUp = function(xdir){
    this.xdir = this.xdir + 0.1;
  }

  this.shiftDown = function() { //method (function) that happens when the edge boolean value becomes true
    this.xdir *= -1; 
    this.y += this.r;
  }

  this.move = function() { //method function to move the aliens
    this.x = this.x + this.xdir; //setting the current x value to equal itself + the xdir speed
  }

}


function YellowAlien(x, y, xdir) { //the only reason x,y are the only parameters is because they are the only perameters that will change throughout use
  this.x = x; //intializing x pos of alien obj
  this.y = y; // intializing y pos of alien object
  this.r = 25; //declaring the radius of the ellipse object
  this.toDelete = false;
  this.xdir = xdir; //delcaring speed as xdir, just 1
  this.img = yellowImages;

  this.show = function() { 
    //if(frameCount % 3 == 0) {
      imageMode(CENTER);
      image(this.img[(currentYellowFrame) % numYellowFrames], this.x, this.y, this.r, this.r);
    // }
  }

  this.stoned = function(){
    fill(255,0,0,100);
    noStroke();
    rect(this.x - 5, this.y - 10, 11, 14);
  }

  this.speedUp = function(xdir){
    this.xdir = this.xdir + 0.1;
  }
  
  this.evaporate = function() { //function that deletes current laser when it hits an alien
    this.toDelete = true; //toDelete is a built in object method(?), deletes the current drop by setting boolean to true (at false in initial state)
  }

  this.shiftDown = function() { //method (function) that happens when the edge boolean value becomes true
    this.xdir *= -1; 
    this.y += this.r;
  }

  this.move = function() { //method function to move the aliens
    this.x = this.x + this.xdir; //setting the current x value to equal itself + the xdir speed
  }

}



function Ship() {
  this.x = width/2; //initializes base x value of the ship which will be in the center of the canvas
  this.y = height - 120;
  this.xdir = 0; //intializes a speed for the direciton of the moving x axis 
  this.img = ship;
  //this.img2 = fire;

  this.show = function() { //this function will actually show the object
    imageMode(CENTER);
    image(this.img, this.x, this.y, 60, 60); // the x coordinates is the current x value, -20 from the height (bottom) and 20px by 60px
  }
  
  this.setDir = function(dir) { //calling method to set the direction  dir will constantly change between one or other 
    this.xdir = dir; //
  }
  
  this.move = function(dir) { //assings move method to the ship object, the dir parameter is something that will constantly be changing
     this.x += this.xdir*8; //the current x pos + current x pos and x speed *5
  }


}



function NewLife() {
  this.lives = 3;
  this.img = lifeIcon;

  this.show = function(lives) { //this function will actually show the object
    textSize(20);
    fill(255);
    text(this.lives - 1, 210, height-30);
    fill(100,255,100);
    text("Lives:", 130, height-30);
    image(this.img, 100, height-40, 30, 30);
  }

  this.minusLife = function (lives) {  
    this.lives = this.lives - 1; 
  }

  this.addLife = function (lives){
    this.lives = this.lives + 1;
  }

}



function Laser(x, y) {
  this.x = x; //initializes object x coord as x to be changed
  this.y = y; //intializing object y coord as y to be changed
  this.r = 2; //initializing object radius to 
  this.toDelete = false; //initializing the method toDelete to laser object with an intial boolean value of false
  this.yellowPop = yellowPop;
  this.greenPop = greenPop;
  this.pinkPop = pinkPop;
  this.bluePop = bluePop;

  this.show = function() { //function that displays the object which is an ellipse 
    noStroke();
    fill(255, 255, 255);
    rect(this.x, this.y, this.r, this.r);
  }

  this.evaporate = function() { //function that deletes current laser when it hits an alien
    this.toDelete = true; //toDelete is a built in object method(?), deletes the current drop by setting boolean to true (at false in initial state)
  }

  this.hits1 = function(greenAlien) { //method in the laser that initiates shooting behavior
    var d = dist(this.x, this.y, greenAlien.x, greenAlien.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
  if (d < 12) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
    image(this.greenPop, this.x, this.y, 24, 24);
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

   this.hits2 = function(pinkAlien) { //method in the laser that initiates shooting behavior
    var d1 = dist(this.x, this.y, pinkAlien.x, pinkAlien.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
   if (d1 < 12) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      image(this.pinkPop, this.x, this.y, 24, 24);
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

    this.hits3 = function(blueAlien) { //method in the laser that initiates shooting behavior
    var d2 = dist(this.x, this.y, blueAlien.x, blueAlien.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
  if (d2 < 12) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
     image(this.bluePop, this.x, this.y, 24, 24);
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

    this.hits4 = function(yellowAlien) { //method in the laser that initiates shooting behavior
    var d3 = dist(this.x, this.y, yellowAlien.x, yellowAlien.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
  if (d3 < 12) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      image(this.yellowPop, this.x, this.y, 24, 24);
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

  this.hitsBase = function(base) { //method in the laser that initiates shooting behavior
    var d3 = dist(this.x, this.y, base.x, base.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
    if (d3 < base.baseRadius/2) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

  this.hitsBonusShooter = function(bonusShooter){
    var d4 = dist(this.x, this.y, bonusShooter.x, bonusShooter.y);
    if (d4 < 20){
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //
    }
  }
  

  this.move = function() {
    this.y = this.y - 5; //move function for the y value of the laser, the y value equals its current value - 5 px 
  }

  this.hitsEdge = function(){ //intializing variable d to equal distance from current x,y of laser to current x,y of alien  //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
     this.toDelete = true;
  }


 
}



function BonusShooterLaser(x, y) {
  this.x = x; //initializes object x coord as x to be changed
  this.y = y; //intializing object y coord as y to be changed
  this.r = 2; //initializing object radius to 
  this.toDelete = false; //initializing the method toDelete to laser object with an intial boolean value of false

  this.show = function() { //function that displays the object which is an ellipse 
    noStroke();
    fill(0, 255, 255);
    rect(this.x, this.y, this.r, this.r + 4);
  }

  this.evaporate = function() { //function that deletes current laser when it hits an alien
    this.toDelete = true;
  }

  this.hitsShip = function(ship) { //method in the laser that initiates shooting behavior
    var d3 = dist(this.x, this.y, ship.x, ship.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
    if (d3 < 30 ) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

  this.hitsBase = function(base) { //method in the laser that initiates shooting behavior
    var d2 = dist(this.x, this.y, base.x, base.y); //intializing variable d to equal distance from current x,y of laser to current x,y of alien 
  if (d2 < base.baseRadius/2) { //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
      return true; //return true value (to delete alien)
    } else { // if else
      return false; //stay false (so alien remains there and nothing happens to it)
    }
  }

  this.hitsEdge = function(){ //intializing variable d to equal distance from current x,y of laser to current x,y of alien  //if the distance between the laser and alien is less than the radius of laser + the radius of the alien
     this.toDelete = true;
  }
  

  this.move = function() {
    this.y = this.y + 5; //move function for the y value of the laser, the y value equals its current value - 5 px 
  }
 
}




function BonusShooter(x, y, xdirCop) { //the only reason x,y are the only parameters is because they are the only perameters that will change throughout use
  this.x = x; //intializing x pos of alien obj
  this.y = y; // intializing y pos of alien object
  this.r = 40; //declaring the radius of the ellipse object
  this.toDelete = false;
  this.xdirCop = xdirCop; //delcaring speed as xdir, just 1
  this.img = copImages;
  //this.img2 = cop2;
  
  this.show = function() { //method to display the aliens
    //if(frameCount % 3 == 0) {
    imageMode(CENTER);
    image(this.img[(currentCopFrame) % numCopFrames], this.x, this.y, this.r, 24);
    //}
  }
  
  this.evaporate = function() { //function that deletes current laser when it hits an alien
    this.toDelete = true; //toDelete is a built in object method(?), deletes the current drop by setting boolean to true (at false in initial state)
  }

  this.move = function() { //method function to move the aliens
    this.x = this.x + this.xdirCop; //setting the current x value to equal itself + the xdir speed
  }

  this.reverse = function(){
    this.xdirCop *= -1; 
  }

}





function Base (x,y, baseRadius){
 this.x = x;
 this.y = y;
 this.img = potImages;
 this.baseRadius = 70;
 this.toDelete = false;
 this.smoking = smokeImages;

 this.lasered = function(laser){
   this.baseRadius -= 7;
  }

 this.show = function (){
  imageMode(CENTER);
  image(this.img[(currentPotFrame) % numPotFrames], this.x, this.y, this.baseRadius, this.baseRadius);
}

 this.smokeWeed = function(){
    image(this.smoking[(currentSmokeFrame) % numSmokeFrames], this.x, this.y, 100, 100);
}

 this.remove = function (){
   this.toDelete = true;
 }

 }




