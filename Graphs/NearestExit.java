import java.util.ArrayDeque;
import java.util.Deque;

/*You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). 
You are also given the entrance of the maze, 
where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell up, down, left, or right. 
You cannot step into a cell with a wall, and you cannot step outside the maze. 
Your goal is to find the nearest exit from the entrance. 
An exit is defined as an empty cell that is at the border of the maze. 
The entrance does not count as an exit.

Return the number of steps in the shortest path from the entrance to the nearest exit, 
or -1 if no such path exists. */

class NearestExit {
    private char[][] maze;
    private int height;
    private int width;
    private boolean[][] seen;
    private static final char WALL = '+';
    private static final int[][] DIRECTIONS = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };

    public int nearestExit(char[][] maze, int[] entrance) {
        this.maze = maze;
        height = maze.length;
        width = maze[0].length;
        int entranceRow = entrance[0];
        int entranceCol = entrance[1];

        seen = new boolean[height][width];
        seen[entranceRow][entranceCol] = true;

        Deque<int[]> queue = new ArrayDeque<>();
        queue.add(new int[] { entranceRow, entranceCol });

        int distance = 0;

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                int[] position = queue.pollFirst();
                int row = position[0];
                int col = position[1];

                if ((row != entranceRow || col != entranceCol) && isExit(row, col)) {
                    return distance;
                }

                for (int[] direction : DIRECTIONS) {
                    int nextRow = row + direction[0];
                    int nextCol = col + direction[1];

                    if (isValid(nextRow, nextCol)) {
                        seen[nextRow][nextCol] = true;
                        queue.addLast(new int[] { nextRow, nextCol });
                    }
                }
            }

            distance++;
        }

        return -1;
    }

    public boolean isExit(int row, int col) {
        return row == 0 || row == height - 1 || col == 0 || col == width - 1;
    }

    public boolean isValid(int row, int col) {
        return row >= 0 && row < height && col >= 0 && col < width && !seen[row][col] && maze[row][col] != WALL;
    }
}

// Time Complexity: O(m * n) where m is the number of rows and n is the number
// of columns in the maze.
// Space Complexity: O(m * n) for the seen array and the queue in the worst case
// when all cells are empty.