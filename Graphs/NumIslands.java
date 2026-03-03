import java.util.ArrayDeque;
import java.util.Deque;

/*Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.*/

public class NumIslands {
    int height;
    int width;
    char[][] grid;
    boolean[][] seen;
    private static final int[][] directions = { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };

    public int numIslands(char[][] grid) {
        this.grid = grid;
        this.height = grid.length;
        this.width = grid[0].length;

        seen = new boolean[height][width];

        int islandCount = 0;

        for (int row = 0; row < height; row++) {
            for (int col = 0; col < width; col++) {
                if (grid[row][col] == '1' && !seen[row][col]) {
                    islandCount++;
                    dfs(row, col);
                }
            }
        }

        return islandCount;
    }

    public void dfs(int row, int col) {

        Deque<int[]> stack = new ArrayDeque<>();
        seen[row][col] = true;
        stack.addLast(new int[] { row, col });

        while (!stack.isEmpty()) {
            int[] position = stack.removeLast();

            for (int[] direction : directions) {
                int nextRow = position[0] + direction[0];
                int nextCol = position[1] + direction[1];

                if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    stack.addLast(new int[] { nextRow, nextCol });
                }
            }
        }
    }

    public boolean isValid(int row, int col) {
        return row >= 0 && row < height && col >= 0 && col < width && grid[row][col] == '1';
    }
}

// Time Complexity: O(m*n) where m is the number of rows and n is the number of
// columns in the grid.
// Space Complexity: O(m*n) in the worst case when the grid is filled with land
// and the stack contains all positions.
