/*You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) 
to the lower right corner (m - 1, n - 1) 
given that you can eliminate at most k obstacles. 

If it is not possible to find such walk return -1.*/

const shortestPath = (grid, k) => {
  const isValid = (row, col) => {
    return row >= 0 && row < height && col >= 0 && col < width;
  };

  const height = grid.length;
  const width = grid[0].length;

  const seen = Array.from({ length: height }, () => new Array(width).fill(-1));
  seen[0][0] = k;

  // Queue will hold arrays of the form [row, col, remainingRemovals]
  let queue = [[0, 0, k]];
  let distance = 0;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const nextQueue = [];

    for (const [row, col, remainingRemovals] of queue) {
      // Return current distance if we've reached the target
      if (row === height - 1 && col === width - 1) {
        return distance;
      }

      for (let [yMovement, xMovement] of directions) {
        const nextRow = row + yMovement;
        const nextCol = col + xMovement;

        if (isValid(nextRow, nextCol)) {
          const newRemaining = remainingRemovals - grid[nextRow][nextCol];
          if (newRemaining > seen[nextRow][nextCol]) {
              seen[nextRow][nextCol] = newRemaining;
              nextQueue.push([nextRow, nextCol, newRemaining]);
          }
        }
      }
    }

    distance++;
    queue = nextQueue;
  }

  return -1;
};

// Time Complexity: O(m * n * k) where m and n are the dimensions of the grid,
// and k is the number of obstacles we can eliminate,
// as we may need to visit each cell with different remaining obstacle eliminations.
// Space Complexity: O(m * n * k) for the queue in the worst case.