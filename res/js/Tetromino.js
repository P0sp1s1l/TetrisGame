import { canvas, ctx } from "./Canvas.js";
import { arena } from "./main.js";
import {
  bottom,
  cellSize,
  speedOftetromino,
  heightOfArena,
  widthOfArena,
  colorOfSmashBoy,
  colorOfHero,
  colorOfEarl,
  colorOfRicky,
  colorOfCleevland,
  colorOfRhodeIsland,
  colorOfTeewee,
} from "./config.js";
import { rotateShape } from "./shape.js";
import { redrawShapes } from "./main.js";
class Tetromino {
  constructor(x, y, shape, isFalling) {
    this.x = x;
    this.y = y;
    this.shape = shape;
    this.isFalling = isFalling; //if the shape is falling
    
  }

  //checks input of keys

  //functions for each arrow key

  //left arrow key
  left() {
    this.collisionLeft();
    this.clear();
    redrawShapes();
    this.draw();
  }
  //right arrow key
  right() {
    this.collisionRight();
    this.clear();
    redrawShapes();
    this.draw();
  }

  //down arrow key
  down() {
    this.y += 1;
    this.clear();
    redrawShapes();
    this.draw();
  }

  //makes the tetromino fall
  fall() {
    if ( this.isFalling) {
      this.down();
    }
    //sets timeOut and interval for falling
    setTimeout(() => {
      this.fall();
      redrawShapes();
    }, speedOftetromino);
  }

  //rotation function
  rotate() {
    //for smoother rotating
    //requestAnimationFrame(rotateShape);
    this.shape = rotateShape(this.shape);
  }

  //COLLISIONS


  collisionLeft() {
    //left side of canvas
      this.x -= 1;
  }

  collisionRight() {
    //right side of canvas
      this.x += 1;
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
          ctx.fillStyle = colorOfSmashBoy;
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;

          //write the position and "shape" of tetromino in arena(console)
          if (!this.isFalling) arena[shapeY][shapeX] = cell;

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
          ctx.fillStyle = colorOfTeewee;
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          if (!this.isFalling) arena[shapeY][shapeX] = cell;

          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //I

        if (cell === 3) {
          ctx.fillStyle = colorOfHero;
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          if (!this.isFalling) arena[shapeY][shapeX] = cell;

          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //J
        if (cell === 4) {
          ctx.fillStyle = colorOfRicky;
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          if (!this.isFalling) arena[shapeY][shapeX] = cell;

          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //L
        if (cell === 5) {
          ctx.fillStyle = colorOfEarl;
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          if (!this.isFalling) arena[shapeY][shapeX] = cell;

          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //S
        if (cell === 6) {
          ctx.fillStyle = colorOfRhodeIsland;
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          if (!this.isFalling) arena[shapeY][shapeX] = cell;

          ctx.fillRect(
            shapeX * cellSize,
            shapeY * cellSize,
            cellSize,
            cellSize
          );
        }

        //Z
        if (cell === 7) {
          ctx.fillStyle = colorOfCleevland;
          const shapeX = this.x + columnIndex;
          const shapeY = this.y + rowIndex;
          if (!this.isFalling) arena[shapeY][shapeX] = cell;

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
