const minimumEffortPath = (heights) => {
  const isValid = (row, col, seen) =>
    row >= 0 && row < m && col >= 0 && col < n && !seen[row][col];

  const check = (effort) => {
    const seen = Array.from({ length: m }, () => new Array(n).fill(false));
    seen[0][0] = true;

    const stack = [[0, 0]];
    while (stack.length) {
      let [row, col] = stack.pop();
      if (row === m - 1 && col === n - 1) return true;
      for (let [dy, dx] of directions) {
        let newRow = row + dy;
        let newCol = col + dx;
        if (
          isValid(newRow, newCol, seen) &&
          Math.abs(heights[newRow][newCol] - heights[row][col]) <= effort
        ) {
          seen[newRow][newCol] = true;
          stack.push([newRow, newCol]);
        }
      }
    }

    return false;
  };

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const m = heights.length;
  const n = heights[0].length;

  let left = 0;
  let right = 0;
  for (const row of heights) {
    right = Math.max(right, ...row);
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// Time complexity: O(m*n*log(k)),
// where k is the maximum possible height in the grid.
// Space complexity: O(m*n) for the seen array
// and the stack in the worst case.
