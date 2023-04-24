import { getTetromino } from "./main";

//Canvas
const nextCanvas = document.getElementById("view");
const nextCtx = nextCanvas.getContext("2d");


  const next = getTetromino();
  nextCtx.clearRect(0, 0, nextCanvas.width, nextCanvas.height);

  next.shape.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      //square
      if (cell === 1) {
        this.square = false;
        ctx.fillStyle = colorOfSmashBoy;
        const shapeX = this.x + columnIndex;
        const shapeY = this.y + rowIndex;

        //write the position and "shape" of tetromino in arena(console)
        if (!this.isFalling) arena[shapeY][shapeX] = cell;

        //fills the cells by x and y position
        nextCtx.fillRect(shapeX * cellSize, shapeY * cellSize, cellSize, cellSize);
      }

      //T
      if (cell === 2) {
        ctx.fillStyle = colorOfTeewee;
        const shapeX = this.x + columnIndex;
        const shapeY = this.y + rowIndex;
        if (!this.isFalling) arena[shapeY][shapeX] = cell;

        nextCtx.fillRect(shapeX * cellSize, shapeY * cellSize, cellSize, cellSize);
      }

      //I

      if (cell === 3) {
        this.line = false;
        ctx.fillStyle = colorOfHero;
        const shapeX = this.x + columnIndex;
        const shapeY = this.y + rowIndex;
        if (!this.isFalling) arena[shapeY][shapeX] = cell;

        nextCtx.fillRect(shapeX * cellSize, shapeY * cellSize, cellSize, cellSize);
      }

      //J
      if (cell === 4) {
        ctx.fillStyle = colorOfRicky;
        const shapeX = this.x + columnIndex;
        const shapeY = this.y + rowIndex;
        if (!this.isFalling) arena[shapeY][shapeX] = cell;

        nextCtx.fillRect(shapeX * cellSize, shapeY * cellSize, cellSize, cellSize);
      }

      //L
      if (cell === 5) {
        nextCtx.fillStyle = colorOfEarl;
        const shapeX = this.x + columnIndex;
        const shapeY = this.y + rowIndex;
        if (!this.isFalling) arena[shapeY][shapeX] = cell;

        nextCtx.fillRect(shapeX * cellSize, shapeY * cellSize, cellSize, cellSize);
      }

      //S
      if (cell === 6) {
        nextCtx.fillStyle = colorOfRhodeIsland;
        const shapeX = this.x + columnIndex;
        const shapeY = this.y + rowIndex;
        if (!this.isFalling) arena[shapeY][shapeX] = cell;

        nextCtx.fillRect(shapeX * cellSize, shapeY * cellSize, cellSize, cellSize);
      }

      //Z
      if (cell === 7) {
        nextCtx.fillStyle = colorOfCleevland;
        const shapeX = this.x + columnIndex;
        const shapeY = this.y + rowIndex;
        if (!this.isFalling) arena[shapeY][shapeX] = cell;

        nextCtx.fillRect(shapeX * cellSize, shapeY * cellSize, cellSize, cellSize);
      }
    });
  });


drawNextTetromino();

export { nextCanvas, nextCtx };
