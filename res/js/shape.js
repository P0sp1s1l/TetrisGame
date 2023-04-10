// definition of shapes for each tetromino
const tetrominoShape = {
  //O
  O: [
    [1, 1, 0],
    [1, 1, 0],
  ],

  //T
  T: [
    [2, 2, 2],
    [0, 2, 0],
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
  ],

  //L
  L: [
    [5, 5, 5],
    [5, 0, 0],
  ],

  //S
  S: [
    [0, 6, 6],
    [6, 6, 0],
  ],

  //Z
  Z: [
    [7, 7, 0],
    [0, 7, 7],
  ],
};
export { tetrominoShape };