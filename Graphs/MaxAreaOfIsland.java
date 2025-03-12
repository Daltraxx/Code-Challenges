
/*You are given an m x n binary matrix grid. 
An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0. */

public class MaxAreaOfIsland {
    boolean[][] seen;
    int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
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
                if (!seen[row][col]) {
                    seen[row][col] = true;
                    if (grid[row][col] == 1) {
                        maxArea = Math.max(getIslandArea(row, col), maxArea);
                    }
                }
            } 
        }

        return maxArea;
    }

    public int getIslandArea(int row, int col) {
        int islandArea = 1;

        for (int[] direction : directions) {
            int adjacentCol = col + direction[0];
            int adjacentRow = row + direction[1];

            if (isValid(adjacentRow, adjacentCol) && !seen[adjacentRow][adjacentCol]) {
                seen[adjacentRow][adjacentCol] = true;
                if (grid[adjacentRow][adjacentCol] == 1) {
                    islandArea += getIslandArea(adjacentRow, adjacentCol);
                }
            }
        }

        return islandArea;
    }

    public boolean isValid(int row, int col) {
        return row >= 0 && row < height && col >= 0 && col < width;
    }
}
