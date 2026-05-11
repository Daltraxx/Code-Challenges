import java.util.HashSet;
import java.util.Set;

public class TotalNQueens {
  int n;
  Set<Integer> unsafeCols;
  Set<Integer> unsafeAntiDiags;
  Set<Integer> unsafeDiags;
  public int totalNQueens(int n) {
    this.n = n;
    unsafeCols = new HashSet<>();
    unsafeAntiDiags = new HashSet<>();
    unsafeDiags = new HashSet<>();
    return backtrack(0);
  }

  private int backtrack(int row) {
    if (row == n) {
      return 1;
    }

    int solutionCount = 0;

    for (int col = 0; col < n; col++) {
      if (!unsafeCols.contains(col)) {
        int antiDiag = row + col;
        int diag = row - col;
        if (!unsafeAntiDiags.contains(antiDiag) && !unsafeDiags.contains(diag)) {
          unsafeCols.add(col);
          unsafeAntiDiags.add(antiDiag);
          unsafeDiags.add(diag);
          solutionCount += backtrack(row + 1);
          unsafeCols.remove(col);
          unsafeAntiDiags.remove(antiDiag);
          unsafeDiags.remove(diag);
        }
      }
    }
    return solutionCount;
  }
}

// Time Complexity: O(N!)
// Space Complexity: O(N) for the sets used to track unsafe positions.