import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;

/*You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) 
to the lower right corner (m - 1, n - 1) 
given that you can eliminate at most k obstacles. 

If it is not possible to find such walk return -1.*/

class ShortestPath {
    int height;
    int width;

    public int shortestPath(int[][] grid, int k) {
        height = grid.length;
        width = grid[0].length;

        int[][] seen = new int[height][width];
        for (int row = 0; row < height; row++) {
            for (int col = 0; col < width; col++) {
                seen[row][col] = -1;
            }
        }

        // Queue will hold [row, col, remainingRemovals, steps]
        Deque<Integer[]> queue = new ArrayDeque<>();
        queue.add(new Integer[] { 0, 0, k, 0 });
        seen[0][0] = k;

        int[][] directions = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };

        while (!queue.isEmpty()) {
            Integer[] nodeState = queue.remove();
            int row = nodeState[0];
            int col = nodeState[1];
            int remainingRemovals = nodeState[2];
            int steps = nodeState[3];

            if (row == height - 1 && col == width - 1) {
                return steps;
            }
            for (int[] direction : directions) {
                int nextRow = row + direction[0];
                int nextCol = col + direction[1];

                if (isValid(nextRow, nextCol)) {
                    int newRemainingRemovals = remainingRemovals - grid[nextRow][nextCol];
                    if (newRemainingRemovals > seen[nextRow][nextCol]) {
                        seen[nextRow][nextCol] = newRemainingRemovals;
                        queue.add(new Integer[] { nextRow, nextCol, newRemainingRemovals, steps + 1 });
                    }
                }
            }
        }

        return -1;
    }

    public boolean isValid(int row, int col) {
        return row >= 0 && row < height && col >= 0 && col < width;
    }
}

// Time Complexity: O(m * n * k) where m and n are the dimensions of the grid,
// and k is the number of obstacles we can eliminate,
// as we may need to visit each cell with different remaining obstacle eliminations.
// Space Complexity: O(m * n * k) for the queue in the worst case.