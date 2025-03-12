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


class NearestExitFromEntranceInMaze {
    char[][] maze;
    int height;
    int width;
    public int nearestExit(char[][] maze, int[] entrance) {
        this.maze = maze;
        height = maze.length;
        width = maze[0].length;
        int entranceRow = entrance[0], entranceCol = entrance[1];

        boolean[][] seen = new boolean[height][width];
        seen[entranceRow][entranceCol] = true;

        Deque<int[]> queue = new ArrayDeque<>();
        queue.add(new int[] {entranceRow, entranceCol});

        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        int distance = 0;

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            for (int i = 0; i < levelSize; i++) {
                int[] position = queue.remove();
                int row = position[0];
                int col = position[1];

                if ((row != entranceRow || col != entranceCol) && isExit(row, col)) {
                    return distance;
                }

                for (int[] direction : directions) {
                    int nextRow = row + direction[0];
                    int nextCol = col + direction[1];

                    if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                        seen[nextRow][nextCol] = true;
                        queue.add(new int[] {nextRow, nextCol});
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
        return row >= 0 && row < height && col >= 0 && col < width && maze[row][col] == '.';
    }
}