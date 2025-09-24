const searchMatrix = (matrix, target) => {
  const n = matrix.length, m = matrix[0].length;
  let left = 0, right = m * n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / 2);
    const col = mid % m;
    const midElement = matrix[row][col];
    if (midElement === target) return true;
    if (midElement > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

// Time Complexity O(log(mn))
// Space O(1)

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 3;

console.log(searchMatrix(matrix, target));