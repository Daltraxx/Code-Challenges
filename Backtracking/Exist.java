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
          if (backtrack(row, col, 1))
            return true;
        }
      }
    }

    return false;
  }

  private boolean backtrack(int row, int col, int i) {
    if (i == word.length()) {
      return true;
    }

    seen[row][col] = true;
    char nextChar = word.charAt(i);
    for (int[] direction : directions) {
      int newRow = row + direction[1];
      int newCol = col + direction[0];

      if (isValid(newRow, newCol, nextChar)) {
        if (backtrack(newRow, newCol, i + 1))
          return true;
      }
    }

    seen[row][col] = false;
    return false;
  }

  private boolean isValid(int row, int col, char nextChar) {
    return row >= 0 && row < height && col >= 0 && col < width && !seen[row][col] && board[row][col] == nextChar;
  }
}

// Time complexity: O(N * 3^L) where N is the number of cells in the board and L
// is the length of the word. In the worst case, we might have to explore all
// possible paths for each cell in the board.
// Space complexity: O(L) where L is the length of the word. This is because the
// maximum depth of the recursion is equal to the length of the word, and we are
// using a boolean array to keep track of seen cells.