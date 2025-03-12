import java.util.ArrayDeque;
import java.util.Deque;

/*Given an m x n binary matrix mat, 
return the distance of the nearest 0 for each cell.

The distance between two cells sharing a common edge is 1.*/

public class ZeroOneMatrix {
    int height;
    int width;

    public int[][] updateMatrix(int[][] mat) {
        height = mat.length;
        width = mat[0].length;

        boolean[][] seen = new boolean[height][width];
        Deque<int[]> queue = new ArrayDeque<>();

        for (int row = 0; row < height; row++) {
            for (int col = 0; col < width; col++) {
                if (mat[row][col] == 0) {
                    seen[row][col] = true;
                    queue.add(new int[] {row, col});
                }
            }
        }

        int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        int distance = 0;

        while (!queue.isEmpty()) {
            distance++;
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                int[] nodePosition = queue.remove();
                int row = nodePosition[0];
                int col = nodePosition[1];

                for (int[] direction : directions) {
                    int nextRow = row + direction[1];
                    int nextCol = col + direction[0];

                    if (isValid(nextRow, nextCol) && !seen[nextRow][nextCol]) {
                        seen[nextRow][nextCol] = true;
                        mat[nextRow][nextCol] = distance;
                        queue.add(new int[] {nextRow, nextCol});
                    }
                }
            }
        }

        return mat;
    }

    public boolean isValid(int row, int col) {
        return row >= 0 && row < height && col >= 0 && col < width;
    }
}
