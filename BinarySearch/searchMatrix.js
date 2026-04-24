const searchMatrix = (matrix, target) => {
  const height = matrix.length;
  const width = matrix[0].length;
  let left = 0;
  let right = height * width - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const row = Math.floor(mid / width);
    const col = mid % width;
    const midElement = matrix[row][col];
    if (midElement === target) {
      return true;
    } else if (midElement > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

// Time complexity: O(log(m*n)) where m is the number of rows 
// and n is the number of columns in the input matrix.
// This is because we are halving the search space in each iteration of the loop.
// Space complexity: O(1) because we are using a constant amount of extra space.