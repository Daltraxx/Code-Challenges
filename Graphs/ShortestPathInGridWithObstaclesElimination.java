import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;

/*You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.

Return the minimum number of steps to walk from the upper left corner (0, 0) 
to the lower right corner (m - 1, n - 1) 
given that you can eliminate at most k obstacles. 

If it is not possible to find such walk return -1.*/

class State {
    int row;
    int col;
    int remainingRemovals;
    int steps;
    public State(int row, int col, int remainingRemovals, int steps) {
        this.row = row;
        this.col = col;
        this.remainingRemovals = remainingRemovals;
        this.steps = steps;
    }
}

class ShortestPathInGridWithObstaclesElimination {
    int height;
    int width;

    public int shortestPath(int[][] grid, int k) {
        height = grid.length;
        width = grid[0].length;

        HashMap<String, Integer> seen = new HashMap<>();
        for (int row = 0; row < height; row++) {
            for (int col = 0; col < width; col++) {
                seen.put(convertToString(row, col), -1);
            }
        }

        seen.put(convertToString(0, 0), k);

        Deque<State> queue = new ArrayDeque<>();
        queue.add(new State(0, 0, k, 0));

        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

        while (!queue.isEmpty()) {
            State nodeState = queue.remove();
            int row = nodeState.row, col = nodeState.col;
            int remainingRemovals = nodeState.remainingRemovals, steps = nodeState.steps;

            if (row == height - 1 && col == width - 1) {
                return steps;
            }

            if (grid[row][col] == 1) {
                remainingRemovals--;
            }

            if (remainingRemovals >= 0) {
                for (int[] direction : directions) {
                    int nextRow = row + direction[1];
                    int nextCol = col + direction[0];
                    String positionKey = convertToString(nextRow, nextCol);

                    if (isValid(nextRow, nextCol) && remainingRemovals > seen.get(positionKey)) {
                        seen.put(positionKey, remainingRemovals);
                        queue.add(new State(nextRow, nextCol, remainingRemovals, steps + 1));
                    }
                }
            }
        }

        return -1;
    }

    public String convertToString(int row, int col) {
        return String.format("%s %s", row, col);
    }

    public boolean isValid(int row, int col) {
        return row >= 0 & row < height && col >= 0 && col < width;
    }
}