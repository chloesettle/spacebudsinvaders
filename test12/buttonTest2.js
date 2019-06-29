var button;
var emailInput;
var emailValue;
var gameState;
var database;
var ref;
var canvas;
var data;

var score = 10;

function setup() {
  canvas = createCanvas(300, 300);
  background(0);
  button = createButton('submit');
  emailInput = createInput('');


  var firebaseConfig = {
    apiKey: "AIzaSyDU4_DbN3kO9-E2PE5u-jtd4fxYycNb_qs",
    authDomain: "spacebuds-invaders.firebaseapp.com",
    databaseURL: "https://spacebuds-invaders.firebaseio.com",
    projectId: "spacebuds-invaders",
    storageBucket: "spacebuds-invaders.appspot.com",
    messagingSenderId: "299366500827",
    appId: "1:299366500827:web:cac78c0ce7a4ee54"
  };

  firebase.initializeApp(firebaseConfig);
  
  gameState = 0;

}



function draw() {
  if (gameState === 0){
    mainScreen();
  }

  else if (gameState === 1){
   submit();
  }

}

function mainScreen(){
  fill(50,39,32);
  rect(0,0,300,300);
  emailInput.position(25,50);
  button.position(19, 19);
  button.mousePressed(pushHiScore);
  fill(255);
  textSize(10);
  emailValue = emailInput.value();
  emailInput.show();
  button.show();
}

function submit(){
  fill(100,239,132);
  rect(0,0,300,300);
  emailInput.hide();
  button.hide();
  fill(255);
  textSize(10);
  text("submitted!", 100, 100);

  emailInput.hide();
  button.hide();

  if (keyCode === ENTER){
    gameState = 0;
  }
  
  else if 
    (gameState = 1){
    gameState = 1;
  }

}


function pushHiScore() {
  var database = firebase.database();
  var ref = database.ref('scores');

  var data = {
    name: "NAME",
    score: score,
    email: emailValue
  }
  //background(0);
  ref.push(data);
  emailInput.value('');
  gameState = 1;
}


// var b = new Ball(mouseX,mouseY,32); // Make a new object at the mouse location.
// balls.push(b);


