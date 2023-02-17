//Canvas
const canvas = document.getElementById("canvas"); //takes canvas from index.html body
const ctx = canvas.getContext("2d"); //creates a context(ctx)
canvas.width = 400; //width of canvas
canvas.height = 800; //height of canvas

//Tetris problematic/logic

//start button

//restart button
const restart = document.getElementById("restart");
restart.onclick = (event) => {
  location.reload();
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
    //left
    if (event.keyCode === 37) {
      this.x -= 1;
      this.draw();
    }

    //right
    if (event.keyCode === 39) {
      this.x += 1;
      this.draw();
    }

    //down
    if (event.keyCode === 40) {
      this.y += 1;
      this.draw();
    }
  }

  //makes the tetromino fall
  fall() {
    this.y += 1;
    this.draw();

    //sets timeOut and interval for falling
    setTimeout(() => {
      this.fall();
    }, speedOftetromino);
  }

  //draws each type of tetromino
  draw() {
    document.addEventListener("keydown", (event) => this.Arrows(event));
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

//print function fall, from constructor, to website
run.fall();
