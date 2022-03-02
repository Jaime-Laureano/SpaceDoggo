let gameIsOver = false;
let score = 0;

let gameIntro = document.querySelector(".game-intro");
let gamePlay = document.querySelector("#game-play");
let gameOverWin = document.querySelector(".win");
let gameOverLose = document.querySelector(".lose");

let screenWidth;

//// buttons ////

let startBtn = document.querySelector("#start-button");
let restartBtn = document.querySelector("#restart-button");

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

let asteroidArr = [
  { x: Math.floor(Math.random() * 1000), y: -200 },
  // { x: Math.floor(Math.random() * 1000), y: -400 },
  // { x: Math.floor(Math.random() * 1000), y: -600 },
  // { x: Math.floor(Math.random() * 1000), y: -800 },
  // { x: Math.floor(Math.random() * 1000), y: -1000 },
  // { x: Math.floor(Math.random() * 1000), y: -1200 },
  // { x: Math.floor(Math.random() * 1000), y: -1400 },
  // { x: Math.floor(Math.random() * 1000), y: -1600 },
];

let charactersArr = [];

function preload() {
  bg = loadImage("../images/Space-Background.jpg");
  ufo = loadImage("../images/UFO.png");
  asteroid = loadImage("../images/asteroid1.png");
  rick = loadImage("../images/Rick.png");
  morty = loadImage("../images/Morty.png");
  jerry = loadImage("../images/Jerry.png");
  squanchy = loadImage("../images/squanchy.png");
  meeseeks = loadImage("../images/Mr. Meeseeks.png");
  picklerick = loadImage("../images/Pickle-Rick.png");
  snuffles = loadImage("../images/Snuffles.png");
  mrPB = loadImage("../images/Mr PB.png");
  lincoler = loadImage("../images/Abrodolph Lincoler.png");

  charactersArr = [
    { x: Math.floor(Math.random() * 1000), y: -2000, img: rick },
    // { x: Math.floor(Math.random() * 1000), y: -4000, img: morty },
    // { x: Math.floor(Math.random() * 1000), y: -6000, img: jerry },
    // { x: Math.floor(Math.random() * 1000), y: -7000, img: squanchy },
    // { x: Math.floor(Math.random() * 1000), y: -6500, img: meeseeks },
    // { x: Math.floor(Math.random() * 1000), y: -8000, img: picklerick },
    // { x: Math.floor(Math.random() * 1000), y: -3000, img: snuffles },
    // { x: Math.floor(Math.random() * 1000), y: -2750, img: mrPB },
    // { x: Math.floor(Math.random() * 1000), y: -9000, img: lincoler },
  ];
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
    currentAsteroid.y += 5;

    if (
      currentAsteroid.y <= mouseY + ufoHeight &&
      currentAsteroid.y + asteroidHeight >= mouseY &&
      currentAsteroid.x + asteroidWidth - 10 >= mouseX &&
      currentAsteroid.x + 150 <= mouseX + ufoWidth
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
      currentCharacter.y <= mouseY + ufoHeight &&
      currentCharacter.y + characterHeight >= mouseY &&
      currentCharacter.x + characterWidth - 50 >= mouseX &&
      currentCharacter.x + 50 <= mouseX + ufoWidth
    ) {
      score++;
      currentCharacter.y = -200;
      if (score === 5 ){
        endGameWin();
      }
    }

    if (currentCharacter.y > windowHeight) {
      currentCharacter.y = -200;
    }
  }
}

function endGameLose() {
  gameIntro.style.display = "none";
  gamePlay.style.display = "none";
  gameOverLose.style.display = "flex";
  gameOverWin.style.display = "none";
  noLoop();
}

function endGameWin() {
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
  gameIntro.style.display = "none";
  gamePlay.style.display = "flex";
  gameOverWin.style.display = "none";
  gameOverLose.style.display = "none";
  loop();
});

restartBtn.addEventListener("click", () => {
  gameIntro.style.display = "none";
  gamePlay.style.display = "flex";
  gameOverWin.style.display = "none";
  gameOverLose.style.display = "none";

  gameIsOver = false;
  score = 0;
  asteroidArr = [
    { x: Math.floor(Math.random() * 1000), y: -200 },
    // { x: Math.floor(Math.random() * 1000), y: -400 },
    // { x: Math.floor(Math.random() * 1000), y: -600 },
    // { x: Math.floor(Math.random() * 1000), y: -800 },
    // { x: Math.floor(Math.random() * 1000), y: -900 },
    // { x: Math.floor(Math.random() * 1000), y: -1100 },
    // { x: Math.floor(Math.random() * 1000), y: -1200 },
    // { x: Math.floor(Math.random() * 1000), y: -1300 },
  ];
  charactersArr = [
    { x: Math.floor(Math.random() * 1000), y: -2000, img: rick },
    // { x: Math.floor(Math.random() * 1000), y: -4000, img: morty },
    // { x: Math.floor(Math.random() * 1000), y: -6000, img: jerry },
    // { x: Math.floor(Math.random() * 1000), y: -7000, img: squanchy },
    // { x: Math.floor(Math.random() * 1000), y: -6500, img: meeseeks },
    // { x: Math.floor(Math.random() * 1000), y: -8000, img: picklerick },
    // { x: Math.floor(Math.random() * 1000), y: -3000, img: snuffles },
    // { x: Math.floor(Math.random() * 1000), y: -2750, img: mrPB },
    // { x: Math.floor(Math.random() * 1000), y: -9000, img: lincoler },
  ];

  ufo = mouseX , mouseY

  loop();
});
