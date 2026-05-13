const nearestExit = (maze: string[][], entrance: number[]): number => {
  const isValid = (row: number, col: number): boolean => {
    return row >= 0 && row < height && col >= 0 && col < width && maze[row][col] !== "+";
  }
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const height = maze.length;
  const width = maze[0].length;
  let queue = [entrance];
  maze[entrance[0]][entrance[1]] = "+";
  let steps = 0;
  while (queue.length) {
    steps++;
    const nextQueue = [];
    for (const [row, col] of queue) {
      for (const [dy, dx] of directions) {
        const newRow = row + dy;
        const newCol = col + dx;
        if (isValid(newRow, newCol)) {
          if (
            newRow === 0 ||
            newRow === height - 1 ||
            newCol === 0 ||
            newCol === width - 1
          ) {
            return steps;
          }
          maze[newRow][newCol] = "+";
          nextQueue.push([newRow, newCol]);
        }
      }
    }
    queue = nextQueue;
  }

  return -1;
}

// Time complexity: O(m*n) because in the worst case 
// we might have to visit every cell in the maze.
// Space complexity: O(m*n) in the worst case for the queue, 
// if all cells are empty and we have to visit them all.