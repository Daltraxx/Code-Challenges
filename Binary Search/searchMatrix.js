const searchMatrix = (matrix, target) => {
  const n = matrix.length, m = matrix[0].length;
  let top = 0,
    bottom = n - 1;
  let mid;
  while (top <= bottom) {
    mid = Math.floor((top + bottom) / 2);
    if (matrix[mid][m - 1] === target) return true;
    
    if (matrix[mid][m - 1] > target) {
      bottom = mid - 1;
    } else {
      top = mid + 1;
    }
  }

  let row;
  if (matrix[mid][m - 1] >= target) {
    row = matrix[mid];
  } else if (mid < n - 1 && matrix[mid][m - 1] < target) {
    row = matrix[mid + 1];
  } else {
    return false;
  }

  let left = 0, right = m - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (row[mid] === target) return true;

    if (row[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

const matrix = [[1]],
  target = 2;

console.log(searchMatrix(matrix, target));