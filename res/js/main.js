import { tetrominoShape } from "./shape.js";
import { Tetromino } from "./Tetromino.js";
import { widthOfArena, heightOfArena } from "./config.js";

//LOGIC OF THE GAME

let collisionOfBlocks = false; //boolean for collisions between tetromino
const start = document.getElementById("start");
var shapesToRedraw = []; //array that stores the block that already landed
let gameStarted = false;
let run = getTetromino();

//start button
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

playButton.onclick = function () {
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

//ARENA (in console)
function printArray(width, height) {
  let board = [];
  height -= 2;

  //while height is not 0
  while (height--) {
    board.push(new Array(width).fill(0));
  }
  return board;
}
let arena = printArray(widthOfArena, heightOfArena);

//creates first tetromino object
function getTetromino() {
  let run = new Tetromino(12, 0, [], true, true, true);
  const typesOfTetromino = Object.keys(tetrominoShape);
  const randomizer =
    typesOfTetromino[Math.floor(Math.random() * typesOfTetromino.length)];
  tetrominoShape[randomizer].forEach((row) => {
    run.shape.push([...row]);
  });
  return run;
}

//starts the game loop
function runGame() {
  requestAnimationFrame(runGame);

  //checks if the game has started or not
  if (gameStarted === true) {
    run.fall();
    gameStarted = false;
  }

  //collision between shapes
  if (collisionBetween(run)) {
    shapesToRedraw.push(run);
    run.isFalling = false;

    run = getTetromino();
    run.fall();
    collisionOfBlocks = false;
  }

  //collision between shape and bottom
  if (run.collisionFall()) {
    shapesToRedraw.push(run);
    run = getTetromino();
    run.fall();
  }
}

//redraws current shape in the new array
function redrawShapes() {
  if (shapesToRedraw !== null) {
    shapesToRedraw.forEach((shapeToRedraw) => {
      shapeToRedraw.draw();
    });
  }
}

//function for collision between tetromino shapes
function collisionBetween(currentShape) {
  const widthOfShape = currentShape.shape[0].length - 1;
  if (shapesToRedraw !== null) {
    shapesToRedraw.forEach((shapeToRedraw) => {
      if (
        currentShape.y + currentShape.shape.length >= shapeToRedraw.y &&
        currentShape.x + widthOfShape >= shapeToRedraw.x &&
        currentShape.x <= shapeToRedraw.x + shapeToRedraw.shape[0].length - 1
      ) {
        collisionOfBlocks = true;
        return collisionOfBlocks;
      }
    });
  }
  return collisionOfBlocks;
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
  }
});

// updates array in console 
setInterval(() => {
  console.table(arena);
}, 5000);

export { arena };
export { redrawShapes };
