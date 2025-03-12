import java.util.ArrayDeque;
import java.util.Deque;

/*Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:
    All the visited cells of the path are 0.
    All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).

The length of a clear path is the number of visited cells of this path. */

public class ShortestPathInBinaryMatrix {
    int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {-1, -1}, {1, -1}, {-1, 1}, {1, 1}};
    boolean[][] seen;
    int[][] grid;
    int n;

    public int shortestPathBinaryMatrix(int[][] grid) {
        this.grid = grid;
        n = grid.length;
        seen = new boolean[n][n];
        seen[0][0] = true;

        return getShortestPath(0, 0);
    }

    public int getShortestPath(int startingRow, int startingCol) {
        if (grid[startingRow][startingRow] == 1 || grid[n - 1][n - 1] == 1) {
            return -1;
        }

        Deque<int[]> queue = new ArrayDeque<>();
        queue.add(new int[]{startingRow, startingCol});

        int movementCount = 0;

        while (!queue.isEmpty()) {
            movementCount++;
            int levelSize = queue.size();
            for (int node = 0; node < levelSize; node++) {
                int[] position = queue.remove();
                int row = position[0];
                int col = position[1];

                if (row == n - 1 && col == n - 1) {
                    return movementCount;
                }
                
                for (int[] direction: directions) {
                    int nextRow = row + direction[1];
                    int nextCol = col + direction[0];

                    if (isValid(nextRow, nextCol)) {
                        seen[nextRow][nextCol] = true;
                        queue.add(new int[]{nextRow, nextCol});
                    }
                }
            }
        }

        return -1;
    }

    public boolean isValid(int row, int col) {
        return row >= 0 && row < n && col >= 0 && col < n && grid[row][col] == 0 && !seen[row][col];
    }
}
