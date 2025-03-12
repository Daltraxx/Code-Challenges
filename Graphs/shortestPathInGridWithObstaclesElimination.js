/*You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) 
to the lower right corner (m - 1, n - 1) 
given that you can eliminate at most k obstacles. 

If it is not possible to find such walk return -1.*/

class State {
    constructor(row, col, remainingRemovals) {
        this.row = row;
        this.col = col;
        this.remainingRemovals = remainingRemovals;
    }
}

const convertToKey = (row, col) => {
    return `${row} ${col}`;
}

const shortestPath = (grid, k) => {
    const isValid = (row, col) => { 
        return row >= 0 && row < height && col >= 0 && col < width;
    }

    const height = grid.length;
    const width = grid[0].length;

    const seen = new Map();
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            seen.set(convertToKey(row, col), -1);
        }
    }

    seen.set(convertToKey(0, 0), k);

    let queue = [new State(0, 0, k)];
    let distance = 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    while (queue.length) {
        const nextQueue = [];

        for (let i = 0; i < queue.length; i++) {
            const nodeState = queue[i];
            let row = nodeState.row, col = nodeState.col, remainingRemovals = nodeState.remainingRemovals;

            //return current distance if we've reached the target
            if (row === height - 1 && col === width - 1) {
                return distance;
            }

            //take into account if current cell is obstacle
            if (grid[row][col] === 1) {
                remainingRemovals--;
            }

            //only continue with current path if removals not less than 0
            if (remainingRemovals >= 0) {
                for (let [xMovement, yMovement] of directions) {
                    const nextRow = row + yMovement;
                    const nextCol = col + xMovement;
                    const positionKey = convertToKey(nextRow, nextCol);

                    if (isValid(nextRow, nextCol) && remainingRemovals > seen.get(positionKey)) {
                        seen.set(positionKey, remainingRemovals);
                        nextQueue.push(new State(nextRow, nextCol, remainingRemovals));
                    }
                }
            }

        }

        distance++;
        queue = nextQueue;
    }

    return -1;
}