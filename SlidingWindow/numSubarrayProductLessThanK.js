const numSubarrayProductLessThanK = (nums, k) => {
  if (k <= 1) return 0;

  let numSubarrays = 0;
  let currentProduct = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currentProduct *= nums[right];
    while (currentProduct >= k) {
      currentProduct /= nums[left];
      left++;
    }

    numSubarrays += right - left + 1;
  }

  return numSubarrays;
};

// Time Complexity: O(n) where n is the length of the input array
// Space Complexity: O(1)
