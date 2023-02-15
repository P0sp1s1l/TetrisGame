const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

blockSize = 10;
let offset = 4;

//declaration of each shape from tetromino
const tetrominoShape = {
  O: [
    [1, 1],
    [1, 1],
  ],

  T: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],

  I: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],

  J: [
    [1, 1, 1],
    [0, 0, 1],
    [0, 0, 0],
  ],

  L: [
    [1, 1, 1],
    [1, 0, 0],
    [0, 0, 0],
  ],

  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],

  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
};

//color for each shape
// - later upgrade to custom images.
function colorizeTetromino(shape) {
  switch (shape) {
    default:
      console.log(`unknown tetromino shape:${shape}`);
      return;

    case "O":
      ctx.fillStyle = "yellow";
      break;

    case "T":
      ctx.fillStyle = "purple";
      break;

    case "I":
      ctx.fillStyle = "cyan";
      break;

    case "J":
      ctx.fillStyle = "orange";
      break;

    case "L":
      ctx.fillStyle = "blue";
      break;

    case "S":
      ctx.fillStyle = "red";
      break;

    case "Z":
      ctx.fillStyle = "green";
      break;
  }
}
class DrawTetromino {
  constructor(x, y, shape) {
    this.x = x;
    this.y = y;
    this.shape = shape;
  }

  fall() {
    this.y += 1;
    this.draw();
    setTimeout(() => {
      this.fall();
    }, 1000);
  }

  draw() {
    this.shape.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (cell === 1) {
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;

          ctx.fillRect(
            shapeX * blockSize,
            shapeY * blockSize,
            blockSize,
            blockSize
          );
        }
      });
    });
  }
}
const testing = new DrawTetromino(5, 5, []);
const typesOfTetromino = Object.keys(tetrominoShape);
const randomizer =
  typesOfTetromino[Math.floor(Math.random() * typesOfTetromino.length)];
tetrominoShape[randomizer].forEach((row) => {
  testing.shape.push([...row]);
});
testing.fall();
update();
