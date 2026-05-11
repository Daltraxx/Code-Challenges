const exist = (board, word) => {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const isValid = (row, col, nextChar) =>
    row >= 0 &&
    row < height &&
    col >= 0 &&
    col < width &&
    !seen[row][col] &&
    board[row][col] === nextChar;

  const backtrack = (row, col, i) => {
    if (i === word.length) {
      return true;
    }
    seen[row][col] = true;
    const nextChar = word[i];

    for (let [dy, dx] of directions) {
      const newRow = row + dy;
      const newCol = col + dx;
      if (isValid(newRow, newCol, nextChar)) {
        if (backtrack(newRow, newCol, i + 1)) return true;
      }
    }

    seen[row][col] = false;
    return false;
  };

  const height = board.length;
  const width = board[0].length;
  const seen = Array.from({ length: height }, () => Array(width).fill(false));

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (board[row][col] === word[0]) {
        if (backtrack(row, col, 1)) return true;
      }
    }
  }

  return false;
};

// Time Complexity: O(M * N * 3^L) where M is the number of rows,
// N is the number of columns,
// and L is the length of the word.
// Space Complexity: O(M * N) for the seen matrix and
// O(L) for the recursion stack.
