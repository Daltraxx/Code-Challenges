/*Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.*/

const numIslands = (grid) => {
    const height = grid.length;
    const width = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    let seen = [];
    for (let i = 0; i < height; i++) {
        seen.push(new Array(width).fill(false));
    }

    const isValid = (row, col) => {
        return row >= 0 && row < height && col >= 0 && col < width && grid[row][col] === '1';
    }

    const dfs = (row, col) => {
        for (let [x, y] of directions) {
            let nextRow = row + y, nextCol = col + x;
            if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                seen[nextRow][nextCol] = true;
                dfs(nextRow, nextCol);
            }
        }
    }

    let islandCount = 0;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (grid[row][col] === '1' && !seen[row][col]) {
                islandCount++;
                seen[row][col] = true;
                dfs(row, col);
            }
        }
    }

    return islandCount;
}



const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

console.log(numIslands(grid));
