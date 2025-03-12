/*Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
 
A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
    All the visited cells of the path are 0.
    All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).

The length of a clear path is the number of visited cells of this path. */

const shortestPathBinaryMatrix = (grid) => {
    const getShortestPathCount = (startingRow, startingColumn) => {
        if (grid[startingRow][startingColumn] === 1 || grid[n - 1][n - 1] === 1) {
            return -1;
        }

        let queue = [[startingRow, startingColumn]];
        let pathLength = 0;

        while (queue.length) {
            pathLength++;
            const nextLevelQueue = [];

            for (let position = 0; position < queue.length; position++) {
                const [currentRow, currentCol] = queue[position];

                if (currentRow === n - 1 && currentCol === n - 1) {
                    return pathLength;
                }

                for (let [directionX, directionY] of directions) {
                    const nextRow = currentRow + directionY;
                    const nextCol = currentCol + directionX;

                    if (isValid(nextRow, nextCol)) {
                        seen[nextRow][nextCol] = true;
                        nextLevelQueue.push([nextRow, nextCol]);
                    }

                }
            }
            queue = nextLevelQueue;
        }

        return -1;
    }

    const isValid = (row, col) => {
        return row >= 0 && row < n && col >= 0 && col < n && !seen[row][col] && grid[row][col] === 0;
    }

    const directions = [[-1, 0], [1, 0] , [0, -1,], [0, 1], [-1, -1], [1, -1], [-1, 1], [1, 1]];
    const n = grid.length;
    const seen = new Array(n);
    for (let row = 0; row < n; row++) {
        seen[row] = new Array(n).fill(false);
    }

    seen[0][0] = true;
    return getShortestPathCount(0, 0);
}
