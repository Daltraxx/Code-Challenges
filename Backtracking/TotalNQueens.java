import java.util.HashSet;
import java.util.Set;

public class TotalNQueens {
  int n;
  int solutions;
  Set<Integer> attackedCols;
  Set<Integer> attackedDiagonals;
  Set<Integer> attackedAntiDiagonals;

  public int totalNQueens(int n) {
    this.n = n;

    attackedCols = new HashSet<>();
    attackedDiagonals = new HashSet<>();
    attackedAntiDiagonals = new HashSet<>();

    solutions = 0;
    backtrack(0);
    return solutions;
  }
  
  private void backtrack(int row) {
    if (row == n) {
      solutions++;
      return;
    }

    for (int col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        placeQueen(row, col);
        backtrack(row + 1);
        removeQueen(row, col);
      }
    }

  }

  private boolean isSafe(int row, int col) {
    return !attackedCols.contains(col) && !attackedDiagonals.contains(row - col)
        && !attackedAntiDiagonals.contains(row + col);
  }

  private void placeQueen(int row, int col) {
    attackedCols.add(col);
    attackedDiagonals.add(row - col);
    attackedAntiDiagonals.add(row + col);
  }

  private void removeQueen(int row, int col) {
    attackedCols.remove(col);
    attackedDiagonals.remove(row - col);
    attackedAntiDiagonals.remove(row + col);
  }
}

// Time O(n!)
// Space O(n)