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
    const isExit = (row, col) => {
        return row === 0 || row === height - 1 || col === 0 || col === width - 1;
    }

    const isValid = (row, col) => {
        return row >= 0 && row < height && col >= 0 && col < width && maze[row][col] === '.';
    }

    const height = maze.length, width = maze[0].length;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let distance = 0;
    maze[entrance[0]][entrance[1]] = '+';
    let queue = [entrance];

    while (queue.length) {
        const nextQueue = [];
        distance++;
        
        for (let [row, col] of queue) {
            for (let [dx, dy] of directions) {
                const nextRow = row + dy;
                const nextCol = col + dx;

                if (isValid(nextRow, nextCol)) {
                    if (isExit(nextRow, nextCol)) {
                        return distance;
                    }
                    maze[nextRow][nextCol] = '+';
                    nextQueue.push([nextRow, nextCol]);
                }
            }
        }
        queue = nextQueue;
    }

    return -1;
}