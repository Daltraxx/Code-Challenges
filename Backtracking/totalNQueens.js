const totalNQueens = (n) => {
  const attackedRows = new Set();
  const attackedCols = new Set();
  const attackedDiagonals = new Set();
  const attackedAntiDiagonals = new Set();

  const isSafe = (row, col) => {
    return (
      !attackedRows.has(row) &&
      !attackedCols.has(col) &&
      !attackedDiagonals.has(row - col) &&
      !attackedAntiDiagonals.has(row + col)
    );
  };

  const setPiece = (row, col) => {
    attackedRows.add(row);
    attackedCols.add(col);
    attackedDiagonals.add(row - col);
    attackedAntiDiagonals.add(row + col);
  };

  const removePiece = (row, col) => {
    attackedRows.delete(row);
    attackedCols.delete(col);
    attackedDiagonals.delete(row - col);
    attackedAntiDiagonals.delete(row + col);
  };

  let solutionCount = 0;

  const backtrack = (row, col) => {
    if ((row = n)) {
      solutionCount++;
      return;
    }

    for (row; row < n; row++) {
      for (col; col < n; col++) {
        if (isSafe(row, col)) {
          setPiece(row, col);
          backtrack(row, col + 1);
          removePiece(row, col);
        }
      }
    }
  };

  backtrack(0, 0);
  return solutionCount;
};

const n = 4;
console.log(totalNQueens(n));