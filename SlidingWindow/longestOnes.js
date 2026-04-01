const longestOnes = (nums, k) => {
  let left = 0;
  let maxLength = 0;
  let zeroCount = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    maxLength = Math.max(right - left + 1, maxLength);
  }
  return maxLength;
};

// Time Complexity: O(n) where n is the length of the input array
// Space Complexity: O(1) since we are using a constant amount of space for the variables
