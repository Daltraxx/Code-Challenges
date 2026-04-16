/*Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.*/

const findMaxLength = (nums) => {
  const prefixes = new Map();
  // Important: We need to initialize the prefix 0 to index -1
  // to account for subarrays that start at index 0.
  prefixes.set(0, -1);

  let maxLength = 0;
  let currPrefix = 0;

  for (let i = 0; i < nums.length; i++) {
    currPrefix += nums[i] === 1 ? 1 : -1;

    if (prefixes.has(currPrefix)) {
      maxLength = Math.max(maxLength, i - prefixes.get(currPrefix));
    } else {
      prefixes.set(currPrefix, i);
    }
  }

  return maxLength;
};

// Time Complexity: O(n) where n is the length of the input array.
// Space Complexity: O(n) in the worst case, if all prefix sums are unique.
