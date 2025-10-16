const totalNQueens = (n) => {
  const attackedCols = new Set();
  const attackedDiagonals = new Set();
  const attackedAntiDiagonals = new Set();

  const isSafe = (row, col) => {
    return (
      !attackedCols.has(col) &&
      !attackedDiagonals.has(row - col) &&
      !attackedAntiDiagonals.has(row + col)
    );
  };

  const setPiece = (row, col) => {
    attackedCols.add(col);
    attackedDiagonals.add(row - col);
    attackedAntiDiagonals.add(row + col);
  };

  const removePiece = (row, col) => {
    attackedCols.delete(col);
    attackedDiagonals.delete(row - col);
    attackedAntiDiagonals.delete(row + col);
  };

  let solutionCount = 0;

  const backtrack = (row) => {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        setPiece(row, col);
        backtrack(row + 1);
        removePiece(row, col);
      }
    }
  };

  backtrack(0);
  return solutionCount;
};

// Time O(n!)
// Space O(n)

const n = 4;
console.log(totalNQueens(n));
