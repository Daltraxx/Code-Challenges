
/*You are given an m x n binary matrix grid. 
An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0. */

public class MaxAreaOfIsland {
    boolean[][] seen;
    private final int[][] directions = { { 1, 0 }, { -1, 0 }, { 0, 1 }, { 0, -1 } };
    int[][] grid;
    int height;
    int width;

    public int maxAreaOfIsland(int[][] grid) {
        this.grid = grid;
        height = grid.length;
        width = grid[0].length;
        seen = new boolean[height][width];

        int maxArea = 0;

        for (int row = 0; row < height; row++) {
            for (int col = 0; col < width; col++) {
                if (!seen[row][col] && grid[row][col] == 1) {
                    seen[row][col] = true;
                    maxArea = Math.max(dfs(row, col), maxArea);
                }
            }
        }

        return maxArea;
    }

    public int dfs(int row, int col) {
        int islandArea = 1;

        for (int[] direction : directions) {
            int adjacentCol = col + direction[0];
            int adjacentRow = row + direction[1];

            if (isValid(adjacentRow, adjacentCol) && !seen[adjacentRow][adjacentCol]
                    && grid[adjacentRow][adjacentCol] == 1) {
                seen[adjacentRow][adjacentCol] = true;
                islandArea += dfs(adjacentRow, adjacentCol);
            }
        }

        return islandArea;
    }

    public boolean isValid(int row, int col) {
        return row >= 0 && row < height && col >= 0 && col < width;
    }
}

// Time Complexity: O(m * n) where m is the number of rows and n is the number
// of columns in the grid. In the worst case, we may have to visit every cell in
// the grid.
// Space Complexity: O(m * n) in the worst case, where m is the number of rows
// and n is the number of columns in the grid. This occurs when the entire grid
// is land (1's), and we have to store all cells in the call stack due to
// recursion. Additionally, we use O(m * n) space for the seen array to keep
// track of visited cells.