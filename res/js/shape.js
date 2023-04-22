// definition of shapes for each tetromino
const tetrominoShape = {
  //O - Smashboy
  O: [
    [1, 1],
    [1, 1],
  ],

  //T - Teewee
  T: [
    [0, 0, 0],
    [2, 2, 2],
    [0, 2, 0],
  ],

  //I - Hero
  I: [
    [0, 3, 0, 0],
    [0, 3, 0, 0],
    [0, 3, 0, 0],
    [0, 3, 0, 0],
  ],

  //J - ricky
  J: [
    [0, 0, 0],
    [4, 4, 4],
    [0, 0, 4],
  ],

  //L - Earl
  L: [
    [0, 0, 0],
    [5, 5, 5],
    [5, 0, 0],
  ],

  //S - Rhode Island
  S: [
    [0, 0, 0],
    [0, 6, 6],
    [6, 6, 0],
  ],

  //Z - Cleevland
  Z: [
    [0, 0, 0],
    [7, 7, 0],
    [0, 7, 7],
  ],
};

// rotates the shapes by 90°
function rotateShape(shape) {
  const length = shape.length;
  const rotated = [];
  for (let i = 0; i < length; i++) {
    rotated.push([]);
    for (let j = 0; j < length; j++) {
      rotated[i].push(shape[length - j - 1][i]);
    }
  }
  return rotated;
}
export { tetrominoShape, rotateShape };
