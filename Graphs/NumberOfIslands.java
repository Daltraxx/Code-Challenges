import java.util.Stack;

/*Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), 
return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.*/

public class NumberOfIslands {
    int height;
    int width;
    boolean[][] seen;

    public int numIslands(char[][] grid) {
        height = grid.length;
        width = grid[0].length;

        seen = new boolean[height][width];

        int islandCount = 0;

        for (int row = 0; row < height; row++) {
            for (int col = 0; col < width; col++) {
                if (grid[row][col] == '1' && !seen[row][col]) {
                    seen[row][col] = true;
                    islandCount++;
                    dfs(row, col, grid);
                }
            }
        }

        return islandCount;
    }

    class GridPosition {
        int row;
        int col;
    
        public GridPosition(int row, int col) {
            this.row = row;
            this.col = col;
        }
    }

    public void dfs(int row, int col, char[][] grid) {
        int[][] directions = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};

        Stack<GridPosition> stack = new Stack<>();
        stack.push(new GridPosition(row, col));

        while (!stack.isEmpty()) {
            GridPosition position = stack.pop();

            for (int[] direction : directions) {
                int nextRow = position.row + direction[1];
                int nextCol = position.col + direction[0];

                if (isValid(nextRow, nextCol, grid) && !seen[nextRow][nextCol]) {
                    seen[nextRow][nextCol] = true;
                    stack.push(new GridPosition(nextRow, nextCol));
                }
            }
        }
    }

    public boolean isValid(int row, int col, char[][] grid) {
        return row >= 0 && row < height && col >= 0 && col < width && grid[row][col] == '1';
    }
}
