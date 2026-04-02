const partitionArray = (nums, k) => {
  const numsSorted = nums.toSorted((a, b) => a - b);
  let minSubsequences = 1;
  let min = numsSorted[0];
  for (let i = 1; i < numsSorted.length; i++) {
    let max = numsSorted[i];
    if (max - min > k) {
      min = numsSorted[i];
      minSubsequences++;
    }
  }

  return minSubsequences;
};

// Time complexity: O(n log n) due to the sorting step,
// where n is the length of the input array nums.
// The traversal takes O(n) time, but the sorting dominates the overall time complexity.
// Space complexity: O(n) due to the sorted array numsSorted, which is a copy of the input array nums.
// Note: The space complexity can be considered O(1) if we sort the input array in place,
// but since we are using toSorted() which creates a new sorted array, we consider it O(n).
