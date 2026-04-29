import java.util.ArrayDeque;
import java.util.Deque;

public class MinimumEffortPath {
  int[][] heights;
  int m;
  int n;
  int[][] directions = new int[][] { { 0, 1 }, { 1, 0 }, { 0, -1 }, { -1, 0 } };
  boolean[][] seen;

  public int minimumEffortPath(int[][] heights) {
    this.heights = heights;
    m = heights.length;
    n = heights[0].length;

    int left = 0;
    // Setting right to 10^6 because the maximum height difference can be 10^6 (0 to
    // 10^6).
    // Tradeoff: we could also calculate the maximum height difference in the grid
    // to set a tighter upper bound,
    // but this would require precompute of O(m*n) time, while only saving a few
    // iterations in the binary search.
    int right = 1_000_000;

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (dfs(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  private boolean dfs(int effort) {
    seen = new boolean[m][n];
    seen[0][0] = true;
    Deque<int[]> stack = new ArrayDeque<>();
    stack.offerLast(new int[] { 0, 0 });
    while (!stack.isEmpty()) {
      int[] position = stack.pollLast();
      int row = position[0];
      int col = position[1];
      if (row == m - 1 && col == n - 1) {
        return true;
      }

      for (int[] direction : directions) {
        int newRow = row + direction[0];
        int newCol = col + direction[1];
        if (isValid(newRow, newCol) && Math.abs(heights[row][col] - heights[newRow][newCol]) <= effort) {
          seen[newRow][newCol] = true;
          stack.offerLast(new int[] { newRow, newCol });
        }
      }
    }

    return false;
  }

  private boolean isValid(int row, int col) {
    return row >= 0 && row < m && col >= 0 && col < n && !seen[row][col];
  }
}

// Time complexity: O(m*n*log(k)), where k is the maximum possible height
// difference (10^6 in this case).
// Space complexity: O(m*n) for the seen array and the stack in the worst case.