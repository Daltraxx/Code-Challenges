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
      
      if (midElement == target)
        return true;
      if (midElement > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return false;
  }
}
