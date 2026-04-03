const longestSubarray = (nums) => {
  let zeroCount = 0;
  let longestWindow = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    while (zeroCount > 1) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    // Use right - left instead of right - left + 1
    // because we are required to delete one element
    longestWindow = Math.max(longestWindow, right - left);
  }

  return longestWindow;
};

// Time complexity: O(n) where n is the length of the input array nums.
// We traverse the array once with the right pointer,
// and the left pointer also moves at most n times in total.
// Space complexity: O(1)
