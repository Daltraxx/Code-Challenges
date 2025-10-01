import java.util.ArrayDeque;
import java.util.Arrays;

public class MinimumEffortPath {
  int[][] heights;
  int m;
  int n;

  static class HeightsPosition {
    int row;
    int col;

    public HeightsPosition(int row, int col) {
      this.row = row;
      this.col = col;
    }
  }

  public int minimumEffortPath(int[][] heights) {
    this.heights = heights;
    this.m = heights.length;
    this.n = heights[0].length;

    int left = 0;
    int right = 0;
    for (int[] row : heights) {
      for (int num : row)
        right = Math.max(right, num);
    }

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }
  
  public boolean check(int effort) {
    int[][] directions = new int[][] { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };
    boolean[][] seen = new boolean[m][n];
    seen[0][0] = true;

    ArrayDeque<HeightsPosition> stack = new ArrayDeque<>();
    stack.push(new HeightsPosition(0, 0));

    while (!stack.isEmpty()) {
      HeightsPosition position = stack.removeLast();
      for (int[] direction : directions) {
        int x = direction[0];
        int y = direction[1];
        HeightsPosition newPosition = new HeightsPosition(position.row + y, position.col + x);
        if (isValid(newPosition.row, newPosition.col) && !seen[newPosition.row][newPosition.col]
            && isAcceptableEffort(position, newPosition, effort)) {
          if (newPosition.row == m - 1 && newPosition.col == n - 1)
            return true;
          seen[newPosition.row][newPosition.col] = true;
          stack.addLast(newPosition);
        }
      }
    }

    return false;
  }
  
  public boolean isValid(int row, int col) {
    return row >= 0 && row < m && col >= 0 && col < n;
  }

  public boolean isAcceptableEffort(HeightsPosition lastPosition, HeightsPosition newPosition, int allowableEffort) {
    return Math.abs(heights[lastPosition.row][lastPosition.col] - heights[newPosition.row][newPosition.col]) <= allowableEffort;
  }
}