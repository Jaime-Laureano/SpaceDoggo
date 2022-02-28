
let gameover=false;

let gameIntro = document.querySelector(".game-intro");
let gamePlay = document.querySelector("#game-play");
let gameOver = document.querySelector(".game-over");

let screenWidth;


//// buttons ////

let startBtn = document.querySelector("#start-button");


//// character variables ////

let ufoX=525;
let ufoY=300;
let ufoHeight= 300
let ufoWidth = 300

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
    {x: Math.floor(Math.random()* 1000 ), y: -200},
    {x: Math.floor(Math.random()* 1000 ), y: -400},
    {x: Math.floor(Math.random()* 1000 ), y: -600},
    {x: Math.floor(Math.random()* 1000 ), y: -800},
    {x: Math.floor(Math.random()* 1000 ), y: -900},
    {x: Math.floor(Math.random()* 1000 ), y: -1100},
    {x: Math.floor(Math.random()* 1000 ), y: -1200},
    {x: Math.floor(Math.random()* 1000 ), y: -1300},

];

let charactersArr = [ ]






function preload() {
    bg = loadImage('../images/Space-Background.jpg');
    ufo = loadImage('../images/UFO.png');
    asteroid = loadImage('../images/asteroid1.png');
    rick = loadImage('../images/Rick.png');
    morty = loadImage('../images/Morty.png');
    jerry = loadImage('../images/Jerry.png');
    squanchy = loadImage('../images/squanchy.png');
    meeseeks = loadImage('../images/Mr. Meeseeks.png');
    picklerick = loadImage('../images/Pickle-Rick.png');
    snuffles = loadImage('../images/Snuffles.png');
    mrPB = loadImage('../images/Mr PB.png');
    lincoler = loadImage('../images/Abrodolph Lincoler.png');

    charactersArr = [
        {x: Math.floor(Math.random()* 1000 ), y: -2000, img:rick},
        {x: Math.floor(Math.random()* 1000 ), y: -4000, img:morty},
        {x: Math.floor(Math.random()* 1000 ), y: -6000, img:jerry},
        {x: Math.floor(Math.random()* 1000 ), y: -7000, img:squanchy},
        {x: Math.floor(Math.random()* 1000 ), y: -6500, img:meeseeks},
        {x: Math.floor(Math.random()* 1000 ), y: -8000, img:picklerick},
        {x: Math.floor(Math.random()* 1000 ), y: -3000, img:snuffles},
        {x: Math.floor(Math.random()* 1000 ), y: -2750, img:mrPB},
        {x: Math.floor(Math.random()* 1000 ), y: -9000, img:lincoler},
    
     ];


}



function setup() {
    
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("game-play");  

    console.log (asteroidArr)

  }
  
function draw() {
    background(bg); 
    image (ufo, ufoX, ufoY, ufoWidth, ufoHeight);


    for (let i =0; i < asteroidArr.length; i++) {
        let currentAsteroid = asteroidArr[i]
        image (asteroid, currentAsteroid.x, currentAsteroid.y, 250, 250)
        currentAsteroid.y += 10
    if ( currentAsteroid.y > windowHeight) {
        currentAsteroid.y  = -200
    }    
    }

    for (let i =0; i < charactersArr.length; i++) {
        let currentCharacter = charactersArr[i]
        console.log(currentCharacter);
        image (currentCharacter.img, currentCharacter.x, currentCharacter.y, 150, 150)
        currentCharacter.y += 7
    if ( currentCharacter.y > windowHeight) {
        currentCharacter.y  = -200
    }
}

    





}

function keyPressed() {
    if (keyCode === LEFT_ARROW){
      ufoX += (-15)
    } else if (keyCode === RIGHT_ARROW){
      ufoX += (15)
      } else if (keyCode === UP_ARROW){
        ufoY += (-15)
      } else if (keyCode === DOWN_ARROW){
        ufoY += (15)
        }
    }

function gameButtons() {
    gameIntro.style.display = "none";
    gamePlay.style.display = "none";
    gameOver.style.display = "flex";
    noLoop();
  }

  window.addEventListener("load", () => {
    gamePlay.style.display = "none";
    gameOver.style.display = "none";
    

    startBtn.addEventListener("click", () => {
      gameIntro.style.display = "none";
      gamePlay.style.display = "flex";
      gameOver.style.display = "none";
    });
});

