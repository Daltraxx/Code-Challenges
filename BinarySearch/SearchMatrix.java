public class SearchMatrix {
  public boolean searchMatrix(int[][] matrix, int target) {
    int m = matrix.length;
    int n = matrix[0].length;
    int left = 0;
    int right = m * n - 1;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      int row = mid / n;
      int col = mid % n;
      int midElement = matrix[row][col];

      if (midElement == target) {
        return true;
      } else if (midElement > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return false;
  }
}

// Time complexity: O(log(m*n)) where m is the number of rows
// and n is the number of columns in the input matrix.
// This is because we are halving the search space in each iteration of the
// loop.
// Space complexity: O(1) because we are using a constant amount of extra space.