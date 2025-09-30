const minimumEffortPath = (heights) => {
  const check = (effort) => {
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    const m = heights.length;
    const n = heights[0].length;

    const isValid = (row, col) => row >= 0 && row < m && col >= 0 && col < n;
    const isAcceptableEffort = (prevNum, nextNum) =>
      Math.abs(prevNum - nextNum) <= effort;

    const seen = [];
    for (let row = 0; row < m; row++) seen.push(new Array(n).fill(false));
    seen[0][0] = true;

    const stack = [[0, 0]];

    while (stack.length) {
      let [row, col] = stack.pop();
      for (let [x, y] of directions) {
        let newRow = row + y;
        let newCol = col + x;
        if (
          isValid(newRow, newCol) &&
          !seen[newRow][newCol] &&
          isAcceptableEffort(heights[row][col], heights[newRow][newCol])
        ) {
          if (newRow === m - 1 && newCol === n - 1) return true;
          seen[newRow][newCol] = true;
          stack.push([newRow, newCol]);
        }
      }
    }

    return false;
  };

  let left = 0,
    right = 0;
  for (let row of heights) {
    for (let num of row) right = Math.max(right, num);
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

// Time complexity O(mnlogk)
// Space O(mn)

const heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];

console.log(minimumEffortPath(heights));
