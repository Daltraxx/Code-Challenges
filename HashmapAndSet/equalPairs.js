const equalPairs = (grid) => {
  const getKey = (numArr) => {
    return numArr.join("#");
  };

  const n = grid.length;
  const rowFreqs = new Map();
  for (const row of grid) {
    const rowKey = getKey(row);
    rowFreqs.set(rowKey, (rowFreqs.get(rowKey) || 0) + 1);
  }

  let pairCount = 0;
  for (let col = 0; col < n; col++) {
    const currCol = new Array(n);
    for (let row = 0; row < n; row++) {
      currCol[row] = grid[row][col];
    }
    const colKey = getKey(currCol);
    pairCount += rowFreqs.get(colKey) || 0;
  }

  return pairCount;
};

// Time Complexity: O(n^2) where n is the number of rows (or columns) in the grid. 
// We iterate through each row and column once, 
// and creating the key for each row and column takes O(n) time.
// Space Complexity: O(n) in the worst case, if all rows are unique.