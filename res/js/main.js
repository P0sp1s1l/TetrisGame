import { tetrominoShape } from "./shape.js";
import { Tetromino } from "./Tetromino.js";
import { widthOfArena, heightOfArena } from "./config.js";

//LOGIC OF THE GAME

let collisionOfBlocks = false; //boolean for collisions between tetromino
var variation = [];
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
  let run = new Tetromino(12, 0, [], true);
  const typesOfTetromino = Object.keys(tetrominoShape);
  const randomizer =
    typesOfTetromino[Math.floor(Math.random() * typesOfTetromino.length)];
    variation = randomizer
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
  
  if (currentShape.y + currentShape.shape.length <= heightOfArena) {
  
    //ok completed
    if (variation == "O") {
      if (
        arena[currentShape.y +currentShape.shape.length][currentShape.x +1] !== 0|| arena[currentShape.y +currentShape.shape.length][currentShape.x ] !== 0) {
        collisionOfBlocks = true;
        return collisionOfBlocks;
      }
  }

  //ok completed
  if (variation == "T") {
    if (
                   //middle  top and down                                              left side                                  right side
      arena[currentShape.y +currentShape.shape.length][currentShape.x +1] !== 0|| arena[currentShape.y +2][currentShape.x ] !== 0||arena[currentShape.y +2][currentShape.x+2 ] !== 0) {
      collisionOfBlocks = true;
      return collisionOfBlocks;
    }
  }

  //ok completed
  if (variation == "I") {
    if (
      arena[currentShape.y + currentShape.shape.length][currentShape.x + 1] !== 0) {
      collisionOfBlocks = true;
      return collisionOfBlocks;
    }
  }

  
  if (variation == "J") {
    if (
            //middle and top                                           left side                                            right side
      arena[currentShape.y + 2][currentShape.x + 1] !== 0||arena[currentShape.y + 2][currentShape.x ] !== 0||arena[currentShape.y +currentShape.shape.length ][currentShape.x + 2] !== 0) {
      collisionOfBlocks = true;
      return collisionOfBlocks;
    }
  }

  
  if (variation == "L") {
     if (
            //middle and top                                           left side                                            right side
      arena[currentShape.y + 2][currentShape.x + 1] !== 0||arena[currentShape.y + currentShape.shape.length][currentShape.x ] !== 0||arena[currentShape.y+2  ][currentShape.x + 2] !== 0) {
      collisionOfBlocks = true;
      return collisionOfBlocks;
    }
  }

  
  if (variation == "S") {
    if (
            //middle and top                                                                       left side                                                                right side
      arena[currentShape.y + currentShape.shape.length][currentShape.x + 1] !== 0||arena[currentShape.y + currentShape.shape.length][currentShape.x ] !== 0||arena[currentShape.y + 2][currentShape.x +2] !== 0) {
      collisionOfBlocks = true;
      return collisionOfBlocks;
    }
  }

  
  if (variation == "Z") {
    if (
      //middle and top                                                                       left side                                                                right side
      arena[currentShape.y + currentShape.shape.length][currentShape.x + 1] !== 0||arena[currentShape.y + 2][currentShape.x ] !== 0||arena[currentShape.y + currentShape.shape.length][currentShape.x +2] !== 0) {
      collisionOfBlocks = true;
      return collisionOfBlocks;
    }
  }
}
  //console.log(currentShape.x)
  //console.log(currentShape.y)
  // I
 /* if (currentShape.y + currentShape.shape.length < heightOfArena) {
    if (
      arena[currentShape.y + currentShape.shape.length][currentShape.x + 1] !== 0) {
      console.log(currentShape.y + currentShape.shape.length);
      collisionOfBlocks = true;
      //console.log(currentShape.shape.length)
      //console.log("XXXX")
      return collisionOfBlocks;
    }
    else if (arena[currentShape.y +2 ][currentShape.x ] !== 0 || arena[currentShape.y +2 ][currentShape.x + 1] !== 0 || arena[currentShape.y +2 ][currentShape.x + 2] !== 0 || arena[currentShape.y +2 ][currentShape.x + 3] !== 0) {

      console.log(currentShape.y + currentShape.shape.length);
      collisionOfBlocks = true;
      //console.log(currentShape.shape.length)
      //console.log("XXXX")
      return collisionOfBlocks;
    }

  }
  return collisionOfBlocks;*/
  /*
  const widthOfShape = currentShape.shape[0].length - 1;
  if (shapesToRedraw !== null) {
    shapesToRedraw.forEach((shapeToRedraw) => {
      if (
        currentShape.y + currentShape.shape.length >= shapeToRedraw.y &&
        currentShape.x + widthOfShape >= shapeToRedraw.x &&
        currentShape.x <= shapeToRedraw.x + shapeToRedraw.shape[0].length 
      ) {
        collisionOfBlocks = true;
        return collisionOfBlocks;
      }
    });
  }
  return collisionOfBlocks;
  */
}

let isPressed = {}; //boolean for check if the arrow key is pressed
document.addEventListener("keydown", (e) => {
  isPressed[e.code] = true;

  if (e.code === "ArrowDown") {
    run.down();
  }
  if (e.code === "ArrowLeft") {
    run.left();
  }
  if (e.code === "ArrowRight") {
    run.right();
  }
  if (e.code === "ArrowUp") {
    run.rotate();
  }
});
document.addEventListener("keyup", (e) => {
  isPressed[e.code] = false;
});
// updates array in console
setInterval(() => {
  //console.table(arena);
}, 5000);

export { arena };
export { redrawShapes };
export { getTetromino };