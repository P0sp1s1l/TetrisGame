const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

blockSize=10;
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


  tetrominoShape[shape].forEach(([x, y]) => {
    ctx.fillRect((x*blockSize), (y*blockSize), blockSize, blockSize);
  });
}

//Time interval so tetromino can fall 
function update(time = 0) { 
  colorizeTetromino("O");
  requestAnimationFrame(update);
  console.log(time);
  let fall = time;
  time += offset;
  if(time>0){
   console.log("successfull");
}
}
update();
