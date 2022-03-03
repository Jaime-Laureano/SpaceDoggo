let gameIsOver = false;
let score = 0;

let gameIntro = document.querySelector(".game-intro");
let gamePlay = document.querySelector("#game-play");
let gameOverWin = document.querySelector(".win");
let gameOverLose = document.querySelector(".lose");

let screenWidth;

//// buttons ////

let startBtn = document.querySelector("#start-button");
let restartBtnWin = document.querySelector("#restart-buttonWin");
let restartBtnLose = document.querySelector("#restart-buttonLose");

//// character variables ////


let ufoHeight = 225;
let ufoWidth = 225;

let asteroidHeight = 150;
let asteroidWidth = 150;
let characterHeight = 150;
let characterWidth = 150;

//// object variables ////

let asteroid;
let rick;
let morty;
let jerry;
let squanchy;
let meeseeks;
let picklerick;
let snuffles;
let mrPB;
let lincoler;
let birdPerson;

let backgroundMusic = new Audio("sounds/BackgroundMusic.mp3")
backgroundMusic.volume=0.2
let winSound = new Audio("sounds/GetSchwiftSong.mp3")
winSound.volume=0.2
let loseSound = new Audio("sounds/EvilEndSong.mp3")
loseSound.volume=0.2

let rickSound = new Audio("sounds/wubaluba.mp3");

let mortySound = new Audio("sounds/morty.mp3");

let jerrySound = new Audio("sounds/jerry.mp3");

let squanchySound = new Audio("sounds/squanchy.mp3");

let meeseeksSound = new Audio("sounds/Meeseeks.mp3");

let picklerickSound = new Audio("sounds/PickleRick.mp3");

let snufflesSound = new Audio("sounds/snuffles.mp3");

let mrPBSound = new Audio("sounds/mrpb.mp3");

let lincolerSound = new Audio("sounds/lincoler.mp3");

let birdPersonSound = new Audio("sounds/birdperson.mp3");


let asteroidArr = [];

let charactersArr = [];

function reset () {
  charactersArr = [
    { x: Math.floor(Math.random() * 1000), y: -100, img: rick,name:'rick', sound: rickSound },
    { x: Math.floor(Math.random() * 1000), y: -00, img: morty,name:'morty', sound: mortySound  },
    { x: Math.floor(Math.random() * 1000), y: -6000, img: jerry,name:'jerry', sound: jerrySound },
    { x: Math.floor(Math.random() * 1000), y: -7000, img: squanchy,name:'squanchy', sound: squanchySound },
    { x: Math.floor(Math.random() * 1000), y: -6500, img: meeseeks,name:'meeseeks', sound: meeseeksSound },
    { x: Math.floor(Math.random() * 1000), y: -8000, img: picklerick,name:'picklerick', sound: picklerickSound },
    { x: Math.floor(Math.random() * 1000), y: -3000, img: snuffles,name:'snuffles', sound: snufflesSound },
    { x: Math.floor(Math.random() * 1000), y: -2750, img: mrPB,name:'mrPB', sound: mrPBSound },
    { x: Math.floor(Math.random() * 1000), y: -9000, img: lincoler,name:'lincoler', sound: lincolerSound },
    { x: Math.floor(Math.random() * 1000), y: -9000, img: birdPerson,name:'birdPerson', sound: birdPersonSound }

  ];
  charactersArr.forEach((character)=>{character.sound.volume=0.2})
  asteroidArr = [
    { x: Math.floor(Math.random() * 1000), y: -200 },
    // { x: Math.floor(Math.random() * 1000), y: -400 },
    // { x: Math.floor(Math.random() * 1000), y: -600 },
    // { x: Math.floor(Math.random() * 1000), y: -800 },
    // { x: Math.floor(Math.random() * 1000), y: -1000 },
    // { x: Math.floor(Math.random() * 1000), y: -1200 },
    // { x: Math.floor(Math.random() * 1000), y: -1400 },
    // { x: Math.floor(Math.random() * 1000), y: -1600 },
  ];
} 

function preload() {
  bg = loadImage("images/Space-Background.jpg");
  ufo = loadImage("images/UFO.png");
  asteroid = loadImage("images/asteroid1.png");
  rick = loadImage("images/Rick.png");
  morty = loadImage("images/Morty.png");
  jerry = loadImage("images/Jerry.png");
  squanchy = loadImage("images/squanchy.png");
  meeseeks = loadImage("images/Mr. Meeseeks.png");
  picklerick = loadImage("images/Pickle-Rick.png");
  snuffles = loadImage("images/Snuffles.png");
  mrPB = loadImage("images/Mr PB.png");
  lincoler = loadImage("images/Abrodolph Lincoler.png");
  birdPerson = loadImage("images/Birdperson.png");

  // // soundFormats('mp3');
  // rickSound = loadSound ('sounds/wubaluba.mp3');
  reset();

}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("game-play");
}

function draw() {
  background(bg);
  textSize(75);
  textStyle(BOLDITALIC);
  text("Score: " + score, 40, 50, fill(225));
  image(
    ufo,
    mouseX - ufoWidth / 2,
    mouseY - ufoHeight / 2,
    ufoWidth,
    ufoHeight
  );

  for (let i = 0; i < asteroidArr.length; i++) {
    let currentAsteroid = asteroidArr[i];
    image(
      asteroid,
      currentAsteroid.x,
      currentAsteroid.y,
      asteroidWidth,
      asteroidHeight
    );
    currentAsteroid.y += 2;

    if (
      currentAsteroid.y + 200 <= mouseY + ufoHeight && //top of asteroid?
      currentAsteroid.y + asteroidHeight >= mouseY && //bottom of asteroid?
      currentAsteroid.x + 20 + asteroidWidth   >= mouseX  && // left of UFO?
      currentAsteroid.x + 200 <= mouseX + ufoWidth // right?
    ) {
      endGameLose();
    }

    if (currentAsteroid.y > windowHeight) {
      currentAsteroid.y = -200;
    }
  }

  for (let i = 0; i < charactersArr.length; i++) {
    let currentCharacter = charactersArr[i];

    image(
      currentCharacter.img,
      currentCharacter.x,
      currentCharacter.y,
      characterWidth,
      characterHeight
    );
    currentCharacter.y += 5;

    if (
      currentCharacter.y + 220 <= mouseY + ufoHeight  &&
      currentCharacter.y + characterHeight >= mouseY &&
      currentCharacter.x + characterWidth  >= mouseX && // right of UFO
      currentCharacter.x + 175  <= mouseX + ufoWidth //left of UFO
    ) {
      score++;
      currentCharacter.y = -200;
      
      const character = charactersArr.find((char)=>{return char.name===currentCharacter.name})
      character.sound.play()
      
      if (score === 5 ){
        endGameWin();
      }
    }

    if (currentCharacter.y > windowHeight) {
      currentCharacter.y = -100;
    }
  }
}

function endGameLose() {
  backgroundMusic.pause();
  loseSound.play();
  gameIntro.style.display = "none";
  gamePlay.style.display = "none";
  gameOverLose.style.display = "flex";
  gameOverWin.style.display = "none";
  noLoop();
}

function endGameWin() {
  backgroundMusic.pause();
  winSound.play();
  gameIntro.style.display = "none";
  gamePlay.style.display = "none";
  gameOverWin.style.display = "flex";
  gameOverLose.style.display = "none";
  noLoop();
}

window.addEventListener("load", () => {
  
  gamePlay.style.display = "none";
  gameOverWin.style.display = "none";
  gameOverLose.style.display = "none";
  noLoop();
});

startBtn.addEventListener("click", () => {
  backgroundMusic.play();
  gameIntro.style.display = "none";
  gamePlay.style.display = "flex";
  gameOverWin.style.display = "none";
  gameOverLose.style.display = "none";
  loop();
});

restartBtnWin.addEventListener("click", () => {
  backgroundMusic.play();
  gameIntro.style.display = "none";
  gamePlay.style.display = "flex";
  gameOverWin.style.display = "none";
  gameOverLose.style.display = "none";


  gameIsOver = false;
  score = 0;
  
  reset()
  
  loop();
});

restartBtnLose.addEventListener("click", () => {
  backgroundMusic.play();
  gameIntro.style.display = "none";
  gamePlay.style.display = "flex";
  gameOverWin.style.display = "none";
  gameOverLose.style.display = "none";

  gameIsOver = false;
  score = 0;
  reset()

  //ufo = mouseX , mouseY
  
  loop();
});
