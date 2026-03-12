/*You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). 
You are also given the entrance of the maze, 
where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell up, down, left, or right. 
You cannot step into a cell with a wall, and you cannot step outside the maze. 
Your goal is to find the nearest exit from the entrance. 
An exit is defined as an empty cell that is at the border of the maze. 
The entrance does not count as an exit.

Return the number of steps in the shortest path from the entrance to the nearest exit, 
or -1 if no such path exists. */

const nearestExit = (maze, entrance) => {
  const WALL = "+";

  const isExit = (row, col) => {
    return row === 0 || row === height - 1 || col === 0 || col === width - 1;
  };

  const isValid = (row, col) => {
    return (
      row >= 0 &&
      row < height &&
      col >= 0 &&
      col < width &&
      maze[row][col] !== WALL
    );
  };

  const height = maze.length;
  const width = maze[0].length;

  const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const [entranceRow, entranceCol] = entrance;
  maze[entranceRow][entranceCol] = WALL;
  let queue = [[entranceRow, entranceCol]];
  let distance = 0;

  while (queue.length) {
    const nextQueue = [];
    distance++;

    for (let [row, col] of queue) {
      for (let [dy, dx] of DIRECTIONS) {
        const nextRow = row + dy;
        const nextCol = col + dx;

        if (isValid(nextRow, nextCol)) {
          if (isExit(nextRow, nextCol)) {
            return distance;
          }
          maze[nextRow][nextCol] = WALL;
          nextQueue.push([nextRow, nextCol]);
        }
      }
    }
    queue = nextQueue;
  }

  return -1;
};

// Time Complexity: O(m * n) where m is the number of rows and n is the number of columns in the maze.
// Space Complexity: O(m * n) for the queue in the worst case when all cells are empty.
