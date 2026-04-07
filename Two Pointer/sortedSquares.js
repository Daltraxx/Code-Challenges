const sortedSquares = (nums) => {
  const squaredArray = new Array(nums.length);
  let left = 0;
  let right = nums.length - 1;
  for (let write = nums.length - 1; write >= 0; write--) {
    const leftSquare = nums[left] ** 2;
    const rightSquare = nums[right] ** 2;
    if (leftSquare > rightSquare) {
      squaredArray[write] = leftSquare;
      left++;
    } else {
      squaredArray[write] = rightSquare;
      right--;
    }
  }
  return squaredArray;
};

// Time Complexity: O(n) - We traverse the input array once.
// Space Complexity: O(n) - We create a new array to store the squared values.
