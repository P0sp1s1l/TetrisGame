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
    playButton.style.background =
      "url('/TetrisGame/res/img/imageOfButton.png') no-repeat";
    playButton.style.backgroundSize = "80px";
  } else {
    soundtrack.pause();
    playButton.style.background =
      "url('/TetrisGame/res/img/imageOfButtonHover.png') no-repeat";
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

  //checks input of keys
  Arrows(event) {
    if (event.type == "keydown") {
      switch (event.keyCode) {
        //left
        case 37: {
          this.left();
          console.log(this.x);
          this.draw();
          break;
        }
      
        //right
        case 39: {
          this.right();
          console.log(this.x);
          this.draw();
          break;
        }

        //down
        case 40: {
          this.fall();
          console.log(this.y);
          this.draw();
          break;
        }
      }
    }
    if (event.type == "keyup") {
      console.log('not triggered');
    }
  }
  left() {
    this.x -= (1)/speedOftetromino;
    this.draw();
  }
  right() {
    this.x += (1)/speedOftetromino;
    this.draw();
  }

  //makes the tetromino fall
  fall() {
    this.y += (1)/speedOftetromino;
    console.log(this.y);
    this.draw();

    //sets timeOut and interval for falling
    setTimeout(() => {
      this.fall();
    }, speedOftetromino);
  }

  //draws each type of tetromino
  draw() {
    document.addEventListener("keydown", (event) => this.Arrows(event));
    document.addEventListener("keyup", (event) => this.Arrows(event));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.shape.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (cell === 1) {
          ctx.fillStyle = "orange";
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }
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
//creates tetromino object
const run = new DrawTetromino(12, -1, []);
//gets ID´s from tetrominoShape
const typesOfTetromino = Object.keys(tetrominoShape);
//randomize tetromino types
const randomizer =
  typesOfTetromino[Math.floor(Math.random() * typesOfTetromino.length)];
tetrominoShape[randomizer].forEach((row) => {
  run.shape.push([...row]);
});
