/*Given an m x n binary matrix mat,  
return the distance of the nearest 0 for each cell.

The distance between two cells sharing a common edge is 1.*/

const updateMatrix = (mat) => {
    const isValid = (row, col) => {
        return row >= 0 && row < height && col >= 0 && col < width;
    }

    const height = mat.length;
    const width = mat[0].length;

    const seen = [];
    for (let row = 0; row < height; row++) {
        seen.push(new Array(width).fill(false));
    }
    
    let queue = [];

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (mat[row][col] === 0) {
                seen[row][col] = true;
                queue.push([row, col]);
            }
        }
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let distance = 0;

    while (queue.length) {
        distance++;
        const queueSize = queue.length;
        const nextQueue = [];

        for (let node = 0; node < queueSize; node++) {
            const [row, col] = queue[node];
            for (let [xMovement, yMovement] of directions) {
                const nextRow = row + yMovement;
                const nextCol = col + xMovement;

                if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    mat[nextRow][nextCol] = distance;
                    nextQueue.push([nextRow, nextCol]);
                }
            }
        }

        queue = nextQueue;
    }

    return mat;
}

const mat = [[0,0,0],[0,1,0],[0,0,0]];
console.log(updateMatrix(mat));