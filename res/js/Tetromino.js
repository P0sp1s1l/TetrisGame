import { canvas, ctx } from "./Canvas.js";
import { arena } from "./main.js";
import {
  bottom,
  cellSize,
  speedOftetromino,
  heightOfArena,
  widthOfArena,
} from "./config.js";
import { redrawShapes } from "./main.js";
class Tetromino {
  constructor(x, y, shape) {
    this.x = x;
    this.y = y;
    this.shape = shape;
  }

  //checks input of keys

  //functions for each arrow key

  //left arrow keycellSize
  left() {
    this.clear();
    redrawShapes();
    this.x -= 1;
    this.draw();
  }
  //right arrow key
  right() {
    this.clear();
    redrawShapes();
    this.x += 1;
    this.draw();
  }

  //down arrow key
  down() {
    this.clear();
    redrawShapes();
    this.y += 1;
    this.draw();
    //console.table(arena);
  }

  //makes the tetromino fall
  fall() {
    console.log(this.shape);
    if (!this.collisionFall()) {
      this.down();
    }
    //this.collisionFall();
    //sets timeOut and interval for falling
    setTimeout(() => {
      this.fall();
      redrawShapes();
    }, speedOftetromino);
  }

  //collisions
  collisionFall() {
    //bottom of canvas
    if (this.y + this.shape.length >= 52) {
      this.y = bottom - this.shape.length;
      return true;
    }
    return false;
  }
  //clears the canvas
  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  //draws each type of tetromino
  draw() {
    this.shape.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        //square
        if (cell === 1) {
          ctx.fillStyle = "orange";
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;

          //write the position and "shape" of tetromino in arena(console)
          arena[shapeY][shapeX] = cell;

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
          arena[shapeY][shapeX] = cell;

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
          arena[shapeY][shapeX] = cell;

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
          arena[shapeY][shapeX] = cell;

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
          arena[shapeY][shapeX] = cell;

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
          arena[shapeY][shapeX] = cell;
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
          arena[shapeY][shapeX] = cell;

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
export { Tetromino };
