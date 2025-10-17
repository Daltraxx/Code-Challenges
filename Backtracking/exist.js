const exist = (board, word) => {
  const height = board.length;
  const width = board[0].length;

  const isValid = (row, col) =>
    row >= 0 && row < height && col >= 0 && col < width;

  const seen = new Array(height);
  for (let row = 0; row < height; row++)
    seen[row] = new Array(width).fill(false);

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const backtrack = (row, col, i) => {
    if (i === word.length) {
      return true;
    }

    for (let [x, y] of directions) {
      const newRow = row + y;
      const newCol = col + x;
      if (
        isValid(newRow, newCol) &&
        !seen[newRow][newCol] &&
        board[newRow][newCol] === word[i]
      ) {
        seen[newRow][newCol] = true;
        if (backtrack(newRow, newCol, i + 1)) return true;
        seen[newRow][newCol] = false;
      }
    }

    return false;
  };

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (board[row][col] === word[0] && backtrack(row, col, 1)) return true;
    }
  }

  return false;
};

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCB";

console.log(exist(board, word));
