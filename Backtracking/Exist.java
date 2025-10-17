public class Exist {
  char[][] board;
  String word;
  int height;
  int width;
  boolean[][] seen;
  int[][] directions = new int[][] { { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };

  public boolean exist(char[][] board, String word) {
    this.board = board;
    this.word = word;
    height = board.length;
    width = board[0].length;
    seen = new boolean[height][width];

    for (int row = 0; row < height; row++) {
      for (int col = 0; col < width; col++) {
        if (board[row][col] == word.charAt(0)) {
          seen[row][col] = true;
          if (backtrack(row, col, 1))
            return true;
          seen[row][col] = false;
        }
      }
    }

    return false;
  }

  private boolean backtrack(int row, int col, int i) {
    if (i == word.length()) {
      return true;
    }

    for (int[] direction : directions) {
      int newRow = row + direction[1];
      int newCol = col + direction[0];

      if (isValid(newRow, newCol) && !seen[newRow][newCol] && board[newRow][newCol] == word.charAt(i)) {
        seen[newRow][newCol] = true;
        if (backtrack(newRow, newCol, i + 1))
          return true;
        seen[newRow][newCol] = false;
      }
    }

    return false;
  }

  private boolean isValid(int row, int col) {
    return row >= 0 && row < height && col >= 0 && col < width;
  }
}

// Time O(n⋅m⋅3^L)
// Space O(L)