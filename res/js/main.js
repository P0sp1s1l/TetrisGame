import { tetrominoShape } from "./shape.js";
import { Tetromino } from "./Tetromino.js";
import { widthOfArena, heightOfArena, bottom } from "./config.js";

//LOGIC OF THE GAME

let collisionOfBlocks = false; //boolean for collisions between tetromino
var variation = [];
const start = document.getElementById("start");
var shapesToRedraw = []; //array that stores the block that already landed
let gameStarted = false;
let gameIsOver = false;
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
  variation = randomizer;
  tetrominoShape[randomizer].forEach((row) => {
    run.shape.push([...row]);
  });
  return run;
}
//starts the game loop
function runGame() {
  if (!gameIsOver) {
    
  
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
    checkArena();
  }
}
}

//redraws current shape in the new array
function redrawShapes() {
  if (shapesToRedraw !== null) {
    shapesToRedraw.forEach((shapeToRedraw) => {
  
     /* if (checkArena() !== -1) {
        //move down shapes above this index (i)
        let shapeIndex = shapeToRedraw.shape.y
        if(shapeIndex < checkArena())
        shapeToRedraw.shape.y = shapeIndex + 1
      }
*/
      shapeToRedraw.draw();
    });
  }
}
let scoreDefault = 0;




function checkArena() {
  const score = document.getElementById('scoreNumber');
  //for(let i = 1; i < 26; i++ ){
    //console.log(arena[52][i]);
  //}
  //console.log("-------------------------------------------");
  //console.log("works");
   for (let i = 0; i < arena.length; i++) {
                             //length of arena is 26 
     for (let index = 1; index < arena[i].length-2; index++) {
       if (arena[i][index] == 0) {
         break;
       }
       //last index of width
       if (index == arena[i].length - 3) {
        console.log("DELETE ROW: " + i);
        scoreDefault += 100;
       }
   }
 }
 //for placing block
 if (!gameIsOver) {
  scoreDefault += 100;
 score.textContent = scoreDefault;
 }
 
 return -1;
}


//Collision between shapes

function collisionBetween(currentShape) {
  let length = currentShape.shape.length;
  if (currentShape.y + length <= bottom) {
    if (variation == "O") {
      if (
        currentShape.y + length >= bottom ||
        arena[currentShape.y + length][currentShape.x + 1] !== 0 ||
        arena[currentShape.y + length][currentShape.x] !== 0
      ) {
        collisionOfBlocks = true;
      }
    } else {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < currentShape.shape[i].length; j++) {
          if (currentShape.shape[i][j] !== 0) {
            const x = currentShape.x + j;
            const y = currentShape.y + i + 1; // increase y by 1

            if (
              x < 0 ||
              x >= widthOfArena ||
              y < 0 ||
              y >= bottom ||
              arena[y][x] !== 0
            ) {
              collisionOfBlocks = true;

              // check if the shape colided with bottom of arena
              if (currentShape.y + length - 1 == heightOfArena - 1) {
                currentShape.y -= 1; //move the shape up by 1
              }   
              if (currentShape.y <= 1) {
                // stop the game loop
                cancelAnimationFrame(requestAnimationFrame(runGame));
                // show game over message if it hasn't been shown before
                if (!gameIsOver) {
                  const message = document.createElement("div");
                  const backg = document.createElement("div");
                  message.innerText = `Game Over. \nscore:${scoreDefault} \n Click to restart.`;
                  message.style.textAlign = "center";
                  message.style.background = "black";
                  message.style.fontSize = "30px";
                  message.style.fontWeight = "bold";
                  message.style.color = " #E6A942";
                  message.style.position = "absolute";
                  message.style.marginTop = "200px";
                  message.style.marginLeft = "600px";
                  message.style.height = "500px"
                  document.body.appendChild(message);
                  // allow user to restart the game by clicking on the message
                  message.onclick = function () {
                    location.reload();
                  };
                  gameIsOver = true;
                }
              }    
            }
            
          }
        }
      }
    }
  } else {
    collisionOfBlocks = true;
  }

  const borderRight = currentShape.x + currentShape.shape[0].length - 1;
  if (borderRight >= 26) {
    currentShape.x = 26 - currentShape.shape[0].length;
  }

  const borderLeft = currentShape.x;
  if (borderLeft <= 1) {
    currentShape.x = 1;
  }

  return collisionOfBlocks;
}

// Arrow keys

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