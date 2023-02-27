//Canvas
const canvas = document.getElementById("canvas"); //takes canvas from index.html body
const ctx = canvas.getContext("2d"); //creates a context(ctx)
canvas.width = 400; //width of canvas
canvas.height = 800; //height of canvas

//Tetris problematic/logic

//start button
const start = document.getElementById("start");
start.onclick = function () {
  soundtrack.play();
  //print function fall, from constructor, to website
  run.fall();
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

//size of 1 cell
cellSize = 15;

//the speed of falling tetromino
let speedOftetromino = 1000;

//Declaration of each shape from tetromino
const tetrominoShape = {
  //O
  O: [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],

  //T
  T: [
    [2, 2, 2],
    [0, 2, 0],
    [0, 0, 0],
  ],

  //I
  I: [
    [0, 3, 0, 0],
    [0, 3, 0, 0],
    [0, 3, 0, 0],
    [0, 3, 0, 0],
  ],

  //J
  J: [
    [4, 4, 4],
    [0, 0, 4],
    [0, 0, 0],
  ],

  //L
  L: [
    [5, 5, 5],
    [5, 0, 0],
    [0, 0, 0],
  ],

  //S
  S: [
    [0, 6, 6],
    [6, 6, 0],
    [0, 0, 0],
  ],

  //Z
  Z: [
    [7, 7, 0],
    [0, 7, 7],
    [0, 0, 0],
  ],
};
//creates object with function fall and draw.
class DrawTetromino {
  constructor(x, y, shape, canvas) {
    this.x = x;
    this.y = y;
    this.shape = shape;
    this.canvas = canvas;
  }

  //method that contorls if button is clicked or released
  ArrowDown = false;

  //checks input of keys
  Arrows(event) {
    switch (event.keyCode) {
      //left
      case 37:
        if (!this.ArrowDown && event.type === "keydown") {
          this.left();
          console.log(this.x);
          this.draw();
          this.ArrowDown = true;
        }

        if (this.ArrowDown && event.type === "keyup") {
          this.ArrowDown = false;
        }
        break;

      //right
      case 39:
        if (!this.ArrowDown && event.type === "keydown") {
          this.right();
          console.log(this.x);
          this.draw();
          this.ArrowDown = true;
        }

        if (this.ArrowDown && event.type === "keyup") {
          this.ArrowDown = false;
        }
        break;

      //down
      case 40:
        if (!this.ArrowDown && event.type === "keydown") {
          this.down();
          console.log(this.y);
          this.draw();
          this.ArrowDown = true;
        }

        if (this.ArrowDown && event.type === "keyup") {
          this.ArrowDown = false;
        }
        break;
    }
  }

  //functions for each arrow key

  //left arrow key
  left() {
    this.x -= 1;
    this.draw();
  }
  //right arrow key
  right() {
    this.x += 1;
    this.draw();
  }

  //down arrow key
  down() {
    this.y += 1;
    this.draw();
  }

  //makes the tetromino fall
  fall() {
    this.down();
    console.log(this.y);
    this.draw();

    //sets timeOut and interval for falling
    setTimeout(() => {
      this.fall();
    }, speedOftetromino);
  }

  //draws each type of tetromino
  draw() {

    //score
    let score = document.getElementById("score");
    if (this.y == 50) {
      let scoreboard = 100;
      score.innerText = `SCORE: ${scoreboard}`;
    }
    //event for detection when the key is down.
    document.addEventListener("keydown", (event) => this.Arrows(event));

    //event for detection when the key is up.
    document.addEventListener("keyup", (event) => this.Arrows(event));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.shape.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        //square
        if (cell === 1) {
          ctx.fillStyle = "orange";
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;

          //fills the cells by x and y position
          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //T
        if (cell === 2) {
          ctx.fillStyle = "purple";
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //I
        if (cell === 3) {
          ctx.fillStyle = "cyan";
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //J
        if (cell === 4) {
          ctx.fillStyle = "red";
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //L
        if (cell === 5) {
          ctx.fillStyle = "blue";
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //S
        if (cell === 6) {
          ctx.fillStyle = "yellow";
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //Z
        if (cell === 7) {
          ctx.fillStyle = "green";
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }
      });
    });
  }
}

//prints array of some width and height
function printArray(width, height) {
  const board = [];

  //while height is not 0
  while (height--) {
    board.push(new Array(width).fill(0));
  }
  return board;
}
const arena = printArray(12, 20);
console.log(arena);

//shows as table
console.table(arena);

//creates tetromino object
const run = new DrawTetromino(12, 0, []);
//gets ID´s from tetrominoShape
const typesOfTetromino = Object.keys(tetrominoShape);
//randomize tetromino types
const randomizer =
  typesOfTetromino[Math.floor(Math.random() * typesOfTetromino.length)];
tetrominoShape[randomizer].forEach((row) => {
  run.shape.push([...row]);
});
