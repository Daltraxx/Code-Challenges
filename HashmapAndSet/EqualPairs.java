import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class EqualPairs {
  public int equalPairs(int[][] grid) {
    int n = grid.length;
    Map<String, Integer> rowFreqs = new HashMap<>();
    for (int[] row : grid) {
      rowFreqs.merge(getHash(row), 1, Integer::sum);
    }

    int pairCount = 0;
    for (int col = 0; col < n; col++) {
      int[] currCol = new int[n];
      for (int row = 0; row < n; row++) {
        currCol[row] = grid[row][col];
      }
      pairCount += rowFreqs.getOrDefault(getHash(currCol), 0);
    }

    return pairCount;
  }

  private String getHash(int[] nums) {
    return Arrays.toString(nums);
  }
}

// Time complexity: O(n^2) where n is the size of the grid. We iterate through
// each row and column once.
// Space complexity: O(n) for the hash map storing the frequencies of the rows.