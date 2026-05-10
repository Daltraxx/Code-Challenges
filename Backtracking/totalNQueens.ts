const totalNQueens = (n: number): number => {
  const backtrack = (row: number) => {
    if (row === n) {
      return 1;
    }

    let solutions = 0;
    for (let col = 0; col < n; col++) {
      if (!unsafeCols.has(col)) {
        const anti = row + col;
        const diag = row - col;
        if (!unsafeAntis.has(anti) && !unsafeDiags.has(diag)) {
          unsafeCols.add(col);
          unsafeAntis.add(anti);
          unsafeDiags.add(diag);
          solutions += backtrack(row + 1);
          unsafeCols.delete(col);
          unsafeAntis.delete(anti);
          unsafeDiags.delete(diag);
        }
      }
    }

    return solutions;
  };

  const unsafeCols: Set<number> = new Set();
  const unsafeAntis: Set<number> = new Set();
  const unsafeDiags: Set<number> = new Set();
  return backtrack(0);
};

// Time complexity: O(n!) in the worst case,
// because in the first row we have n choices for placing a queen,
// in the second row we have at most n-1 choices
// (since one column is already occupied by the first queen), and so on.
// Space complexity: O(n) for the recursion stack and the sets used to track unsafe positions.
