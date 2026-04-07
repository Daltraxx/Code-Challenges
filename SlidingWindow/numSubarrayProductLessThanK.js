const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) return 0;

  let numSubArrays = 0;
  let currentProduct = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currentProduct *= nums[right];
    while (currentProduct >= k) {
      currentProduct /= nums[left];
      left++;
    }

    numSubArrays += right - left + 1;
  }

  return numSubArrays;
};

// Time Complexity: O(n) where n is the length of the input array
// Space Complexity: O(1)
