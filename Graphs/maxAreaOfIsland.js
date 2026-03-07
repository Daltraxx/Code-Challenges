/*You are given an m x n binary matrix grid. 
An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0. */

const maxAreaOfIsland = (grid) => {
  const height = grid.length;
  const width = grid[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const seen = Array.from({ length: height }, () => Array(width).fill(false));

  const isValid = (nextRow, nextCol) => {
    return (
      nextRow >= 0 &&
      nextRow < height &&
      nextCol >= 0 &&
      nextCol < width &&
      grid[nextRow][nextCol] === 1 &&
      !seen[nextRow][nextCol]
    );
  };

  const dfs = (row, col) => {
    let islandArea = 1;
    const stack = [[row, col]];

    while (stack.length) {
      const [nodeRow, nodeCol] = stack.pop();

      for (let [dy, dx] of directions) {
        const nextRow = nodeRow + dy;
        const nextCol = nodeCol + dx;

        if (isValid(nextRow, nextCol)) {
          seen[nextRow][nextCol] = true;
          islandArea++;
          stack.push([nextRow, nextCol]);
        }
      }
    }

    return islandArea;
  };

  let maxArea = 0;

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] === 1 && !seen[row][col]) {
        seen[row][col] = true;
        maxArea = Math.max(dfs(row, col), maxArea);
      }
    }
  }

  return maxArea;
};

// Time Complexity: O(m * n) where m is the number of rows and n is the number of columns in the grid. 
// In the worst case, we may have to visit every cell in the grid.
// Space Complexity: O(m * n) in the worst case, 
// where m is the number of rows and n is the number of columns in the grid. 
// This occurs when the entire grid is land (1's), 
// and we have to store all cells in the stack due to iteration. 
// Additionally, we use O(m * n) space for the seen array to keep track of visited cells.