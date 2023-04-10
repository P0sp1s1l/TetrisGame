import { tetrominoShape } from "./shape.js";
import { Tetromino } from "./Tetromino.js";
import { widthOfArena, heightOfArena } from "./config.js";
//Tetris problematic/logic

//BUTTONS

//start button
const start = document.getElementById("start");
var shapesToRedraw = [];
let gameStarted = false;
let run = getTetromino();
start.onclick = function () {
  soundtrack.play();
  gameStarted = true;
  //print function fall, from constructor, to website
  runGame();
};

//restart button
const restart = document.getElementById("restart");
restart.onclick = (event) => {
  location.reload();
};

//soundtrack button
const soundtrack = document.getElementById("sound"); //get sound from index.html
const playButton = document.getElementById("play"); //get play from index.html

//click on "speaker" button and it starts to make a sound
playButton.onclick = function () {
  //if you pause the sound, the background will change
  if (soundtrack.paused) {
    soundtrack.play();
    playButton.style.background = "url('./img/imageOfButton.png') no-repeat";
    playButton.style.backgroundSize = "80px";
  } else {
    soundtrack.pause();
    playButton.style.background =
      "url('./img/imageOfButtonHover.png') no-repeat";
    playButton.style.backgroundSize = "80px";
  }
};

//ARENA

function printArray(width, height) {
  let board = [];

  //while height is not 0
  while (height--) {
    board.push(new Array(width).fill(0));
  }
  return board;
}
let arena = printArray(widthOfArena, heightOfArena);

//creates first tetromino object
function getTetromino() {
  let run = new Tetromino(12, 0, []);
  const typesOfTetromino = Object.keys(tetrominoShape);
  const randomizer =
    typesOfTetromino[Math.floor(Math.random() * typesOfTetromino.length)];
  tetrominoShape[randomizer].forEach((row) => {
    run.shape.push([...row]);
  });
  return run;
}
function runGame() {
  requestAnimationFrame(runGame);

  if (gameStarted === true) {
    run.fall();
    gameStarted = false;
  }

  if (run.collisionFall()) {
    shapesToRedraw.push(run);
    run = getTetromino();
    run.fall();
  }
}
//runGame();

function redrawShapes() {
  if (shapesToRedraw !== null) {
    shapesToRedraw.forEach((shapeToRedraw) => {
      shapeToRedraw.draw();
    });
  }
}

//event for detection when the key is down.
document.addEventListener("keyup", (e) => {
  if (e.code === "ArrowDown") {
    run.down();
  }

  if (e.code === "ArrowLeft") {
    run.left();
  }

  if (e.code === "ArrowRight") {
    run.right();
    console.table(arena);
  }
});

export { arena };
export { redrawShapes };
