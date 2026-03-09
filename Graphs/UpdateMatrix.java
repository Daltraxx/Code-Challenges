import java.util.ArrayDeque;
import java.util.Deque;

/*Given an m x n binary matrix mat, 
return the distance of the nearest 0 for each cell.

The distance between two cells sharing a common edge is 1.*/

public class UpdateMatrix {
    int height;
    int width;
    int[][] distances;

    public int[][] updateMatrix(int[][] mat) {
        height = mat.length;
        width = mat[0].length;
        distances = new int[height][width];

        Deque<int[]> queue = new ArrayDeque<>();

        for (int row = 0; row < height; row++) {
            for (int col = 0; col < width; col++) {
                if (mat[row][col] == 0) {
                    distances[row][col] = 0;
                    queue.add(new int[] { row, col });
                } else {
                    distances[row][col] = -1;
                }
            }
        }

        int[][] directions = { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };
        int distance = 0;

        while (!queue.isEmpty()) {
            distance++;
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                int[] nodePosition = queue.remove();
                int row = nodePosition[0];
                int col = nodePosition[1];

                for (int[] direction : directions) {
                    int nextRow = row + direction[0];
                    int nextCol = col + direction[1];

                    if (isValid(nextRow, nextCol)) {
                        distances[nextRow][nextCol] = distance;
                        queue.add(new int[] { nextRow, nextCol });
                    }
                }
            }
        }

        return distances;
    }

    public boolean isValid(int row, int col) {
        return row >= 0 && row < height && col >= 0 && col < width && distances[row][col] == -1;
    }
}

// Time complexity: O(m * n) where m and n are the dimensions of the matrix.
// Each cell is visited at most once during the BFS.
// Space complexity: O(m * n) for the distances matrix
// and the queue in the worst case.
